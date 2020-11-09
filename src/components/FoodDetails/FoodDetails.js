import React from 'react';
import { useParams } from 'react-router-dom';
import { fakeFood } from '../../fakeFood';
import './FoodDetails.css';

const FoodDetails = () => {
    const { foodID } = useParams();
    const foodDetails = fakeFood.find(food => food.id === foodID);
    console.log(foodDetails);

    const { title, Description, price, img } = foodDetails;
    console.log(Description);
    return (
        <div className="container">
            <div className="row d-flex align-items-center">
                <div className="col-md-6">
                    <h1>{title}</h1>
                    <p>{Description}</p>
                    <div className="d-flex">
                        <div className="mr-5 mt-2">
                            <h2>${price}</h2>
                        </div>
                        <div className="food_counter">
                            <h3><span className="mr-3">-</span><span>0</span><span className="ml-3">+</span></h3>
                        </div>
                    </div>
                    <button className="add_btn">Add</button>
                </div>
                <div className="col-md-6">
                    <div>
                        <img src={img} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FoodDetails;