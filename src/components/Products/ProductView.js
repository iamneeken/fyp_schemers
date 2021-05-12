import React from 'react';
import {Link} from 'react-router-dom';

import './products.css';
import Rating from '../Ratings/Rating';



function ProductView( { product } ) {
    return (
        <div>
            <div className='card'>
                <Link to={`/product/${product._id}`} > 
                    <img src={product.image} className='img'/>
                </Link>

                <Link to={`/product/${product._id}`} 
                style= {{color: '#4F4F4F', textDecoration : 'none'}}>
                    <h3>{product.name}</h3>
                </Link>
                
                <div>
                    <div>
                        <Rating value={product.rating} 
                        text={`${product.numReviews} reviews`} 
                        color={'#f8e825'}/>
                    </div>
                </div>
                    <p class="price">Rs.{product.price}</p>
                    
            </div>
        </div>

    )
}

export default ProductView;
