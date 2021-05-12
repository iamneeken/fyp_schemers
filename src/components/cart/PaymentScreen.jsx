import React from 'react'
import {  useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import CheckoutSteps from './CheckoutSteps'
import { Link } from 'react-router-dom'
import Loader from '../Loader'
import Message from '../Message'
//import { savePaymentMethod } from '../actions/cartActions'

function PaymentScreen({history}) {
    //Access to the cart
    const cart = useSelector(state => state.cart)
    const {shippingAddress} = cart

    const dispatch = useDispatch()

    const [paymentMethod, setPaymentMethod] = useState('Khalti')

    if(!shippingAddress.address){
        history.push('/shipping')
    }
    const submitHandler = (e) =>{
        e.preventDefault()
        //dispatch(savePaymentMethod(paymentMethod))
        history.push('/placeorder')
    }
    return (
        <div style={{height:500}}>
            <CheckoutSteps step1 step2 step3 />
            {/* <form onSubmit={submitHandler}>
                <div className='form-group'>
                    <label as='legend'>Select Method</label>
                    <div className='col'>
                        <div className="form-check" 
                        type='radio' 
                        label='Paypal or Credit Card'
                        id='paypal'
                        name='paymentMethod'
                        // checked
                        onChange={(e) => setPaymentMethod(e.target.value)}
                        >
                            
                        </div>
                    </div>
                </div>
                <button type='submit'>Continue</button>
            </form> */}

            <h1>Sorry technical issues!</h1>

        </div>
    )
}

export default PaymentScreen
