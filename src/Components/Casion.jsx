import React from "react";
import nightimg from "../assests/images/nightimg.webp";

const Casion = () => {
  return (
    <div id="Ofertas">
      <div className="max-lg:bg-white lg:bg-[url(./assests/images/bgwhite2.webp)] bg-size bg-center bg-no-repeat">
        <div className="xl:max-w-[1140px] mx-auto xl:px-3 container px-6">
          <div className="flex flex-wrap flex-row -mx-3 lg:py-[300px] py-9">
            <div
              className="md:w-1/2 px-3 w-full flex flex-col justify-center"
              data-aos="zoom-in-down"
            >
              <p className="text-black font-anton lg:text-[48px] font-normal leading-[57.6px] text-[36px] pb-4">
                Por qué elegirnos
              </p>
              <p className="font-inter leading-[25.6px] text-base font-medium text-[#334349] lg:max-w-[526px] pb-4">
                Con Exclusive Games tenés Exclusivos beneficios. Te reintegramos
                todo lo invertido en fichas en la moneda que elijas. En
                Exclusive Games siempre sumamos nuevos juegos. Juegos crash, los
                juegos interactivos que más pide la gente. Con Exclusive Games
                empezás a ganar ya! Creamos tu plataforma en solo 2 semanas.
              </p>
              <div className="mb-5">
                <button className="py-3 px-[46px] hover:shadow-[0_3px_20px_#51C8EF] hover:after:content-none tranision] ease-linear duration-500 bg-[linear-gradient(306.99deg,#51C8EF_-13.72%,#7AF57A_102.02%)] after:content-[url(./assests/images/greenline.webp)] after:absolute relative after:bottom-[-30%] after:left-[-5%] rounded-full  text-base leading-[25.6px] text-black font-inter font-bold bg-[background: linear-gradient(306.99deg, #51C8EF -13.72%, #7AF57A 102.02%)]">
                  Aprende más
                </button>
              </div>
            </div>
            <div className="md:w-1/2 px-3 w-full" data-aos="zoom-in-left">
              <img src={nightimg} alt="night" className="w-full" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Casion;
