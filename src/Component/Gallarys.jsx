import React from "react";
import gallaryOne from "../assets/01JpG.jpg";
import gallaryTwo from "../assets/02.jpg";

const Gallarys = () => {
  return (
    <section className="max-w-[80rem] mx-auto px-4 sm:px-6 lg:px-8 py-12 mt-20">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
        <div>
          <img
            src={gallaryOne}
            alt="Gallery Item 1"
            className="w-full h-auto rounded-xl object-cover"
          />
        </div>
        <div className="space-y-5">
          <div className="flex gap-4 items-center justify-center">
            <h2 className="bg-gray-800 text-white px-6 lg:px-10 py-5 text-center rounded-md">
              <span className="text-5xl font-bold">10+</span> <br />{" "}
              <span>
                {" "}
                Years of <br /> experience{" "}
              </span>
            </h2>
            <h2 className="bg-[#09B850] text-white px-6 lg:px-10  py-5 text-center rounded-md">
              <span className="text-5xl font-bold">1.2k</span> <br />{" "}
              <span>
                {" "}
                Happy <br /> customers{" "}
              </span>
            </h2>
          </div>
          <img
            src={gallaryTwo}
            alt="Gallery Item 2"
            className="w-full h-auto rounded-xl object-cover"
          />
        </div>

        <div className="space-y-5 pl-5">
          <h4 className="bg-[#F8F8F8] px-3 py-2 max-w-fit rounded-sm text-sm sm:text-base font-medium">
            🤝 Your gateway to digital success
          </h4>

          <h1 className="text-4xl font-bold">
            Defining the future of <br /> online experiences!
          </h1>

          <p className="text-[#606270]">
            Embrace a new era of digital success with Mizzle. Our team combines
            cutting-edge design with robust development to deliver websites that
            captivate and convert.
          </p>
          <div>
            <h4>
              <span className="text-green-700 text-xl">
                <i class="fa-solid fa-circle-check"></i>
              </span>{" "}
              <span> Emphasis on ROI-driven solutions </span>
            </h4>
            <h4>
              <span className="text-green-700 text-xl">
                <i class="fa-solid fa-circle-check"></i>
              </span>{" "}
              <span> Emphasis on ROI-driven solutions </span>
            </h4>
            <h4>
              <span className="text-green-700 text-xl">
                <i class="fa-solid fa-circle-check"></i>
              </span>{" "}
              <span> Emphasis on ROI-driven solutions </span>
            </h4>
          </div>
          <button
            className="px-5 py-2 bg-gray-900 text-white rounded-sm"
            type="button"
          >
            Discover more
          </button>
        </div>
      </div>
    </section>
  );
};

export default Gallarys;
