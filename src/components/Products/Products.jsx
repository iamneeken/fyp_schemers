import React, {useState, useEffect} from 'react';
// import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import ProductView from './ProductView';
import './products.css';
import { listProducts } from '../actions/productActions'
import Loader from '../Loader';
import Message from '../Message';
import SearchBar from '../SearchBar'


import { useHistory } from 'react-router-dom'

function Products(props) 
{
    // const [products, setProducts] = useState([])

    //useEffect() fires up everytime whenever components loads or one of the state values is updated
    let history = useHistory()
    const dispatch = useDispatch()
    const productList= useSelector(state => state.productList)
    const {error, loading, products} = productList
    
    let keyword = history.location.search

    console.log(keyword)
 
    useEffect(()=>{

        // async function fetchProducts(){
            
        //     const {data} =  await axios.get('http://127.0.0.1:8000/api/products/')
        //     setProducts(data)
        //     console.log(data)
        // }
        // fetchProducts()
        dispatch(listProducts(keyword))
    }, [dispatch,keyword])



    return (
        
            <div>
                {/* //<SearchBar/> */}
                
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
