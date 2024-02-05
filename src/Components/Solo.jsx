import React from "react";
import lanzabg from "../assests/images/lanzabg.webp";
const Solo = () => {
  return (
    <div className="">
      <div className="xl:max-w-[1140px] mx-auto xl:px-3 container px-6 lg:mt-28 mt-[70px]">
        <div className="bg-[url(./assests/images/lanzabg.webp)] bg-size py-5 bg-center bg-no-repeat  lg:mt-[150px] sm:mt-[70px]  rounded-2xl max-w-[1043px] border-[#828F93] border">
          <div className=" flex justify-center items-center mx-auto lg:py-[96px] md:py-[40px] sm:py-[20px]">
            <h2
              className="font-anton font-normal md:text-[48px] sm:text-[36px] text-[30px] px-9 max-w-[580px] text-[#FFFF] lg:leading-[57px] lg:max-w-[544px] text-center"
              data-aos="flip-up"
            >
              lanza tu propia plataforma en sólo 2 semanas
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Solo;
