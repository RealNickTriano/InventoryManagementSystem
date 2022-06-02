import React from 'react'
import { BsBackspaceReverseFill } from "react-icons/bs";
import Button from './Button';

const ItemView = ({ item, onClick }) => {
  return (
    <div className='bg-white rounded-md shadow-md fixed p-4 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2/3'>
      <div className='rounded-lg bg-rose-50 p-6'>
        <div className="flex justify-end items-center">
          <h1 className='font-bold text-3xl text-center ml-auto'>{item.product}</h1>
          <button className='ml-auto' onClick={onClick}>
            <BsBackspaceReverseFill size={28} className='text-red-600'/>
          </button>
        </div>
        <img className='my-6 mx-auto' src={item.image} alt="" />

        <h1 className='text-center my-4 text-xl font-medium underline'>Prices</h1>
        <ul className='flex justify-around items-center my-4 font-medium'>
          <li>Price: ${item.price}</li>
          <li>Special: ${item.salePrice.toFixed(2)}</li>
        </ul>

        <h1 className='text-center my-4 text-xl font-medium underline'>Previous Order</h1>
        <ul className='flex justify-around items-center my-4 font-medium'>
          <li>Order ID: 10164</li>
          <li>ArrivalTime: 2022-05-16 16:45:23</li>
          <li>Cost: $10260.60</li>
          <li>Quantity: 200</li>
        </ul>

        <h1 className='text-center my-4 text-xl font-medium underline'>Future Order</h1>
        <ul className='flex justify-around items-center my-4 font-medium'>
          <li><Button text='Place Order' bgColor='bg-lime-400' bgColorHover='hover:bg-lime-600' /></li>
        </ul> 
      </div>
    </div>
  )
}

export default ItemView