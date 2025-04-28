import React, { useEffect, useState } from "react";

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

  let scrollActive = scroll
    ? "py-3 bg-pink-300 shadow-pink-200 text-white"
    : "py-3";

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
            className={`flex lg:gap-12 md:static md:flex-row md:shadow-none md:bg-transparent md:w-auto md:h-full md:translate-y-0 md:text-black md:m-0 md:p-0 md:transition-none gap-8 fixed ${menuActive} top-52 -translate-y-1/2 flex-col px-8 py-6 rounded shadow-lg shadow-pink-200 bg-pink-300 font-bold text-white transition-all`}
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
            className="ri-menu-3-line text-3xl md:hidden block text--900"
            onClick={handleClick}
          ></i>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
