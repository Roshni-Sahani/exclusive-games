import React from "react";
import arrow1 from "../assests/images/arrow1.webp";
import arrow2 from "../assests/images/arrow2.webp";
import bulb from "../assests/images/bulb.webp";
import pepole from "../assests/images/people.webp";
import innvacation from "../assests/images/innvocation.webp";
import Slots from "./Slots";

const Section3 = () => {
  return (
    <div id="slot">
      <div className="bg-[#00141B] max-lg:bg-white lg:bg-[url(./assests/images/white-bg1.webp)] bg-size bg-center bg-no-repeat lg:py-[243px] md:py-[70px] py-[40px]">
        <div className="xl:max-w-[1140px] mx-auto xl:px-3 container px-6">
          <h2 className=" font-anton text-[#00141B] lg:text-5xl  text-center lg:mb-[60px] text-[30px] mb-5">
            Nuestros Atributos de Marca
          </h2>
          <div className="flex flex-wrap flex-row justify-center relative">
            <img
              src={arrow1}
              alt="a"
              className="absolute left-[19%] top-[1%] md:max-w-[273.5px] max-w-[200px] hidden lg:block"
            />
            <img
              src={arrow2}
              alt="a"
              className=" absolute right-[19%] top-[22%] md:max-w-[273.5px] max-w-[200px] hidden lg:block"
            />
            <div className="lg:w-1/3 md:w-1/2 w-full  px-3 lg:justify-start flex justify-center">
              <div className="max-w-[263px] flex flex-col items-center sm:items-center z-[3] relative">
                <div className="w-[100px] h-[100px] rounded-full bg-[#7AF57A14] mb-4 flex justify-center items-center">
                  <img src={bulb} alt="img1" className="" />
                </div>
                <h3 className=" font-anton text-[#00141B] text-xl leading-[26px] font-normal text-center mb-2.5">
                  Inteligencia
                </h3>
                <p className="text-center font-inter lg:text-base text-sm  font-medium leading-[25.6px] text-[#00141B] mb-5">
                  Comprendemos a la perfección los gustos de las personas y el
                  mundo del gaming.
                </p>
              </div>
            </div>
            <div className="lg:w-1/3 md:w-1/2 w-full px-3  sm:justify-center flex justify-center">
              <div className="max-w-[235px] flex flex-col items-center z-[3] relative">
                <div className="w-[100px] h-[100px] rounded-full bg-[#7AF57A14] mb-4 flex justify-center items-center">
                  <img src={pepole} alt="img1" className="" />
                </div>
                <h3 className="font-anton text-[#00141B] text-xl leading-[26px] font-normal text-center mb-2.5">
                  Proactividad
                </h3>
                <p className="text-center font-inter lg:text-base text-sm  font-medium leading-[25.6px] text-[#00141B] lg:max-w-[235px]">
                  Somos creadores de cambios que exploran nuevas formas de
                  entretenimiento.
                </p>
              </div>
            </div>
            <div className="lg:w-1/3 md:w-1/2 w-full px-3 lg:justify-end flex justify-center lg:mt-0 mt-7">
              <div className="max-w-[245px] flex flex-col items-center z-[3] relative">
                <div className="w-[100px] h-[100px] rounded-full bg-[#7AF57A14] mb-4 flex justify-center items-center">
                  <img src={innvacation} alt="img1" className="" />
                </div>
                <h3 className="font-anton text-[#00141B] text-xl leading-[26px] font-normal text-center mb-2.5">
                  Innovación
                </h3>
                <p className="text-center font-inter  lg:text-base text-sm   font-medium leading-[25.6px] text-[#00141B]">
                  Pensamos fuera de la caja para estar siempre un paso adelante.
                </p>
              </div>
            </div>
          </div>
          <Slots />
        </div>
      </div>
    </div>
  );
};

export default Section3;
