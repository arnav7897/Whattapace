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
    <>
      <Navbar className="sticky top-5" />

      <Middle word={word} passage={passage} />

      <Filter
        setWord={setWord}
        setPassage={setPassage}
        setCategory={setCategory}
      />
  <Product />
    </>
  );
};

export default App;
