import React,  {  useState, useEffect } from 'react';

import { Link } from 'react-router-dom'
import { Redirect } from 'react-router'
import { useDispatch, useSelector } from 'react-redux'

import Loader from '../Loader'
import Message from '../Message'

import { login } from '../actions/userActions'

import loginPic from './login.svg';

import './Login.css';



function Login({location, history}) {


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
                            className='btn transparent'  className= 'd-none'
                            id='sign-up-btn' 
                            
                            
                            >Sign up</button>
                            <Link 
                            to="/register"
                            className='btn transparent'  
                            >
                            Sign up</Link>
                        </div>
                        <img src={loginPic} className='imageSVG' alt=""/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login;
