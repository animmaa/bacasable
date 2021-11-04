import React from "react";
import { useEffect, useState } from "react/cjs/react.development";
import SearchBar from "../components/searchBar/SearchBar";
import Contact from "../pages/Contact"


function Home() {
  const [products,setProducts]= useState([]);
  const handle = (dataProduct) => {
    setProducts(dataProduct)
    console.log(dataProduct)
  }
  return (
    <div className="container">
      <h2>Home</h2>

      <SearchBar onHandle={handle}/>
      <Contact products={products}/>

      <div className="basique">
        <div className="my-profil">mon profil perso</div>
        
      </div>
    </div>
  );
}

export default Home;
