import React from 'react';
import { Link } from 'react-router-dom';
import './FoodItem.css';

const FoodItem = (props) => {
    const { title, img, price, shortDescription, id } = props.food;
    return (
        <div className="col-md-4">
            <Link className="text-decoration-none text-dark" to={"/food-details/" + id}>
                <div className="food_item text-center">
                    <img src={img} className="img-fluid" alt="" />
                    <div className="mt-3">
                        <h6>{title}</h6>
                        <p><small>{shortDescription}</small></p>
                        <h4>${price}</h4>
                    </div>
                </div>
            </Link >
        </div>
    );
};

export default FoodItem;