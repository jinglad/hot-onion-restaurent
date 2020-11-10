import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../Image/logo2.png';

const Navbar = () => {
    return (
        <div className="container-fluid my-3">
            <nav className="navbar navbar-expand-lg navbar-light">
                <Link to="/" className="navbar-brand ml-5" href="#">
                    <img src={logo} className="w-25" alt="" />
                </Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <a className="nav-link mr-3 text-dark" href="#">Login</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link btn-pink" href="#">SignUp</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;