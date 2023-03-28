import React from 'react'
import { Link } from "react-router-dom"
import { useDispatch } from 'react-redux'

const Cards = ({ products }) => {

  const dispatch = useDispatch()

  function handleAddToCard(product){
    dispatch({type: "ADD_TO_CART", payload : product})
  }
  // console.log(products)
  return (
    <div className='row g-3'>
      {products.map((product) => (
        <div key={product.id} className="col-md-6 col-lg-3 ">
          <div className="card bg-light" aria-hidden="true">
            <img src={product.image} alt={product.title} className="card-image-top placeholder-card-image" />
            <div className="card-body">
              <h5 className="card-title text-truncate">
                {product.title}
              </h5>
              <div className="card-text ">
                <div className="d-flex justify-content-between align-items-center">
                  <span className="text-danger">${product.price}</span>
                  <span> <i className="fa-solid fa-star text-warning"></i> {product.rating.rate} / {product.rating.count}</span>
                </div>
                <p className='product-description my-3'>{product.description}</p>
              </div>
              <div className="d-flex justify-content-around">
                <Link to={`/details/${product.id}`} className="btn btn-primary col-5">
                  Read More
                </Link>
                <button className="btn btn-success col-5" onClick={()=> handleAddToCard(product)}>
                  Add To Card
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>)

}

export default Cards
