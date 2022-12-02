import React from "react";
import "../index.css"

const Card = (props)=>{
    return(
        <div className="news-container" onClick={()=>{
            window.location.href= props.item.url;
        }}>
            <h3 className="news-title">{props.item.title}</h3>
            <img src={props.item.imageUrl} alt="image" className="news-image" />
            <p>{props.item.summary}</p>
        </div>
    )   
}

export default Card;