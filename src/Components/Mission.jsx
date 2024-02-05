import React from "react";
import poker1 from "../assests/images/poker1.webp";
import avitor from "../assests/images/avitor.webp";
import ellipse1 from "../assests/images/ellipse1.png";
const Mission = () => {
  return (
    <div className=" relative">
      <div className="xl:max-w-[1140px] mx-auto xl:px-3 container px-6">
        <div>
          <div className="flex flex-wrap flex-row lg:pt-[74px] pt-5 lg:pb-[100px] sm:pb-[70px] pb-[50px]">
            <div
              className="lg:w-1/2 w-full ps-3 pe-3 md:pe-[32px]"
              data-aos="fade-up"
            >
              <div className="flex lg:flex-col flex-col-reverse">
                <div className="flex justify-center">
                  <img
                    src={poker1}
                    alt="1"
                    className="rounded-xl w-full sm:max-w-[538px] max-w-[420px]"
                  />
                </div>
                <div>
                  <p className="text-white font-anton md:text-[48px] leading-[57.6px]  lg:pt-[60px] pt-12 text-[36px] text-center lg:text-start max-auto lg:max-0">
                    Nuestra Misión
                  </p>
                  <p className="font-inter font-medium text-[#cccfd1] text-base leading-[25.6px] lg:max-w-[444px] pt-4 pb-6 lg:text-start max-auto lg:max-0 text-center">
                    Nuestra misión es simple pero poderosa: proporcionarte la
                    más amplia gama de soluciones de entretenimiento de alta
                    calidad y rentabilidad. Estamos comprometidos a elevar tus
                    expectativas y brindarte experiencias inigualables.
                  </p>
                  <p className="font-inter font-bold text-base leading-[25.6px] text-[#7AF57A] mb-5 lg:mb-0 text-center lg:text-start max-auto lg:max-0">
                    Aprende más {"-->"}
                  </p>
                </div>
              </div>
            </div>
            <div
              className="lg:w-1/2 w-full pe-3 ps-3 md:ps-[32px]"
              data-aos="fade-down"
            >
              <p className="text-white font-anton md:text-[48px] leading-[57.6px] pt-10 lg:pt-0 text-[36px] text-center lg:text-start max-auto lg:max-0 pb-5">
                Nuestra Visión
              </p>
              <p className="font-inter font-medium text-[#cccfd1] text-base leading-[25.6px] lg:max-w-[444px] lg:pt-4 lg:pb-6  text-center lg:text-start max-auto lg:max-0">
                Nuestra visión es ser líderes indiscutibles en la industria de
                los juegos de azar y llevar nuestra pasión por el
                entretenimiento más allá de las fronteras. Imagina un mundo
                donde la emoción y la diversión no tengan límites, y ese es el
                mundo que queremos crear contigo.
              </p>
              <p className="font-inter font-bold text-base leading-[25.6px] text-[#7AF57A] lg:pb-[60px] pb-5 mt-5 lg:mt-0 text-center lg:text-start max-auto lg:max-0">
                Aprende más --{">"}
              </p>
              <div className="flex justify-center">
                <img
                  src={avitor}
                  alt="1"
                  className="rounded-xl w-full sm:max-w-[538px] max-w-[420px]"
                />
              </div>
            </div>
          </div>
          <div className="w-[180px] max-lg:hidden h-[180px] rounded-full bg-[#7AF57A] absolute top-[3%] left-0 z-[3] blur-[140px] animate-pulse"></div>
          <div className="w-[100px] max-lg:hidden h-[100px] rounded-full bg-[#7AF57A] absolute top-[50%] left-[50%] blur-[140px] animate-pulse"></div>
          <div className="absolute bottom-[-33%] right-[0%] z-[3]">
            <img src={ellipse1} alt="ellipse1" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mission;
