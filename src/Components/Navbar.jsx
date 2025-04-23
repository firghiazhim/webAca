import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { RiMenu5Fill } from "react-icons/ri";

const Navbar = () => {
  const [show, setShow] = useState(false);
  const [scroll, setScroll] = useState(false);

  const handleClick = () => {
    setShow(!show);
  };

  let menuActive = show ? "left-0" : "-left-full";

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 5) {
        setScroll(true);
        setShow(false);
      } else {
        setScroll(false);
      }
    });
  });

  let scrollActive = scroll ? "py-3 bg-white shadow" : "py-3";
  // const [navbar, setNavbar] = useState(false);

  return (
    <div className={`navbar fixed w-full transition-all ${scrollActive} z-99`}>
      <div className="container mx-auto px-4">
        <div className="navnar-box flex items-center justify-between">
          <div className="logo">
            <h1 className="lg:text-4xl text-2xl font-bold">
              RasyaPutriNatarina.
            </h1>
          </div>
          <ul
            className={`flex lg:gap-12 md:static md:flex-row md:shadow-none md:bg-transparent md:w-auto md:h-full md:translate-y-0 md:text-black md:m-0 md:p-0 md:transition-none gap-8 fixed ${menuActive} top-51 -translate-y-1/2 flex-col px-8 py-6 rounded shadow-lg shadow-slate-800 bg-slate-900 font-bold text-white transition-all`}
          >
            <li className="flex items-center gap-3">
              <li className="ri-home-2-line text-3xl md:hidden block"></li>
              <a href="#home" className="font-medium opacity-75">
                Home
              </a>
            </li>
            <li className="flex items-center gap-3">
              <li className="ri-fingerprint-fill text-3xl md:hidden block"></li>
              <a href="#you" className="font-medium opacity-75">
                You
              </a>
            </li>
            <li className="flex items-center gap-3">
              <li className="ri-heart-fill text-3xl md:hidden block"></li>
              <a href="#we" className="font-medium opacity-75">
                We
              </a>
            </li>
            <li className="flex items-center gap-3">
              <li className="ri-folders-fill text-3xl md:hidden block"></li>
              <a href="#hope" className="font-medium opacity-75">
                Hope
              </a>
            </li>
          </ul>
          <i
            className="ri-menu-3-line text-3xl md:hidden block text-slate-900"
            onClick={handleClick}
          ></i>
        </div>
      </div>
    </div>
    // <div className="navbar py-2">
    //   <div className="navbar-box container mx-auto flex justify-between items-center">
    //     <div className="logo">
    //       <h1 className="lg:text-4xl text-3xl font-pacifico">
    //         Rasyaputrinatarina.
    //       </h1>
    //     </div>
    //     <div className="nav-links lg:flex hidden">
    //       <ul className="flex items-center gap-10">
    //         <li>
    //           <a className="hover:font-bold" href="#home">
    //             Home
    //           </a>
    //         </li>
    //         <li>
    //           <a className="hover:font-semibold" href="#you">
    //             You
    //           </a>
    //         </li>
    //         <li>
    //           <a className="hover:font-semibold" href="#we">
    //             We
    //           </a>
    //         </li>
    //         <li>
    //           <a className="hover:font-semibold" href="#hope">
    //             Hope
    //           </a>
    //         </li>
    //       </ul>
    //     </div>
    //     <button
    //       onClick={() => setNavbar(navbar ? false : true)}
    //       className="buttonToggle lg:hidden block cursor-pointer font-bold"
    //     >
    //       <RiMenu5Fill className="text-2xl text-black" />
    //     </button>
    //   </div>
    //   {/* mobilePhone */}
    //   <div className={navbar ? "block" : "hidden"}>
    //     <ul className="container">
    //       <li className="cursor-pointer hover:bg-black hover:text-white hover:font-bold">
    //         <a className="text-[12px] px-1 hover:font-semibold" href="#home">
    //           Home
    //         </a>
    //       </li>
    //       <li className="cursor-pointer  hover:bg-black hover:text-white hover:font-bold">
    //         <a className="text-[12px] px-1 hover:font-semibold" href="#you">
    //           You
    //         </a>
    //       </li>
    //       <li className="cursor-pointer  hover:bg-black hover:text-white hover:font-bold">
    //         <a className="text-[12px] px-1 hover:font-semibold" href="#we">
    //           We
    //         </a>
    //       </li>
    //       <li className="cursor-pointer  hover:bg-black hover:text-white hover:font-bold">
    //         <a className="text-[12px] px-1 hover:font-semibold" href="#hope">
    //           Hope
    //         </a>
    //       </li>
    //     </ul>
    //   </div>
    // </div>
  );
};

export default Navbar;
