import React from 'react'
import ProductImage from './ProductImage'
import { Button } from '@mui/material'

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
        <td><Button onClick={onClick}>View</Button></td>
    </tr>
  )
}

export default TableRow