import React from "react";
import img from "../Components/nav.jpg"
import "@popperjs/core";
import "../Components/style.css"
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import {Link} from "react-router-dom"
import Home from './Home';
import Cbse from "../Components/School Exam/CBSE"
import Isc from "../Components/School Exam/ISC";
import StateBoard from "../Components/School Exam/State Board"
import SSC from "../Components/Competative Exam/SSC"
import Defence from "../Components/Competative Exam/Defencs"
import JEE from './Competative Exam/JEE';
import Railways from './Competative Exam/Railways'
import Neet from './Competative Exam/NEET'
import Aktu from './University EXam/AKtu'
import Niit from './University EXam/Niit'
import IIT from "./University EXam/IIt"


const Navbar =()=>{
    return(
  <Router>
      <div>
     <nav class="navbar navbar-light bg-light">
   <Link to="/" class="navbar-brand" >
    <img src={img} width="40" height="40" class="d-inline-block align-top" alt="" loading="lazy"/>
   Previous Paper
   </Link>
  <ul class="nav justify-content-end">
  <li class="nav-item">
     <Link to="/"><button className="btn">Home </button></Link> 
  </li>
  <li class="nav-item">
  <div class="dropdown">
  <input className="btn" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" value=" School Exam">
   
  </input>
  <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
    <Link class="dropdown-item" to="/cbse">  CBSE </Link> 
    <Link class="dropdown-item" to="/isc">  ISC </Link> 
    <Link class="dropdown-item"to="/stateboard">  State Board</Link> 
  </div>
</div>
  </li>
  <li class="nav-item">
  <div class="dropdown">
  <input  className="btn" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" value="Competative Exam">
  </input>
  <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
    <Link to="/ssc" class="dropdown-item" >SSC </Link>
    <Link to="/railways" class="dropdown-item" >Railway</Link>
    <Link to="/defence" class="dropdown-item" >Defence</Link>
    <Link to ="/jee"class="dropdown-item" >JEE</Link>
    <Link to="/neet" class="dropdown-item">NEET</Link>
  </div>
</div>
  </li>
  <li class="nav-item">
  <div class="dropdown">
  <input  className="btn" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" value="University Exam">
   
  </input>
  <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
    <Link to="/aktu" class="dropdown-item" >AKTU </Link>
    <Link to="/niit" class="dropdown-item" >NIIT</Link>
    <Link to="/iit" class="dropdown-item" >IIT</Link>
  </div>
</div>
  </li>
  
</ul>
</nav>

        </div>
        <Switch>
            <Route path="/" exact component={Home}/>
            <Route path="/cbse" exact component={Cbse}/>
            <Route path="/isc" exact component={Isc}/>
            <Route path="/stateboard" exact component={StateBoard}/>
            <Route path="/ssc" exact component={SSC}/>
            <Route path="/defence" exact component={Defence}/>
            <Route path="/railways" exact component={Railways}/>
            <Route path="/jee" exact component={JEE}/>
            <Route path="/neet" exact component={Neet}/>
            <Route path ="/aktu" exact component={Aktu}/>
            <Route path ="/niit" exact component={Niit}/>
            <Route path ="/iit" exact component={IIT}/>

        </Switch>
         </Router>
        
    )
}
export default Navbar;


