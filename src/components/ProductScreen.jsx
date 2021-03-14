import React, {useState, useEffect} from 'react';
import axios from 'axios'

import './productScreen.css';


function ProductScreen({ match }) {

    const [product, setProduct] = useState([])

    //Use effect fires up everytime whenever components loads or one of the state values is updated
    useEffect(()=>{

        async function fetchProduct(){
            
            
            const {data} =  await axios.get(`http://127.0.0.1:8000/api/products/${match.params.id}`)
            setProduct(data)
            console.log(data)
        }

        fetchProduct()
       
    }, [])

    return (
        <div>
            <nav class="breadcrumb">
            <ul class="container">
                <li>
                    <a class="has-text-grey">Products</a>
                </li>
                <li>
                    <a class="has-text-grey">Men</a>
                </li>
                <li class="is-active">
                    <a>Shoes</a>
                </li>
            </ul>
        </nav>

        {product.name}

        </div>
    )
}

export default ProductScreen
