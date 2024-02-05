import React from "react";

const Loader = () => {
  return (
    <>
      <div className="loading bg-[#00141b] min-h-screen fixed flex flex-col justify-center items-center left-0 right-0">
        <div className="typewriter">
          <h1 className="ff_DancingScript font-bold text-white cursor-pointer leading-[94%] drop-shadow-[0px_1.337px_0px#205346] sm:text-[60px] text-[28px]">
            Exclusive Games
          </h1>
        </div>
      </div>
    </>
  );
};

export default Loader;
