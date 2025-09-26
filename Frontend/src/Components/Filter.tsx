import React from "react";

interface FilterProps {
  setWord: (word: string) => void;
  setPassage: (passage: string) => void;
  setCategory: (category: string) => void;
  className : string;
}

const Filter: React.FC<FilterProps> = ({ setWord, setPassage, setCategory,className}) => {
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
    <div className={`flex gap-4 max-w-full justify-evenly ${className}`}>
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
            "Discover unique backdrops for Fashion shoots • Product photography • Brand campaigns • Portrait sessions • Lifestyle content • Editorial spreads and more..."
            ,"Photoshop"
        )
        }
        className="px-4 py-2 rounded-xl bg-gray-200 hover:bg-gray-300"
      >
        Photoshop
      </button>

      <button
        onClick={() =>
          handleClick(
            "Video Shoot",
            "Browse spaces for Brand videos • Instagram reels • Music videos • YouTube content • Product demos • Testimonials and more...",
            "Video Shoot"
          )
        }
        className="px-4 py-2 rounded-xl bg-gray-200 hover:bg-gray-300"
      >
        Video Shoot
      </button>

            <button
        onClick={() =>
          handleClick(
            "Workshops",
            "Inspirational venues for Creative workshops • Skill-building sessions • Yoga Session • Team Brainstorming • Art & Music Groups  •  and more...",
            "Workshops"
          )
        }
        className="px-4 py-2 rounded-xl bg-gray-200 hover:bg-gray-300"
      >
Workshops
      </button>

            <button
        onClick={() =>
          handleClick(
            "Podcast",
            "Unique space for Podcast episodes • Interview series • Talk shows • Storytelling sessions • Conversations • Poetry Recitals and more.",
            "Podcast"
          )
        }
        className="px-4 py-2 rounded-xl bg-gray-200 hover:bg-gray-300"
      >
        Podcast
      </button>

            <button
        onClick={() =>
          handleClick(
            "Dance shoot",
            "Unique space for Choreography videos • Dance reels • Performance captures • Dance tutorials • Competition prep • Movement art and more...",
            "Dance shoot"
          )
        }
        className="px-4 py-2 rounded-xl bg-gray-200 hover:bg-gray-300"
      >
        Dance Shoot
      </button>

            <button
        onClick={() =>
          handleClick(
            "Film Shoot",
            "Book locations for Short films • Documentaries • Commercial productions • Web series • Short-form Drama • Indie projects • Cinematic storytelling and more...",
            "Film Shoot"
          )
        }
        className="px-4 py-2 rounded-xl bg-gray-200 hover:bg-gray-300"
      >
        Film Shoot
      </button>


            <button
        onClick={() =>
          handleClick(
            "Events",
            "Create memorable gatherings for Brand Launch parties • Networking events • Brand activations • Performances • Celebrations • Corporate events • Baithaks • Book Launches and more...",
            "Events"
          )
        }
        className="px-4 py-2 rounded-xl bg-gray-200 hover:bg-gray-300"
      >
        Events
      </button>

    <button
        onClick={() =>
          handleClick(
            "Exhibitions",
            "Showcase in untapped spaces for Art exhibitions • Product displays • Gallery shows • Creative showcases • Installation art • Visual presentations and more...",
            "Exhibitions"
          )
        }
        className="px-4 py-2 rounded-xl bg-gray-200 hover:bg-gray-300"
      >
        Exhibitions
      </button>
    </div>
  );
};

export default Filter;
