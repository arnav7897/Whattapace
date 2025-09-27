import React, { useState } from "react";
import Middle from "./Components/Middle";
import Filter from "./Components/Filter";
import Navbar from "./Components/NavBar";
import Product from "./Components/Product";

const App: React.FC = () => {
  const [word, setWord] = useState("ALL Spaces");
  const [passage, setPassage] = useState(
    "Enjoy, browse & book the most unique locations"
  );
  const [category, setCategory] = useState("Spaces");

  return (
    <div className="bg-[#fefffe]">
      <Navbar className="sticky top-5" />

      <Middle word={word} passage={passage} className="pt-[130px] pb-[100px]" />

      <Filter
        setWord={setWord}
        setPassage={setPassage}
        setCategory={setCategory}
        className="m-10"
      />
  <Product />
    </div>
  );
};

export default App;
