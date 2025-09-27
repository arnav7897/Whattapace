import React from "react";
import { Instagram, ArrowUpRight } from "lucide-react";

const Footer: React.FC = () => {
  return (
    <>
      {/* Hero text above footer */}
      <div className="w-full mt-16 sm:mt-20 flex flex-col md:flex-row justify-center md:justify-end items-center px-5">
        <p className="text-lg sm:text-xl md:text-3xl lg:text-7xl font-extrabold text-center md:text-right">
          ...and more yet to come.
        </p>
      </div>

      <footer className="bg-[#1B2C8D] text-white rounded-3xl p-6 sm:p-8 md:p-12 mx-4 sm:mx-5 mb-10 mt-10">
        <div className="flex flex-col md:flex-row justify-between gap-6 md:gap-8 w-full">

          {/* Left Section */}
          <div className="flex flex-col gap-3 sm:gap-4 md:gap-6">
            <h1 className="text-xl sm:text-2xl font-serif font-bold">whattaplace</h1>
            <div className="flex items-center gap-2 text-sm sm:text-base">
              <Instagram size={18} /> <span>Instagram</span>
            </div>
            <p className="text-xs sm:text-sm md:text-base break-words">knock@whattaplace.com</p>
          </div>

          {/* Right Section */}
          <div className="flex flex-col items-start md:items-end gap-4 sm:gap-6">
            <nav className="flex flex-col gap-1 sm:gap-2 text-xs sm:text-sm md:text-base">
              <a href="#" className="hover:underline">Find a Space</a>
              <a href="#" className="hover:underline">Host a Place</a>
              <a href="#" className="hover:underline">How it Works</a>
            </nav>

            {/* CTA Button */}
            <button className="group relative flex gap-2 items-center mt-2 sm:mt-4">
              {/* Left Circle (Text) */}
              <span
                className="flex items-center justify-center w-32 sm:w-40 h-10 sm:h-12 rounded-full 
                  bg-indigo-500 border border-indigo-600 text-white font-medium text-xs sm:text-sm
                  transition-all duration-500 ease-in-out
                  group-hover:rounded-l-full group-hover:rounded-r-[0] group-hover:pr-6 sm:group-hover:pr-8"
              >
                Get in Touch
              </span>

              {/* Right Circle (Icon) */}
              <span
                className="flex items-center justify-center w-10 sm:w-12 h-10 sm:h-12 rounded-full 
                  bg-indigo-500 border border-indigo-600 text-white
                  -ml-2 transition-all duration-500 ease-in-out
                  group-hover:rounded-r-full group-hover:rounded-l-[0] group-hover:opacity-100"
              >
                <ArrowUpRight className="w-3 sm:w-4 h-3 sm:h-4" />
              </span>
            </button>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-6 sm:mt-8 border-t border-white/30 pt-4 flex flex-col md:flex-row justify-center md:justify-between items-center gap-2 md:gap-0 text-xs sm:text-sm md:text-sm text-white/70">
          <div className="flex flex-col md:flex-row flex-wrap justify-center md:justify-start gap-2">
            <a href="#" className="hover:underline">Terms & Conditions</a>
            <a href="#" className="hover:underline">Cancellation & Refund Policy</a>
            <a href="#" className="hover:underline">Privacy Policy</a>
            <a href="#" className="hover:underline">Cookies</a>
            <a href="#" className="hover:underline">Code of Conduct</a>
          </div>
          <p className="text-center md:text-right mt-2 md:mt-0">
            © 2025 Plenusvita - All Rights Reserved
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
