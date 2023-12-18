import React, { useEffect, useState } from 'react';
import { Formik, Form } from "formik";
import ethIcon from './Assets/ethereum.png'
import { TokensTabs } from "./TokensTabs";
import { TokensData } from "./TokensData";
import { useAccount, useConnect, useDisconnect, useBalance, useContractWrite, useContractRead, useWaitForTransaction } from 'wagmi';
import './SalesForm.scss'
import ConnectModal from './ConnectModal';
import { contractAbi } from './Api/api';
import { StatusModal } from './StatusPopup';

export const SalesForm = () => {
  const presale_address = '0xf2d17b5701b89811d87c185862e7a1a4c634cea7';
  const { connect, connectors } = useConnect();
  const { isConnected, address } = useAccount();
  const [activeToken, setActiveToken] = useState(0);
  const [showPopup, setShowPopup] = useState(false);
  const [showModal, setShowModal] = useState(false);


  const { data: rate, isLoading: isRateLoading } = useContractRead({
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
                    1 ETH ≈ {TokensData[activeToken].rate} {TokensData[activeToken].name}
                  </div>
                </div>
              </div>
              <span>
                You send
              </span>
            </div>
            <input type="text" name='send-token' id='send-token' disabled={!isConnected} />
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
            <input type="text" name='get-token' id='get-token' disabled={!isConnected} />
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
                  {TokensData[activeToken].progress}%
                </div>
              </div>
              <div className="progress__bar">
                <div className="progress__bar_current" style={{ width: `${TokensData[activeToken].progress}%` }}></div>
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