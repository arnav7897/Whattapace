import React from "react";
import { Star } from "lucide-react";

const Card = () => {
  return (
    <div className="w-[340px] rounded-2xl shadow-md overflow-hidden border border-gray-200">
      {/* Image */}
      <div className="relative overflow-hidden">
        <img
          src="/your-image.png" // replace with your image path
          alt="Haveli"
          className="w-full h-56 object-cover transform transition-transform duration-500 ease-in-out hover:scale-110"
        />
        <div className="absolute top-2 right-2 bg-white px-2 py-1 rounded-full shadow text-sm font-medium">
          Rs. 4500 per hour
        </div>
      </div>

      {/* Content */}
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-900">
          Havell of Timeless Frames
        </h3>

        {/* Rating */}
        <div className="flex items-center mt-1 mb-2 text-sm text-gray-700">
          <Star className="w-4 h-4 fill-yellow-400 text-yellow-400 mr-1" />
          <span>4.5</span>
        </div>

        <p className="text-xs text-gray-500 leading-relaxed">
          Restored Haveli • Old Delhi Heritage • Culture & Performance • Curated
          artefacts • Jewel Tones • Antique Furniture
        </p>
      </div>
    </div>
  );
};

export default Card;
