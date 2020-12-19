import React from "react"
import "./State Board.css"
import sb from "../../imgers/up board.jpeg"
import Card from "../Display/card"
const StateBoard=()=>{
    return(
        <div>
          
            <div className="navs"> 
            <h2> Welcome to State Board</h2>
               State Board
            <p1> Download all Class 10th and Class 12th previous year question paper of all Board </p1></div>
             <h4>Uttar Pradesh Board</h4>
             <div> </div>
             <div className="card">
                 <div style= {{"font-family":"sans-serif" ,margin:"10px",marginRight:"10px",display:"flex",justifyContent:"centre",float:"center"}}> 
                 <Card img ={sb} linkname={"Open question"} link={"/10"}title={"Class 10"} body={"Here You will get all previous year question paper of class 10th up board"}/>
             <Card img ={sb} linkname={"Open question"} link={"/12"}title={"Class 12"} body={"Here You will get all previous year question paper of class 12th up board"}/></div>
            
             </div>
            
             </div>
            
            
       
    )
}
export default StateBoard;