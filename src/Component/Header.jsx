import React, { useState } from "react";
import logo from "../assets/logo.svg";
import bgImg from "../assets/decoration-pattern.svg";
import { NavLink } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <div className="hidden lg:inline-block absolute top-0 left-0 -z-10 pointer-events-none">
        <img src={bgImg} alt="" className="w-full h-auto" />
      </div>

      <header className="border-b-[1px] border-gray-100 w-full px-4 sm:px-8 py-1 flex justify-between items-center gap-4 sticky top-0 z-50 bg-white shadow-sm lg:shadow-none">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-8 py-4 flex justify-between items-center gap-4">
          {/* Logo */}
          <div>
            <img
              src={logo}
              alt="Company Logo"
              className="w-28 sm:w-32 h-auto block"
            />
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex gap-8 text-gray-600 font-medium text-base">
            <NavLink className="hover:text-[#09B850] transition-colors" to="/">
              Demos
            </NavLink>
            <NavLink className="hover:text-[#09B850] transition-colors" to="/">
              Pages
            </NavLink>
            <NavLink className="hover:text-[#09B850] transition-colors" to="/">
              Portfolio
            </NavLink>
            <NavLink className="hover:text-[#09B850] transition-colors" to="/">
              Megamenu
            </NavLink>
            <NavLink className="hover:text-[#09B850] transition-colors" to="/">
              Contact Us
            </NavLink>
          </nav>

          {/* Desktop CTA & Theme Toggle */}
          <div className="hidden lg:flex gap-3 items-center">
            <button
              aria-label="Toggle theme"
              className="text-xl text-gray-700 hover:text-[#09B850] p-2 transition-colors"
            >
              <i className="fa-solid fa-sun"></i>
            </button>
            <button className="bg-gray-100 hover:bg-gray-200 px-4 py-2 text-black rounded-md font-medium text-sm transition-colors">
              Sign Up
            </button>
            <button className="bg-[#09B850] hover:bg-[#079641] px-4 py-2 text-white rounded-md text-sm font-medium transition-colors">
              Buy Now
            </button>
          </div>

          {/* Mobile Hamburger & Theme Button */}
          <div className="flex lg:hidden items-center gap-3">
            <button
              aria-label="Toggle theme"
              className="text-xl text-gray-700 p-1"
            >
              <i className="fa-solid fa-sun"></i>
            </button>
            <button
              onClick={toggleMenu}
              aria-label="Toggle menu"
              className="text-2xl text-gray-800 p-1 focus:outline-none"
            >
              <i
                className={`fa-solid ${isMenuOpen ? "fa-xmark" : "fa-bars"}`}
              ></i>
            </button>
          </div>

          {/* Mobile Dropdown Menu */}
          {isMenuOpen && (
            <div className="absolute top-full left-0 w-full bg-white border-b border-gray-200 shadow-lg p-6 flex flex-col gap-5 lg:hidden z-50">
              <nav className="flex flex-col gap-4 text-gray-700 font-medium">
                <NavLink
                  onClick={() => setIsMenuOpen(false)}
                  className="hover:text-[#09B850] transition-colors"
                  to="/"
                >
                  Demos
                </NavLink>
                <NavLink
                  onClick={() => setIsMenuOpen(false)}
                  className="hover:text-[#09B850] transition-colors"
                  to="/"
                >
                  Pages
                </NavLink>
                <NavLink
                  onClick={() => setIsMenuOpen(false)}
                  className="hover:text-[#09B850] transition-colors"
                  to="/"
                >
                  Portfolio
                </NavLink>
                <NavLink
                  onClick={() => setIsMenuOpen(false)}
                  className="hover:text-[#09B850] transition-colors"
                  to="/"
                >
                  Megamenu
                </NavLink>
                <NavLink
                  onClick={() => setIsMenuOpen(false)}
                  className="hover:text-[#09B850] transition-colors"
                  to="/"
                >
                  Contact Us
                </NavLink>
              </nav>

              <div className="flex flex-col gap-3 pt-4 border-t border-gray-100">
                <button className="w-full bg-gray-100 hover:bg-gray-200 py-2.5 text-black rounded-md font-medium text-sm transition-colors">
                  Sign Up
                </button>
                <button className="w-full bg-[#09B850] hover:bg-[#079641] py-2.5 text-white rounded-md text-sm font-medium transition-colors">
                  Buy Now
                </button>
              </div>
            </div>
          )}
        </div>
      </header>
    </>
  );
};

export default Header;
