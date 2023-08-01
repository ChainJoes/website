<template>
  <div>
    <Web3ModalComponent
      ref="web3modal"
      :provider-options="providerOptions"
      cache-provider
    />
    <section id="sale-box">
      <div class="sale-box">
        <div class="sale-calc">
          <p class="sale-calc__headline">private sale is live</p>
          <p class="sale-calc__subheadline">
            Join chain Joes Dao and let’s kick the Web3 enemies asses’s
            together!
          </p>
          <div class="sale-calc__info-btns">
            <div class="sale-calec__btns-left">
              <div class="info-btns__refresh" @click="getBalance">
                <svg
                  width="22"
                  height="20"
                  viewBox="0 0 22 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3.85757 7.97868C4.28443 6.49002 5.17162 5.17472 6.39197 4.22127C7.61232 3.26783 9.10319 2.7252 10.6509 2.67115C12.1986 2.61711 13.7237 3.05442 15.0076 3.92041C16.2915 4.78641 17.2682 6.03662 17.7979 7.49187"
                    stroke="#616161"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M17.6634 12.8508C17.1118 14.1582 16.1926 15.2775 15.0175 16.073C13.8423 16.8684 12.4616 17.3058 11.0428 17.3321C9.62396 17.3583 8.228 16.9724 7.02417 16.2211C5.82034 15.4698 4.86036 14.3853 4.26064 13.0992"
                    stroke="#616161"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M5.76172 12.4457L3.62259 12.763L2.59289 14.6646"
                    stroke="#616161"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M16.1111 8.10822L18.2502 7.791L19.2799 5.88938"
                    stroke="#616161"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
              <div class="info-btns__balance">
                <div class="info-btns__balance-wallet">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M18.3334 9.14169V10.8584C18.3334 11.3167 17.9667 11.6917 17.5 11.7084H15.8667C14.9667 11.7084 14.1417 11.05 14.0667 10.15C14.0167 9.62502 14.2167 9.13335 14.5667 8.79169C14.875 8.47502 15.3 8.29169 15.7667 8.29169H17.5C17.9667 8.30835 18.3334 8.68335 18.3334 9.14169Z"
                      fill="#616161"
                    />
                    <path
                      d="M17.0584 12.9584H15.8667C14.2834 12.9584 12.9501 11.7667 12.8167 10.25C12.7417 9.38335 13.0584 8.51669 13.6917 7.90002C14.2251 7.35002 14.9667 7.04169 15.7667 7.04169H17.0584C17.3001 7.04169 17.5001 6.84169 17.4751 6.60002C17.2917 4.57502 15.9501 3.19169 13.9584 2.95835C13.7584 2.92502 13.5501 2.91669 13.3334 2.91669H5.83342C5.60008 2.91669 5.37508 2.93335 5.15841 2.96669C3.03341 3.23335 1.66675 4.81669 1.66675 7.08335V12.9167C1.66675 15.2167 3.53341 17.0834 5.83342 17.0834H13.3334C15.6667 17.0834 17.2751 15.625 17.4751 13.4C17.5001 13.1584 17.3001 12.9584 17.0584 12.9584ZM10.8334 8.12502H5.83342C5.49175 8.12502 5.20841 7.84169 5.20841 7.50002C5.20841 7.15835 5.49175 6.87502 5.83342 6.87502H10.8334C11.1751 6.87502 11.4584 7.15835 11.4584 7.50002C11.4584 7.84169 11.1751 8.12502 10.8334 8.12502Z"
                      fill="#616161"
                    />
                  </svg>
                </div>
                {{ this.roundNumber(+this.balance) }}

                <div class="info-btns__balance-eth">
                  <svg
                    width="19"
                    height="19"
                    viewBox="0 0 19 19"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g opacity="0.8">
                      <path
                        d="M9.45717 3.13617L9.37817 3.40018V11.061L9.45717 11.1385L13.0738 9.03656L9.45717 3.13617Z"
                        fill="white"
                      />
                      <path
                        d="M9.45718 3.13617L5.84058 9.03656L9.45718 11.1386V7.42023V3.13617Z"
                        fill="white"
                      />
                      <path
                        d="M9.45711 12.2955L9.4126 12.3489V15.0778L9.45711 15.2057L13.0759 10.1946L9.45711 12.2955Z"
                        fill="white"
                      />
                      <path
                        d="M9.45718 15.2057V12.2955L5.84058 10.1946L9.45718 15.2057Z"
                        fill="white"
                      />
                      <path
                        d="M9.45703 11.1386L13.0736 9.03662L9.45703 7.42029V11.1386Z"
                        fill="white"
                      />
                      <path
                        d="M5.84058 9.03655L9.45712 11.1385V7.42023L5.84058 9.03655Z"
                        fill="white"
                      />
                    </g>
                  </svg>
                </div>
              </div>
            </div>
            <div class="info-btns__max" @click="setMaxAmount">Max</div>
          </div>
          <div
            class="sale-calc__input"
            v-bind:class="{ 'allert-border': alertShow }"
          >
            <input
              :value="sendAmount"
              type="number"
              @input="(event) => (sendAmount = event.target.value)"
            />
            <div class="sale-calc__currency">ETH</div>
          </div>
          <div class="sale-calc__allert">
            <transition name="fade">
              <div v-if="alertShow">
                <p>{{ alertMsg }}</p>
              </div>
            </transition>
          </div>
          <div class="sale-calc__range">
            <input
              type="range"
              min="0"
              max="100"
              step="25"
              v-on:input="rangeChange"
              :value="rangeValue"
              ref="range"
              @input="(event) => (rangeValue = event.target.value)"
            />
            <div class="sale-calc__range-text">
              <p>0%</p>
              <p>25%</p>
              <p>50%</p>
              <p>75%</p>
              <p>100%</p>
            </div>
          </div>
          <div class="sale-calc__buy-calc">
            {{ this.sendAmount }} ETH = {{ this.sendAmount * 4000 }} JC tokens
          </div>
          <div
            class="sale-calc__btn-deposit"
            v-bind:class="{ block_btn: !account }"
            @click="buyToken"
          >
            Deposit {{ this.sendAmount || 0 }} ETH
          </div>
          <div class="sale-calc__btns">
            <div
              class="sale-calc__btn-wallet"
              @click="connect"
            >
              <div>
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M14.1547 1.68331C12.5919 0.120508 10.0581 0.120506 8.49525 1.68331L6.14078 4.03778C5.87856 4.3 6.09951 4.70051 6.47 4.68462L7.93048 4.62196C8.23593 4.60885 8.52535 4.48164 8.74153 4.26545L9.90946 3.09752C10.6912 2.31577 11.9587 2.31577 12.7404 3.09752C13.5222 3.87928 13.5222 5.14675 12.7404 5.9285L10.9286 7.74032C10.9058 7.76312 10.894 7.79469 10.8963 7.82685C10.9008 7.88935 10.8527 7.94317 10.7901 7.94586L10.7707 7.94669C10.7381 7.94809 10.7073 7.96165 10.6843 7.98469L10.386 8.28297C9.60422 9.06473 8.33675 9.06473 7.55499 8.28297C7.44193 8.16991 7.29158 8.09595 7.13183 8.10281L6.77691 8.11803C5.9868 8.15193 5.46512 8.95519 5.99432 9.54287C6.04151 9.59528 6.09033 9.64674 6.14078 9.69719C7.70358 11.26 10.2374 11.26 11.8002 9.69719L14.1547 7.34271C15.7175 5.77991 15.7175 3.24611 14.1547 1.68331Z"
                    v-bind:fill="'white'"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M8.75232 7.82161C9.55133 7.79441 10.0605 6.96961 9.49515 6.4043C7.91136 4.82051 5.34352 4.82051 3.75973 6.4043L1.48128 8.68276C-0.102517 10.2665 -0.102518 12.8344 1.48128 14.4182C3.06507 16.002 5.6329 16.002 7.2167 14.4182L9.49515 12.1397C9.71043 11.9244 9.53463 11.5897 9.23035 11.6001L7.60369 11.6554C7.30256 11.6657 7.01656 11.7899 6.80351 12.0029L5.80248 13.004C4.99974 13.8067 3.69823 13.8067 2.89549 13.004C2.09274 12.2012 2.09274 10.8997 2.89549 10.097L5.17394 7.81852C5.97669 7.01577 7.27819 7.01577 8.08094 7.81852C8.09679 7.83437 8.11842 7.84319 8.14082 7.84243L8.75232 7.82161Z"
                    v-bind:fill="'white'"
                  />
                </svg>
              </div>
              Connect wallet
            </div>
          </div>
          <div class="sale-calc__subheadline">
            Use a metamask compatible browser like Chrome or Firefox
          </div>
        </div>
        <div class="sale-info">
          <div class="sale-info-box sale-info__period">
            <p class="sale-info__period-text sale-info__header">Min deposit</p>
            <div class="sale-info__period-time sale-info__info">
              <svg
                width="19"
                height="19"
                viewBox="0 0 19 19"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g opacity="0.8">
                  <path
                    d="M9.45717 3.13617L9.37817 3.40018V11.061L9.45717 11.1385L13.0738 9.03656L9.45717 3.13617Z"
                    fill="white"
                  />
                  <path
                    d="M9.45718 3.13617L5.84058 9.03656L9.45718 11.1386V7.42023V3.13617Z"
                    fill="white"
                  />
                  <path
                    d="M9.45711 12.2955L9.4126 12.3489V15.0778L9.45711 15.2057L13.0759 10.1946L9.45711 12.2955Z"
                    fill="white"
                  />
                  <path
                    d="M9.45718 15.2057V12.2955L5.84058 10.1946L9.45718 15.2057Z"
                    fill="white"
                  />
                  <path
                    d="M9.45703 11.1386L13.0736 9.03662L9.45703 7.42029V11.1386Z"
                    fill="white"
                  />
                  <path
                    d="M5.84058 9.03655L9.45712 11.1385V7.42023L5.84058 9.03655Z"
                    fill="white"
                  />
                </g>
              </svg>
              0.01 ETH
            </div>
          </div>
          <div class="sale-info-box sale-info__price">
            <p class="sale-info__price-text sale-info__header">
              Price per 1000 tokens
            </p>
            <div class="sale-info__price-ammount sale-info__info">
              <svg
                width="19"
                height="19"
                viewBox="0 0 19 19"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g opacity="0.8">
                  <path
                    d="M9.45717 3.13617L9.37817 3.40018V11.061L9.45717 11.1385L13.0738 9.03656L9.45717 3.13617Z"
                    fill="white"
                  />
                  <path
                    d="M9.45718 3.13617L5.84058 9.03656L9.45718 11.1386V7.42023V3.13617Z"
                    fill="white"
                  />
                  <path
                    d="M9.45711 12.2955L9.4126 12.3489V15.0778L9.45711 15.2057L13.0759 10.1946L9.45711 12.2955Z"
                    fill="white"
                  />
                  <path
                    d="M9.45718 15.2057V12.2955L5.84058 10.1946L9.45718 15.2057Z"
                    fill="white"
                  />
                  <path
                    d="M9.45703 11.1386L13.0736 9.03662L9.45703 7.42029V11.1386Z"
                    fill="white"
                  />
                  <path
                    d="M5.84058 9.03655L9.45712 11.1385V7.42023L5.84058 9.03655Z"
                    fill="white"
                  />
                </g>
              </svg>
              0.25 ETH
            </div>
          </div>
          <div class="sale-info-box sale-info__amount">
            <p class="sale-info__amount-text sale-info__header">CJ For Sale</p>
            <div class="sale-info__amount-count sale-info__info">
              <img :src="tokenImg" />{{ 2000000 - soldAmount }}
            </div>
          </div>
          <div class="sale-info-box sale-info__own">
            <p class="sale-info__own-text sale-info__header">You own</p>
            <div class="sale-info__own-count sale-info__info">
              <img :src="tokenImg" /> {{ claimableAmount }}
              <div class="sale-info__own-hover">
                <svg
                  width="19"
                  height="19"
                  viewBox="0 0 19 19"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9.5 17C13.6421 17 17 13.6421 17 9.5C17 5.35786 13.6421 2 9.5 2C5.35786 2 2 5.35786 2 9.5C2 13.6421 5.35786 17 9.5 17Z"
                    stroke="#05D19B"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M9.5 12.5V9.5"
                    stroke="#05D19B"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M9.5 6.5H9.5075"
                    stroke="#05D19B"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                <div class="sale-info__own-note">
                  <p>
                    The tokens will be claimable after the public IDO in the Q1
                    2023
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section id="congrats" v-if="congrats">
      <div class="congrats">
        <div class="congrats__image"></div>
        <div class="congrats__headline">
          <p>
            <span class="color-green">Congratulations,</span><br />you are now
            part of the Chain Joes DAO!
          </p>
        </div>
        <div class="congrats__description">
          We are waiting for you among the Defenders in our
          <a href="https://discord.gg/AABG2mJZAp" target="_blank">Discord</a>
          to fight web3 enemies!
          <br />
          <br />
          The tokens will be claimable after the public IDO. We will deploy our
          token on Uniswap after the public IDO. Before that, there will be no
          active market for it. Therefore for security reasons, tokens from the
          private sale will be claimable after the public IDO just before we
          launch the liquidity pool on Uniswap.
          <br />
          <br />
          Official trading contract on Uniswap will be announced in our socials
          in the Q1 2023.
        </div>
        <div class="congrats__btn" @click="closeCongrats">Cool, thx</div>
      </div>
    </section>
  </div>
</template>
<script>
import Web3 from "web3";
import PresaleJson from "../contracts/Presale.json";
import TokenJson from "../contracts/Token.json";
import ContractAddresses from "../contracts/contract-address.json";
import { getCurrentInstance } from "vue";
import { Web3ModalComponent } from "web3modal-vue3";
import WalletConnectProvider from "@walletconnect/web3-provider";
import { web3Modal } from "../config/mixins";
import { CoinbaseWalletSDK } from "@coinbase/wallet-sdk";
import store from "../store";
import TokenPng from "../../imgs/sale/token.png";
export default {
  name: "TokenSale",
  components: {
    Web3ModalComponent,
  },
  mixins: [web3Modal],
  computed: {
    web3() {
      return store.state.web3;
    },
    chainId() {
      if (store.state.web3.isInjected == false) {
        return 1;
      } else {
        return store.state.myChainId;
      }
    },
    recvAmount: {
      get() {
        if (this.sendAmount == 0) return null;
        return (this.sendAmount * this.price).toFixed(0);
      },
      set(newVal) {
        this.sendAmount = (newVal / this.price).toFixed(0);
      },
    },
  },
  data() {
    return {
      web3Obj: new Web3(
        Web3.givenProvider ||
          "wss://mainnet.infura.io/ws/v3/6c3b2a6b260041f2804c140af1714a46"
      ),
      contractObj: {},
      tokenContractObj: {},
      price: 0,
      sendAmount: 0.01,
      ethereum: window.ethereum,
      copiedTooltip: false,
      contractAddr: "",
      tokenContractAddr: "",
      abi: PresaleJson.abi,
      tokenAbi: TokenJson.abi,
      tokenName: "ChainJoes",
      tokenSymbol: "CJ",
      alertShow: false,
      alertMsg: "",
      networkId: "1",
      account: "", // fallback presale address
      is_tokensale: true,
      is_paused: false,
      nextBalance: 0,
      nextBurned: 0,
      inCirculation: 0,
      claimableAmount: 0,
      curCoin: { sym: "ETH", icon: "../assets/img/icons/icon.png" },
      dropdownShow: false,
      soldPercent: 0,
      soldAmount: 0,
      totalPool: 0,
      priceUsd: 0,
      minBUY: 0.01,
      theme: "light",
      providerOptions: {
        coinbasewallet: {
          package: CoinbaseWalletSDK,
          options: {
            infuraId: "6c3b2a6b260041f2804c140af1714a46",
          },
        },
        walletconnect: {
          package: WalletConnectProvider,
          options: {
            infuraId: "6c3b2a6b260041f2804c140af1714a46",
          },
        },
      },
      number: 0,
      balance: 0,
      claimCJ: 0,
      tokenImg: TokenPng,
      balance2: 0.4300990707,
      rangeValue: 50,
      congrats: false,
      isMetamaskSupport: window.ethereum !== undefined,
    };
  },

  created() {
    if (window.ethereum) {
      console.log("created---------", window.ethereum);
      this.web3Obj.eth.getAccounts().then((result) => {
        console.log(11122, result);
        this.account = result[0];
        //store.dispatch("checkMetamaskAddr", {metamask:result[0]});
      });
      window.ethereum.on("networkChanged", (networkId) => {
        this.networkChanged(networkId);
        console.log(234);
      });
      window.ethereum.on("accountsChanged", async (accounts) => {
        console.log(456666, accounts);
        this.account = accounts[0];
        this.getBalance();
        this.calcPrice();
      });
    }
    this.web3Obj.eth.net.getId().then((result) => {
      this.networkChanged(result);
    });
    // WalletConnect
    if (
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
    ) {
      this.theme = "dark";
    }
  },
  mounted() {
    // WalletConnect
    this.$nextTick(async () => {
      const web3modal = this.$refs.web3modal;
      console.log("web3modal", web3modal);
      // store.dispatch("setWeb3ModalAction", web3modal)
      store.commit("setWeb3Modal", web3modal);
      console.log("cacheProvider=>>>>", web3modal.cacheProvider);
      if (web3modal.cacheProvider) {
        console.log("asdas");
        this.connect();
      }
    });
    this.sendAmount = this.roundNumber(this.balance / 2) || 0;
  },
  methods: {
    // WalletConnect
    connect() {
      store.dispatch("connect");
      //this.subscribeMewBlockHeaders()
    },
    async switchNetwork(netid) {
      this.dropdownShow = false;
      await window.ethereum.request({
        method: "wallet_switchEthereumChain",
        params: [{ chainId: netid }],
      });
    },
    networkChanged(networkId) {
      this.dropdownShow = false;
      this.networkId = networkId;
      this.totalPool = "100000000"; // 100M
      this.minBUY = "0.01";

      if (networkId == 96) {
        // HardHat
        this.web3Obj = new Web3(
          Web3.givenProvider || "https://rpc.nextsmartchain.com"
        );
        this.contractAddr = ContractAddresses.Presale;
        this.tokenContractAddr = ContractAddresses.Token;
        this.curCoin = { sym: "ETH", icon: "../assets/img/icons/icon.png" };
      } else {
        // Fallback to MAINNET
        this.web3Obj = new Web3(
          Web3.givenProvider ||
            "wss://mainnet.infura.io/ws/v3/6c3b2a6b260041f2804c140af1714a46"
        );
        this.contractAddr = ContractAddresses.Presale; // Presale address
        this.tokenContractAddr = ContractAddresses.Token; // Token address
        this.curCoin = { sym: "ETH", icon: "../assets/img/icons/icon.png" };
      }
      this.tokenContractObj = new this.web3Obj.eth.Contract(
        this.tokenAbi,
        this.tokenContractAddr
      );
      this.getBalance();
      this.contractObj = new this.web3Obj.eth.Contract(
        this.abi,
        this.contractAddr
      );
      this.calcPrice();
      this.getSupply();
      //this.getPrice();
    },

    async getBalance() {
      await this.web3Obj.eth.getBalance(this.account).then((result) => {
        this.balance = Web3.utils.fromWei(result, "ether");
      });
      this.tokenContractObj.methods
        .balanceOf(this.account)
        .call()
        .then((result) => {
          this.nextBalance = result;
        });
    },

    async getSupply() {
      await this.tokenContractObj.methods
        .totalSupply()
        .call()
        .then((result) => {
          this.totalSupply = (result / 1e18).toFixed(0);
        });
    },

    async getPrice() {
      console.log("----- INIT");
      const response = await fetch(
        "https://api.pancakeswap.info/api/v2/tokens/0x5d10780da28e5b225a0c6a1bed230a04cf96ece3"
      );
      const result = await response.json();
      this.priceUsd = result.data.price;
    },

    showAlert: function (msg) {
      this.alertShow = true;
      this.alertMsg = msg;
      setTimeout(() => {
        this.alertMsg = "";
        this.alertShow = false;
      }, 3000);
    },
    calcPrice: async function () {
      await this.contractObj.methods
        .price()
        .call()
        .then((res) => {
          this.price = 1 / (res / 1e18);
        });
      await this.contractObj.methods
        .paused()
        .call()
        .then((res) => {
          this.is_paused = res;
        });
      await this.contractObj.methods
        .ends()
        .call()
        .then((res) => {
          if (res == 0) this.is_tokensale = false;
          else this.is_tokensale = true;
        });
      await this.contractObj.methods
        .claimable(this.account)
        .call()
        .then((res) => {
          this.claimableAmount = res / 1e18;
        });
      await this.contractObj.methods
        .weiRaised()
        .call()
        .then((res) => {
          this.soldAmount = (res * this.price) / 1e18;
          this.soldPercent = 100 / (this.totalPool / this.soldAmount);
        });
    },
    claimToken: async function () {
      if (this.claimableAmount == 0) {
        this.showAlert(
          "You don't have any tokens to claim, you need to BUY first."
        );
        return;
      }
      // Check if PRESALE has been ended
      await this.contractObj.methods
        .ends()
        .call()
        .then(async (res) => {
          if (Math.round(new Date().getTime() / 1000) < res) {
            this.showAlert(
              "Presale has not been ended. Tokens can be claimed after the tokensale is finished."
            );
          } else {
            await this.contractObj.methods
              .claim()
              .send({
                from: this.account,
              })
              .then((res) => {
                console.log(res);
                document.location.reload();
              });
          }
        });
    },
    buyToken: async function () {
      if (this.account) {
        if (this.sendAmount < this.minBUY) {
          return;
        }
        if (this.sendAmount > this.balance) {
          this.showAlert("Insufficient funds");
          return;
        }
        await this.contractObj.methods
          .buy()
          .send({
            from: this.account,
            gas: 300000,
            value: Web3.utils.toWei(this.sendAmount, "ether"),
          })
          .then((res) => {
            console.log(res);
            this.congrats = true;
            const html = document.documentElement;
            document.getElementById("root").classList.toggle("mobileMenu");
            html.style.overflow === "hidden"
              ? (html.style.overflow = "auto")
              : (html.style.overflow = "hidden");
            // document.location.reload();
          });
      }
    },
    copyAddress: function () {
      var copyText = document.getElementById("address");
      copyText.select();
      copyText.setSelectionRange(0, 99999);
      document.execCommand("copy");
      document.getSelection().removeAllRanges();
      this.copiedTooltip = true;
      setTimeout(() => {
        this.copiedTooltip = false;
      }, 1000);
    },

    rangeChange: function (e, value) {
      if (value) {
        this.rangeValue = value;
      }
      let target = this.$refs.range;
      const min = target.min;
      const max = target.max;
      const val = value || target.value;
      this.sendAmount = `${(this.balance * val) / 100}`;
      target.style.backgroundSize =
        ((val - min) * 100) / (max - min) + "% 100%";
    },
    setMaxAmount: function () {
      this.sendAmount = `${this.balance}`;
      this.rangeChange(false, 100);
    },

    // Fallback Function
    connectMetaMask: async function (param) {
      if (param == 1) {
        await window.ethereum
          .request({ method: "eth_requestAccounts" })
          .then((result) => {
            console.log("result=" + result);
            document.location.reload();
          });
      } else {
        console.log("here", store.state.web3.coinbase);
        let params = [
          {
            from: store.state.web3.coinbase,
            to: ContractAddresses.Token,
          },
        ];
        await window.ethereum
          .request({
            method: "eth_sendTransaction",
            params,
          })
          .then((result) => {
            console.log(result);
          })
          .catch((error) => {
            console.log(error);
          });
      }
    },
    closeCongrats: function () {
      this.congrats = false;
      const html = document.documentElement;
      document.getElementById("root").classList.toggle("mobileMenu");
      html.style.overflow === "hidden"
        ? (html.style.overflow = "auto")
        : (html.style.overflow = "hidden");
      document.location.reload();
    },
    roundNumber: function (num) {
      return parseInt(num * 100) / 100;
    },
  },
};
</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 1s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

button[disabled="disabled"] {
  cursor: not-allowed;
  opacity: 0.8;
}
.sale-box {
  font-family: "Inter";
  font-weight: 400;
  display: flex;
  align-items: center;
}
.sale-calc {
  padding: 60px 40px;
  background-color: #080808;
  color: #fff;
  border-radius: 8px;
}
.sale-calc__headline {
  font-size: 40px;
  font-family: "Aaaiight";
  margin: 0;
  line-height: 36px;
  text-align: center;
}
.sale-calc__subheadline {
  font-size: 14px;
  line-height: 22.4px;
  text-align: center;
  max-width: 310px;
  margin: auto;
  margin-top: 18px;
}
.sale-calc__info-btns {
  display: flex;
  justify-content: space-between;
  margin-top: 40px;
}
.sale-calec__btns-left {
  display: flex;
}
.sale-calc__input {
  position: relative;
  margin-top: 16px;
}
.sale-calc__input input {
  width: 100%;
  height: 62px;
  min-width: 390px;
  background: none;
  border: 1px solid #242424;
  border-radius: 4px;
  color: #fff;
  font-size: 14px;
  line-height: 14px;
  padding-left: 12px;
  font-family: "Inter";
  font-weight: 500;
}
.sale-calc__currency {
  position: absolute;
  top: 50%;
  right: 12px;
  transform: translateY(-50%);
  font-weight: 500;
  color: #878787;
}
.sale-calc__range input {
  width: 100%;
  margin-top: 16px;
  height: 8px;
  border-radius: 8px;
  -webkit-appearance: none;
  outline: none;

  background: #242424;
  background-image: linear-gradient(
    204.42deg,
    #00ffb7 -11.28%,
    #005b42 105.96%
  );
  background-size: 50% 100%;
  background-repeat: no-repeat;
}
.sale-calc__range input::-webkit-slider-thumb {
  appearance: none;
  width: 20px;
  height: 20px;
  background: #fff;
  cursor: pointer;
  transition: background 0.15s ease-in-out;
  border: 6px solid #00ffb7;
  border-radius: 20px;
}
.sale-calc__range input::-ms-fill-lower {
  background-color: #005b42;
}
.sale-calc__range-text {
  display: flex;
  justify-content: space-between;
  color: #878787;
}
.sale-calc__range-text p {
  text-align: center;
  width: 40px;
}
.sale-calc__btn-deposit {
  width: 100%;
  height: 44px;
  background: linear-gradient(204.42deg, #00ffb7 -11.28%, #005b42 105.96%);
  border-radius: 2px;
  font-size: 14px;
  line-height: 14px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 16px;
  font-weight: 500;
  cursor: pointer;
}
.sale-calc__btn-deposit:hover {
  outline: 1px solid #00ffb7;
  background: none;
}
.sale-calc__btn-deposit:focus {
  outline: 1px solid #fff;
  background: none;
}
.sale-calc__btn-deposit:active {
  background: #fff;
  color: #080808;
}
.sale-calc__btns {
  display: flex;
  gap: 16px;
  margin-top: 16px;
}
.sale-calc__btn-wallet {
  width: 100%;
  height: 44px;
  background: linear-gradient(204.42deg, #00ffb7 -11.28%, #005b42 105.96%);
  border-radius: 2px;
  font-size: 14px;
  line-height: 14px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4px;
  font-weight: 500;
  color: #fff;
  cursor: pointer;
}
.sale-calc__btn-wallet:hover {
  outline: 1px solid #00ffb7;
  background: none;
}
.sale-calc__btn-wallet:focus {
  outline: 1px solid #fff;
  background: none;
}
.sale-calc__btn-wallet:active {
  background: #fff;
  color: #080808;
}

.info-btns__refresh {
  cursor: pointer;
}
.info-btns__balance {
  display: flex;
  margin-left: 10px;
}
.info-btns__balance-wallet {
  margin-right: 9px;
}
.info-btns__balance-eth {
  margin-left: 4px;
}
.info-btns__max {
  color: #00ffb7;
  cursor: pointer;
}
.sale-calc__btn-chat {
  width: 44px;
  height: 44px;
  background: #ffffff;
  border-radius: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}
.sale-info {
  background: rgba(8, 8, 8, 0.9);
  border-radius: 0px 8px 8px 0px;
  color: #fff;
}
.sale-info-box {
  padding: 24px 0px;
  width: 220px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  border-bottom: 1px solid #242424;
}
.sale-info__header {
  font-family: "Inter";
  font-size: 14px;
  line-height: 22.4px;
  color: #878787;
  margin: 0;
}
.sale-info__info {
  font-family: "Inter";
  font-size: 18px;
  line-height: 30.6px;
  color: #fff;
  display: flex;
  gap: 8px;
  justify-content: center;
  align-items: center;
}
.sale-calc__allert {
  color: #fe6161;
  font-size: 12px;
  line-height: 19.2px;
}
.allert-border input {
  border-color: #fe6161;
}
.sale-calc__buy-calc {
  text-align: center;
}
.block_btn {
  background: #616161;
  color: #878787;
}

.sale-info__own-hover {
  position: relative;
  cursor: pointer;
  display: flex;
  align-items: center;
}
.sale-info__own-hover:hover > .sale-info__own-note {
  display: flex;
}

.sale-info__own-note {
  width: 256px;
  height: 60px;
  font-size: 14px;
  background: #242424;
  border-radius: 8px;
  position: absolute;
  left: 0;
  top: -60px;
  transform: translateX(-50%);
  display: none;
  justify-content: center;
  align-items: center;
}
.sale-info__own-note p {
  max-width: 232px;
  margin: 0;
  font-family: "Inter";
  font-weight: 400;
  color: #fff;
}

#congrats {
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: #080808e6;
}
.congrats {
  font-family: "Inter";
  width: 570px;
  padding-bottom: 60px;
  background-color: #080808;
}
.congrats__image {
  width: 100%;
  height: 123px;
  background: url(../../imgs/sale/congrats.png);
}
.congrats__headline {
  margin-top: 40px;
  font-size: 40px;
  line-height: 36px;
  color: #fff;
  width: 415px;
  font-family: "Aaaiight";
  margin: auto;
  text-align: center;
}
.color-green {
  color: #05d19b;
}
.congrats__description {
  margin-top: 40px;
  color: #fff;
  font-size: 14px;
  line-height: 22.4px;
  width: 450px;
  margin: auto;
  text-align: center;
}
.congrats__description a {
  color: #05d19b;
  text-decoration: none;
}
.congrats__btn {
  width: 450px;
  padding: 16px 0px;
  font-size: 16px;
  line-height: 16px;
  font-weight: 600;
  text-align: center;
  color: #fff;
  background: linear-gradient(204.42deg, #00ffb7 -11.28%, #005b42 105.96%);
  margin: auto;
  margin-top: 40px;
  cursor: pointer;
}

.sale-congrats__btn:hover {
  outline: 1px solid #00ffb7;
  background: none;
}
.congrats__btn:focus {
  outline: 1px solid #fff;
  background: none;
}
.congrats__btn:active {
  background: #fff;
  color: #080808;
}
/* Chrome, Safari, Edge, Opera */
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

/* Firefox */
input[type="number"] {
  -moz-appearance: textfield;
}

@media screen and (max-width: 768px) {
  .sale-box {
    flex-direction: column;
  }

  .sale-calc {
    padding: 40px 20px;
    max-width: 240px;
  }

  .sale-calc__headline {
    font-size: 37px;
    line-height: 33.3px;
    max-width: 240px;
    margin: auto;
  }
  .sale-calc__subheadline {
    font-size: 12px;
    line-height: 19.2px;
    max-width: 240px;
    margin-left: auto;
    margin-right: auto;
  }
  .sale-calc__input input {
    min-width: 228px;
    width: 228px;
  }
  .sale-calc__range-text {
    justify-content: space-between;
  }
  .sale-calc__range-text p {
    font-size: 12px;
    line-height: 19.2px;
  }
  .sale-calc__buy-calc {
    font-size: 14px;
    line-height: 22.4px;
  }
  .sale-calc__btn-wallet {
    width: 100%;
  }
  .congrats {
    width: 280px;
  }
  .congrats__image {
    background: url(../../imgs/sale/congratsMobile.png);
  }
  .congrats__headline {
    width: 240px;
    font-size: 24px;
    line-height: 28.8px;
  }
  .congrats__description {
    width: 240px;
    font-size: 12px;
    line-height: 19.2px;
    margin-top: 12px;
  }
  .congrats__btn {
    width: 240px;
  }
}
</style>
