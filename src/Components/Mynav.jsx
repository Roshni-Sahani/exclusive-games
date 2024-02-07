import React, { useState } from "react";
import logo from "../assests/images/logo.webp";

const Mynav = () => {
  const [show, setshow] = useState(true);
  function nav() {
    setshow(!show);
    if (show === true) {
      document.body.classList.add("max-lg:overflow-hidden");
    } else {
      document.body.classList.remove("max-lg:overflow-hidden");
    }
  }
  return (
    <div className="bg-[#FFFFFF1A] py-[19px]">
      <nav>
        <div className="xl:max-w-[1140px] mx-auto xl:px-3 container px-6">
          <div className="flex justify-between">
            <div className="flex xl:gap-[101px] gap-[50px] items-center">
              <ul>
                <li>
                  <a href="#">
                    <img src={logo} alt="logo" />
                  </a>
                </li>
              </ul>
              <ul
                className={`flex items-center gap-[28px] mobileView ${
                  show ? "right-[-100%]" : "right-0"
                }`}
              >
                <li onClick={nav}>
                  <a
                    href="#head"
                    className="font-inter font-medium text-base leading-[25.6px] text-[#d3dadb] hover:text-white"
                  >
                    Hogar
                  </a>
                </li>
                <li onClick={nav}>
                  <a
                    href="#mission"
                    className="font-inter font-medium text-base leading-[25.6px] text-[#d3dadb] hover:text-white"
                  >
                    Misión
                  </a>
                </li>
                <li onClick={nav}>
                  <a
                    href="#slot"
                    className="font-inter font-medium text-base leading-[25.6px] text-[#d3dadb] hover:text-white"
                  >
                    Tragamonedas
                  </a>
                </li>
                <li onClick={nav}>
                  <a
                    href="#Por qué elegirnos"
                    className="font-inter font-medium text-base leading-[25.6px] text-[#d3dadb] hover:text-white"
                  >
                    Por qué elegirnos
                  </a>
                </li>
                <li onClick={nav}>
                  <a
                    href="#Ofertas"
                    className="font-inter font-medium text-base leading-[25.6px] text-[#d3dadb] hover:text-white"
                  >
                    Ofertas
                  </a>
                </li>
                <button className="py-3 px-[46px] bg-transparent border block sm:hidden border-solid border-white after:content-[url(./assests/images/btnline.webp)] after:absolute relative after:bottom-[-30%] after:left-[-5%] rounded-full  text-base leading-[25.6px] text-white font-inter font-bold hover:bg-white transition-all duration-500">
                  Acceso
                </button>
              </ul>
            </div>
            <div className="flex items-center gap-5">
              <button className="py-3 px-[46px] bg-transparent border hidden sm:block border-solid border-white after:content-[url(./assests/images/btnline.webp)] after:absolute relative after:bottom-[-30%] after:left-[-5%] rounded-full  text-base leading-[25.6px] text-white font-inter font-bold hover:bg-white transition-all duration-500 hover:text-black">
                Acceso
              </button>
              <label className=" lg:hidden" onClick={nav}>
                {show ? (
                  <div className="z-20 relative">
                    <span className="flex bg-white h-[3px] rounded-3xl duration-300 w-6"></span>
                    <span className="flex bg-white h-[3px] rounded-3xl duration-300 w-6 mt-1"></span>
                    <span className="flex bg-white h-[3px] rounded-3xl duration-300 w-6 mt-1"></span>
                  </div>
                ) : (
                  <div className="z-20 relative">
                    <span className="flex bg-white absolute rounded-3xl -left-7 duration-300 top-1 rotate-45 h-[3px] w-6"></span>
                    <span className="flex bg-white absolute rounded-3xl -left-7 duration-300 -rotate-45 h-[3px] w-6 mt-1"></span>
                  </div>
                )}
              </label>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Mynav;
