import React from 'react';
import '../assets/css/card.css'

function Card(props) {
    return (
        <React.Fragment>
            <div className="cards">
                <div className="card">
                    <div>
                        <h1 className="titleOfCard">{props.title}</h1>
                        <h2 className="quantity">Cantidad: {props.quantity}</h2>
                        <i className={`fas ${props.icon}`}></i>
                    </div>
                </div>
            </div>

        </React.Fragment>
    )
}

export default Card