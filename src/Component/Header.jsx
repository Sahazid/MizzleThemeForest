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

      <header className="border-b-[1px] border-gray-100 w-full px-2 sm:px-1 py-1 flex justify-between items-center gap-4 sticky top-0 z-50 bg-white shadow-sm lg:shadow-none">
        <div className="w-full max-w-7xl mx-auto  sm:px-1 py-4 flex justify-between items-center gap-4">
          <div>
            <img
              src={logo}
              alt="Company Logo"
              className="w-28 sm:w-32 h-auto block"
            />
          </div>

          <nav className="hidden lg:flex gap-8 text-gray-600 font-medium text-base items-center">
            <div className="relative group">
              <button className="hover:text-[#09B850] transition-colors">
                Demos
              </button>

              {/* Dropdown */}

              <div
                className="
                  absolute
                  left-0
                  top-full
                  pt-3
                  w-48
                  invisible
                  opacity-0
                  translate-y-2
                  group-hover:visible
                  group-hover:opacity-100
                  group-hover:translate-y-0
                  transition-all
                  duration-200
                "
              >
                <div className="bg-white rounded-md shadow-lg border border-gray-100 p-2">
                  <NavLink
                    to="/demo-1"
                    className="block px-4 py-2 rounded-md hover:bg-gray-100 hover:text-[#09B850] transition-colors"
                  >
                    Demo 1
                  </NavLink>

                  <NavLink
                    to="/demo-2"
                    className="block px-4 py-2 rounded-md hover:bg-gray-100 hover:text-[#09B850] transition-colors"
                  >
                    Demo 2
                  </NavLink>

                  <NavLink
                    to="/demo-3"
                    className="block px-4 py-2 rounded-md hover:bg-gray-100 hover:text-[#09B850] transition-colors"
                  >
                    Demo 3
                  </NavLink>
                </div>
              </div>
            </div>

            <div className="relative group">
              <button className="hover:text-[#09B850] transition-colors">
                Pages
              </button>

              {/* Dropdown */}

              <div
                className="
                  absolute
                  left-0
                  top-full
                  pt-3
                  w-48
                  invisible
                  opacity-0
                  translate-y-2
                  group-hover:visible
                  group-hover:opacity-100
                  group-hover:translate-y-0
                  transition-all
                  duration-200
                "
              >
                <div className="bg-white rounded-md shadow-lg border border-gray-100 p-2">
                  <NavLink
                    to="/about"
                    className="block px-4 py-2 rounded-md hover:bg-gray-100 hover:text-[#09B850] transition-colors"
                  >
                    About Us
                  </NavLink>

                  <NavLink
                    to="/services"
                    className="block px-4 py-2 rounded-md hover:bg-gray-100 hover:text-[#09B850] transition-colors"
                  >
                    Services
                  </NavLink>

                  <NavLink
                    to="/contact"
                    className="block px-4 py-2 rounded-md hover:bg-gray-100 hover:text-[#09B850] transition-colors"
                  >
                    Contact
                  </NavLink>

                  <NavLink
                    to="/pricing"
                    className="block px-4 py-2 rounded-md hover:bg-gray-100 hover:text-[#09B850] transition-colors"
                  >
                    Pricing
                  </NavLink>
                </div>
              </div>
            </div>

            <div className="relative group">
              <button className="hover:text-[#09B850] transition-colors">
                Portfolio
              </button>

              {/* Dropdown */}

              <div
                className="
                  absolute
                  left-0
                  top-full
                  pt-3
                  w-52
                  invisible
                  opacity-0
                  translate-y-2
                  group-hover:visible
                  group-hover:opacity-100
                  group-hover:translate-y-0
                  transition-all
                  duration-200
                "
              >
                <div className="bg-white rounded-md shadow-lg border border-gray-100 p-2">
                  <NavLink
                    to="/portfolio"
                    className="block px-4 py-2 rounded-md hover:bg-gray-100 hover:text-[#09B850] transition-colors"
                  >
                    Portfolio Grid
                  </NavLink>

                  <NavLink
                    to="/portfolio-details"
                    className="block px-4 py-2 rounded-md hover:bg-gray-100 hover:text-[#09B850] transition-colors"
                  >
                    Portfolio Details
                  </NavLink>

                  <NavLink
                    to="/projects"
                    className="block px-4 py-2 rounded-md hover:bg-gray-100 hover:text-[#09B850] transition-colors"
                  >
                    Projects
                  </NavLink>
                </div>
              </div>
            </div>

            <div className="relative group">
              <button className="hover:text-[#09B850] transition-colors">
                Megamenu
              </button>

              {/* Mega Dropdown */}

              <div
                className="
                  absolute
                  right-0
                  top-full
                  pt-3
                  w-72
                  invisible
                  opacity-0
                  translate-y-2
                  group-hover:visible
                  group-hover:opacity-100
                  group-hover:translate-y-0
                  transition-all
                  duration-200
                "
              >
                <div className="bg-white rounded-md shadow-lg border border-gray-100 p-4">
                  <div className="grid grid-cols-2 gap-2">
                    <NavLink
                      to="/features"
                      className="px-3 py-2 rounded-md hover:bg-gray-100 hover:text-[#09B850] transition-colors"
                    >
                      Features
                    </NavLink>

                    <NavLink
                      to="/pricing"
                      className="px-3 py-2 rounded-md hover:bg-gray-100 hover:text-[#09B850] transition-colors"
                    >
                      Pricing
                    </NavLink>

                    <NavLink
                      to="/blog"
                      className="px-3 py-2 rounded-md hover:bg-gray-100 hover:text-[#09B850] transition-colors"
                    >
                      Blog
                    </NavLink>

                    <NavLink
                      to="/faq"
                      className="px-3 py-2 rounded-md hover:bg-gray-100 hover:text-[#09B850] transition-colors"
                    >
                      FAQ
                    </NavLink>

                    <NavLink
                      to="/team"
                      className="px-3 py-2 rounded-md hover:bg-gray-100 hover:text-[#09B850] transition-colors"
                    >
                      Our Team
                    </NavLink>

                    <NavLink
                      to="/testimonials"
                      className="px-3 py-2 rounded-md hover:bg-gray-100 hover:text-[#09B850] transition-colors"
                    >
                      Testimonials
                    </NavLink>
                  </div>
                </div>
              </div>
            </div>

            <NavLink
              className="hover:text-[#09B850] transition-colors"
              to="/contact"
            >
              Contact Us
            </NavLink>
          </nav>

          <div className="hidden lg:flex gap-3 items-center">
            <button
              aria-label="Toggle theme"
              className="text-xl text-gray-700 hover:text-[#09B850] p-2 transition-colors"
            >
              <i className="fa-solid fa-sun"></i>
            </button>

            <div className="relative group">
              <button
                className="
                  bg-gray-100
                  hover:bg-gray-200
                  px-4
                  py-2
                  text-black
                  rounded-md
                  font-medium
                  text-sm
                  transition-colors
                "
              >
                Sign Up
              </button>

              <div
                className="
                  absolute
                  right-0
                  top-full
                  pt-3
                  w-40
                  invisible
                  opacity-0
                  translate-y-2
                  group-hover:visible
                  group-hover:opacity-100
                  group-hover:translate-y-0
                  transition-all
                  duration-200
                "
              >
                <div className="bg-white rounded-md shadow-lg border border-gray-100 p-2">
                  <NavLink
                    to="/login"
                    className="block px-3 py-2 rounded-md text-gray-700 hover:bg-gray-100 hover:text-[#09B850] transition-colors"
                  >
                    Login
                  </NavLink>

                  <NavLink
                    to="/register"
                    className="block px-3 py-2 rounded-md text-gray-700 hover:bg-gray-100 hover:text-[#09B850] transition-colors"
                  >
                    Register
                  </NavLink>
                </div>
              </div>
            </div>

            <div className="relative group">
              <button
                className="
                  bg-[#09B850]
                  hover:bg-[#079641]
                  px-4
                  py-2
                  text-white
                  rounded-md
                  text-sm
                  font-medium
                  transition-colors
                "
              >
                Buy Now
              </button>

              <div
                className="
                  absolute
                  right-0
                  top-full
                  pt-3
                  w-48
                  invisible
                  opacity-0
                  translate-y-2
                  group-hover:visible
                  group-hover:opacity-100
                  group-hover:translate-y-0
                  transition-all
                  duration-200
                "
              >
                <div className="bg-white rounded-md shadow-lg border border-gray-100 p-2">
                  <button
                    className="
                      w-full
                      text-left
                      px-3
                      py-2
                      rounded-md
                      text-gray-700
                      hover:bg-gray-100
                      hover:text-[#09B850]
                      transition-colors
                    "
                  >
                    Personal Plan
                  </button>

                  <button
                    className="
                      w-full
                      text-left
                      px-3
                      py-2
                      rounded-md
                      text-gray-700
                      hover:bg-gray-100
                      hover:text-[#09B850]
                      transition-colors
                    "
                  >
                    Business Plan
                  </button>

                  <button
                    className="
                      w-full
                      text-left
                      px-3
                      py-2
                      rounded-md
                      text-gray-700
                      hover:bg-gray-100
                      hover:text-[#09B850]
                      transition-colors
                    "
                  >
                    Enterprise Plan
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="flex lg:hidden items-center gap-3">
            {/* Theme */}

            <button
              aria-label="Toggle theme"
              className="text-xl text-gray-700 p-1"
            >
              <i className="fa-solid fa-sun"></i>
            </button>

            {/* Hamburger */}

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

          {isMenuOpen && (
            <div
              className="
                absolute
                top-full
                left-0
                w-full
                bg-white
                border-b
                border-gray-200
                shadow-lg
                p-6
                flex
                flex-col
                gap-5
                lg:hidden
                z-50
              "
            >
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
                  to="/contact"
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
