import React from 'react'
import '../styles/card.css'



const Card = (props) => {
    return (
        <>
    <div className="card-container">
    <div className="card">
             <div className="card-img">
                 <img src={props.imgsrc} alt="money heist" />
             </div>
             <div className="card-info">
                 <h3> {props.sname} </h3>
                 <span>{props.place} </span>
             </div>
             <div className="watch-btn">
                <button><a href={props.link} target="_blank" rel="noreferrer">Watch Now</a></button>
             </div>
         </div>
    </div>

        </>
    )
}

export default Card
