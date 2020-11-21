import React from "react"
import "./State Board.css"
import sb from "../../imgers/up board.jpeg"
const StateBoard=()=>{
    return(
        <div>
            <div className="navs"> 
            <h2> Welcome to State Board</h2>
               State Board
            <p1> Download all Class 10th and Class 12th previous year question paper of all Board </p1></div>
             <h4>Uttar Pradesh Board</h4>
             <div style={{display:"flex",marginLeft:"10%" ,marginRight:"10%"}}>
             <div class="card" style={{width:"20rem",height:"25rem"}}>
                 <img src={sb} className="img2" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Class 10</h5>
    <p class="card-text">Here You will get all previous year question paper of class 10th up board </p>
    <a href="#" class="btn btn-primary">Open Questions </a>
  </div>
</div>
<div style={{display:"flex",marginLeft:"10%" ,marginRight:"10%"}}>  
<div class="card" style={{width:"20rem",height:"25rem"}}>
                 <img src={sb} className="img2" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Class 12</h5>
    <p class="card-text">Here You will get all previous year question paper of class 12th up board </p>
    <a href="#" class="btn btn-primary">Open Questions </a>
  </div>
</div> </div>

             </div>
            
            
        </div>
    )
}
export default StateBoard;