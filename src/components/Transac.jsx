
import React, { useContext } from "react";
import { Transactioncontext } from "../context/Transactioncontext";
import useFetch from "../hooks/useFetch";
import dummyData from "../utils/dummyData";
import { shortaddress } from "../utils/shortaddress";


var int = 0;
const TransacCard = ({
  addressTo,
  addressFrom,
  timestamp,
  message,
  keyword,
  amount,
  url,
}) => {
  int=int+1;
  const gifUrl =useFetch({keyword})
  return (
    <div
    className="bg-[#181918 m-4 flex flex-1 
      2xl:min-w-[450px] 
      2xl:max-w-[500px] 
      sm:min-w-[270px] 
      sm: max-w-[300px] 
      min-w-full 
      flex-col p-3 rounded-md hover:shadow-2xl"
      >

      <div className="flex flex-col items-center w-full mt-3">
        <div className="display-felx justify-start w-full mb-6 p-2">
        <p className="text-white text-base font-bold"> {int/2}</p>
        <br />
          <a
            href={`https://goerli.etherscan.io/address/${addressFrom}`}
            target="_blank"
            rel="noreferrer"
          >
            <p className="text-white hover:font-bold text-base"> From : {shortaddress(addressFrom)}</p>
          </a>
          <a href={`https://goerli.etherscan.io/address/${addressTo}`}>
          <p className="text-white hover:font-bold text-base"> TO : {shortaddress(addressTo)}</p>
          </a>
          <p className="text-white hover:font-bold text-base"> Amount: {amount} ETH</p>
          {message && (
            <> 
            <br />
            <p className="text-white hover:font-bold text-base "> Message: {message}</p>
            </>
          )}
        </div>
        <img src={gifUrl|| url} alt="natural" className="w-full h-64 2xl:h-96 rounded-md shadow-lg hover:font-bold object-cover"
        />
        <div className="bg-black p-3 px-5 rounded-3xl -mt-5 shadow-2xl">
          <p className="text-[#37c7da] font-bold "> {timestamp}</p>
        </div>
      </div>
    </div>
  );
};

const Transac=()=>{
  const {currentaccount ,transac}=useContext(Transactioncontext);
  return(
    <div className="flex w-full justify-center items-center 2xl:px-20 gradient-bg-transactions">
      <div className="felx flex-col md:p-12 py-12 px-4">
        {currentaccount ?(
          <h3 className="text-white text-3xl text-center my-2">
            Latest Transactions 
          </h3>
        ):(
          <h3 className="text-white text-3xl text-center my-2">
            Connect Your account to see the latest transactions 
          </h3>
        )

        }

        <div className="flex flex-wrap justify-center items-center mt-10">
          {transac.reverse().map((transact,i)=>(
            <TransacCard key={i}{...transact}/>
          ))}
        </div>
      </div>
    </div> 
  )
}

export default Transac;


