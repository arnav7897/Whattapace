import React, { useState } from "react";
import Middle from "./Components/Middle";
import Filter from "./Components/Filter";
import Navbar from "./Components/NavBar";
import CardGrid from "./Components/CardGrid";
import Footer from "./Components/Footer";
const App: React.FC = () => {
  const [word, setWord] = useState("All Spaces");
  const [passage, setPassage] = useState(
    "Enjoy, browse & book the most unique locations"
  );
  const [category, setCategory] = useState("Spaces");
  return (
    <div className="bg-[#fefffe]">
      <Navbar className="top-4 " />

      <Middle word={word} passage={passage} className="pt-[200px] pb-[100px]" />
    
      <Filter
        setWord={setWord}
        setPassage={setPassage}
        setCategory={setCategory}
        className="m-10"
        />
      <CardGrid category={category} />
      <Footer/>
    </div>
  );
};

export default App;
