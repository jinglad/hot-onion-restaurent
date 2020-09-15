import React from 'react';
import { Link } from 'react-router-dom';
import './Food.css';

const Food = () => {
    return (
        <div className="container">
            {/* <h1>this is Food Page</h1> */}
            <div className="food_nav py-5 text-center">
                <Link className="item px-3 mx-3" to="/breakfast">Breakfast</Link>
                <Link className="item px-3 mx-3" to="/lunch">Lunch</Link>
                <Link className="item px-3 mx-3" to="/dinner">Dinner</Link>
            </div>
        </div>
    );
};

export default Food;