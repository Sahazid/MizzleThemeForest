import React from "react";

const servicesData = [
  {
    id: 1,
    title: "Digital Marketing",
    description: "Growing brands online through digital channels.",
    icon: "fa-layer-group",
  },
  {
    id: 2,
    title: "Web Development",
    description: "Building responsive, modern, and fast websites.",
    icon: "fa-code",
  },
  {
    id: 3,
    title: "UI/UX Design",
    description: "Crafting intuitive and engaging user experiences.",
    icon: "fa-pen-nib",
  },
  {
    id: 4,
    title: "SEO Optimization",
    description: "Boosting your search rankings to drive organic traffic.",
    icon: "fa-magnifying-glass-chart",
  },
  {
    id: 5,
    title: "Brand Strategy",
    description:
      "Establishing strong visual identities and market positioning.",
    icon: "fa-bullhorn",
  },
  {
    id: 6,
    title: "Content Creation",
    description: "Producing compelling media content for target audiences.",
    icon: "fa-photo-film",
  },
  {
    id: 7,
    title: "E-Commerce",
    description: "Scalable online stores engineered for high conversion.",
    icon: "fa-cart-shopping",
  },
  {
    id: 8,
    title: "Cloud Solutions",
    description: "Reliable and secure cloud architecture integration.",
    icon: "fa-cloud",
  },
];

const Service = () => {
  return (
    <section className="w-full px-4 sm:px-6 lg:px-8 py-16 lg:py-24 mt-12 sm:mt-20 bg-[#202124]">
      <div className="max-w-[80rem] mx-auto">
        {/* Header Section */}
        <div className="flex flex-col items-center space-y-4 sm:space-y-5 text-center mb-16 sm:mb-20">
          <h4 className="bg-[#292A2D] text-white px-3.5 py-2 max-w-fit rounded-md text-xs sm:text-sm font-medium border border-gray-700/50">
            🚀 Innovative solutions, Measurable results
          </h4>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl text-white font-bold leading-tight">
            We specialize in the following <br className="hidden sm:inline" />
            <span className="text-[#09B850]">services</span>
          </h1>
        </div>

        {/* Responsive Grid Container */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-6 gap-y-12 sm:gap-y-14 pt-4">
          {servicesData.map((service) => (
            <div
              key={service.id}
              className="p-6 sm:p-8 bg-[#292A2D] text-white space-y-4 rounded-xl relative flex flex-col justify-between border border-gray-800 hover:border-gray-700 transition-all duration-300"
            >
              {/* Floating Badge Icon */}
              <div className="absolute text-xl sm:text-2xl bg-white text-[#09B850] w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center rounded-full -top-6 sm:-top-7 left-6 sm:left-8 shadow-md">
                <i className={`fa-solid ${service.icon}`}></i>
              </div>

              {/* Title & Description */}
              <div className="space-y-3 pt-3">
                <h2 className="text-xl sm:text-2xl font-bold transition-colors duration-300 hover:text-[#09B850] cursor-pointer">
                  {service.title}
                </h2>
                <p className="text-[#cfd1da] text-sm sm:text-base leading-relaxed">
                  {service.description}
                </p>
              </div>

              {/* Action Link */}
              <p className="text-[#09B850] font-medium text-sm sm:text-base cursor-pointer flex items-center gap-2 group pt-2 hover:opacity-60">
                Know more
                <span className="inline-block transition-transform duration-200 group-hover:translate-x-1.5">
                  <i className="fa-solid fa-arrow-right-long"></i>
                </span>
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Service;
