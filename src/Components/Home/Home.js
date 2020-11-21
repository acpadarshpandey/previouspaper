import React from "react";
import imgs from "../../imgers/home.jpg"
import "./home.css"
const Home=()=>{
    return(
        <div>
            <img src={imgs} className="imgs" alt={"logo"}></img>
            <h3>Home PAge</h3>
          
        </div>
    )
}
export default Home;