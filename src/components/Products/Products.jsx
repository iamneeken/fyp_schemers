import React, {useState, useEffect} from 'react';
// import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import ProductView from './ProductView';
import './products.css';
import { listProducts } from '../actions/productActions'
import Loader from '../Loader';
import Message from '../Message';

function Products() 
{
    // const [products, setProducts] = useState([])

    //useEffect() fires up everytime whenever components loads or one of the state values is updated

    const dispatch = useDispatch()
    const productList= useSelector(state => state.productList)
    const {error, loading, products} = productList
    useEffect(()=>{

        // async function fetchProducts(){
            
        //     const {data} =  await axios.get('http://127.0.0.1:8000/api/products/')
        //     setProducts(data)
        //     console.log(data)
        // }

        // fetchProducts()
        dispatch(listProducts())
    }, [dispatch])//Leaving empty array here because we only want this when the component loads not when actual state elements gets updated



    return (
            <div>
                <h3 className='newRelease'>NEW RELEASE</h3>
                { loading  ? <Loader />
                    : error ?  <Message>{error}</Message>  
                    :
                    <div>
                        { products.map(product =>(
                            <div key={product._id} className='cardHolder'>
                                <ProductView  product={product} />
                            </div>
                        ))} 
                    </div>
                }

                
            </div>    
            )
}

export default Products
