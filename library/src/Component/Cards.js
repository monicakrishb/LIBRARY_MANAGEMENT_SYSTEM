import React from "react";
// import list from "./data";

const Cards=({item})=>{
    const{title,author,img}=item;
    return(
        <div className="cards"> 
        <div className="image_box">
         <img src={img}alt=""/>
          </div>
          <div className="details"></div>
        <p>{title}</p>
         <p>{author}</p>
          <button>Add to cart</button>
          </div>  
    )
}
export default Cards;