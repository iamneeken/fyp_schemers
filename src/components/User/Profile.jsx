import React from 'react';
import {  useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

import './Register.css';

import Loader from '../Loader'
import Message from '../Message'
import { getUserDetails, updateUserProfile } from '../actions/userActions'
import { USER_UPDATE_PROFILE_RESET } from '../constants/userConstants'

function Profile({history}) {

    const [name, setName]  = useState('')
    const [email, setEmail]  = useState('')
    const [password, setPassword]  = useState('')
    const [conformPassword, setconformPassword]  = useState('')
    const [message, setMessage]  = useState('')

    const dispatch = useDispatch()

    const userDetails = useSelector(state => state.userDetails)
    const {error, loading, user} = userDetails

    const userLogin = useSelector(state => state.userLogin)
    const { userInfo } = userLogin

    const userUpdateProfile = useSelector(state => state.userUpdateProfile)
    const { success } = userLogin

    useEffect(()=>{  //IF userInfo is not there then send to login
        if(!userInfo){
            history.push('/login')
        }else{
            if(!user || !user.name || success){ //Still getting user information
                dispatch({type:USER_UPDATE_PROFILE_RESET})
                dispatch(getUserDetails('profile'))
            }else{
                setName(user.name)
                setEmail(user.email)
            }
        }
    },[dispatch, history, userInfo, user, success ])

    const submitHandler= (e) => {
        e.preventDefault()
        if(password != conformPassword){
            setMessage('Passwords do not match')
        }
        else{
            //Sending data to the backend
           dispatch(updateUserProfile({
                'id':user._id,
                'name':name,
                'email':email,
                'password':password
            }))
            setMessage('')
        }
    }

    return (
        <div className="row"> 
            <div className='col-md-5'>
                <h1>User Profile</h1>

                <form onSubmit={submitHandler} className="sign-up-form">

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
                                    
                                />
                            </div>

                            <div className="input-field"  id='conformPassword'>
                                <i className="fas fa-lock"> </i>
                                <input 
                                    type="password" 
                                    value={conformPassword}
                                    placeholder='Conform Password'
                                    onChange={(e) => setconformPassword(e.target.value)}
                                    
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

                            <input type="submit" value='Update' className='btnRegister solid'/>
                        </form>

            </div>

            {/* <div className='col-md-1'>
                <h1>My orders</h1>
            </div> */}
            
        </div>
    )
}

export default Profile
