import React from 'react';
import './FoodItem.css';

const FoodItem = (props) => {
    const { title, img, price, description } = props.food;
    return (
        <div className="food_item col-md-4 text-center">
            <img src={img} alt="" />
            <div className="mt-3">
                <h6>{title}</h6>
                <p><small>{description}</small></p>
                <h4>${price}</h4>
            </div>
        </div>
    );
};

export default FoodItem;