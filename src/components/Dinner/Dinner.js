import React from 'react';
import { fakeFood } from '../../fakeFood';
import FoodItem from '../FoodItem/FoodItem';

const Dinner = () => {
    const dinnerFoods = fakeFood.filter((food) => food.category === "dinner");
    // console.log(lunchFoods);
    // const temp = fakeFood;
    // console.log(temp.category);
    return (
        <div className="container">
            <div className="row">
                {
                    dinnerFoods.map(food => <FoodItem food={food}></FoodItem>)
                }
            </div>
        </div>
    );
};

export default Dinner;