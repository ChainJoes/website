import React, { useCallback, useEffect, useState } from 'react';
import { Formik, Form } from "formik";
import ethIcon from './Assets/ethereum.png'
import { TokensTabs } from "./TokensTabs";
import { TokensData } from "./TokensData";
import { useAccount, useConnect, useDisconnect, useBalance, useContractWrite, useContractRead, useWaitForTransaction } from 'wagmi';
import ConnectModal from './ConnectModal';
import { presaleContractAbi } from './Abi/presaleAbi';
import { whitelistContractAbi } from './Abi/whiteListAbi';
import { livePresaleAbi } from './Abi/livePresaleAbi';
import { StatusModal } from './StatusPopup';
import LoadingPopup from '../../../../../Components/Popups/LoadingPopup';
import { parseEther } from 'viem';
import './SalesForm.scss'
import Popup from '../../../../../Components/Popup/Popup';
import Web3 from 'web3';
import SuccessPopup from '../../../../../Components/Popups/SuccessPopup';
import { Clain } from './Claim';

export const SalesForm = () => {
  const presaleAddress = '0xf2d17b5701b89811d87c185862e7a1a4c634cea7';
  const whiteListAdress = '0x046a99470b99abd0550311bd241dcf0999d6016e';
  const livePresaleAddress = '0xa45b235B05A9B0a87c803f2124D8e41D14eF0210';
  const { connect, connectors } = useConnect();
  const { isConnected, address } = useAccount();
  const { data: ethBalance } = useBalance({ address: address });
  const [activeToken, setActiveToken] = useState(0);
  const [showPopup, setShowPopup] = useState(false);
  const [showAlertPopup, setShowAlertPopup] = useState(false);
  const [alertText, setAlertText] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [valueETH, setValueETH] = useState<number | ''>('');
  const [valueToken, setValueToken] = useState<number | ''>('');
  const [isWhiteListActive, setWhiteListActive] = useState(false);
  const [isWhiteListEnded, setWhiteListEnded] = useState(false);
  const [isWhiteListFormShow, setWhiteListFormShow] = useState(false);
  const [claimedAmount, setClaimedAmount] = useState(0);
  const [isClaimActive, setClaimActive] = useState(false);
  const [isLoading, setLoading] = useState(false);
  const [isSuccess, setSuccess] = useState(false);
  const [successText, setSuccessText] = useState('');

  const handleValueETHChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (rate) {
      const newValueETH = e.target.value === '' ? '' : Number(e.target.value);
      if (newValueETH && newValueETH < 0.01) {
        setValueETH(0.01);
        setValueToken(10);
      } else {
        setValueETH(newValueETH);
        setValueToken(newValueETH === '' ? '' : newValueETH * parseFloat(rate?.toString()));
      }
    } else {
      setValueETH(0);
      setValueToken(0);
    }
  };

  const handleValueTokenChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (rate) {
      const newValueToken = e.target.value === '' ? '' : Number(e.target.value);
      if (newValueToken && newValueToken < 10) {
        setValueETH(0.01);
        setValueToken(10);
      } else {
        setValueToken(newValueToken);
        setValueETH(newValueToken === '' ? '' : newValueToken / parseFloat(rate?.toString()));
      }
    } else {
      setValueETH(0);
      setValueToken(0);
    }
  };

  const { write: addToWhiteList, isLoading: isAddToWhiteListLoding, isSuccess: isAddToWhiteListSuccess } = useContractWrite({
    address: livePresaleAddress,
    abi: livePresaleAbi,
    functionName: 'addToWhitelist',
    account: address,
  });

  const addAddressToWhiteList = useCallback(async () => {
    try {
      await addToWhiteList();
    } catch (e) {
    }
  }, [addToWhiteList]);

  const { data: hasWhitelistPeriodActive } = useContractRead({
    address: livePresaleAddress,
    abi: livePresaleAbi,
    functionName: 'isWhitelistPeriodActive',
    watch: true
  });

  const { data: hasWhitelistPeriodEnded } = useContractRead({
    address: livePresaleAddress,
    abi: livePresaleAbi,
    functionName: 'isWhitelistPeriodEnded',
    watch: true
  });

  const { data: isWhitelisted } = useContractRead({
    address: livePresaleAddress,
    abi: livePresaleAbi,
    functionName: 'isWhitelisted',
    args: [address],
    watch: true
  });

  useEffect(() => {
    setLoading(isAddToWhiteListLoding);
    // TODO: Do later
  }, [isAddToWhiteListLoding]);

  const { data: whitelistCount } = useContractRead({
    address: livePresaleAddress,
    abi: livePresaleAbi,
    functionName: 'getWhitelistCount',
    watch: true
  });

  const { data: rate } = useContractRead({
    address: livePresaleAddress,
    abi: livePresaleAbi,
    functionName: 'getCurrentRate',
    args: [TokensData[activeToken].tokenId],
    watch: true
  });

  const { data: tokenSales } = useContractRead({
    address: livePresaleAddress,
    abi: livePresaleAbi,
    functionName: 'tokenSales',
    args: [TokensData[activeToken].tokenId],
    watch: true
  });

  const { data: tokensSold } = useContractRead({
    address: livePresaleAddress,
    abi: livePresaleAbi,
    functionName: 'getTotalTokensSold',
    args: [TokensData[activeToken].tokenId],
    watch: true
  });

  const { data: tokensAvailable } = useContractRead({
    address: livePresaleAddress,
    abi: livePresaleAbi,
    functionName: 'getTokensAvailable',
    args: [TokensData[activeToken].tokenId],
    watch: true
  });

  const tokenSalesCount = (Array.isArray(tokenSales) && tokenSales[1] !== undefined) && tokenSales[1].toString()

  function calculatePercentage(firstNumber: number, secondNumber: number): number {
    if (secondNumber === 0) {
      return 0;
    }
    const result = (firstNumber / secondNumber) * 100
    return parseFloat(result.toFixed(2));
  }

  const progressSoldPercentage = calculatePercentage(
    parseInt(tokensSold?.toString() ?? "0"),
    parseInt(tokensAvailable?.toString() ?? "0")
  )

  const progressWhiteListPercentage = calculatePercentage(
    parseInt(whitelistCount?.toString() ?? "0"),
    500
  )

  const { write: buyTokensWithEther, error: error, isError: isTxError, isLoading: isPresaleLoading, isSuccess: isPresaleSuccess, data: txPurchase } = useContractWrite({
    address: livePresaleAddress,
    abi: livePresaleAbi,
    functionName: 'buy',
    account: address,
  });

  const BuyToken = useCallback(async () => {
    if ((ethBalance && +valueETH > +ethBalance) || valueETH === 0) {
      setAlertText('Check your wallet balance!');
      setShowAlertPopup(true);
      return;
    }
    if (!valueETH) {
      setAlertText('Specify the correct number of tokens!');
      setShowAlertPopup(true);
      return;
    }
    if (isWhiteListActive && !isWhiteListEnded) {
      if (isWhitelisted) {
        await buyTokensWithEther({ args: [TokensData[activeToken].tokenId], value: parseEther(valueETH.toString()) });
      } else {
        setAlertText('Sale only for whitelist addresses!');
      }
    }

    if (!isWhiteListActive && isWhiteListEnded) {
      await buyTokensWithEther({ args: [TokensData[activeToken].tokenId], value: parseEther(valueETH.toString()) });
    }
  }, [ethBalance, valueETH, isWhiteListActive, isWhiteListEnded, isWhitelisted, buyTokensWithEther, activeToken]);

  const { data: txData, isSuccess: isTxSuccess, isLoading: isTxLoading, refetch: refreshTxData } = useWaitForTransaction({ hash: txPurchase?.hash });

  useEffect(() => {
    if (isTxError && error) {
      setAlertText(error?.message.split('.')[0]);
      setShowAlertPopup(true);
    }
    setLoading(isTxLoading);

    if (isTxSuccess) {
      setSuccessText(`You’ve bought ${valueToken} ${TokensData[activeToken].name}`)
      setSuccess(isTxSuccess);

      setTimeout(() => {
        refreshTxData();
      }, 3500);
    }
  }, [isTxSuccess, isTxLoading, isTxError, refreshTxData, error?.message, error, valueToken, activeToken]);


  const { data: claimed } = useContractRead({
    address: livePresaleAddress,
    abi: livePresaleAbi,
    functionName: 'getClaimedAmount',
    args: [TokensData[activeToken].tokenId, address],
    watch: true
  });


  const { write: claim, error: claimError, isError: isClaimError, isLoading: isClaimLoading, isSuccess: isClaimSuccess, data: claimPurchase } = useContractWrite({
    address: livePresaleAddress,
    abi: livePresaleAbi,
    functionName: 'claim',
    account: address,
  });

  const claimToken = useCallback(async () => {
    await claim({ args: [TokensData[activeToken].tokenId] });
  }, [claim, activeToken]);

  const { data: txClaimData, isSuccess: isTxClaimSuccess, isLoading: isTxClaimLoading, refetch: refreshClaimData } = useWaitForTransaction({ hash: claimPurchase?.hash });


  useEffect(() => {
    setClaimedAmount(claimed ? parseFloat(Web3.utils.fromWei(claimed.toString(), 'ether')) : 0);

    if (isClaimError && claimError) {
      setAlertText(claimError?.message.split('.')[0]);
      setShowAlertPopup(true);
    }
    setLoading(isTxClaimLoading);

    if (isTxClaimSuccess) {
      setSuccessText(`All ${TokensData[activeToken].name} tokens were claimed successfully`);
      setSuccess(isTxClaimSuccess);

      setTimeout(() => {
        refreshClaimData();
      }, 3500);
    }
  }, [activeToken, claimError, claimed, isClaimError, isTxClaimLoading, isTxClaimSuccess, refreshClaimData, refreshTxData]);

  useEffect(() => {
    // TODO: smart contract white list logic
    // setWhiteListActive(!!hasWhitelistPeriodActive);
    // setWhiteListEnded(!!hasWhitelistPeriodEnded);
    if (parseInt(whitelistCount?.toString() ?? "0") >= 500) {
      setWhiteListActive(true);
    }
    setClaimActive(isWhiteListEnded && Array.isArray(tokenSales) && tokenSales[5]);
    setWhiteListFormShow(!isWhiteListActive && !isWhiteListEnded);
  }, [hasWhitelistPeriodActive, hasWhitelistPeriodEnded, isWhiteListActive, isWhiteListEnded, tokenSales, whitelistCount])

  return (
    <div className="sales-form">
      <Formik
        initialValues={{ email: '' }}
        onSubmit={(values, { setSubmitting }) => {
          setSubmitting(false);
        }}
      >
        <Form>
          {showPopup && <StatusModal onClose={() => setShowPopup(false)} />}
          {!isWhiteListFormShow ?
            <h3 className="title">
              {TokensData[activeToken].name.split('$CJ')[1]} TOKEN
            </h3> :
            <>
              <div className="heroes">
                {TokensData.map((item, index) => (
                  <img className='heroes__item' key={`heroKey${index}`} src={item.icon} alt={item.name} />
                ))}
              </div>
              <h3 className="title tac">
                Whitelist
              </h3>
              <div className="desc">
                {isWhitelisted ?
                  'Congratulations, your wallet has already been added to the whitelist!'
                  :
                  'Connect your wallet and get your spot here!'
                }

              </div>
            </>
          }
          {!isWhiteListFormShow && !isClaimActive &&
            <>
              <label className='field' htmlFor="send-token">
                <div className="field__head">
                  <div className="token">
                    <img className="token__icon" src={ethIcon} alt="eth logo" />
                    <div className="token__content">
                      <div className="token__name">
                        ETH
                      </div>
                      <div className="rate">
                        1 ETH ≈ {rate?.toString()} {TokensData[activeToken].name}
                      </div>
                    </div>
                  </div>
                  <span>
                    You send
                  </span>
                </div>
                <input
                  type="number"
                  name='send-token'
                  value={valueETH}
                  onChange={handleValueETHChange}
                  id='send-token'
                  disabled={!isConnected}
                />
              </label>
              <label className='field' htmlFor="get-token">
                <div className="field__head">
                  <div className="token">
                    <img className="token__icon" src={TokensData[activeToken].icon} alt={TokensData[activeToken].name} />
                    <div className="token__content">
                      <div className="token__name">
                        {TokensData[activeToken].name}
                      </div>
                    </div>
                  </div>
                  <span>
                    You get
                  </span>
                </div>
                <input
                  type="number"
                  name='get-token'
                  value={valueToken}
                  onChange={handleValueTokenChange}
                  id='get-token'
                  disabled={!isConnected}
                />
              </label>
              <div className="progress">
                <div className="progress__head">
                  <div className="progress__info">
                    <div className="progress__current">
                      ${tokensSold ? Web3.utils.fromWei(tokensSold?.toString(), 'ether') : 0}
                    </div>
                    <div className="progress__max">
                      / ${tokensAvailable ? Web3.utils.fromWei(tokensAvailable?.toString(), 'ether') : 0}
                    </div>
                  </div>
                  <div className="progress__percent">
                    {progressSoldPercentage}%
                  </div>
                </div>
                <div className="progress__bar">
                  <div className="progress__bar_current" style={{ width: `${progressSoldPercentage < 3 ? 3 : progressSoldPercentage}%` }}></div>
                </div>
              </div>
              <div className="desc">
                Connect your wallet to buy {TokensData[activeToken].name}
              </div>
              {!address ?
                <input className='btn' type="button" value='Connect Wallet' onClick={() => setShowModal(true)} />
                :
                <input className='btn' type="submit" value='Buy Tokens' onClick={() => BuyToken()} />
              }
              <div className="text">
                90% of the total supply is going to the open market via this Sale!
              </div>
            </>
          }
          {isWhiteListFormShow &&
            <>
              <div className="progress">
                <div className="progress__head">
                  <div className="progress__info">
                    <div className="progress__current">
                      {whitelistCount?.toString()}
                    </div>
                    <div className="progress__max">
                      / 500
                    </div>
                  </div>
                  <div className="progress__percent">
                    {progressWhiteListPercentage}%
                  </div>
                </div>
                <div className="progress__bar">
                  <div className="progress__bar_current" style={{ width: `${progressWhiteListPercentage < 3 ? 3 : progressWhiteListPercentage}%` }}></div>
                </div>
              </div>
              {!address ?
                <input className='btn' type="button" value='Connect Wallet' onClick={() => setShowModal(true)} />
                :
                <>
                  {!isWhitelisted &&
                    <input className='btn' type="button" value='Add to Whitelist' onClick={() => addAddressToWhiteList()} />
                  }
                </>
              }
            </>
          }
          {!isWhiteListFormShow && isClaimActive &&
            <>
              <Clain
                connect={address?.toString() ? true : false}
                tokenCount={claimedAmount}
                token={TokensData[activeToken].name}
              />
              <>
                {!address ?
                  <input className='btn' type="button" value='Connect Wallet' onClick={() => setShowModal(true)} />
                  :

                  claimedAmount &&
                  <input className='btn' type="submit" value='Claim' onClick={() => claimToken()} />
                }
              </>
            </>
          }
        </Form>
      </Formik>
      {!isWhiteListFormShow &&
        <TokensTabs
          activeToken={activeToken}
          setActiveToken={setActiveToken}
        />
      }
      {
        showModal && !address &&
        <ConnectModal
          connect={connect}
          connectors={connectors}
          setShowModal={setShowModal}
        />
      }
      <LoadingPopup
        isLoading={isLoading}
      />
      {isSuccess &&
        <SuccessPopup
          onClose={() => setSuccess(false)}
          text={successText}
        />
      }
      {showAlertPopup && <Popup isError={true} Text={alertText} onClose={() => setShowAlertPopup(false)} />}
    </div >
  )
}