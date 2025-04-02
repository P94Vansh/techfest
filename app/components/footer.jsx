"use client";
import React from "react";

const footer = () => {
  return (
    <div>
      <div className="bg-black">
        <div className="text-white text-center p-4 py-10 text-4xl font-semibold">
          Contact Us At
        </div>
        <div className=" text-center text-xl text-blue-500">
          Faculty Coordinator
        </div>
        <div className="md:flex-row flex flex-col md:gap-3 justify-center items-center">
          <div className="text-white text-center text-lg ">Mr Mohit Kumar</div>
          <div className="text-[#888]">(Assistant Professor,CSE)</div>
        </div>
        
        <div className="text-center text-xl mt-8 text-blue-500 ">
          Student Coordinator
        </div>
        <div className="md:flex-row mt-2 flex flex-col md:gap-3 justify-center items-center">
          <div className="text-white text-center text-lg  flex flex-col lg:flex-row ">
          Ishu Mishra <div className="px-3 cursor-pointer" onClick={()=>window.location.href="tel:+919193373770"}>- 9193373770 - </div>
          </div>
          <div className="text-[#888]">(B.TECH CSE 3rd year)</div>
        </div>
        <div className="text-white text-center mt-8 text-sm pb-2">
          &copy; 2024 Engineers Day. All rights reserved.
        </div>

        <div className="md:text-md mt-3 pb-2 text-white text-center font-light font-md  ">
          Site Created by: <br className="md:hidden" /> Vansh Gambhir, Deepak Kumar, Aryan Mishra
        </div>
      </div>
    </div>
  );
};

export default footer;
