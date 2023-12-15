import React from 'react';
import './App.scss';
import {Header} from "./Components/Header/Header";
import {Home} from "./Pages/Home/Home";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import {Footer} from "./Components/Footer/Footer";
import {Sales} from "./Pages/Sales/Sales";
import {WagmiConfig, createConfig, configureChains, mainnet} from 'wagmi'
import {createPublicClient, http} from "viem";

const config = createConfig({
  autoConnect: true,
  publicClient: createPublicClient({
    chain: mainnet,
    transport: http()
  }),
})

export const App = () => {
  return (
    <WagmiConfig config={config}>
      <Router>
        <div className='App'>
          <Header/>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/sales-in-dev' element={<Sales/>}/>
          </Routes>
          <Footer/>
        </div>
      </Router>
    </WagmiConfig>
  );
};
