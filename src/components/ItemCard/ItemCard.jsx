import React from "react";
import './ItemCard.scss'

const ItemCard = props => {
    return (
        <div className="ItemCard">
            <p>{props.data}</p>
        </div>
    )
}

export default ItemCard
