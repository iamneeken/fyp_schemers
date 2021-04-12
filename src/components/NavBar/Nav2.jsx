import React from 'react';
import './Nav2.css';
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <div>
            <nav className='nav2'>
                <div className="wrapper">
                    <div className="logo"><Link to='/'>SCHEMERS</Link></div>
                    <input type="radio" name='slider' id='menu-btn'></input>
                    <input type="radio" name='slider' id="close-btn"></input>
                    <ul className="nav-links">
                        <label for="close-btn" className='btn close-btn'>
                            <i className="fas fa-times"></i>
                        </label>
                        <li> <Link to='/cart/:id'  style= {{color: 'black', textDecoration : 'none',}}><i className='fas fa-shopping-cart'></i></Link></li>
                        <li><Link>NEW RELEASE</Link></li>
                        <li>
                            <Link className='desktop-item'>PRODUCTS</Link>
                            <input type="checkbox" id='showMega'/>
                            <label for="showMega" className='mobile-item'>
                                PRODUCTS (Categories)
                            </label>
                            <div className="mega-box">
                                <div className="content">
                                    <div className="row">
                                        <header>KIDS</header>
                                        <ul className="mega-links">
                                            <li>
                                                <Link>Shirt</Link>
                                            </li>
                                            <li>
                                                <Link>Pant</Link>
                                            </li>
                                            <li>
                                                <Link>Shoes</Link>
                                            </li>
                                        </ul>
                                    </div>    
                                    <div className="row">
                                        <header>MEN</header>
                                        <ul className="mega-links">
                                            <li>
                                                <Link>Shirt</Link>
                                            </li>
                                            <li>
                                                <Link>Pant</Link>
                                            </li>
                                            <li>
                                                <Link>Shoes</Link>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="row">
                                        <header>WOMEN</header>
                                            <ul className="mega-links">
                                                <li>
                                                    <Link>Shirt</Link>
                                                </li>
                                                <li>
                                                    <Link>Pant</Link>
                                                </li>
                                                <li>
                                                    <Link>Shoes</Link>
                                                </li>
                                            </ul>    
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li><Link>SALE</Link></li>
                        <li><Link>CONTACT US</Link></li>
                    </ul>
                    <label for="menu-btn" className='btn menu-btn'> <i className="fas fa-bars"></i> </label>
                </div>
            </nav>
        </div>
    );
}

export default Navbar
