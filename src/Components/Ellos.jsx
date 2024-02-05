import React from "react";
import bg1 from "../assests/images/bg1.webp";
import bg2 from "../assests/images/bg2.webp";
import bg3 from "../assests/images/bg3.webp";

const Ellos = () => {
  const cards = [
    {
      bg: bg1,
    },
    {
      bg: bg2,
    },
    {
      bg: bg3,
    },
  ];
  const card = cards.map((cards, i) => (
    <div
      key={i}
      className="lg:w-1/3 sm:w-1/2 w-full px-3 flex justify-center group duration-500 mb-6"
    >
      <div
        className="max-w-[364px] rounded-lg w-full h-[265px]  overflow-hidden relative "
        style={{ backgroundImage: `url(${cards.bg})` }}
      >
        <div className="absolute w-full  bg-[#2C2B2B]/[0.8] max-w-[364px] h-[265px] flex justify-center left-[-100%] top-0 group-hover:left-0 items-center duration-500">
          <button className="text-white opacity-100 relative z-[2] border border-white rounded-full py-[13px] px-[46px] border-solid after:content-[url(./assests/images/btnline.webp)] after:absolute after:left-[-5%]  after:bottom-[-31%] font-inter font-bold text-base leading-[25.6px]  hover:bg-white transition-all duration-500 hover:text-black">
            Rcasinovip
          </button>
        </div>
      </div>
    </div>
  ));
  return (
    <div className="xl:max-w-[1140px] mx-auto xl:px-3 container px-6">
      <div className="lg:mt-[150px] lg:mb-[170px] my-[70px]">
        <p
          className=" font-anton md:text-5xl  text-[36px] text-center lg:leading-[57.6px] text-white font-normal lg:mb-[60px] mb-5"
          data-aos="zoom-in"
        >
          Ellos eligieron apostar con nosotros
        </p>
        <div
          className="flex flex-wrap flex-row -mx-3 justify-center"
          data-aos="zoom-in"
        >
          {card}
        </div>
        <div className="flex justify-center">
          <p
            className="text-white font-semibold text-base text-center mx-auto max-w-[883px] leading-[25.6px] lg:pt-[38px]"
            data-aos="zoom-in"
          >
            Clientes satisfechos que confiaron en Exclusive Games y han
            disfrutado de emocionantes experiencias de juego. Ahora, la próxima
            apuesta está en tus manos. Elige ganar. Elige exclusive game.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Ellos;
