//TECH IMPORTS
import React from "react";
//STYLING IMPORTS
import "../src/index.css";
import Logo from "./AnywhereFitnessLogo.PNG";
import HomePage from "./HomePage";
import { BrowserRouter as Router , Link, Switch, Route } from 'react-router-dom';


function App() {
  return (
   <div className ="App">
     <nav>
     <img className="logo" src={Logo} alt="gym barbell"/>
      <h1 className="mainHeading">Anywhere Fitness</h1>
      <div className ="navLinks">
          <Link to='/create-account'>Sign Up</Link>
          <Link to ='/login'>Log In</Link> 
      </div>
      </nav>


     {/* <div className="logoAndHeading"></div>
     <img className="logo" src={Logo} alt="gym barbell"/>
     <h1 className="mainHeading">Anywhere Fitness</h1> */}
    <HomePage/>

   </div>
  );
}

export default App;
