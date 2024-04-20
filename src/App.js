import React from "react";
import "./App.css"; // Corrected import statement
import ChartWithTooltip from "./components/chartWithTooltip";
import Navbar from "./components/navbar";
import Sidebar from "./components/sidebar";
import ChartDideBar from "./components/chartDideBar";
import { FaArrowRightLong } from "react-icons/fa6";
import { Player } from "@lottiefiles/react-lottie-player";

function App() {
  return (
    <div className="h-auto p-4 w-full bg-black gap-4 flex flex-col items-start justify-center">
      <Navbar />
      {/* <ChartWithButtons /> */}

      <div className="w-full flex justify-between   ">
        <div className=" p-4 md:w-[70%] w-full h-[400px] md:h-[600px]  rounded-3xl relative">
          <div className="backdrop-blur-sm top-0 left-[-10px] absolute w-20 h-auto z-50">
            <ChartDideBar />
          </div>
          <div className=" left-20 top-0 absolute py-0 h-fit text-white flex items-center gap-2 justify-end  ">
            <h1 className="text-[50px] font-normal text-yellow-100">
              {" "}
              Bitcoin{" "}
            </h1>
            <FaArrowRightLong />
            <Player
              src="https://lottie.host/33462ee4-5fcd-42e9-8895-3582931b2de5/Bp8r3glC2x.json"
              autoplay
              loop
              style={{ height: "80px", width: "80px" }}
            ></Player>{" "}
          </div>

          <ChartWithTooltip />
          <div className="bg-stone- border rounded-lg bg-opacity-80 p-4 w-[100%]">
            <h1 className="text-2xl font-bold text-white">Your Trade View</h1>
            <h1 className="text-xs font-thin w-[100%] text-white">
              "Trading in financial markets carries a high level of risk to your
              capital. You should only trade with money you can afford to lose.
              Past performance is not indicative of future results."
            </h1>
          </div>
        </div>
        <div className="  w-[28%] hidden md:flex rounded-3xl">
          <Sidebar />
        </div>
      </div>
    </div>
  );
}

export default App;
