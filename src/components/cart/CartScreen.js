import React, {useEffect} from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import Message  from '../Message'
import { addToCart, removeFromCart } from '../actions/cartActions'
 
function CartScreen({match, location, history}) {
    const productId = match.params.id
    const quantity = location.search ? Number(location.search.split('=')[1]) : 1 
    //Splitting by = and getting the send index

    const dispatch = useDispatch()

    const cart= useSelector(state => state.cart)
    
    const {cartItems} = cart
    console.log("cartItems: ", cartItems)

    useEffect(() => {
        if(productId){
            dispatch(addToCart(productId, quantity))
        }
    }, [dispatch, productId, quantity])

    const removeFromCartHandler = (id) => {
        dispatch(removeFromCart(id))
    }

    const checkoutHandler = () =>{
        history.push('/shipping') 
    }

    //console.log("quantity: ", quantity) //Uncomment this is u want to see the quantity selected
    return (
        <div className='row'>
            <div className='col-md-8'> 
            {/* This should be big column */}
                <h1>Shopping Cart:</h1>
                { cartItems.length === 0 ? (
                    <Message> 
                        Your cart is Empty <Link to='/'> GO BACK</Link>
                    </Message>
                ) : (

                    <ul className="list-group">
                       {cartItems.map(item => (
                            <li className="list-group-item" key={item.product}>
                                <div>
                                    <div className='col-md-2'>
                                        <img src={item.image} alt={item.name} style= {{height:200, width:200}}/>
                                    </div>
                                    <div className='col-md-3'>
                                        <Link to={`/product/${item.product}`}>{item.name}</Link>
                                    </div>
                                    <div className='col-md-2'>
                                        {item.price}
                                    </div>
                                    <div className='col-md-3'>
                                    <form>
                                    <p>Quantity: </p>
                                        <select name="select" value={item.quantity} 
                                        onChange={(e) => dispatch(addToCart(item.product, Number(e.target.value)))}>
                                            {
                                                [...Array(item.countInStock).keys()].map((x)=>(
                                                    <option key={x+1} value={x+1}>
                                                        {x+1}
                                                    </option>
                                                ))
                                            }

                                        </select>
                                    </form>
                                    </div>
                                </div>
                                <div className='col-md-1'>
                                    <button onClick={()=> removeFromCartHandler(item.product)}><i className='fas fa-trash'></i></button>

                                </div>
                             </li>
                         ))}
                    </ul>
    
                )}
            </div>

            <div className='col-md-4'>
                <div className='card'>
                    <ul className="list-group">
                        <li className="list-group-item"> 
                            <h2>SubTotal ({cartItems.reduce((acc, item) => acc + item.quantity, 0 )}) </h2>
                            Rs.{cartItems.reduce((acc, item) => acc + item.quantity*item.price, 0 ).toFixed(2)}
                        </li>

                        <li className="list-group-item">
                         <button className='btn-block' 
                            disabled={cartItems.length === 0}
                            onClick={checkoutHandler}
                         >
                            Proceed To Checkout
                        </button>                   
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default CartScreen
