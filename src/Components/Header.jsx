import React from "react";

const Header = () => {
  return (
    <div className="md:pt-[140px] md:pb-[222px] py-[90px]" data-aos="zoom-out" id="head">
      <div className="xl:max-w-[1140px] mx-auto xl:px-3 container px-6">
        <p className="text-white md:text-[72px] text-[42px] font-normal md:leading-[86.4px] text-center mx-auto max-w-[505px] font-anton">
          Exclusive Games. Pasión por ganar
        </p>
        <p className="font-inter font-medium text-center mx-auto max-w-[727px] text-[#cccdf1] pt-4 pb-[40px]">
          En Exclusive Games somos un equipo apasionado de personas dedicados al
          desarrollo de multiplataformas para juegos de azar. A lo largo de
          nuestra vida consumimos todo tipo de juegos hasta que un día decidimos
          crear los propios.
        </p>
      </div>
      <div className="flex justify-center">
        <button className="py-3 px-[46px] hover:shadow-[0_3px_20px_#51C8EF] hover:after:content-none tranision] ease-linear duration-500 bg-[linear-gradient(306.99deg,#51C8EF_-13.72%,#7AF57A_102.02%)] after:content-[url(./assests/images/greenline.webp)] after:absolute relative after:bottom-[-30%] after:left-[-5%] rounded-full  text-base leading-[25.6px] text-black font-inter font-bold bg-[background: linear-gradient(306.99deg, #51C8EF -13.72%, #7AF57A 102.02%)]">
          Empezar
        </button>
      </div>
    </div>
  );
};

export default Header;
