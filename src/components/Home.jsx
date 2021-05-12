import React from 'react';

import Products from './Products/Products';
import Carousel from './Products/Carousel';
import SearchBar from './SearchBar'


function Home() {
    return (
        <div>
            <Carousel/>
            <SearchBar/>
            <Products />      

        </div>
    )
}

export default Home;
