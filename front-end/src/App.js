//TECH IMPORTS
import React from "react";
//STYLING IMPORTS
import "../src/index.css";
import Logo from "./AnywhereFitnessLogo.PNG";

//COMPONENTS
import CreateClass from "./components/CreateClass";

function App() {
  return (
   <div>
     <div className="logoAndHeading"></div>
     <img className="logo" src={Logo} alt="gym barbell"/>
     <h1 className="mainHeading">Anywhere Fitness</h1>

     <CreateClass />
   </div>
  );
}

export default App;
