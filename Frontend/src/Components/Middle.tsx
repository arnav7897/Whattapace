import React from "react";
import type { FC } from "react";

interface MiddleProps {
  word: string;
  passage: string;
  className?: string; 
}

const Middle: FC<MiddleProps> = ({ word, passage, className }) => {
  return (
    <div className={`font-[var(--font-sans)] text-center flex flex-col items-center justify-center max-w-[80%] mx-auto ${className || ""}`}>
      
      {/* Word / Heading */}
      <h1 className="text-[44px] sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl w-full font-extrabold">
        {word}
      </h1>

      {/* Passage / Subtext */}
      <p className="-mt-2 font-[500] w-[90%] lg:w-[68%] text-[16px] sm:text-xl md:text-xl lg:text-2xl leading-tight sm:leading-snug md:leading-normal lg:leading-tight text-[#989899]">
        {passage}
      </p>
    </div>
  );
};

export default Middle;
