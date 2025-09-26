import React from "react";
import type { FC } from "react";

interface MiddleProps {
  word: string;
  passage: string;
  className?: string; 
}

const Middle: FC<MiddleProps> = ({ word, passage, className}) => {
  return (
    <div className={`font-[var(--font-sans)] text-center flex flex-col items-center justify-center max-w-full ${className || ""}`}>

      <h1 className="text-7xl font-extrabold">{word}</h1>

      <p className="-mt-2 font-[500] text-2xl text-[#989899]">{passage}</p>
    </div>
  );
};

export default Middle;