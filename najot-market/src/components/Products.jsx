// import axios from 'axios'
import React, { useEffect, useState } from 'react'
// import { toast } from 'react-toastify'
import useProducts from '../hooks/useProducts'
import ProductCards from './ProductCards'
import PlaceholderCards from './PlaceholderCards'

const Products = () => {

    const [products, loading]=useProducts()

    return (
        <div className="container">
            
                {loading ? <PlaceholderCards  /> : <ProductCards products={products}/>}
        
        </div>
    )
}

export default Products
