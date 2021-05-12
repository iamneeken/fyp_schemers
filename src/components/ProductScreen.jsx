import React, {useState, useEffect} from 'react';
import { Link }from 'react-router-dom'
// import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { listProductDetails, createProductReview } from './actions/productActions'
import { PRODUCT_CREATE_REVIEW_RESET } from './constants/productConstants'
import './productScreen.css';
import Rating from './Ratings/Rating'
import Loader from './Loader'
import Message from './Message'

function ProductScreen({ match, history  }) {

    // const [product, setProduct] = useState([])
    //Use effect fires up everytime whenever components loads or one of the state values is updated

    const [quantity, setQuantity] = useState(1)

    const [rating, setRating] = useState(0)
    const [review, setReview] = useState('')

    const dispatch= useDispatch()

    const productDetails= useSelector(state => state.productDetails)// Getting the data from the store.js
    const { loading, error, product} = productDetails //Destructuring to get the data

    const userLogin= useSelector(state => state.userLogin)
    const { userInfo } = userLogin 

    const productReviewCreate = useSelector(state => state.productReviewCreate)
    const { loading:loadingProductReview,
            error:errorProductReview,
            success:successProductReview} = productReviewCreate
    useEffect(()=>{

        // async function fetchProduct(){  
        //     const {data} =  await axios.get(`http://127.0.0.1:8000/api/products/${match.params.id}`)
        //     setProduct(data)
        //     console.log(data)
        // }
        // fetchProduct()

        if(successProductReview){
            setRating(0)
            setReview('')
            dispatch({type:PRODUCT_CREATE_REVIEW_RESET})
        }
        dispatch(listProductDetails(match.params.id))
       
    }, [dispatch, match, successProductReview])

    const addToCartHandler = () => {
        history.push(`/cart/${match.params.id}?quantity=${quantity}`)
    }

    //Sending information to the backend
    const submitHandler = (e) =>{
        e.preventDefault()
        dispatch(createProductReview(
            match.params.id,{
                rating,
                review
            }
        ))
    }
    

    return (
        <div>
            {   loading 
                    ?<Loader/> 
                :error
                    ?<Message>{error}</Message>
                :(
                    <div className='wrapper' >
                        <div className='row'>
                            <div className='col-md-6'>
                                <div className='imageSide'>
                                    <img src={product.image} alt={product.name} />
                                </div>
                            </div>
                            <div className='col-md-3'>
                                <div className='descriptionSide'>
                                    <h1>{product.name}</h1>
                                    <div class='ratingSide'>
                                        <Rating value={product.rating} text={`${product.numReviews} reviews`} color={'#f8e825'}/>
                                    </div>
                                    <p>Description: {product.description}</p>
                                </div>
                            </div>
                            <div className='col-md-3'>
                                <div className='buySection'>
                                    <div className='forBorder'>
                                        <p id='priceBorder'
                                        style={{fontSize: "40px"}}>Price: ${product.price}</p>
                                        <p id='stockBorder' 
                                        style={{marginTop: "5px"}}>
                                            Status: {product.countInStock > 0 ? 'In Stock' : 'Out of Stock'}
                                        </p> 

                                        {product.countInStock > 0 && (
                                            <div className='quantitySelector'>
                                                <form>
                                                <p>Quantity: </p>
                                                    <select name="select" value={quantity} onChange={(e) => setQuantity(e.target.value)}>
                                                        {
                                                            [...Array(product.countInStock).keys()].map((x)=>(
                                                                <option key={x+1} value={x+1}>
                                                                    {x+1}
                                                                </option>
                                                            ))
                                                        }

                                                    </select>
                                                </form>
                                            </div>
                                    
                                        )}
                                        <button onClick={addToCartHandler}>Add to Cart</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className='col-md-6'>
                                <div className='reviewSection'> 
                                <h1>Reviews</h1>
                                {product.reviews.length === 0 && <Message>No reviews</Message>}

                                <ul className='list-group'>
                                    {product.reviews.map((review)=> (
                                        <li className='list-group-item' key={review._id}>
                                            <b>{review.name}</b>
                                            <Rating value={review.rating} color='#f8e825'/>
                                            <p>{review.createdAt.substring(0,10)}</p>
                                            <p>{review.comment}</p>
                                        </li>
                                         
                                    ))}
                                    <li className='list-group-item' key={review._id}>
                                        <h4>Write your review</h4>
                                        {loadingProductReview && <Loader/>}
                                        {successProductReview && <Message variant='success'>Review Submitted</Message>}
                                        {errorProductReview && <Message variant='danger'>{errorProductReview}</Message>}

                                        {userInfo ? (
                                            <form onSubmit={submitHandler}>
                                                <div className='form-group' id="rating">
                                                    <label for='rating'>Rating</label>
                                                    <select id='rating' className='form-control' 
                                                    id='rating' 
                                                    
                                                    value={rating}
                                                    onChange={(e) => setRating(e.target.value)}
                                                    >
                                                        <option value="">Select..</option>
                                                        <option value="1">1- Poor</option>
                                                        <option value="2">2- Bad</option>
                                                        <option value="3">3- Not Bad</option>
                                                        <option value="4">4- Good</option>
                                                        <option value="5">5- Very Good</option>
                                                    </select>
                                                </div>
                                                <div className='form-group' id="review">
                                                    <label for="review">
                                                    <textarea
                                                    className="form-control" 
                                                    rows='4'
                                                    cols="50"
                                                    value={review}
                                                    id="review" 
                                                    onChange={(e) => setReview(e.target.value)}
                                                    ></textarea>
                                                    </label>

                                                </div>
                                                <button 
                                                disabled={loadingProductReview}
                                                type='submit'
                                                >Submit</button>
                                            </form>
                                        ):(
                                            <Message><Link to='/login'>Log in </Link>to write a review</Message>
                                        )}
                                    </li>
                                </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    
                    )
                }
        </div>
    )
}

export default ProductScreen
