import React from 'react';
import {  useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
import { Redirect } from 'react-router'
import { useDispatch, useSelector } from 'react-redux'

import Loader from '../Loader'
import Message from '../Message'

import { login } from '../actions/userActions'

import loginPic from './login.svg';
import registerPic from './register.svg';
import './Login.css';
import {sign_in_btn, sign_up_btn}  from './Transition.js';
import {goto_signup} from "./signup.js";



function Login({location, history}) {

    useEffect(() => {
        // Update the document title using the browser API
        goto_signup(window.location.href,document.getElementById("sign-up-btn"),document.getElementById("sign-in-btn")); 

      });

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
                                    placeholder='Enter Email Address' 
                                    onChange={(e) => setEmail(e.target.value)}/>
                            </div>

                            <div className="input-field" id='password'>
                                <i className="fas fa-lock"> </i>
                                    <input 
                                    type="password" 
                                    placeholder='Enter Password'
                                    onChange={(e) => setPassword(e.target.value)}
                                    />
                            </div>
                            <input type="submit" value='Sign In' className='btnLogin solid'/>
                            

                        </form>

                        <form action="" className="sign-up-form">
                            <h2 className="title">Sign Up</h2>
                            <div className="input-field">
                                <i className="fas fa-user"> </i>
                                    <input type="text" placeholder='Username' required/>
                            </div>

                            <div className="input-field">
                                <i className="fas fa-envelope"> </i>
                                    <input type="text" placeholder='Email' required/>
                            </div>

                            <div className="input-field">
                                <i className="fas fa-envelope"> </i>
                                    <input type="text" placeholder='Conform Email'required/>
                            </div>

                            <div className="input-field">
                                <i className="fas fa-lock"> </i>
                                    <input type="password" placeholder='Password' required/>
                            </div>

                            <div className="input-field">
                                <i className="fas fa-lock"> </i>
                                    <input type="password" placeholder='Conform Password' required/>
                            </div>

                            <div className="input-field">
                            <i className="far fa-calendar-alt"></i>
                                    <input type="date" id="date" placeholder='Enter your date of birth' required/>
                            </div>
                            <div className="gender">
                                <input type="radio" id='male' name='gender' value='male'/>
                                <label style={{marginLeft:9}} for="male">Male</label>
                                <i className="fas fa-mars" style={{marginLeft:7}}></i>


                                <input type="radio" id='female' name='gender' value='female' style={{marginLeft:9}}/>
                                <label style={{marginLeft:9}} for="male">Female</label>
                                <i className="fas fa-venus" style={{marginLeft:7}}></i>


                                <input type="radio" id='otherGender' name='gender' value='otherGender' style={{marginLeft:9}}/>
                                <label style={{marginLeft:9}} for="male">Other</label>
                            </div>
                            <input type="submit" value='Sign Up' className='btnLogin solid'/>
                        </form>
                    </div>
                </div>
                <div className="panels-container">
                    <div className="panel left-panel">
                        <div className="content">
                            <h3>New Here?</h3>
                            <p>Join the Schemers Family!</p>
                            <button 
                            // to={redirect ? `/register?redirect=${redirect}` : '/register'} //how to fix this?
                            // to="/login/#register"
                            className='btn transparent' 
                            id='sign-up-btn' 
                            onClick={sign_up_btn} 
                            >Sign up</button>
                        </div>
                        <img src={loginPic} className='image' alt=""/>
                    </div>

                    <div className="panel right-panel">
                        <div className="content">
                            <h3>One of us?</h3>
                            <p>Login to your account!</p> 
                            <button className='btn transparent' id='sign-in-btn'  onClick={sign_in_btn} >Sign in</button>
                        </div>
                        <img src={registerPic} className='image' alt=""/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login;
