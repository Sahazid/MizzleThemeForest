import React from "react";
import bgImg from "../assets/decoration-pattern.svg";
const Plans = () => {
  return (
    <section className="w-full px-4 sm:px-6 lg:px-8 py-16 lg:py-24 mt-12 sm:mt-20">
      <div className="max-w-[80rem] mx-auto">
        <div className="flex flex-col gap-10 justify-center items-center">
          <h4 className="bg-[#F8F8F8] px-3 py-2 max-w-fit rounded-sm text-sm sm:text-base font-medium ">
            💵 Transparent pricing packages
          </h4>
          <h1 className="text-5xl font-bold">Get a plan that grows with you</h1>
        </div>

        {/* 3 section side by side container */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 mt-25">
          {/* First Sec */}
          <div className="space-y-4 border-r-[1px] border-gray-200">
            <div className="text-8xl">
              <i class="fa-solid fa-wallet"></i>
            </div>
            <p className="bg-black max-w-fit text-white text-sm rounded-sm px-3 py-1">
              Boss mode
            </p>
            <h1>
              <span className="text-8xl font-bold">$59</span>{" "}
              <span className="font-bold text-2xl">/month</span>{" "}
            </h1>
            <p className="text-[#6a6c74]">
              The all-in-one solution for businesses that want to succeed
              online.
            </p>
          </div>
          {/* Second sec */}
          <div className="space-y-7 relative">
            <h1 className="text-xl font-bold text-gray-800">
              Features list of your need
            </h1>
            <div className="list-none space-y-3">
              {" "}
              <li>✅ Up to 05 users monthly</li>
              <li>✅ Free 5 host & domain</li>
              <li>✅ Google Docs style editors</li>
              <li>✅ Support for 30+ languages</li>
              <li>✅ Landing pages & Web widgets</li>
              <li>✅ 24/7 Dedicated Support</li>{" "}
            </div>
            <div className="space-y-2">
              <button
                className="bg-black text-white text-md px-4 py-2 rounded-sm"
                type="button"
              >
                Start a free 7-day trail
              </button>
              <p className="text-[#6a6c74] text-md">
                No credit card is requird!
              </p>
            </div>
          </div>
          {/* Third Sec */}
          <div className="bg-[#07d258] flex flex-col justify-between text-white px-6 py-5 rounded-sm opacity-80 relative">
            <div className="hidden lg:inline-block absolute pointer-events-none z-50 text-red-700">
              <img src={bgImg} alt="" className="w-full h-auto" />
            </div>

            <div className="space-y-4 pb-20 md:pb-25">
              <p className="text-sm bg-black px-2 py-1 max-w-fit rounded-sm">
                Enterprise
              </p>
              <h1 className="text-3xl font-bold">Custom pricing plan</h1>
            </div>

            <div className="space-y-2">
              <button
                className="bg-white text-black w-full py-2 rounded-sm"
                type="button"
              >
                Contact Sales
              </button>
              <p className="text-center">
                Get personalized demo and custom plan
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Plans;
