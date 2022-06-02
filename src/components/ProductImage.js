import React from 'react'

const ProductImage = ({ image }) => {
  return (
    <>
        <img 
            src={image} 
            alt="product" 
            className="w-16"
        />
    </>
  )
}

export default ProductImage