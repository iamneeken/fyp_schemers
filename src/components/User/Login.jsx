import React,  {  useState, useEffect } from 'react';

import { Link } from 'react-router-dom'
import { Redirect } from 'react-router'
import { useDispatch, useSelector } from 'react-redux'

import Loader from '../Loader'
import Message from '../Message'

import { login } from '../actions/userActions'

import loginPic from './login.svg';
import registerPic from './register.svg';
import './Login.css';
// import {sign_in_btn, sign_up_btn}  from './Transition.js';
// import {goto_signup} from "./signup.js";



function Login({location, history}) {

    // useEffect(() => {
    //     // Update the document title using the browser API
    //     goto_signup(window.location.href,document.getElementById("sign-up-btn"),document.getElementById("sign-in-btn")); 
    //   });

    const [email, setEmail]  = useState('')
    const [password, setPassword]  = useState('')

    const dispatch = useDispatch()

    const redirect = location.search ? location.search.split('?')[1] : '/'

    const userLogin = useSelector(state => state.userLogin)
    const {error, loading, userInfo} = userLogin

    useEffect(()=>{
        if(userInfo){
            history.push(redirect)
        }
    },[history, userInfo, redirect])

    const submitHandler= (e) => {
        e.preventDefault()
        dispatch(login(email, password))
    }

    return (
        <div>
            <div className="containerLogin">
                <div className="forms-container">
                    <div className="signin-signup">
                    <form onSubmit={submitHandler} className="sign-in-form">

                        <h2 className="title">Sign In</h2>
                        {error && < Message>{error}</Message>}
                        {loading && <Loader/>}

                        <div className="input-field" id='email'>
                            <i className="fas fa-user"> </i>
                                <input 
                                type="email" 
                                value={email}
                                placeholder='Enter Email Address' 
                                onChange={(e) => setEmail(e.target.value)}/>
                        </div>

                        <div className="input-field" id='password'>
                            <i className="fas fa-lock"> </i>
                                <input 
                                type="password" 
                                value={password}
                                placeholder='Enter Password'
                                onChange={(e) => setPassword(e.target.value)}
                                />
                        </div>
                        <input type="submit" value='Sign In' className='btnLogin solid'/>
                    
                    </form>
                    </div>
                </div>
                <div className="panels-container">
                    <div className="panel left-panel">
                        <div className="content">
                            <h3>New Here?</h3>
                            <p>Join the Schemers Family!</p>
                            <button 
                            //to={redirect ? `/register?redirect=${redirect}` : '/register'} 
                            className='btn transparent'  className= 'd-none'
                            id='sign-up-btn' 
                            
                            
                            >Sign up</button>
                            <Link 
                            // to={redirect ? `/register?redirect=${redirect}` : '/register'} //how to fix this?
                            to="/register"
                            className='btn transparent'  
                            >
                            Sign up</Link>
                        </div>
                        <img src={loginPic} className='image' alt=""/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login;
