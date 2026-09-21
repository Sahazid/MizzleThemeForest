import React from "react";
import Hero from "../../Component/Hero";
import BrandSlider from "../../Component/BrandSlider";
import Gallarys from "../../Component/Gallarys";
import Service from "../../Component/Service";
import Plans from "../../Component/Plans";
import Testimonial from "../../Component/Testimonial";
const Home = () => {
  return (
    <main>
      <Hero />
      <BrandSlider />
      <Gallarys />
      <Service />
      <Plans />
      <Testimonial />
    </main>
  );
};

export default Home;
