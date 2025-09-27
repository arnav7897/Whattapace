import React from "react";
import Card from "./Card";
import { sampleSpaces } from "../assets/sample";

interface CardGridProps {
  category: string; // the category to filter by
}

const CardGrid: React.FC<CardGridProps> = ({ category }) => {
  // Filter spaces based on category
  const filteredSpaces =
    category === "Spaces"
      ? sampleSpaces
      : sampleSpaces.filter(space => space.categories.includes(category));

  if (filteredSpaces.length === 0) {
    return (
      <div className="p-6">
        <h2 className="text-xl font-bold mb-6">Available Spaces</h2>
        <p className="text-gray-500">No spaces found for this category.</p>
      </div>
    );
  }

  return (
    <div className="p-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {filteredSpaces.map((space, index) => (
          <Card key={index} {...space} />
        ))}
      </div>
    </div>
  );
};

export default CardGrid;
