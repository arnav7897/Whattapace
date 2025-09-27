import React from "react";
import { Star } from "lucide-react";

export interface CardProps {
  image: string;
  title: string;
  price: string;
  rating: number;
  tags: string[];
}

const Card: React.FC<CardProps> = ({ image, title, price, rating, tags }) => {
  return (
    <div className="group hover:bg-[#E6E6E6] bg-[#fefffe] transform transition-all duration-500 ease-in-out p-4 rounded-4xl overflow-hidden cursor-pointer mx-auto">
      {/* Image */}
      <div className="relative w-full aspect-[4/3] overflow-hidden rounded-3xl">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover rounded-2xl transform transition-transform duration-500 ease-in-out group-hover:scale-110"
        />
        <div className="absolute top-2 right-2 bg-[#fefffe] px-3 py-1 rounded-full shadow text-sm font-medium">
          {price}
        </div>
      </div>

      {/* Content */}
      <div className="p-4">
        <h3 className="text-lg sm:text-xl font-semibold text-gray-900">{title}</h3>

        {/* Rating */}
        <div className="flex items-center mt-1 mb-2 text-sm sm:text-base text-gray-700">
          <Star className="w-4 h-4 fill-yellow-400 text-yellow-400 mr-1" />
          <span>{rating}</span>
        </div>

        <p className="text-xs sm:text-sm text-gray-500 leading-relaxed">
          {tags.join(" • ")}
        </p>
      </div>
    </div>
  );
};

export default Card;
