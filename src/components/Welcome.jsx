import { AiFillPlayCircle } from "react-icons/ai";
import { SiEthereum, SiBitcoin } from "react-icons/si";
import { BsInfoCircle } from "react-icons/bs";
import { Loader } from "./";
import React, { useContext } from "react";
import { shortaddress } from "../utils/shortaddress";

import { Transactioncontext } from "../context/Transactioncontext";
const comstyle =
  "min-h-[70px] sm:px-0 px-2 sm:min-w-[120px] flex justify-center items-center border-[0.5px] border-gray-400 text-sm font-light text-white";
// const Input = ({ placeholder, name, type, value, handleChange }) => (
//   <input
//     placeholder={placeholder}
//     type={type}
//     step="0.0001"
//     value={value}
//     onChange={(e) => handleChange(e, name)}
//     className="my-2 w-full rounded-sm p-2 outline-none bg-transparent text-white border-none text-sm white-glassmorphism"
//   />
// );
const Input = ({ placeholder, name, type, value, handleChange }) => (
  <input
    placeholder={placeholder}
    type={type}
    step="0.0001"
    value={value}
    onChange={(e) => handleChange(e, name)}
    className="my-2 w-full rounded-sm p-2 outline-none bg-transparent text-white border-none text-sm white-glassmorphism"
  />
);
const Welcome = () => {
  const {
    connectwallet,
    sendtrans,
    currentaccount,
    isloading,
    formata,
    handleChange,
  } = useContext(Transactioncontext);
  const handleSubmit = (e) => {
    const { addressto, amount, keyword, message } = formata;

    e.preventDefault();

    if (!addressto || !amount || !keyword || !message) return;

    sendtrans();
  };

  return (
    <div className="flex w-full justify-center items-center">
      <div className="flex mf:flex-row flex-col items-start justify-between mf:p-20 py-12 px-4">
        <div className="flex flex-1 justify-start flex-col md:mr-10">
          <h1 className="text-3xl hover:font-bold sm:text-5xl text-white text-gradient">
            Send Crypto <br /> Across the world
          </h1>
          <br />
          <p className="text-1xl sm:text-3xl text-white font-light  md:w-9/12 w-11/12 text-base">
            Explore the Crypto World . Buy and Sell Krypto
          </p>
          <br />
          {!currentaccount && (
            <button
              type="button"
              onClick={connectwallet}
              className="flex text-3xl px-1 py-4 font-light text-white flex-row justify-center rounded-full items-center  my-5 bg-gradient-to-r hover:from-green-400 hover:to-blue-500 from-pink-500 to-yellow-500  "
            >
              <p className="font-semibold hover:font-bold ">Connect Wallet</p>
            </button>
          )}
          <div className="grid sm:grid-cols-3 grid-cols-2  w-full mt-10 font-semibold ">
            <div
              className={`rounded-tl-3xl bg-gradient-to-r hover:from-green-400 hover:to-blue-500  font-semibold  ${comstyle}`}
            >
              <a target="_blank" href="https://www.weforum.org/agenda/2020/06/evolution-of-blockchain-reliability-and-digital-asset-protection/">Reliability</a>
            </div>

            <div className={`${comstyle} font-semibold bg-gradient-to-r hover:from-green-400 hover:to-blue-500 `}>
              <a target="_blank" href="https://www.ibm.com/in-en/topics/blockchain-security#:~:text=Basic%20blockchain%20security,-Blockchain%20technology%20produces&text=It's%20based%20on%20principles%20of,transaction%20or%20bundle%20of%20transactions.">Security</a>
            </div>
            <div
              className={`sm:rounded-tr-3xl bg-gradient-to-r hover:from-green-400 hover:to-blue-500 font-semibold  ${comstyle}`}
            >
              <a target="_blank" href="https://web3.foundation/about/">Web 3.0</a>
            </div>
            <div
              className={`rounded-bl-3xl bg-gradient-to-r hover:from-green-400 hover:to-blue-500 font-semibold  ${comstyle}`}
            >
              <a target="_blank" href="https://swapspace.co/blog/crypto-with-lowest-transaction-fees">Low Fees</a>
            </div>
            <div className={`${comstyle} font-semibold bg-gradient-to-r hover:from-green-400 hover:to-blue-500`}>
              <a target="_blank" href="https://www.blockchain.com/">Blockchain</a>
            </div>
            <div
              className={`sm:rounded-br-3xl bg-gradient-to-r hover:from-green-400 hover:to-blue-500 font-semibold ${comstyle}`}
            >
              
              <a target="_blank" href="https://ethereum.org/en/">Ethereum</a>
            </div>
          </div>
        </div>
        <div className="flex flex-col flex-1 items-center justify-start w-full mf:mt-0 mt-10">
          {/* <div className="p-3 justify-end items-start flex-col rounded-xl h-40 sm:w-72 w-full my-5 eth-card .white-glassmorphism">
            <div className="felx justify-between flex-col w-full h-full">
              <div className="flex justify-between items-start">
                <div className="w-10 j-10 rounded-full border-2 border-white felx justify-center items-center">
                  <SiEthereum fontSize={35}color="#fff"/> 
                </div>
                <BsInfoCircle fontSize={35}color="#fff"/>
              </div>
              <div>
                <p className="text-white font-light text-sm">
                  Address
                </p>
                <p className="text-white font-bold text-lg">
                  Ethereum
                </p>
              </div>
            </div>
          </div> */}
          <div className="p-3 flex justify-end items-start flex-col rounded-xl h-40 sm:w-72 w-full my-5 eth-card .white-glassmorphism ">
            <div className="flex justify-between flex-col w-full h-full">
              <div className="flex justify-between items-start">
                <div className="w-10 h-10 rounded-full border-2 border-white flex justify-center items-center">
                  <SiEthereum fontSize={21} color="#fff" />
                </div>
                <BsInfoCircle fontSize={17} color="#fff" />
              </div>
              <div>
                <p className="text-white flex-col hover:font-bold font-light text-sm">
                  {" "}
                  {shortaddress(currentaccount)}
                </p>
                <p className="text-white font-semibold hover:font-bold text-lg mt-1">
                  Ethereum
                </p>
              </div>
            </div>
          </div>
          <div className="p-5 sm:w-96 w-full flex flex-col justify-start items-center blue-glassmorphism">
            <Input
              placeholder="Address To"
              name="addressto"
              type="text"
              handleChange={handleChange}
            />
            <Input
              placeholder="Amount (ETH)"
              name="amount"
              type="number"
              handleChange={handleChange}
            />
            <Input
              placeholder="Keyword (Gif)"
              name="keyword"
              type="text"
              handleChange={handleChange}
            />
            <Input
              placeholder="Enter Message"
              name="message"
              type="text"
              handleChange={handleChange}
            />

            <div className="h-[1px] w-full bg-gray-400 my-2" />
            {isloading ? (
              <Loader />
            ) : (
              <button
                type="button"
                onClick={handleSubmit}
                className="text-white w-full hover:font-bold cursor-pointer rounded-full mt-2 border-[1px] p-2 bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500    border-[#3d4f7c]"
              >
                Send Me
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
