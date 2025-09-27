import React from "react";

interface FilterProps {
  setWord: (word: string) => void;
  setPassage: (passage: string) => void;
  setCategory: (category: string) => void;
  className?: string;
}

interface CardProps {
  label: string;
  word: string;
  passage: string;
  category: string;
  image: string; 
  onClick: (word: string, passage: string, category: string) => void;
}

const Card: React.FC<CardProps> = ({ label, word, passage, category, image, onClick }) => {
  return (
    <div className="flex flex-col justify-center gap-4 items-center">
      <img src={image} alt={label} className="w-[50px]" />

      <div className="flex gap-1.5 items-center group cursor-pointer">
        <img
          src="/arrow-right-thin-svgrepo-com.svg"
          alt="arrow"
          className="w-3 hidden -translate-x-2 transition-all duration-300 ease-in-out group-hover:block group-hover:translate-x-0"
        />

        <button
          onClick={() => onClick(word, passage, category)}
          className="flex items-center gap-1 transition-all duration-300 ease-in-out group-hover:text-black group-hover:translate-x-1 group-hover:font-medium text-[#6e524d]"
        >
          {label}
        </button>
      </div>
    </div>
  );
};

const Filter: React.FC<FilterProps> = ({ setWord, setPassage, setCategory, className }) => {
  const handleClick = (word: string, passage: string, category: string) => {
    setWord(word);
    setPassage(passage);
    setCategory(category);
  };

    const cards = [
    {
      label: "Spaces",
      word: "ALL Spaces",
      passage: "Enjoy, browse & book the most unique locations",
      category: "Spaces",
      image: "/all.png"
    },
    {
      label: "Photoshop",
      word: "Photoshop",
      passage:
        "Discover unique backdrops for Fashion shoots • Product photography • Brand campaigns • Portrait sessions • Lifestyle content • Editorial spreads and more...",
      category: "Photoshop",
      image: "/2.png"
    },
    {
      label: "Video Shoot",
      word: "Video Shoot",
      passage:
        "Browse spaces for Brand videos • Instagram reels • Music videos • YouTube content • Product demos • Testimonials and more...",
      category: "Video Shoot",
       image: "/3.png"
    },
    {
      label: "Workshops",
      word: "Workshops",
      passage:
        "Inspirational venues for Creative workshops • Skill-building sessions • Yoga Session • Team Brainstorming • Art & Music Groups  •  and more...",
      category: "Workshops",
       image: "/4.png"
    },
    {
      label: "Podcast",
      word: "Podcast",
      passage:
        "Unique space for Podcast episodes • Interview series • Talk shows • Storytelling sessions • Conversations • Poetry Recitals and more.",
      category: "Podcast",
       image: "/5.png"
    },
    {
      label: "Dance Shoot",
      word: "Dance shoot",
      passage:
        "Unique space for Choreography videos • Dance reels • Performance captures • Dance tutorials • Competition prep • Movement art and more...",
      category: "Dance shoot",
       image: "/6.png"
    },
    {
      label: "Film Shoot",
      word: "Film Shoot",
      passage:
        "Book locations for Short films • Documentaries • Commercial productions • Web series • Short-form Drama • Indie projects • Cinematic storytelling and more...",
      category: "Film Shoot",
       image: "/7.png"
    },
    {
      label: "Events",
      word: "Events",
      passage:
        "Create memorable gatherings for Brand Launch parties • Networking events • Brand activations • Performances • Celebrations • Corporate events • Baithaks • Book Launches and more...",
      category: "Events",
       image: "/8.png"
    },
    {
      label: "Exhibitions",
      word: "Exhibitions",
      passage:
        "Showcase in untapped spaces for Art exhibitions • Product displays • Gallery shows • Creative showcases • Installation art • Visual presentations and more...",
      category: "Exhibitions",
       image: "/9.png"
    },
  ];

  return (
    <div className={`flex flex-wrap justify-evenly overflow-x-auto no-scrollbar max-w-full ${className}`}>
      {cards.map((card, idx) => (
        <Card key={idx} {...card} onClick={handleClick} />
      ))}
    </div>
  );
};

export default Filter;
