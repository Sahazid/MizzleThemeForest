import React from "react";
import lightLogo from "../assets/logo-light.svg"; // or use your Mizzle logo asset

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="w-full bg-[#1A1C1E] text-white pt-12 pb-8 relative">
      {/* Top Floating Green Newsletter Banner */}
      <div className="max-w-[75rem] mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="bg-[#00C05B] rounded-2xl p-8 lg:p-12 flex flex-col lg:flex-row lg:items-center justify-between gap-8 relative overflow-hidden shadow-xl">
          {/* Left Title & Input Form */}
          <div className="space-y-6 max-w-xl z-10">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white leading-tight">
              Let's talk about your digital <br className="hidden sm:inline" />{" "}
              agency goals
            </h2>
            <form
              onSubmit={(e) => e.preventDefault()}
              className="flex items-center bg-white rounded-xl p-1.5 w-full max-w-md shadow-inner"
            >
              <input
                type="email"
                placeholder="Your email address"
                className="w-full px-4 py-2 text-gray-800 focus:outline-none rounded-l-xl text-sm sm:text-base placeholder-gray-400"
              />
              <button
                type="submit"
                className="bg-[#222529] hover:bg-black text-white px-6 py-3 rounded-lg font-semibold text-sm transition-colors duration-200 shrink-0"
              >
                Subscribe
              </button>
            </form>
          </div>

          {/* Right Contact Info Details */}
          <div className="text-white space-y-3 text-sm sm:text-base font-medium z-10 lg:text-right">
            <div className="flex items-center lg:justify-end gap-2.5">
              <i className="fa-solid fa-headset text-lg"></i>
              <span>Call on: 0125 258 993 22</span>
            </div>
            <div className="flex items-center lg:justify-end gap-2.5">
              <i className="fa-regular fa-clock text-lg"></i>
              <span>Time: 9am to 5pm (Sunday close)</span>
            </div>
            <div className="flex items-center lg:justify-end gap-2.5">
              <i className="fa-regular fa-envelope text-lg"></i>
              <span>Email: example@gmail.com</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Links Container */}
      <div className="max-w-[75rem] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 pb-12">
          {/* Column 1: Logo & Tagline */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <img src={lightLogo} alt="Mizzle" className="h-8 w-auto" />
            </div>
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
              A Template that's both stylish and functional, perfect for any
              type of technology or corporate website.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-white">Quick links</h3>
            <ul className="space-y-2.5 text-sm text-gray-400">
              <li>
                <a
                  href="#"
                  className="hover:text-white transition-colors duration-200"
                >
                  About us
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-white transition-colors duration-200"
                >
                  Contact us
                </a>
              </li>
              <li className="flex items-center gap-2">
                <a
                  href="#"
                  className="hover:text-white transition-colors duration-200"
                >
                  Career
                </a>
                <span className="bg-[#DC3545] text-white text-[10px] font-bold px-1.5 py-0.5 rounded uppercase tracking-wider">
                  2 Job
                </span>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-white transition-colors duration-200"
                >
                  Career detail
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-white transition-colors duration-200"
                >
                  Become a partner
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-white transition-colors duration-200"
                >
                  Sign in
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-white transition-colors duration-200"
                >
                  Sign up
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Community */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-white">Community</h3>
            <ul className="space-y-2.5 text-sm text-gray-400">
              <li>
                <a
                  href="#"
                  className="hover:text-white transition-colors duration-200"
                >
                  Documents
                </a>
              </li>
              <li className="flex items-center gap-1.5">
                <a
                  href="#"
                  className="hover:text-white transition-colors duration-200"
                >
                  Supports
                </a>
                <i className="fa-solid fa-arrow-up-right-from-square text-[10px]"></i>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-white transition-colors duration-200"
                >
                  Faqs
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-white transition-colors duration-200"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-white transition-colors duration-200"
                >
                  News and blogs
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-white transition-colors duration-200"
                >
                  Terms & condition
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: App Store Badges & Social Links */}
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-bold text-white mb-4">
                App available on
              </h3>
              <div className="flex items-center gap-3">
                <a
                  href="#"
                  className="inline-block transition-transform hover:scale-105"
                >
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                    alt="Get it on Google Play"
                    className="h-9"
                  />
                </a>
                <a
                  href="#"
                  className="inline-block transition-transform hover:scale-105"
                >
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg"
                    alt="Download on the App Store"
                    className="h-9"
                  />
                </a>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-bold text-white mb-3">Follow on</h3>
              <div className="flex items-center gap-2">
                {[
                  "fa-facebook-f",
                  "fa-instagram",
                  "fa-twitter",
                  "fa-linkedin-in",
                  "fa-youtube",
                ].map((icon, idx) => (
                  <a
                    key={idx}
                    href="#"
                    className="w-8 h-8 rounded bg-[#27292D] hover:bg-[#00C05B] text-gray-300 hover:text-white flex items-center justify-center text-xs transition-colors duration-200"
                  >
                    <i className={`fa-brands ${icon}`}></i>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Border Line */}
        <div className="border-t border-gray-800"></div>
      </div>

      {/* Floating Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-6 right-6 bg-[#00C05B] hover:bg-[#00a34d] text-white w-10 h-10 rounded-lg flex items-center justify-center shadow-lg transition-all duration-300 z-50"
        aria-label="Scroll to top"
      >
        <i className="fa-solid fa-arrow-up"></i>
      </button>
    </footer>
  );
};

export default Footer;
