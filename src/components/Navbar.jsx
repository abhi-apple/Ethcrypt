import { useState } from "react";
import { HiMenuAlt4 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";
import log from "../../images/log.png";

const NavbarItem = ({ title, classprops }) => {
  return (
    <button
      className={`mx-4 py-2 px-4 hover:font-bold rounded-full bg-gradient-to-r hover:from-pink-500 hover:to-yellow-500 cursor-pointer ${classprops}`}
    >
      {title}
    </button>
  );
};
const Navbar = () => {
  const [toggle, settoggle] = useState(false);
  return (
    <nav className="w-full felx md:justify-center justify-between items-center p-4">
      <div className="md:flex-[0.5] flex-initial justify-center items-center hover:object-scale-down">
        <img src={log} alt="log" className="w-32 object-contain h-20 w-50 cursor-pointer " />
      </div>

      {/* md:flex hidden list-none flex-row justify-between items-center flex-initial */}
      <ul className="navbar text-white ite md:flex hidden list-none flex-row justify-between items-center flex-initial ]">
        {/* <button className="bg-sky-600 hover:bg-sky-700 ..."> */}
        {["Navbar", "Welcome", "Transactions", "Services", "Footer"].map(
          (item, index) => (
            <NavbarItem key={item + index} title={item} />
          )
        )}
        {/* </button> */}
        
        <li className="py-2 px-7 mx-4 rounded-full cursor-pointer bg-gradient-to-r from-green-400 to-sky-500 hover:from-indigo-400 hover:to-pink-500">
          Login
        </li>
      </ul>
      {/* <div className="felx relative">
        {!toggle && (
          <AiOutlineClose
            fontsize={28}
            className="text-white md:hidden cursor-pointer"
            onClick={() => settoggle(true)}
          />
        )}
        {toggle && (
          <HiMenuAlt4
            fontsize={28}
            className="text-white md:hidden cursor-pointer"
            onClick={() => settoggle(false)}
          />
        )}

        {toggle && (
          <ul className="z-10 fixed -top-0 -right-2 p-3 w-[70vw] h-screen shadow-2xl md:hidden list-none flex flex-col justify-start items-end rounded-md blue-glassmorphism text-white animate-slide-in">
            <li className="text-xl w-full my-2"><AiOutlineClose onClick={() => setToggleMenu(false)} /></li>
            {["Market", "Exchange", "Tutorials", "Wallets"].map(
              (item, index) => <NavbarItem key={item + index} title={item} classprops="my-2 text-lg" />,
            )}
          </ul>
        )}

      </div> */}
      <div className="flex relative">
        {!toggle && (
          <HiMenuAlt4
            fontSize={28}
            className="text-white md:hidden cursor-pointer"
            onClick={() => settoggle(true)}
          />
        )}
        {/* {toggle && (
          <AiOutlineClose
            fontSize={28}
            className="text-white md:hidden cursor-pointer"
            onClick={() => settoggle(false)}
          />
        )} */}
        {toggle && (
          <ul
            className="z-10 fixed -top-0 -right-2 p-3 w-[70vw] h-screen shadow-2xl md:hidden list-none
            flex flex-col justify-start items-end rounded-md blue-glassmorphism text-white animate-slide-in"
          >
            <li className="text-xl w-full my-2">
              <AiOutlineClose onClick={() => settoggle(false)} />
            </li>
            {["Navbar", "Welcome", "Transactions", "Services", "Footer"].map(
              (item, index) => (
                <NavbarItem
                  key={item + index}
                  title={item}
                  classprops="my-2 text-lg"
                />
              )
            )}
            <li className=" py-2 px-7 mx-4 rounded-full cursor-pointer bg-gradient-to-r from-green-400 to-sky-500 hover:from-indigo-400 hover:to-pink-500">
              Login
            </li>
          </ul>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
