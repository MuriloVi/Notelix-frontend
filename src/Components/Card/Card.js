import React from 'react'
import './Card.css'

function Card(props) {

    return (
        <div className="card-box">
            <div className="card-content">
                <h2>{props.title}</h2>
                <h3>{props.text}</h3>
            </div>

        </div>
    )
}

export default Card