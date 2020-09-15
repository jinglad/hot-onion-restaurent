import React from 'react';
import { fakeFood } from '../../fakeFood';
import FoodItem from '../FoodItem/FoodItem';

const Lunch = () => {
    const lunchFoods = fakeFood.filter((food) => food.category === "lunch");
    // console.log(lunchFoods);
    // const temp = fakeFood;
    // console.log(temp.category);
    return (
        <div className="container">
            <div className="row">
                {
                    lunchFoods.map(food => <FoodItem food={food}></FoodItem>)
                }
            </div>
        </div>
    );
};

export default Lunch;