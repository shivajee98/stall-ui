import Image from "next/image";
import React from "react";

const StallDemo = () => {
  return (
    <div className="w-screen min-h-dvh relative">
      {/* Board for the company name */}
      <div className="w-full h-[20vh] border border-white">
        <div className="flex flex-col w-full items-center">
          <div className=" w-[50vh] lg:h-8 h-5 flex justify-between">
            <div className="h-full w-[3px] bg-black"></div>
            <div className="h-full w-[3px] bg-black"></div>
          </div>
          <div className="bg-gray-300 h-[10vh] w-[65vh] flex justify-center items-center">
            <div className="lg:text-6xl text-xl text-black">Company Name</div>
          </div>
        </div>
      </div>

      {/* This is the space for the company banner */}
      <div className="w-full h-[20vh] border border-white">
        <div className="bg-gray-500 flex justify-center items-center h-full w-full">
          <div className="lg:text-3xl">Company Banner</div>
        </div>
      </div>
      <div className="h-[60vh] w-full border flex">
        <div className="h-full w-[75vw] border border-white max-sm:w-full"></div>

        {/* in the following section there is a image of a man and a table */}
        <div className="h-full w-[25vw] border border-white relative max-sm:hidden flex flex-1 justify-center">

            {/* Image of the avatar */}
          <div className="absolute  z-1 bottom-0">
            <Image
              src={"/avatar.png"}
              alt="erv"
              height={220}
              width={230}
              className="h-[60vh] lg:h-[52vh] "
            />
          </div>

          {/* Table Image as background */}
          <div className="absolute z-5 lg:bottom-[-65px] bottom-[-55px] ">
            <Image
              src={"/table.png"}
              alt="Table"
              width={500}
              height={100}
              className="object-fit lg:h-[70vh] h-[90vh]"
            />
          </div>

          <div className="absolute z-10 bottom-0 ">
            <Image
              src={"/opexn_logo.png"}
              width={120}
              height={50}
              alt="logo"
              className="lg:h-[25vh] lg:w-[30vh]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default StallDemo;
