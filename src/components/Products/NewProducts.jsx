import React from 'react'
import Products from './Products'
import SearchBar from '../SearchBar'

function NewProducts() {
    return (
        <div>
            
            <SearchBar/>
            <h3 className='newRelease'>PRODUCTS</h3>
            <Products/>
            
        </div>
    )
}

export default NewProducts
