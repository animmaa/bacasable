import React from "react";

const Card = ({image_front_small_url}) => {
    return (
        <div className = "Card">
            <div>
            <img src={image_front_small_url} alt="img" />
               
            </div>
        </div>
    )
}

export default Card;