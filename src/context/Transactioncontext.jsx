import React, { useEffect, useState } from "react";

import { ethers } from "ethers";

import { contractABI, contractaddress } from "../utils/contants";
export const Transactioncontext = React.createContext();
const { ethereum } = window;
const getethereumcontract = () => {
  const provider = new ethers.providers.Web3Provider(ethereum);
  const signer = provider.getSigner();
  const transactioncontract = new ethers.Contract(
    contractaddress,
    contractABI,
    signer
  );

  return transactioncontract;
};

export const TransactionProvider = ({ children }) => {
  const [currentaccount, setcurrentaccount] = useState("");

  const [formata, setformata] = useState({
    addressto: "",
    amount: "",
    keyword: "",
    message: "",
  });
  const [isloading, setisloading] = useState(false);
  const [transcount, settranscount] = useState(
    localStorage.getItem("transcount")
  );
  const handleChange = (e, name) => {
    setformata((prevState) => ({ ...prevState, [name]: e.target.value }));
  };

  const [transac, settransac] = useState([]);

  const getallTransac = async () => {
    try {
      if (ethereum) {
        const transaccontract = getethereumcontract();
        const availableTransactions =
          await transaccontract.getAllTransactions();

        // console.log(availableTransactions);

        const structuredtrans = availableTransactions.map((transac) => ({
          addressTo: transac.receiver,
          addressFrom: transac.sender,
          timestamp: new Date(transac.timestamp.toNumber() * 1000).toLocaleString(),
          message: transac.message,
          keyword: transac.keyword,
          amount: parseInt(transac.amount._hex)/10**18 ,
        }));
        // console.log(structuredtrans);
        settransac(structuredtrans);
      } else {
        console.log("Ethereum is not present ");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const checkwalletconnected = async () => {
    try {
      if (!ethereum) return alert("Pleaase install Metamask");

      const accounts = await ethereum.request({ method: "eth_accounts" });

      if (accounts.length) {
        setcurrentaccount(accounts[0]);

        getallTransac();
      } else {
        console.log("No accounts found ");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const checktransexists = async () => {
    try {
      if (ethereum) {
        const transcontract = getethereumcontract();
        const currenttranscount = await transcontract.getTransactionCount();
        window.localStorage.setItem("transcount", currenttranscount);
      }
    } catch (error) {
      console.log(error);
      throw new Error("NO ethereum object ");
    }
  };
  const connectwallet = async () => {
    try {
      if (!ethereum) return alert("please install metamask");
      const accounts = await ethereum.request({
        method: "eth_requestAccounts",
      });

      setcurrentaccount(accounts[0]);
      window.location.reload();
    } catch (error) {
      console.log(error);
      throw new Error("No Ethereum object .");
    }
  };

  const sendtrans = async () => {
    try {
      if (!ethereum) return alert("Please connect metamsk");

      const { addressto, amount, keyword, message } = formata;
      const transactioncontract = getethereumcontract();

      const parsedamount = ethers.utils.parseEther(amount);

      await ethereum.request({
        method: "eth_sendTransaction",
        params: [
          {
            from: currentaccount,
            to: addressto,
            gas: "0x5208",
            value: parsedamount._hex,
          },
        ],
      });

      const transhash = await transactioncontract.addToBlockchain(
        addressto,
        parsedamount,
        message,
        keyword
      );
      setisloading(true);
      console.log(`Loading -${transhash.hash}`);
      await transhash.wait();

      setisloading(false);
      console.log(`Success -${transhash.hash}`);

      const transcount = await transactioncontract.getTransactionCount();

      settranscount(transcount.toNumber());
      //get data from the forms
    } catch (error) {
      console.log(error);
      throw new Error("No Ethereum object.");
    }
  };
  useEffect(() => {
    checkwalletconnected();
    checktransexists();
  }, [transcount]);
  return (
    <Transactioncontext.Provider
      value={{
        connectwallet,
        currentaccount,
        formata,
        setformata,
        handleChange,
        sendtrans,
        transcount,
        transac,
        isloading,
      }}
    >
      {children}
    </Transactioncontext.Provider>
  );
};
