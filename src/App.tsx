import React from 'react';
import './App.scss';
import {Header} from "./Components/Header/Header";
import {Home} from "./Pages/Home/Home";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import {Footer} from "./Components/Footer/Footer";
import {Sales} from "./Pages/Sales/Sales";
import {WagmiConfig, createConfig, configureChains} from 'wagmi'
import { goerli } from 'viem/chains';
import { publicProvider } from 'wagmi/providers/public';
import { CoinbaseWalletConnector } from 'wagmi/connectors/coinbaseWallet'
import { InjectedConnector } from 'wagmi/connectors/injected'
import { MetaMaskConnector } from 'wagmi/connectors/metaMask'
import { WalletConnectConnector } from 'wagmi/connectors/walletConnect'
import { Buffer } from "buffer";

if (!window.Buffer) {
  window.Buffer = Buffer;
}

const { chains, publicClient  } = configureChains(
  [goerli],
  [publicProvider()],
);

const config  = createConfig({
  autoConnect: true,
  publicClient,
  connectors: [
      new MetaMaskConnector({ chains }),
      new CoinbaseWalletConnector({
          chains,
          options: {
              appName: 'wagmi',
          },
      }),
      new WalletConnectConnector({
          chains,
          options: {
              projectId: 'd6310936cc880b14ead9e2652c25f96e',
          },
      }),
      new InjectedConnector({
          chains,
          options: {
              name: 'Injected',
              shimDisconnect: true,
          },
      }),
  ],
});

export const App = () => {
  return (
    <WagmiConfig config={config}>
      <Router>
        <div className='App'>
          <Header/>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/sales' element={<Sales/>}/>
          </Routes>
          <Footer/>
        </div>
      </Router>
    </WagmiConfig>
  );
};
