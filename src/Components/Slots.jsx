import React from "react";
import img1 from "../assests/images/img1.webp";
import img2 from "../assests/images/img2.webp";
import img3 from "../assests/images/img3.webp";
import img4 from "../assests/images/img4.webp";
import img5 from "../assests/images/img5.webp";
import img6 from "../assests/images/img6.webp";
import line2 from "../assests/images/line2.webp";
const Slots = () => {
  const cards = [
    {
      bg: img1,
    },
    {
      bg: img2,
    },
    {
      bg: img3,
    },
    {
      bg: img4,
    },
    {
      bg: img5,
    },
    {
      bg: img6,
    },
  ];
  const card = cards.map((cards, i) => (
    <div
      key={i}
      className="lg:w-1/3 px-3  sm:w-1/2 w-full flex justify-center group dur ation-500 mb-6"
      data-aos="fade-down-right"
    >
      <div
        className="max-w-[364px] rounded-lg w-full h-[265px] overflow-hidden relative border border-solid border-transparent group-hover:border-[#64DDB9] duration-500 transition-all ease-linear"
        style={{ backgroundImage: `url(${cards.bg})` }}
      >
        <div className="absolute w-full  bg-[#2C2B2B]/[0.8] max-w-[364px]  h-[265px] flex justify-center left-[-100%] top-0 group-hover:left-0 items-center duration-500">
          <button className="text-white opacity-100 relative z-[2] border border-white rounded-full py-[13px] px-[46px] border-solid after:content-[url(./assests/images/btnline.webp)] after:absolute after:left-[-5%]  after:bottom-[-31%] font-inter font-bold text-base leading-[25.6px]  hover:bg-white transition-all duration-500 hover:text-black">
            Jugar
          </button>
        </div>
      </div>
    </div>
  ));
  return (
    <div className="lg:mt-[150px] mt-[50px]">
      <h2 className=" font-anton lg:text-5xl text-[36px] text-center leading-[57.6px] text-[#00141B] font-normal  lg:mb-4">
        Slots
      </h2>
      <p className=" font-inter text-center lg:text-base font-medium lg:leading-[25.6px] leading-[23.5px] text-[#00141B] text-sm max-w-[904px] mx-auto lg:mb-[60px] mb-5">
        En Exclusive Games, ofrecemos una selección de más de 600 juegos de los
        principales desarrolladores, como Aristocrat, Amatic, EGT, Novomatic,
        IGT, Playtech, Igrosoft y Tom Horn. Nuestro equipo trabaja
        incansablemente para innovar y ampliar nuestra oferta de experiencias,
        garantizando la máxima seguridad con operaciones protegidas por cifrado
        SSL de 256 bits.
      </p>
      <div className="flex flex-wrap flex-row -mx-3">{card}</div>
      <div className="flex justify-center">
        <button className="py-3 px-[46px] hover:shadow-[0_3px_20px_#51C8EF] hover:after:content-none tranision] ease-linear duration-500 bg-[linear-gradient(306.99deg,#51C8EF_-13.72%,#7AF57A_102.02%)] after:content-[url(./assests/images/greenline.webp)] after:absolute relative after:bottom-[-30%] after:left-[-5%] rounded-full  text-base leading-[25.6px] text-black font-inter font-bold bg-[background: linear-gradient(306.99deg, #51C8EF -13.72%, #7AF57A 102.02%)]">
          Mostrar más
        </button>
      </div>
    </div>
  );
};

export default Slots;
