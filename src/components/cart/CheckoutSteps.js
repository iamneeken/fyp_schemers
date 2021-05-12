import React from 'react'
import {Link} from 'react-router-dom'
import './checkOutSteps.css'

function CheckoutSteps(step1, step2, step3, step4) {
    return (
        <div>
            <ul className='justify-content-center mb-4' className='nav'>
                <ul className="nav">
                    <li className='nav-item'>
                        {step1 ? (
                            <Link to='/login'>
                            Login
                            </Link>
                        ) : (
                            <Link to='/login' className="disabled" 
                            onClick={ (event) => event.preventDefault() }
                            style={{cursor: "not-allowed"}}>
                            Login
                            </Link>
                        )}
                    </li>
                    <li className='nav-item'>
                        {step2 ? (
                            <Link to='/shipping'>
                            Shipping
                            </Link>
                        ) : (
                            <Link to='/shipping' 
                            onClick={ (event) => event.preventDefault() }
                            style={{cursor: "not-allowed"}}
                            >
                            Shipping
                            </Link>
                        )}
                    </li>
                    <li className='nav-item'>
                        {step3 ? (
                            <Link to='/payment'>
                            Payment
                            </Link>
                        ) : (
                            <Link to='/payment' 
                            onClick={ (event) => event.preventDefault() }
                            style={{cursor: "not-allowed"}}
                            >
                            Payment
                            </Link>
                        )}
                    </li>
                    <li className='nav-item'>
                        {step4 ? (
                            <Link to='/placeorder'>
                            Place Order
                            </Link>
                        ) : (
                            <Link to='/placeorder' 
                            onClick={ (event) => event.preventDefault() }
                            style={{cursor: "not-allowed"}}
                            >
                            Place Order
                            </Link>
                        )}
                    </li>
                </ul>
                

            </ul>
            
        </div>
    )
}

export default CheckoutSteps
