import React from 'react';
import { Link } from 'react-router-dom';
import './Nav1.css';
import { useSelector, useDispatch } from 'react-redux'
import { logout }from '../actions/userActions'


function Nav1() {

    const userLogin = useSelector(state => state.userLogin)
    const {userInfo} = userLogin

    const dispatch = useDispatch()

    const logoutHandler = () =>{
        dispatch(logout())
    }
    return (
        <div className='nav1' >
            <nav>
            <ul>
                    <p className='nav1Links'>
                  
                    {userInfo ? (
                        <div 
                        class="dropdown"
                        title={userInfo.name}
                        id='name'>
                        <Link 
                        class="dropdown-toggle" 
                        // type="button" id="dropdownMenuButton" 
                        title={userInfo.name}
                        data-toggle="dropdown" 
                        aria-haspopup="true" 
                        aria-expanded="false"
                        style= {{color: 'black', 
                        textDecoration : 'none', 
                        marginRight: 15,
                        marginTop:3, 
                        fontSize: 13}}
                        >
                        {userInfo.name}
                        </Link>
                        <div class="dropdown-menu" 
                        aria-labelledby="dropdownMenuButton"
                        
                        >
                          <Link class="dropdown-item" to='/profile'>User Profile</Link>
                          <a class="dropdown-item" onClick={logoutHandler}>Logout</a>

                        </div>
                      </div>
                    ):(
                        <li> <Link to="/login" className='hoverText'  style= {{color: 'black', textDecoration : 'none', marginRight: 10}}> LOG IN </Link></li>
                    )}

                    <li> 
                    <Link to="/register" 
                    className='hoverText hoverText2' 
                    style= {{color: 'black', textDecoration : 'none', marginRight: 15}}>  
                    JOIN US 
                    </Link> 
                    </li>
                    </p>
                </ul>             
            </nav>
        </div>
    );  
}

export default Nav1;
