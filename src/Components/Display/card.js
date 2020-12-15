import React from "react"

const Card=(props)=>{
  return (
    <div style={{display:"flex",flexDirection:"column"}}>
    <div className="card" style={{width: "18rem",margin:"2%"}}>
    <img style={{height:"30vh"}} src={props.img} className="card-img-top" alt="..."/>
    <div className="card-body">
  <h5 className="card-title">{props.title}</h5>
  <p className="card-text">{props.body}</p>
      <a href={props.link} className="btn btn-primary">{props.linkname}</a>
    </div>
    </div>
    </div>
  
  )
}
export default Card;

