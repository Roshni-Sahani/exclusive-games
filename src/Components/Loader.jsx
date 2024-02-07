import React from "react";

const Loader = () => {
  return (
    <>
      <div className="loading bg-[# 00141b] min-h-screen fixed flex flex-col justify-center items-center left-0 right-0 bg-[url(./assests/images/herobg.webp)] bg-[#00141B] bg-no-repeat bg-size">
        <div className="typewriter">
          <h1 className="font-anton font-bold text-white cursor-pointer leading-[94%] drop-shadow-[0px_1.337px_0px#205346] sm:text-[60px] text-[28px]">
            Exclusive Games
          </h1>
        </div>
      </div>
    </>
  );
};

export default Loader;
