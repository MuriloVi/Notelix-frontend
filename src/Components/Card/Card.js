import React from 'react'
import './Card.css'

function Card(props) {

    return (
        <div className="card-box">
            <div className="card-content">
                <h2>{props.title}</h2>
                <p>{props.text}</p>
            </div>

        </div>
    )
}

export default Card