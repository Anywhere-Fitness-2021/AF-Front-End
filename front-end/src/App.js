//TECH IMPORTS
import React from "react";
//STYLING IMPORTS
import "../src/index.css";
import Logo from "./AnywhereFitnessLogo.PNG"

function App() {
  return (
   <div>
     <div className="logoAndHeading"></div>
     <img className="logo" src={Logo} alt="gym barbell"/>
     <h1 className="mainHeading">Anywhere Fitness</h1>
   </div>
  );
}

export default App;
