import React from 'react';
import {  useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

import './Register.css';

import Loader from '../Loader'
import Message from '../Message'
import { register } from '../actions/userActions'
import registerPic from './register.svg';


function Register({location, history}) {


    const [name, setName]  = useState('')
    const [email, setEmail]  = useState('')
    const [password, setPassword]  = useState('')
    const [conformPassword, setconformPassword]  = useState('')
    const [message, setMessage]  = useState('')

    const dispatch = useDispatch()

    const redirect = location.search ? location.search.split('?')[1] : '/'

    const userRegister = useSelector(state => state.userRegister)
    const {error, loading, userInfo} = userRegister

    useEffect(()=>{  //Checking if user is still logged in
        if(userInfo){
            history.push(redirect)
        }
    },[history, userInfo, redirect])

    const submitHandler= (e) => {
        e.preventDefault()
        if(password != conformPassword){
            setMessage('Passwords do not match')
        }
        else{
            dispatch(register(name,email, password))
        }
    }

    return (
        
        <div>

            {/* Registration Form */}
            <div className="containerRegister">
                <div className="register-container">
                    <div className="signin-signup">
                        <form onSubmit={submitHandler} className="sign-up-form">

                            <h2 className="title">Sign Up</h2>

                            {message && <Message>{message}</Message>}
                            {error && < Message>{error}</Message>}
                            {loading && <Loader/>}
                            
                            <div className="input-field" id='name'>
                                <i className="fas fa-user"> </i>
                                <input 
                                    type="name" 
                                    value={name}
                                    placeholder='Enter user name' 
                                    
                                    onChange={(e) => setName(e.target.value)}
                                    required
                                />
                            </div>

                            <div className="input-field" id='email'>
                                <i className="fas fa-envelope"> </i>
                                <input 
                                    type="email" 
                                    value={email}
                                    placeholder='Enter Email Address' 
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                />
                            </div>


                            <div className="input-field" id='password'>
                                <i className="fas fa-lock"> </i>
                                <input 
                                    type="password" 
                                    value={password}
                                    placeholder='Enter Password'
                                    onChange={(e) => setPassword(e.target.value)}
                                    required
                                />
                            </div>

                            <div className="input-field"  id='conformPassword'>
                                <i className="fas fa-lock"> </i>
                                <input 
                                    type="password" 
                                    value={conformPassword}
                                    placeholder='Conform Password'
                                    onChange={(e) => setconformPassword(e.target.value)}
                                    required
                                />
                            </div>

                           
                            {/* <div className="gender">
                                <input type="radio" id='male' name='gender' value='male'/>
                                <label style={{marginLeft:9}} for="male">Male</label>
                                <i className="fas fa-mars" style={{marginLeft:7}}></i>


                                <input type="radio" id='female' name='gender' value='female' style={{marginLeft:9}}/>
                                <label style={{marginLeft:9}} for="male">Female</label>
                                <i className="fas fa-venus" style={{marginLeft:7}}></i>


                                <input type="radio" id='otherGender' name='gender' value='otherGender' style={{marginLeft:9}}/>
                                <label style={{marginLeft:9}} for="male">Other</label>
                            </div> */}

                            <input type="submit" value='Sign Up' className='btnRegister solid'/>
                        </form>

                    </div>
                </div>

                <div className="panels-container">
                    <div className="panel left-panel">
                        <div className="content">
                            <h3>One of us?</h3>
                            <p>Login to your account!</p> 
                            <button 
                            className='btn transparent  d-none' 
                            id='sign-in-btn' 
                            >
                            Sign in
                            </button>
                            <Link 
                            className='btn transparent ' 
                            to='/login'
                            >
                            Sign in
                            </Link>
                        </div>
                        <img src={registerPic} className='imageSVG' alt=""/>
                    </div>
                </div>
             </div>
        </div>
    )
}

export default Register;
