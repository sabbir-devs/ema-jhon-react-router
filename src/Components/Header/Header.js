import React from 'react';
import './Header.css'
import img from '../../images/Logo.svg'
import { Link } from 'react-router-dom';
import { HiShoppingCart } from "react-icons/hi";

const Header = () => {
    return (
        <div className='header'>
            <Link to="/"><img src={img} alt="" /></Link>
            <nav className='nav'>
                <Link className='link-button' to="/">Home</Link>
                <Link className='link-button' to="/shope">Product</Link>
                <Link className='link-button' to="/about">About</Link>
                <Link className='link-button' to="/contact">Contact</Link>
                <Link className='link-button' to=""><HiShoppingCart style={{fontSize:'25px'}}></HiShoppingCart> <sub className="sum">0</sub> </Link>
            </nav>
        </div>
    );
};

export default Header;