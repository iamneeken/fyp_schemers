import React, {useState, useEffect} from 'react';
import axios from 'axios'

import ProductView from './ProductView';
import './products.css';


function Products() 
{
    const [products, setProducts] = useState([])

    //useEffect() fires up everytime whenever components loads or one of the state values is updated
    useEffect(()=>{

        async function fetchProducts(){
            
            const {data} =  await axios.get('http://127.0.0.1:8000/api/products/')
            setProducts(data)
            console.log(data)
        }

        fetchProducts()
       
    }, [])
//Empty array here because we only want this when the component loads not when actual state elements gets updated

    return (
        
            <div>
                <h3 className='newRelease'>NEW RELEASE</h3>
                {products.map(product =>(
                    <div key={product._id} className='cardHolder'>
                        <ProductView  product={product} />
                    </div>
                ))}
            </div>    
            )
}

export default Products
