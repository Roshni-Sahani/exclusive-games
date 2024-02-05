import React from "react";

const Leermas = () => {
  return (
    <div className="lg:my-[150px] my-[70px]">
      <div className="xl:max-w-[1140px] mx-auto xl:px-3 container px-6">
        <div
          className="bg-[url(./assests/images/transparentbg.webp)] bg-center bg-no-repeat rounded-2xl px-6 w-full sm:py-[104px] py-[50px] border-[#828F93] border"
          data-aos="zoom-in-up"
        >
          <p
            className="md:text-[32px]  text-[24px] lg:leading-[41.6px] font-normal font-inter text-white text-center mx-auto"
            data-aos="zoom-in"
          >
            Lanza tu propia plataforma en sólo 2 semanas
          </p>
          <div
            className="flex justify-center sm:mt-[40px] mt-5"
            data-aos="zoom-in"
          >
            <button className="py-3 px-[46px] hover:shadow-[0_3px_20px_#51C8EF] hover:after:content-none tranision] ease-linear duration-500 bg-[linear-gradient(306.99deg,#51C8EF_-13.72%,#7AF57A_102.02%)] after:content-[url(./assests/images/greenline.webp)] after:absolute relative after:bottom-[-30%] after:left-[-5%] rounded-full  text-base leading-[25.6px] text-black font-inter font-bold bg-[background: linear-gradient(306.99deg, #51C8EF -13.72%, #7AF57A 102.02%)]">
              Leer más
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Leermas;
