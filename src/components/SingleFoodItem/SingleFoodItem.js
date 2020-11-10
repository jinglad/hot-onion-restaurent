import React from 'react';
import { fakeFood } from '../../fakeFood';
import FoodItem from '../FoodItem/FoodItem';
import Navbar from '../Navbar/Navbar';

const SingleFoodItem = (props) => {

    const foods = fakeFood.filter((food) => food.category === props.food);

    return (
        <div className="container">
            <div className="row">
                {
                    foods.map(food => <FoodItem key={food.id} food={food}></FoodItem>)
                }
            </div>
        </div>
    );
};

export default SingleFoodItem;