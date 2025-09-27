import React from "react";
import type { FC } from "react";

interface NavbarProps {
  className?: string; 
}

const Navbar: FC<NavbarProps> = ({ className }) => {  
  return (
    <header
className={`bg-white [box-shadow:0px_20px_30px_0px_rgba(0,0,0,0.05)] rounded-full mx-[2%] mt-4 ${className || ""}`}
    >
      <div className="flex w-full items-center justify-between px-6 py-3 mx-auto">
        <div className="w-[10%] text-2xl font-serif font-bold text-black">
          whattaplace
        </div>

        <nav className="w-[84%] hidden md:flex justify-between items-center gap-8 text-gray-600">
          <div className="flex w-[88%] justify-center gap-10">
            <div className="flex gap-1.5 items-center group cursor-pointer">
              <a
                href="/find"
                className="flex items-center gap-1 font-medium text-black"
              >
                Find a Place
              </a>
            </div>

            <div className="flex gap-1.5 items-center group cursor-pointer">
              <img
                src="/arrow-right-thin-svgrepo-com.svg"
                alt="arrow"
                className="w-3 opacity-0 -translate-x-2 transition-all duration-300 ease-in-out group-hover:opacity-100 group-hover:translate-x-0"
              />
              <a
                href="/find"
                className="flex items-center gap-1 text-gray-700 transition-all duration-300 ease-in-out group-hover:text-black group-hover:translate-x-1 group-hover:font-medium"
              >
                Host Your Space
              </a>
            </div>

            <div className="flex gap-1.5 items-center group cursor-pointer">
              <img
                src="/arrow-right-thin-svgrepo-com.svg"
                alt="arrow"
                className="w-3 opacity-0 -translate-x-2 transition-all duration-300 ease-in-out group-hover:opacity-100 group-hover:translate-x-0"
              />
              <a
                href="/find"
                className="flex items-center gap-1 text-gray-700 transition-all duration-300 ease-in-out group-hover:text-black group-hover:translate-x-1 group-hover:font-medium"
              >
                How it Work
              </a>
            </div>
          </div>

          <button className="w-[12%] ml-[2.38%] group relative flex items-center rounded-full border border-indigo-400 bg-gradient-to-r from-indigo-500 to-indigo-600 px-5 py-2 text-white shadow-md transition-all duration-300 ease-in-out hover:shadow-lg hover:from-indigo-600 hover:to-indigo-700">
            <span className="rounded-full transition-all duration-300 ease-in-out group-hover:rounded-r-none">
              Get in Touch
            </span>
            <span className="absolute right-0 top-1/2 -translate-y-1/2 ml-2 inline-flex h-9 w-9 items-center justify-center rounded-full border border-white text-xs transition-all duration-300 ease-in-out group-hover:left-full group-hover:ml-0 group-hover:-translate-x-full group-hover:w-9 group-hover:h-9 group-hover:border-2">
              ↗
            </span>
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;