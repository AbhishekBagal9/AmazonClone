import React from 'react'
import "./Product.css"
const Product = ({title,price,rating,image}) => {
  return (
    <div className='product'>
        <div className="product__info">
            <p>{title}</p>
           <p className="product__price">
            <sup>₹</sup><strong>{price}</strong>
           </p>


       
        <div className="product__rating">
           {
            Array(rating).fill().map((star)=>{
                return <p>⭐</p>
            })
           }
        </div>
        </div>
        <img src={image} alt="" />

        <button className='product__button'>Add to basket</button>
    </div>
  )
}

export default Product