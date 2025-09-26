import React from "react";
import type { FC } from "react";

interface ProductProps {
  word: string;
  passage: string;
  className?: string;
}

const Product: FC<ProductProps> = ({ word, passage ,className }) => {
  return (
    <div className={`bg-amber-400 h-screen text-center flex flex-col items-center justify-center w-full gap-4 ${className || ""}`}>

      <h1 className="-mb-2 text-6xl font-bold">{word}</h1>

      <p className="-mt-2 text-lg text-gray-600">{passage}</p>
    </div>
  );
};

export default Product;