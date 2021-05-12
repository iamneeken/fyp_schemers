import React from 'react'
import {  useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import CheckoutSteps from './CheckoutSteps'
import { Link } from 'react-router-dom'
import Loader from '../Loader'
import Message from '../Message'

import { saveShippingAddress } from '../actions/cartActions'

function ShippingScreen({history}) {

    const cart = useSelector(state => state.cart)
    const {shippingAddress} = cart

    const dispatch = useDispatch()

    const [address, setAddress]  = useState(shippingAddress.address)// Address
    const [city, setCity]  = useState(shippingAddress.city)//City
    const [postalCode, setPostalCode]  = useState(shippingAddress.postalCode)//Postal Code
    const [street, setStreet]  = useState(shippingAddress.street)//Street Name

    const submitHandler = (e) => {
        e.preventDefault()
        dispatch(saveShippingAddress({address, city, postalCode, street}))
        history.push('/payment')
    }
    
    return (
        
        <div className='containerShipping'>
            <h1>Shipping</h1>
            <CheckoutSteps/>
            
            <form onSubmit={submitHandler}>
                {/* onSubmit={submitHandler} */}
                Enter Address:
                <div className="input-field" id='address'>
                    <i className="fas fa-map"> </i>
                    
                    <input 
                        type="text" 
                        value={address ? address : " "}
                        placeholder='Enter Address' 
                        onChange={(e) => setAddress(e.target.value)}
                        required
                    />
                </div>
                Enter City:
                <div className="input-field" id='city'>
                    <i className="fas fa-map"> </i>
                    <input 
                        type="text" 
                        value={city ? city : " "}
                        placeholder='Enter City' 
                        onChange={(e) => setCity(e.target.value)}
                        required
                    />
                </div>
                Enter Postal Code:
                <div className="input-field" id='postalCode'>
                    <i className="fas fa-code"> </i>
                    <input 
                        type="text" 
                        value={postalCode ? postalCode : " "}
                        placeholder='Enter postalCode' 
                        onChange={(e) => setPostalCode(e.target.value)}
                        required
                    />
                </div>

                Enter Street:
                <div className="input-field" id='street'>
                    <i className="fas fa-map"> </i>
                    <input 
                        type="text" 
                        value={street ? street : " "}
                        placeholder='Enter Address' 
                        onChange={(e) => setStreet(e.target.value)}
                        required
                    />
                </div>

                <button type="submit">Ship</button>

            </form>
            
        </div>
    )
}

export default ShippingScreen
