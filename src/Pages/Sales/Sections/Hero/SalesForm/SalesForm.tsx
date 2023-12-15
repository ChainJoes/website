import React, { useState } from 'react';
import { Formik, Form } from "formik";
import ethIcon from './Assets/ethereum.png'
import { TokensTabs } from "./TokensTabs";
import { TokensData } from "./TokensData";
import { useAccount, useConnect, useDisconnect, useBalance, useContractWrite, useContractRead, useWaitForTransaction } from 'wagmi';
import './SalesForm.scss'
import ConnectModal from './ConnectModal';

export const SalesForm = () => {
  const { connect, connectors } = useConnect();
  const { isConnected, address } = useAccount();
  const [activeToken, setActiveToken] = useState(0);
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="sales-form">
      <Formik
        initialValues={{ email: '' }}
        onSubmit={(values, { setSubmitting }) => {
          setSubmitting(false);
        }}
      >
        <Form>
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
            <input type="text" name='send-token' id='send-token' disabled={!isConnected}  />
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
                    $15.934.926
                  </div>
                  <div className="progress__max">
                    / $40.000.000
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
          <input className='btn' type="submit" value='Connect Wallet' onClick={() => setShowModal(true)} />
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
        showModal &&
        <ConnectModal
          connect={connect}
          connectors={connectors}
          setShowModal={setShowModal}
        />
      }
    </div>
  )
}