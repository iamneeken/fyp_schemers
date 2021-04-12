import React, {useState, useEffect} from 'react';
// import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { listProductDetails } from './actions/productActions'
import './productScreen.css';
import Rating from './Ratings/Rating'
import Loader from './Loader'
import Message from './Message'

function ProductScreen({ match, history  }) {

    // const [product, setProduct] = useState([])
    //Use effect fires up everytime whenever components loads or one of the state values is updated

    const [quantity, setQuantity] = useState(1)
    const dispatch= useDispatch()
    const productDetails= useSelector(state => state.productDetails)// Getting the data from the store.js
    const { loading, error, product} = productDetails //Destructuring to get the data

    useEffect(()=>{

        // async function fetchProduct(){  
        //     const {data} =  await axios.get(`http://127.0.0.1:8000/api/products/${match.params.id}`)
        //     setProduct(data)
        //     console.log(data)
        // }
        // fetchProduct()

        dispatch(listProductDetails(match.params.id))
       
    }, [dispatch, match])

    const addToCartHandler = () => {
        history.push(`/cart/${match.params.id}?quantity=${quantity}`)
    }
    

    return (
        <div>
            <nav class="breadcrumb">
            <ul class="container">
                <li>
                    <a href class="has-text-grey">Products</a>
                </li>
                <li>
                    <a href class="has-text-grey">Men</a>
                </li>
                <li class="is-active">
                    <a href >Shoes</a>
                </li>
            </ul>
        </nav>
        <div>
                {   loading 
                        ?<Loader/> 
                    :error
                        ?<Message>{error}</Message>
                    :(
                        <div className='wrapper' >
                            <div className='imageSide'>
                            <img src={product.image} alt={product.name} />
                            </div>

                            <div className='descriptionSide'>
                            <h1>{product.name}</h1>
                            <div class='ratingSide'>
                                <Rating value={product.rating} text={`${product.numReviews} reviews`} color={'#f8e825'}/>
                            </div>
                            <p>Description: {product.description}</p>
                           
                            </div>

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
                    )

                }
        </div>
        </div>
    )
}

export default ProductScreen
