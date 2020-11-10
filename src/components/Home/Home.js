import React from 'react';
import Food from '../Food/Food';
import Header from '../Header/Header';
import Navbar from '../Navbar/Navbar';

const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Header></Header>
            <Food></Food>
        </div>
    );
};

export default Home;