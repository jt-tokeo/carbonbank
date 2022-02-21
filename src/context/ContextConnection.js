import { loadStripe } from '@stripe/stripe-js';
import React, { createContext, useState } from 'react';
import config from "../config/config.json";
import * as nearAPI from "near-api-js";

/**
 * It's the variable you need to use in the useContext for catch the data in him.
 * 
 * @param user it's the variable UseState user
 * @param setUser it's the set variable UseState user
 * @param Api It's the function for call api need (action, setUseState)
 * @param stripePromise it's the key for the front stripe
 */
const DataContext = createContext({});

  // Make sure to call loadStripe outside of a component’s render to avoid
  // recreating the Stripe object on every render.
  // This is a public sample test API key.
  // Don’t submit any personally identifiable information in requests made with this key.
  // Sign in to see your own test API key embedded in code samples.
  const stripePromise = loadStripe("pk_test_oKhSR5nslBRnBZpjO6KuzZeX", {locale: 'en'});


export const ContextConnection = ({ children }) => {

  // Allow to save information of user in react, by default the role is visitor
  const [user, setUser] = useState({
    role: "visitor"
  })

  const [metadataContract, setMetadataContract] = useState(null);
  const [near, setNear] = useState(null);
  const [nearAddress, setNearAddress] = useState('CONNECT WALLET');
  const [TCCBalance, setTCCBalance] = useState(null);
  const [TCCContract, setTCCContract] = useState(null);
  const [walletBalance, setWalletBalance] = useState(null);
  const [walletConn, setWalletConn] = useState(null);

  const initiateNearConnection = async() => {
    if(!walletConn || !near){
      const nearConfig = {
        networkId: 'testnet',
        nodeUrl: 'https://rpc.testnet.near.org',
        //contractName: CONTRACT_NAME,
        walletUrl: 'https://wallet.testnet.near.org',
        helperUrl: 'https://helper.testnet.near.org',
        explorerUrl: 'https://explorer.testnet.near.org',
    }
    
    /** Initiate connexion to near API */
      const newNear = await nearAPI.connect({ deps: { keyStore: new nearAPI.keyStores.BrowserLocalStorageKeyStore() }, ...nearConfig });
      setNear(newNear);
      /** Initiate wallet's connection */
      const walletConnection = new nearAPI.WalletConnection(newNear);
      setWalletConn(walletConnection);
      /** Initiate connection to TCC's smartContract */
      const ft_contract = new nearAPI.Contract(walletConnection.account(),"credits.carbonbank.testnet",{
        viewMethods:[
            "storage_balance_bounds",
            "storage_balance_of",
            "ft_metadata",
            "ft_total_supply",
            "ft_balance_of",
        ],
        changeMethods:[
            "storage_deposit",
            "storage_unregister",
            "ft_transfer",
          ],
        });
        setTCCContract(ft_contract);
        /** Get metadatas from contract (Ex: token, decimals, etc) */
        const metadata = await ft_contract.ft_metadata();
        console.log(metadata);
    setMetadataContract(metadata);
  }
}
  /** Function to connect to near account */
  const connectNear = async () => {
    if (!walletConn){
      const nearConfig = {
        networkId: 'testnet',
        nodeUrl: 'https://rpc.testnet.near.org',
        //contractName: CONTRACT_NAME,
        walletUrl: 'https://wallet.testnet.near.org',
        helperUrl: 'https://helper.testnet.near.org',
        explorerUrl: 'https://explorer.testnet.near.org',
    }
    
    /** Initiate connexion to near API */
      const newNear = await nearAPI.connect({ deps: { keyStore: new nearAPI.keyStores.BrowserLocalStorageKeyStore() }, ...nearConfig });
      setNear(newNear);
      /** Initiate wallet's connection */
      const walletConnection = new nearAPI.WalletConnection(newNear);
      setWalletConn(walletConnection);
      walletConnection.requestSignIn();

    } else {
      walletConn.requestSignIn();
      console.log("clicked");
      }
  }
  /** Function to disconnect Near's account and clean states */
  const disconnectNear = () => {
    if (walletConn){
      walletConn.signOut();
    }
    setNearAddress('CONNECT WALLET');
    setWalletConn(null);
    setWalletBalance(null);
    setNear(null);
  }
  const registerTCCAccount = async() => {
    await TCCContract.storage_deposit({},"300000000000000",nearAPI.utils.format.parseNearAmount("0.00125"));
  }

  return (
    <DataContext.Provider value={{
      connectNear,
      disconnectNear,
      initiateNearConnection,
      metadataContract,
      near,
      nearAddress, setNearAddress,
      user, setUser,
      registerTCCAccount,
      Api, stripePromise,
      TCCBalance, setTCCBalance,
      TCCContract,
      walletBalance, setWalletBalance,
      walletConn
    }}>
      {children}
    </DataContext.Provider>
  );
};

/**
 * It's a function switch with all the fetch you need to call, if you need.
 * 
 * @param {Objet} action  In this objet you have in param type, token, id.
 * @param {Function} setDataFetch it's for catch the data of the fetch
 * @example
 * // project
 * It's fetch for get all transaction
 * // user
 * It's fetch for get one user so you need to put action.id
 * //report
 * It's a fetch for get all report make
 * //transaction
 * It's a fetch for get all transaction make
 * //create-payment-intent
 * It's the stripe api for make work the front stripe, with a Post of the all some need.
 * 
 */
function Api(action, setDataFetch) {
  switch (action.type) {
    case 'project':
      async function Projects(url, setDataFetch) {
        try {
          let response = await fetch(url + '/projects');
          let data = await response.json();
          console.log(data);
          setDataFetch({
            response: response,
            data: data.projects,
            dataJson: data
          })
        } catch (error) {

        }
      }
      Projects(config.api_url, setDataFetch);
      break;
    case 'user':
      async function User(url, setDataFetch) {
        try {
          let response = await fetch(url + '/user/' + action.id, {
            method: 'GET',
            headers: {
              'Accept': 'application/json',
              'Authorization': 'Bearer ' + action.token,
            }
          });
          let data = await response.json();
          console.log(data);
          setDataFetch({
            response: response,
            data: [data],
            dataJson: data
          })
        } catch (error) {

        }
      }
      User(config.api_url, setDataFetch);
      break;
    case 'report':
      async function Reports(url, setDataFetch) {
        try {
          let response = await fetch(url + '/reports');
          let data = await response.json();
          console.log(data);
          setDataFetch({
            response: response,
            data: data.reports,
            dataJson: data
          })
        } catch (error) {

        }
      }
      Reports(config.api_url, setDataFetch);
      break;
    case 'transaction':
      async function Transactions(url, setDataFetch) {
        try {
          let response = await fetch(url + '/transactions');
          let data = await response.json();
          console.log(data);
          setDataFetch({
            response: response,
            data: data.transactions,
            dataJson: data
          })
        } catch (error) {

        }
      }
      Transactions(config.api_url, setDataFetch);
      break;
    case 'create-payment-intent':
      async function Payment(url, setDataFetch) {
        let response = await fetch(url + "/create-payment-intent", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ items: [{ id: "xl-tshirt" }] }),
        })
        let data = await response.json();
        setDataFetch(data.clientSecret);
      }
      Payment(config.api_url, setDataFetch)
    default:
      // setDataFetch({data: []})
      break;
  }
};



export default DataContext;