import React from "react";
import BrandlogoOne from "../assets/01.svg";
import BrandlogoTwo from "../assets/02.svg";
import BrandlogoThree from "../assets/03.svg";
import BrandlogoFour from "../assets/04.svg";

const logos = [
  {
    name: "LogoIpsum 1",
    image: BrandlogoOne,
  },
  {
    name: "LogoIpsum 2",
    image: BrandlogoTwo,
  },
  {
    name: "PinPoint",
    image: BrandlogoThree,
  },
  {
    name: "LogoIpsum 3",
    image: BrandlogoFour,
  },
  {
    name: "Sitemark",
    image: BrandlogoOne,
  },
];

const BrandSlider = () => {
  return (
    <div className="w-full py-10 text-gray-900 font-bold bg-white mt-20">
      <div className="max-w-[80rem] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center gap-8">
        <div className="shrink-0 text-center md:text-left">
          <h3 className="text-2xl font-bold leading-tight">
            100+ Companies <br />
            <span className="text-gray-600">trust us</span>
          </h3>
        </div>

        {/* Slider */}
        <div className="relative overflow-hidden w-full ml-0 lg:ml-20">
          {/* Animation class  */}
          <div className="animate-marquee flex items-center gap-12 sm:gap-16">
            {/* Original BrandLogos */}
            {logos.map((logo, index) => (
              <img
                key={`orig-${index}`}
                src={logo.image}
                alt={logo.name}
                className="h-8 sm:h-10 object-contain grayscale opacity-70 hover:opacity-100 hover:grayscale-0 transition-all cursor-pointer"
              />
            ))}

            {/* Duplicated BrandLogos */}
            {logos.map((logo, index) => (
              <img
                key={`dup-${index}`}
                src={logo.image}
                alt={logo.name}
                className="h-8 sm:h-10 object-contain grayscale opacity-70 hover:opacity-100 hover:grayscale-0 transition-all cursor-pointer"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrandSlider;
