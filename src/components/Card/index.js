import React from "react";
import "../Card/card.css"

function Card(props) {
    return (
        <div className="col-md-2">
            <div className="card"
                value={props.id} onClick={() => props.clicked(props.id)}
            >
                <div>
                    <img alt={props.id} src={props.image} />
                </div>
            </div>
        </div>
    )
}

export default Card