import React from 'react';
import { fakeFood } from '../../fakeFood';
import FoodItem from '../FoodItem/FoodItem';

const Breakfast = () => {
    const breakfastFoods = fakeFood.filter((food) => food.category === "breakfast");
    // console.log(lunchFoods);
    // const temp = fakeFood;
    // console.log(temp.category);
    return (
        <div className="container">
            <div className="row">
                {
                    breakfastFoods.map(food => <FoodItem key={food.id} food={food}></FoodItem>)
                }
            </div>
        </div>
    );
};

export default Breakfast;