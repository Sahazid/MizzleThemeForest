import React, { useState, useEffect } from "react";
import heroImageOne from "../assets/01.jpg";
import trustpilotStar from "../assets/trustpilot-star.svg";
import trustpilotStarDark from "../assets/trustpilot.svg";
import personfive from "../assets/05.jpg";
import personOne from "../assets/personPic.jpg";
import personTwo from "../assets/PersonImage.jpg";
const phrases = ["Web Design", "UI/UX Design"];

const Typewriter = () => {
  const [text, setText] = useState("");
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentPhrase = phrases[phraseIndex];
    const typeSpeed = isDeleting ? 50 : 100;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        setText(currentPhrase.substring(0, text.length + 1));
        if (text === currentPhrase) {
          setTimeout(() => setIsDeleting(true), 1500);
        }
      } else {
        setText(currentPhrase.substring(0, text.length - 1));
        if (text === "") {
          setIsDeleting(false);
          setPhraseIndex((prev) => (prev + 1) % phrases.length);
        }
      }
    }, typeSpeed);

    return () => clearTimeout(timer);
  }, [text, isDeleting, phraseIndex]);

  return (
    <span className="font-mono text-[#09B850]">
      {text}
      <span className="animate-pulse text-[#09B850]">|</span>
    </span>
  );
};

const Hero = () => {
  return (
    <div className="relative max-w-[80rem] mx-auto flex flex-col lg:flex-row justify-between items-center gap-10 px-4 sm:px-6 lg:px-8 pt-10 lg:pt-[5rem] mt-10">
      {/* Left Content Column */}
      <div className="w-full lg:w-full space-y-6 sm:space-y-8">
        <h4 className="bg-[#F8F8F8] px-3 py-2 max-w-fit rounded-sm text-sm sm:text-base font-medium">
          🤩 Award-winning digital services
        </h4>

        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold leading-tight sm:leading-tight lg:leading-tight">
          Creative studio focused <br className="hidden sm:inline" /> on{" "}
          <Typewriter />
        </h1>

        <p className="text-gray-600 text-sm sm:text-base max-w-xl">
          From concept to execution, we deliver web designs that make an impact.
          Let your brand shine with our innovative and visually stunning
          websites.
        </p>

        {/* Input Box */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between border border-gray-200 rounded-lg p-1.5 max-w-lg gap-2 sm:gap-0">
          <input
            type="email"
            placeholder="Enter your email address"
            className="w-full bg-transparent px-3 py-2 text-gray-700 placeholder-gray-400 outline-none text-sm sm:text-base"
          />
          <button
            type="button"
            className="bg-[#1f242d] hover:bg-black text-white font-medium px-5 py-2.5 rounded-md shrink-0 transition-colors text-sm sm:text-base"
          >
            Start trial!
          </button>
        </div>

        {/* Feature Highlights */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-start gap-6 sm:gap-10 pt-2">
          <div className="flex items-center gap-3">
            <div className="text-3xl sm:text-4xl text-[#09B850] shrink-0">
              <i className="fa-solid fa-globe"></i>
            </div>
            <div>
              <p className="text-lg font-bold leading-snug">24/7 Support</p>
              <p className="text-sm text-gray-500">We're always here to help</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="text-3xl sm:text-4xl text-[#09B850] shrink-0">
              <i className="fa-solid fa-trophy"></i>
            </div>
            <div>
              <p className="text-lg font-bold leading-snug">
                Award Winning agency
              </p>
              <p className="text-sm text-gray-500">You are in safe hands</p>
            </div>
          </div>
        </div>
      </div>

      {/* Right Image Column */}
      <div className="relative w-full lg:w-1/2 rounded-xl ">
        <div className="hidden lg:inline-block bg-gray-100 max-w-fit p-4 space-y-2 rounded-sm absolute -top-10 lg:-right-30">
          <img className="w-[6em]" src={trustpilotStarDark} alt="" />
          <div className="flex gap-2 items-center">
            <img className="w-[9em]" src={trustpilotStar} alt="" />
            <span className="font-bold text-2xl">4.8/5.0</span>
          </div>
          <p className="text-[#606270] text-[0.8em]">Reviewed by 365 users</p>
        </div>

        <img
          className="w-full h-auto object-cover rounded-xl"
          src={heroImageOne}
          alt="Hero Banner"
        />

        <div className="bg-[#1f242d] max-w-fit py-2 px-6 space-y-3 rounded-md absolute bottom-0 left-0 lg:bottom-6 lg:-left-20 shadow-lg">
          <div className="flex items-center gap-3">
            <h1 className="text-2xl font-extrabold text-white">5K+</h1>

            {/* Overlapping Avatar Container */}
            <div className="flex -space-x-3 overflow-hidden">
              <img
                className="w-10 h-10 rounded-full object-cover"
                src={personOne}
                alt="User 1"
              />
              <img
                className="w-10 h-10 rounded-full object-cover"
                src={personTwo}
                alt="User 2"
              />
              <img
                className="w-10 h-10 rounded-full object-cover"
                src={personfive}
                alt="User 3"
              />
            </div>
          </div>

          <p className="text-gray-200 text-base font-medium">
            Total visitors per month
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
