import React from 'react'
import './styles/card.css'

const Card = () => {
    return (
        <>
    <div className="card-container">
    <div className="card">
             <div className="card-img">
                 <img src="https://wallpapercave.com/wp/wp6201564.jpg" alt="money heist" />
             </div>
             <div className="card-info">
                 <h3>Money Heist</h3>
                 <span>A NETLIX ORIGINAL SERIES</span>
             </div>
             <div className="watch-btn">
                <button><a href="https://www.netflix.com/in/title/80192098" target="_blank" rel="noreferrer">Watch Now</a></button>
             </div>
         </div>
    </div>

        </>
    )
}

export default Card
