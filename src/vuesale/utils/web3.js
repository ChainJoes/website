import {ethers} from 'ethers'
import web3 from 'web3'

const POLLING_INTERVAL = 12000
const RPC_URL = process.env.VUE_APP_RPC_URL
export const getLibrary = () => {
    const httpProvider = new web3.providers.HttpProvider(RPC_URL)
    const web3NoAccount = new ethers.BrowserProvider(httpProvider)
    web3NoAccount.pollingInterval = POLLING_INTERVAL;
    return web3NoAccount
}


export const simpleRpcProvider = new ethers.BrowserProvider(RPC_URL)