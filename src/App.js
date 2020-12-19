import React from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Navbar from "./Components/Navbar";
import Footer from "./Components/footer/footer";
import "@popperjs/core";

function App() {
  return (
    <div className="App">
       <div><Navbar/>  
     <div>
       <Footer/>
     </div>
    </div>
    </div>
  );
}

export default App;
