import React from "react";
import tripleseven from "../assests/images/tripleseven.webp";
import bulbimg from "../assests/images/bulb-img.webp";
import signimg from "../assests/images/signimg.webp";
import peopleimg from "../assests/images/peopleimg.webp";
import ellipse4 from "../assests/images/ellipse4.png";
import elli5 from "../assests/images/elli5.png"
const Tripleseven = () => {
  return (
    <div className="relative lg:mt-[150px] mt-70px">
      <div className="xl:max-w-[1140px] mx-auto xl:px-3 container px-6">
        <div className="flex flex-wrap flex-row -mx-3">
          <div className="lg:w-1/2 w-full px-3">
            <div className="flex justify-center">
              <img
                src={tripleseven}
                alt="tripleseven"
                className="rounded-2xl md:max-w-[558px] w-full"
                data-aos="zoom-in"
              />
            </div>
          </div>
          <div className="lg:w-1/2 w-full px-3 flex flex-col max-lg:items-center">
            <p
              className="text-white md:text-5xl leading-[57.6px] font-anton font-normal py-5 lg:py-0 text-[36px] text-center mx-auto lg:text-start lg:mx-0"
              data-aos="zoom-in"
            >
              Más razones para elegirnos
            </p>
            <div
              className="razon_box mt-6 p-[1px] duration-300"
              data-aos="zoom-in"
            >
              <div className="max-w-[374px] pr-[20px] pl-[56px] py-6 flex items-center gap-[37px] rounded-[16px]">
                <img className="w-[68px] h-[68px]" src={bulbimg} alt="people" />
                <p className="max-w-[227px] font-Inter font-medium leading-[25px] text-[16px] text-white">
                  <span className=" font-anton md:text-[32px] leading-[41px] font-normal text-[20px]">
                    200
                  </span>
                  <br />
                  Páginas creadas
                </p>
              </div>
            </div>
            <div
              className="razon_box mt-6 p-[1px] duration-300"
              data-aos="zoom-in"
            >
              <div className="max-w-[374px] pr-[20px]  pl-[56px] py-6 flex items-center gap-[37px] rounded-[16px]">
                <img
                  className="w-[68px] h-[68px]"
                  src={peopleimg}
                  alt="people"
                />
                <p className="max-w-[227px] font-Inter font-medium leading-[25px] text-[16px] text-white">
                  <span className=" font-anton md:text-[32px] leading-[41px] font-normal text-[20px]">
                    98%
                  </span>
                  <br />
                  Clientes Satisfechas
                </p>
              </div>
            </div>
            <div
              className="bg-people razon_box mt-6 p-[1px] duration-300"
              data-aos="zoom-in"
            >
              <div className="max-w-[374px] pr-[20px]  pl-[56px] py-6 flex items-center gap-[37px] rounded-[16px]">
                <img className="w-[68px] h-[68px]" src={signimg} alt="people" />
                <p className="max-w-[227px] font-Inter font-medium leading-[25px] text-[16px] text-white">
                  <span className=" font-anton md:text-[32px] leading-[41px] font-normal text-[20px]">
                    200
                  </span>
                  <br />
                  Divisas Disponibles
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute top-[-100%] left-[0%]">
        <img src={ellipse4} alt="ellipse4" className="hidden lg:block" />
      </div>
      <div className="absolute bottom-[-100%] right-[0%]">
        <img src={elli5} alt="elli4" className="hidden lg:block" />
      </div>
    </div>
  );
};

export default Tripleseven;
