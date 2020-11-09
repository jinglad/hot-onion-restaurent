import React, { useState } from 'react';
import Breakfast from '../Breakfast/Breakfast';
import Dinner from '../Dinner/Dinner';
import Lunch from '../Lunch/Lunch';
import './Food.css';

const Food = () => {

    const [food, setFood] = useState("lunch");

    const handleFoodShow = (item) => {
        setFood(item);
    }
    return (
        <div className="container my-5">
            <div className="food_nav my-5 text-center">
                <h5 onClick={() => handleFoodShow('breakfast')} className={food === "breakfast" ? "item active" : "item"}>Breakfast</h5>
                <h5 onClick={() => handleFoodShow('lunch')} className={food === "lunch" ? "item active" : "item"}>Lunch</h5>
                <h5 onClick={() => handleFoodShow('dinner')} className={food === "dinner" ? "item active" : "item"}>Dinner</h5>
            </div>
            <div className="my-5">
                {
                    food === "lunch" && <Lunch></Lunch>
                }
                {
                    food === "breakfast" && <Breakfast></Breakfast>
                }
                {
                    food === "dinner" && <Dinner></Dinner>
                }
            </div>
        </div>
    );
};

export default Food;