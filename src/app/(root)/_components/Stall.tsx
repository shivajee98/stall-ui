"use client"

import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";


const Stall = () => {
  return (
    <div className="w-screen min-h-dvh relative overflow-hidden">
      {/* Board for the company name */}
      <div className="w-full h-[20vh] ">
        <div className="flex flex-col w-full items-center">
          <div className=" lg:w-[50vw] max-sm:w-[60vw] md:w-[60vw] lg:h-8 h-5 flex justify-between sm:landscape:w-[50vw]">
            <div className="h-full w-[3px] bg-black"></div>
            <div className="h-full w-[3px] bg-black"></div>
          </div>
          <div className="bg-gray-300 h-[10vh] lg:w-[65vw] max-sm:w-[80vw] md:w-[80vw] flex justify-center items-center sm:landscape:w-[70vw]">
            <div className="lg:text-5xl text-xl text-black">Company Name</div>
          </div>
        </div>
      </div>

      {/* This is the space for the company banner */}
      <div className="w-full h-[20vh] ">
        <div className="bg-gray-500 flex justify-center items-center h-full w-full">
          <div className="lg:text-3xl">Company Banner</div>
        </div>
      </div>

      {/* This is the space for the company mission statement */}
      <div className="h-[60vh] w-full  flex ">
        {/* Left side of shop screen screen */}
        <div className="h-full lg:w-[75vw] md:w-[60vw] max-sm:w-[0vw] sm:landscape:w-[82vw]">
          <div className="w-full h-full flex">
            {/* Left tilted lines */}
            <div className="w-[calc(20%+5px)] h-full flex flex-col justify-between">
              {/* Top tilt line */}
              <div className="lg:w-[calc(100%+7px)] h-[1.4px] bg-black md:w-[calc(100%+20px)] lg:origin-left lg:rotate-[12.8deg] md:origin-left md:rotate-[35deg]" />

              {/* Bottom tilt line */}
              <div className="lg:w-[calc(100%+7px)] h-[1.4px] bg-black lg:origin-left lg:-rotate-[12.8deg] md:origin-left md:-rotate-[35deg] md:w-[calc(100%+20px)]" />
            </div>

            {/* Left vertical line */}
            <div className="w-[2px] h-full bg-black"></div>

            {/* Middle box space */}
            <div className="w-full h-[calc(100%-120px)] my-[60px] ml-[-2px] flex">
              <div className="w-full h-full flex items-center justify-center border-t-[1.5px] border-b-[1.5px] border-l-[1px] border-r-[0px] border-black"></div>
            </div>

            <div className="h-full w-[3px] bg-black mr-[1px]"></div>
          </div>
        </div>

        {/* in the following section there is a image of a man and a table */}
        <div className="h-full lg:w-[25vw] md:w-[40vw] relative flex flex-1">

          <div className="h-full w-full flex flex-col relative">
            <div className="block md:hidden md:h-0 md:w-0 max-sm:left-[30%] relative">
              <Button size={"lg"} className="text-lg mt-10 px-5">
                Enter Exhitibion
              </Button>
            </div>

            {/* Image of the avatar */}
            <div className="absolute z-1 bottom-0 lg:left-[22%] md:left-[15%] max-sm:left-[24%]">
              <Image
                src={"/avatar.png"}
                alt="erv"
                height={220}
                width={230}
                className="lg:h-[52vh] md:h-[50vh] h-[60vh] max-sm:h-[42vh] sm:landscape:h-[45vh] sm:landscape:w-[10vw]"
              />
            </div>

            {/* Table Image as background */}
            <div className="absolute z-5 lg:bottom-[-65px] md:bottom-[-14vh] bottom-[-55px] sm:landscape:bottom-[-14vh] max-sm:left-[9%]">
              <Image
                src={"/table.png"}
                alt="Table"
                width={350}
                height={100}
                className="object-fit lg:h-[70vh] h-[90vh] md:h-[78vh] max-sm:h-[52vh] sm:landscape:h-[70vh] sm:landscape:w-[40vh]"
              />
            </div>

            {/* Logo on the table */}
            <div className="absolute z-10 bottom-0 md:bottom-[12vh] max-sm:bottom-[8vh] sm:landscape:bottom-[7vh] lg:left-[20%] md:left-[20%] max-sm:left-[27.5%]">
              <Image
                src={"/opexn_logo.png"}
                width={120}
                height={50}
                alt="logo"
                className="object-fit lg:h-12 md:h-10 w-full max-sm:h-10 sm:landscape:h-[5vh] md:landscape:h-[4vh] md:landscape:w-[10vw]"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};


export default Stall
