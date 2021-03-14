import React from 'react';
import { Link } from 'react-router-dom';
import './Nav1.css';

function Nav3() {
    return (
        <div className='navLinks3'>
                <Link to='/cart'  style= {{color: 'black', textDecoration : 'none', marginRight:20}}><i className='fas fa-shopping-cart'></i>Cart</Link>
                <Link to='/user' style= {{color: 'black', textDecoration : 'none', }}><i className='fas fa-user'></i>User</Link>
      
        </div>
      
    )
}

export default Nav3;
