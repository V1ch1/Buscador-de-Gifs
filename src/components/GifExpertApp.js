import React, { useState } from "react";
import { AddCategory } from "./AddCategory";
import { GifGrid } from "./GifGrid";
import "../css/gifExpertApp.css";
import ScrollToTop from "react-scroll-to-top";

const GifExpertApp = () => {
  const [categories, setcategories] = useState([]);

  return (
    <>
      <div>
        <h2>Búsqueda de Gifs</h2>
      </div>
      <AddCategory setcategories={setcategories} />
      <hr />

      {categories.map((category) => (
        <GifGrid key={category} category={category} />
      ))}
      <ScrollToTop smooth color="red" />
    </>
  );
};

export default GifExpertApp;
