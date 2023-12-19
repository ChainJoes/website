import React, { useCallback, useEffect, useState } from 'react';
import { Formik, Form } from "formik";
import ethIcon from './Assets/ethereum.png'
import { TokensTabs } from "./TokensTabs";
import { TokensData } from "./TokensData";
import { useAccount, useConnect, useDisconnect, useBalance, useContractWrite, useContractRead, useWaitForTransaction } from 'wagmi';
import './SalesForm.scss'
import ConnectModal from './ConnectModal';
import { contractAbi } from './Api/api';
import { StatusModal } from './StatusPopup';
import { parseEther } from 'viem';

export const SalesForm = () => {
  const presale_address = '0xf2d17b5701b89811d87c185862e7a1a4c634cea7';
  const { connect, connectors } = useConnect();
  const { isConnected, address } = useAccount();
  const { data: ethBalance } = useBalance({ address: address });
  const [activeToken, setActiveToken] = useState(0);
  const [showPopup, setShowPopup] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [valueETH, setValueETH] = useState<number | ''>('');
  const [valueToken, setValueToken] = useState<number | ''>('');

  const handleValueETHChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (rate) {
      const newValueETH = e.target.value === '' ? '' : Number(e.target.value);
      setValueETH(newValueETH);
      setValueToken(newValueETH === '' ? '' : newValueETH * parseFloat(rate?.toString()));
    } else {
      setValueETH(0);
      setValueToken(0);
    }
  };

  const handleValueTokenChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (rate) {
      const newValueToken = e.target.value === '' ? '' : Number(e.target.value);
      setValueToken(newValueToken);
      setValueETH(newValueToken === '' ? '' : newValueToken / parseFloat(rate?.toString()));
    } else {
      setValueETH(0);
      setValueToken(0);
    }
  };

  const { data: rate } = useContractRead({
    address: presale_address,
    abi: contractAbi,
    functionName: 'getCurrentRate',
    args: [TokensData[activeToken].token],
    watch: true
  });

  const { data: tokenSales } = useContractRead({
    address: presale_address,
    abi: contractAbi,
    functionName: 'tokenSales',
    args: [TokensData[activeToken].token],
    watch: true
  });

  const { data: tokensSold } = useContractRead({
    address: presale_address,
    abi: contractAbi,
    functionName: 'getTotalTokensSold',
    args: [TokensData[activeToken].token],
    watch: true
  });

  const tokenSalesCount = (Array.isArray(tokenSales) && tokenSales[1] !== undefined) && tokenSales[1].toString()

  function calculatePercentage(firstNumber: number, secondNumber: number): number {
    if (secondNumber === 0) {
      return 0;
    }
    return (firstNumber / secondNumber) * 100;
  }

  const progressPercentage = calculatePercentage(
    parseInt(tokensSold?.toString() ?? "0"),
    parseInt(tokenSalesCount ?? "0")
  )

  const { write: buyTokensWithEther, isLoading: isPresaleLoading, isSuccess: isPresaleSuccess, data: txPurchase } = useContractWrite({
    address: presale_address,
    abi: contractAbi,
    functionName: 'buy',
    account: address
  });

  const BuyPayAccept = useCallback(async () => {
    if ((ethBalance && +valueETH > +ethBalance) || valueETH === 0) {
      //TODO: ADD ALERT
      return;
    }
    try {
      await buyTokensWithEther({ args: [parseEther(valueETH.toString()), TokensData[activeToken].token.toString()] });
      //TODO: ADD ALERT
    } catch (e) {
    }
  }, [valueETH, ethBalance, activeToken, buyTokensWithEther]);

  const { data : txData, isSuccess : isTxSuccess, isLoading : isTxLoading, refetch : refreshTxData} = useWaitForTransaction({hash : txPurchase?.hash});

  useEffect(() => {
    if (isTxLoading) {
        // toastId.current = toast.info(
        //     `Processing ${ethAmount * rate.toString() } PAYT`, {
        //         position: "top-right",
        //         autoClose: 30000,
        //         hideProgressBar: false,
        //         closeOnClick: true,
        //         pauseOnHover: true,
        //         draggable: true,
        //         progress: undefined,
        //     });
    }

    if (isTxSuccess) {
        // toast.update(toastId.current, {
        //     render: `Successfully bought ${ethAmount * rate.toString() } PAYT`,
        //     type: toast.TYPE.SUCCESS,
        //     autoClose: 5000
        // });
        refreshTxData();
    }
}, [isTxSuccess, isTxLoading]);

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
          <h3 className="title">
            {TokensData[activeToken].name.split('$CJ')[1]} TOKEN
          </h3>
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
          {isConnected &&
            <div className="progress">
              <div className="progress__head">
                <div className="progress__info">
                  <div className="progress__current">
                    ${tokensSold?.toString()}
                  </div>
                  <div className="progress__max">
                    / ${(Array.isArray(tokenSales) && tokenSales[1] !== undefined) && tokenSales[1].toString()}
                  </div>
                </div>
                <div className="progress__percent">
                  {progressPercentage}%
                </div>
              </div>
              <div className="progress__bar">
                <div className="progress__bar_current" style={{ width: `${progressPercentage}%` }}></div>
              </div>
            </div>
          }
          <div className="desc">
            Connect your wallet to buy {TokensData[activeToken].name}
          </div>
          {!address ?
            <input className='btn' type="button" value='Connect Wallet' onClick={() => setShowModal(true)} />
            :
            <input className='btn' type="submit" value='Buy Tokens' onClick={() => setShowPopup(true)} />
          }
          <div className="text">
            90% of the total supply is going to the open market via this Sale!
          </div>
        </Form>
      </Formik>
      <TokensTabs
        activeToken={activeToken}
        setActiveToken={setActiveToken}
      />
      {
        showModal && !address &&
        <ConnectModal
          connect={connect}
          connectors={connectors}
          setShowModal={setShowModal}
        />
      }
    </div>
  )
}