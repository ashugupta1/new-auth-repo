import React, { useEffect, useState } from "react";
import './App.css';

import NavBar from "./components/NavBar";
import NewsBoard from "./components/NewsBoard";


function App() {

  const[catagory, setCatagory] = useState("general")

  return (
    <>
      <NavBar setCatagory={setCatagory} />
      <NewsBoard catagory={catagory} /> 
    </>
  )
}

export default App
