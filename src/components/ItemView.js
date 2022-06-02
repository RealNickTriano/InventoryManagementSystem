import React from 'react'

const ItemView = ({ item, onClick }) => {
  return (
    <div className='bg-white shadow-md absolute mx-auto'>
        <h1 className='font-bold text-3xl'>Hello World</h1>
        <button onClick={onClick}>X</button>
        <h1>{item.product}</h1>
        <h1>{item.price}</h1>
        <h1>{item.salePrice}</h1>
    </div>
  )
}

export default ItemView