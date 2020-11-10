import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import React from 'react';
import { useParams } from 'react-router-dom';
import { fakeFood } from '../../fakeFood';
import Navbar from '../Navbar/Navbar';
import './FoodDetails.css';

const FoodDetails = () => {
    const { foodID } = useParams();
    const foodDetails = fakeFood.find(food => food.id === foodID);
    // console.log(foodDetails);

    const { title, Description, price, img } = foodDetails;
    // console.log(Description);
    return (
        <>
            <Navbar></Navbar>
            <div className="container mt-5 pt-5">
                <div className="row d-flex align-items-center">
                    <div className="col-md-6">
                        <h1 className="fs-45">{title}</h1>
                        <p className="my-4 food-description">{Description}</p>
                        <div className="d-flex">
                            <div className="mr-5 mt-2">
                                <h2>${price}</h2>
                            </div>
                            <div className="food_counter">
                                <h3><span className="mr-3">-</span><span>0</span><span className="ml-3">+</span></h3>
                            </div>
                        </div>
                        <button className="add-btn"><FontAwesomeIcon icon={faShoppingCart} /> Add</button>
                    </div>
                    <div className="col-md-6">
                        <div>
                            <img src={img} className="img-fluid" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default FoodDetails;