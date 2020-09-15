import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <div className="bg_header d-flex align-items-center justify-content-center">
            <div>
                <h1>Best Food Waiting For Your Belly</h1>
                <form>
                    <input type="text" placeholder="Search food items" />
                    <button>Search</button>
                </form>
            </div>
        </div>
    );
};

export default Header;