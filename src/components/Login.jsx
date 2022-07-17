import log from "../../images/log.png";
import logindp from "../../images/logindp.webp";
import { Transactioncontext } from "../context/Transactioncontext";
import React, { useContext } from "react";
import { useState } from "react";
import { AiOutlineLogin,AiOutlineUserAdd ,AiOutlineUser,AiOutlineUsergroupAdd } from "react-icons/ai";
import { BiUserCheck,BiUserCircle } from "react-icons/bi";
// const input = ({ placeholder, name, type, value, handleChange }) => (
//   <input
//     placeholder={placeholder}
//     type={type}
//     step="0.0001"
//     value={value}
//     onChange={(e) => handleChange(e, name)}
//     className="my-2 w-full rounded-sm p-2 outline-none bg-transparent text-white border-none text-sm white-glassmorphism"
//   />
// );
const Login = () => {
  //   const {
  //     connectwallet,
  //     sendtrans,
  //     currentaccount,
  //     isloading,
  //     formata,
  //     handleChange,
  //   } = useContext(Transactioncontext);
  //   const handleSubmit = (e) => {
  //     const { addressto, amount, keyword, message } = formata;

  //     e.preventDefault();

  //     if (!addressto || !amount || !keyword || !message) return;

  //     sendtrans();
  //   };

  const [logdata, setlogdata] = useState({
    username: "",
    password: "",
    gmail: "",
  });

  const { username, password, gmail } = logdata;
  const changehandler = (e) => {
    setlogdata({ ...logdata, [e.target.name]: [e.target.value] });
  };
  const submithandle = (e) => {
    e.preventDefault();
    if(!username || !password || !gmail) return;
    console.log(logdata);

    window.location.reload(false)
  };
  return (
    <div className="w-full flex md:justify-center justify-between items-center flex-col p-4 gradient-bg-footer">
      <div className="w-full flex sm:flex-row flex-col justify-between items-cenetr my-4">
        <div className="flex w-full justify-start  2xl:px-20 gradient-bg-transactions">
          <div className="felx flex-col md:p-12 py-12 px-4">
            <h3 className="navbar text-white text-3xl ite md:flex hidden list-none flex-row justify-between items-center ]  py-3 px-14 mx-5 rounded-full font-bold bg-gradient-to-r from-cyan-300 to-rose-500 hover:from-green-400 hover:to-purple-500">
              Create An Account  .
              <br />

              <BiUserCircle className="rounded-full  flex justify-center items-center" fontSize={21} color="#fff" />
            </h3>

            <br />
            <br />
            <div className="p-5 sm:w-96 w-full flex flex-col justify-start items-center blue-glassmorphism">
              <input
                className="my-2 w-full rounded-sm p-2 outline-none bg-transparent text-white border-none text-sm white-glassmorphism"
                placeholder="Name "
                name="username"
                type="text"
                value={username}
                onChange={changehandler}
              />
              <input
                className="my-2 w-full rounded-sm p-2 outline-none bg-transparent text-white border-none text-sm white-glassmorphism"
                placeholder="Password (Strong)"
                name="password"
                type="password"
                value={password}
                onChange={changehandler}
              />
              <input
                className="my-2 w-full rounded-sm p-2 outline-none bg-transparent text-white border-none text-sm white-glassmorphism"
                placeholder="Enter Gmail Account"
                name="gmail"
                type="email"
                value={gmail}
                onChange={changehandler}
              />

              <div className="h-[1px] w-full bg-gray-400 my-2" />
              <button
                type="button"
                onClick={submithandle}
                className="text-white text-3xl  w-full font-bold cursor-pointer rounded-full mt-2 p-2 bg-gradient-to-r hover:from-green-400 hover:to-blue-500 from-orange-400 to-lime-400"
              >
                Login
              </button>
              <p className="link text-white "></p>
            </div>
          </div>
        </div>
        <div className="flex w-full text-white items-end  gradient-bg-transactions">
          <img
            src={logindp}
            alt="log"
            className=" rounded-full object-contain h-49 w-96  pt- cursor-pointer "
          />
        </div>
      </div>
    </div>
  );
};

export default Login;
