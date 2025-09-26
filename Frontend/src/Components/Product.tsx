import React from "react";
import type { FC } from "react";

interface MiddleProps {
  word: string;
  passage: string;
}

const Product: FC<MiddleProps> = ({ word, passage }) => {
  return (
    <div className="bg-amber-400 h-screen text-center flex flex-col items-center justify-center w-full gap-4">

      <h1 className="text-6xl font-bold">{word}</h1>

      <p className="text-lg text-gray-600">{passage}</p>
    </div>
  );
};

export default Product;