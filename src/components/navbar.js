import React from "react";
import { CiSearch } from "react-icons/ci";
import bitCoin from "../assets/bitcoin.png";
import cartoon from "../assets/cartoon.png";
import { MdKeyboardArrowDown } from "react-icons/md";
import { BiCandles } from "react-icons/bi";
import { MdOutlineAutoGraph } from "react-icons/md";
import { IoPlayBackOutline } from "react-icons/io5";
import { TbAlarmSnoozeFilled } from "react-icons/tb";
import { HiOutlineMenuAlt1 } from "react-icons/hi";
import hero from '../assets/hero.png'

function Navbar() {
  return (
    <div className="h-auto p-1 flex justify-between z-10 items-center w-full">
      <div className="flex justify-center text-xl font-thin gap-3 ">
      <img className="h-14 w-14" src={hero}/>
        <div className="rounded-full bg-stone-50 text-white  text-3xl bg-opacity-10 h-fit p-3 flex flex-col justify-evenly items-center ">
          <CiSearch />
        </div>
        <div className="flex gap-2 bg-stone-50 text-white text-sm items-center justify-evenly bg-opacity-10 rounded-full">
          <div
            className="rounded-full text-white h-14 w-14 "
            style={{
              backgroundImage: `url(${bitCoin})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          >
            {" "}
            {/* Updated with background image properties */}
          </div >
          <span>btc/ usdt</span>
          <button className="p-2">
            <MdKeyboardArrowDown />
          </button>
        </div>
        <div className="flex  bg-stone-50 px-3 text-white gap-2 text-sm items-center justify-center bg-opacity-10 rounded-full">
          
           
          <span>4 h</span>
          <button className="">
            <MdKeyboardArrowDown />
          </button>
        </div>
        <div className="flex  bg-stone-50 px-3 text-white gap-2 text-sm items-center justify-center bg-opacity-10 rounded-full">
          
           
          <span><BiCandles className="text-2xl"/></span>
          <button className="">
            <MdKeyboardArrowDown />
          </button>
        </div>
        <div className="flex  bg-stone-50 px-3 text-white gap-2 text-sm items-center justify-center bg-opacity-10 rounded-full">
          
           
          <span><MdOutlineAutoGraph className="text-2xl"/></span>
          <span>indicators</span>
          <div className="px-2 h-6 w-6 flex justify-center items-center rounded-full bg-stone-500">3</div>
          <button className="">
            <MdKeyboardArrowDown />
          </button>
        </div>
        <div className="flex  bg-stone-50 px-3 text-white gap-2 text-sm items-center justify-center bg-opacity-10 rounded-full">
          
           
          <span>replay</span>
          <span><IoPlayBackOutline className="text-2xl"/></span>
        
        </div>
        <div className="flex  bg-stone-50 px-3 text-white gap-2 text-sm items-center justify-center bg-opacity-10 rounded-full">
          
           
          <span><TbAlarmSnoozeFilled className="text-2xl"/></span>
          <span>alerts</span>
          <div className="px-2 h-6 w-6 flex justify-center items-center rounded-full bg-stone-500">9</div>
          <button className="">
            <MdKeyboardArrowDown />
          </button>
        </div>
     
      </div>
      <div className="gap-2  p-2 flex  justify-evenly items-center ">
      <div className="flex gap-2 bg-stone-50 text-white text-sm items-center justify-evenly bg-opacity-10 rounded-full">
          <div
            className="rounded-full text-white h-14 w-14 "
            style={{
              backgroundImage: `url(${cartoon})`,
              backgroundSize: "contain",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          >
            {" "}
            {/* Updated with background image properties */}
          </div >
          <span>username</span>
          <button className="p-2">
            <MdKeyboardArrowDown />
          </button>
        </div>
        <div className="flex gap-2 bg-stone-50 text-white text-2xl p-4 items-center justify-evenly bg-opacity-10 rounded-full">
              <HiOutlineMenuAlt1/>
        </div>
        
      </div>
    </div>
  );
}

export default Navbar;
