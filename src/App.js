import React from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Navbar from "./Components/Navbar";
import "@popperjs/core";

function App() {
  return (
    <div className="App">
       <div><Navbar/>  </div>
      <div className="footer">
        <p> Copyright @ JBB</p>  </div>
    </div>
  );
}

export default App;
