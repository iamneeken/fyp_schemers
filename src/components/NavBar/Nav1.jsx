import React from 'react';
import { Link } from 'react-router-dom';
import './Nav1.css';

function nav1() {
    return (
        <div className='nav1' >
            <nav>
                <ul>
                    <p className='nav1Links'>
                    <li> <Link to="/login" className='hoverText'  style= {{color: 'black', textDecoration : 'none', marginRight: 10}}> LOG IN </Link></li>
                    <li> <Link to="/login/#register" className='hoverText hoverText2' style= {{color: 'black', textDecoration : 'none', marginRight: 15}}>  JOIN US </Link> </li>
                    </p>
                </ul>             
            </nav>
        </div>
    );
}

export default nav1;
