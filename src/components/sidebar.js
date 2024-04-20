import React, { useEffect } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";
import { FaTags, FaPlus } from "react-icons/fa";
import { BsPlus, BsArrowUpRight } from "react-icons/bs";
import { PiDotsThreeOutlineVerticalThin } from "react-icons/pi";
import { FaBitcoin } from "react-icons/fa6";
import AOS from "aos"; // Import AOS
import "aos/dist/aos.css"; // Import AOS CSS

function Sidebar() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration
      once: true, // Whether animation should only happen once
    });
  });
  return (
    <div className="w-full text-yellow-300 h-full flex flex-col justify-start gap-2 items-start">
      <div className="w-full flex justify-between  ">
        <div className="flex  bg-stone-50 px-3 text-white gap-2  h-12 text-sm items-center justify-between bg-opacity-10 rounded-full">
          <FaTags className="text-red-600 text-xl " />
          <div
            className="flex
          flex-col gap-1"
          >
            <span className="text-stone-100 text-xs">Red list</span>
            <span className="text-stone-500 text-sm font-bold">Btc-Usd</span>
          </div>
          <MdKeyboardArrowDown />
        </div>
        <div className="flex gap-2 h-12 ">
          <div className="bg-stone-50 bg-opacity-10 h-full text-2xl flex justify-center items-center w-12 rounded-full">
            <BsPlus />
          </div>
          <div className="bg-stone-50 bg-opacity-10 h-full text-2xl flex justify-center items-center w-12 rounded-full">
            <PiDotsThreeOutlineVerticalThin />
          </div>
        </div>
      </div>

      <div className=" flex flex-col w-[80%]">
        <div className="flex  bg-stone-800 px-3  text-white gap-2 opacity-60 h-14 text-sm items-center justify-between bg-opacity-20 rounded-full">
          <FaBitcoin className="text-yellow-300 text-4xl " />
          <div
            className="flex
          flex-col gap-1"
          >
            <span className="text-red-500 text-xs">-1.18</span>
            <span className="text-stone-500 text-sm font-bold">Btc-Usd</span>
          </div>
          <div className="text-stone-300 text-md">
            22.<span className="text-green-400 text-xs">900.8</span>
          </div>
        </div>{" "}
        <div className="flex  bg-stone-800 px-3  text-white gap-2 opacity-80 h-14 text-sm items-center justify-between bg-opacity-30 rounded-full">
          <FaBitcoin className="text-yellow-300 text-4xl " />
          <div
            className="flex
          flex-col gap-1"
          >
            <span className="text-red-500 text-xs">-1.18</span>
            <span className="text-stone-500 text-sm font-bold">Btc-Usd</span>
          </div>
          <div className="text-stone-300 text-md">
            22.<span className="text-green-400 text-xs">900.8</span>
          </div>
        </div>{" "}
        <div className="flex  bg-stone-800 px-3  text-white gap-2 opacity-100 h-14 text-sm items-center justify-between bg-opacity-50 rounded-full">
          <FaBitcoin className="text-yellow-300 text-4xl " />
          <div
            className="flex
          flex-col gap-1"
          >
            <span className="text-red-500 text-xs">-1.18</span>
            <span className="text-stone-500 text-sm font-bold">Btc-Usd</span>
          </div>
          <div className="text-stone-300 text-md">
            22.<span className="text-green-400 text-xs">900.8</span>
          </div>
        </div>{" "}
        <div className="flex  bg-stone-800 px-3  text-white gap-2 opacity-80 h-14 text-sm items-center justify-between bg-opacity-30 rounded-full">
          <FaBitcoin className="text-yellow-300 text-4xl " />
          <div
            className="flex
          flex-col gap-1"
          >
            <span className="text-red-500 text-xs">-1.18</span>
            <span className="text-stone-500 text-sm font-bold">Btc-Usd</span>
          </div>
          <div className="text-stone-300 text-md">
            22.<span className="text-green-400 text-xs">900.8</span>
          </div>
        </div>
        <div className="flex  bg-stone-800 px-3  text-white gap-2 opacity-60 h-14 text-sm items-center justify-between bg-opacity-20 rounded-full">
          <FaBitcoin className="text-yellow-300 text-4xl " />
          <div
            className="flex
          flex-col gap-1"
          >
            <span className="text-red-500 text-xs">-1.18</span>
            <span className="text-stone-500 text-sm font-bold">Btc-Usd</span>
          </div>
          <div className="text-stone-300 text-md">
            22.<span className="text-green-400 text-xs">900.8</span>
          </div>
        </div>
      </div>
      <div data-aos="fade-left"  className="w-[80%] hover:scale-105 transition-all duration-300 p-3 bg-stone-100 flex text-stone-100 flex-col justify-evenly gap-2 bg-opacity-10 rounded-3xl">
        <div className="flex justify-between px-3 items-center">
          <div className="text-2xl font-nirmal">Day Range</div>
          <div className="p-3 text-3xl bg-stone-800 flex justify-center items-center rounded-full">
            <BsArrowUpRight />
          </div>
        </div>
        <div className="w-full flex gap-2 h-10  ">
          <div className="w-[45%] flex items-end h-10 relative">
            <span className="top-2 bottom-0 text-stone-200 text-opacity-40 absolute">22.00</span>
            <div className="w-full  flex justify-end rounded-full bg-stone-800 ">
              <div className="h-2 rounded-full w-[30%] bg-yellow-300"></div>
            </div>
          </div>
          <div className="w-[55%] flex items-end h-10 relative">
            <span className="right-0 top-0 text-stone-200 text-opacity-40 absolute">22.00</span>
            <div className="w-full  flex justify-start rounded-full bg-stone-800 ">
              <div className="h-2 rounded-full w-[60%] bg-yellow-300"></div>
            </div>
          </div>
        </div>
      </div>
      <div data-aos="fade-left"  className="w-[80%] hover:scale-105 transition-all duration-300 p-3 bg-stone-100 flex text-stone-100 flex-col justify-evenly gap-2 bg-opacity-10 rounded-3xl">
        <div className="flex justify-between px-3 items-center">
          <div className="text-2xl font-nirmal">Notes</div>
          <div className="flex gap-2">

          <div className="p-3 text-2xl bg-stone-800 flex justify-center items-center rounded-full">
            <BsArrowUpRight />
          </div>
          <div className="p-3 text-2xl bg-stone-800 flex justify-center items-center rounded-full">
            <FaPlus />
          </div>
          </div>
        </div>
        <div className="w-full flex gap-2 h-auto  ">
          <div className="w-[45%]  flex items-center flex-col justify-center h-14 bg-yellow-300 bg-opacity-75 rounded-t-3xl relative">
            <span className="text-xs text-stone-800"> 02/MAR/2024</span>
            <span className="text-sm font-bold text-stone-800"> New Strategy</span>
          </div>
          <div className="w-[55%]  flex items-center flex-col justify-center bg-stone-800 rounded-t-[50px]  rounded-tr-none h-14 relative">
            <span className="text-xs text-stone-100"> 10/FEB/2024</span>
            <span className="text-sm font-bold text-stone-100"> My  things</span>
            
          </div>
        </div>
      </div>
      <div className="w-[80%] hover:scale-105 transition-all duration-300 p-3 bg-stone-100 flex text-stone-100 flex-col justify-evenly gap-2 bg-opacity-10 rounded-3xl">
        <div className="flex justify-between px-3 items-center">
          <div className="text-2xl font-nirmal">Notes</div>
          <div className="flex gap-2">

          <div className="p-3 text-2xl bg-stone-800 flex justify-center items-center rounded-full">
            <BsArrowUpRight />
          </div>
          <div className="p-3 text-2xl bg-stone-800 flex justify-center items-center rounded-full">
            <FaPlus />
          </div>
          </div>
        </div>
        <div className="w-full flex gap-2 h-auto  ">
          <div className="w-[45%]  flex items-center flex-col justify-center h-14 bg-yellow-300 bg-opacity-75 rounded-t-3xl relative">
            <span className="text-xs text-stone-800"> 02/MAR/2024</span>
            <span className="text-sm font-bold text-stone-800"> New Strategy</span>
          </div>
          <div className="w-[55%]  flex items-center flex-col justify-center bg-stone-800 rounded-t-[50px]  rounded-tr-none h-14 relative">
            <span className="text-xs text-stone-100"> 10/FEB/2024</span>
            <span className="text-sm font-bold text-stone-100"> My  things</span>
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
