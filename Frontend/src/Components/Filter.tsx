import React from "react";

interface FilterProps {
  setWord: (word: string) => void;
  setPassage: (passage: string) => void;
  setCategory: (category: string) => void;
}

const Filter: React.FC<FilterProps> = ({ setWord, setPassage, setCategory }) => {
  const handleClick = (
    word: string,
    passage: string,
    category: string
  ) => {
    setWord(word);
    setPassage(passage);
    setCategory(category);
  };

  return (
    <div className="flex gap-4">
      <button
        onClick={() =>
          handleClick(
            "ALL Spaces",
            "Enjoy, browse & book the most unique locations",
            "Spaces"
          )
        }
        className="px-4 py-2 rounded-xl bg-gray-200 hover:bg-gray-300"
      >
        Spaces
      </button>

      <button
        onClick={() =>
          handleClick(
            "Photoshop",
            "Edit, design & unleash your creativity",
            "Photoshop"
          )
        }
        className="px-4 py-2 rounded-xl bg-gray-200 hover:bg-gray-300"
      >
        Photoshop
      </button>

      <button
        onClick={() =>
          handleClick(
            "Illustrator",
            "Create stunning vector graphics with ease",
            "Illustrator"
          )
        }
        className="px-4 py-2 rounded-xl bg-gray-200 hover:bg-gray-300"
      >
        Illustrator
      </button>
    </div>
  );
};

export default Filter;
