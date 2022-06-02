import React from 'react'
import ProductImage from './ProductImage'
import Button from './Button'

const TableRow = ({ item, onClick }) => {

  return (
    <tr>
        <td>
            <div className="flex justify-center items-center">
                <ProductImage image={item.image}/>
            </div>
        </td>
        <td>{item.product}</td>
        <td>{item.brand}</td>
        <td>{item.onHand}</td>
        <td>{item.perCase}</td>
        <td>${item.price.toFixed(2)}</td>
        <td>${item.salePrice.toFixed(2)}</td>
        <td><Button onClick={onClick} text='View' bgColor='bg-green-200' bgColorHover='hover:bg-green-600'/></td>
    </tr>
  )
}

export default TableRow