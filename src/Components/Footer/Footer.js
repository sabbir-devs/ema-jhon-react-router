import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css'
import { FaFacebookF, FaInstagram, FaDribbble, FaTwitter } from 'react-icons/fa';

const Footer = () => {
    return (
        <div className='footer'>
            <div className='icons'>
                <Link to="" className='media-icons'><FaFacebookF></FaFacebookF></Link>
                <Link to="" className='media-icons'><FaInstagram></FaInstagram></Link>
                <Link to="" className='media-icons'><FaDribbble></FaDribbble></Link>
                <Link to="" className='media-icons'><FaTwitter></FaTwitter></Link>
            </div>
            <div>
                <p>&copy; Copyright protected</p>
            </div>
        </div>
    );
};

export default Footer;