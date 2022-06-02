import React from 'react'
import TableHeader from './TableHeader'
import TableRow from './TableRow'

const ResultTable = ({ onClick }) => {

    const data = [
        {
            image: 'https://target.scene7.com/is/image/Target/GUEST_d768bb00-04fe-44ae-a712-d2502c429f5e?wid=488&hei=488&fmt=pjpeg',
            product: 'Honey Nut Cherios',
            brand: 'General Mills',
            onHand: 49,
            perCase: 12,
            price: 3.49,
            salePrice: 1.70
        },
        {
            image: 'https://target.scene7.com/is/image/Target/GUEST_d768bb00-04fe-44ae-a712-d2502c429f5e?wid=488&hei=488&fmt=pjpeg',
            product: 'Honey Nut Cherios',
            brand: 'General Mills',
            onHand: 49,
            perCase: 12,
            price: 3.49,
            salePrice: 1.99
        },
        {
            image: 'https://target.scene7.com/is/image/Target/GUEST_d768bb00-04fe-44ae-a712-d2502c429f5e?wid=488&hei=488&fmt=pjpeg',
            product: 'Salmon',
            brand: 'Whole Foods',
            onHand: 49,
            perCase: 12,
            price: 3.49,
            salePrice: 1.99
        },
        {
            image: 'https://target.scene7.com/is/image/Target/GUEST_d768bb00-04fe-44ae-a712-d2502c429f5e?wid=488&hei=488&fmt=pjpeg',
            product: 'Frosted Flakes',
            brand: 'Kellogs',
            onHand: 49,
            perCase: 12,
            price: 3.49,
            salePrice: 1.99
        }
    ]

  return (
    <table className="table-auto text-center ml-auto mr-auto mt-8 w-full">
        <TableHeader />
        <tbody>
            {data.map((item, index) => (
                <TableRow onClick={() => onClick(item)} key={index} item={item} />
            ))}
        </tbody>
    </table>
  )
}

export default ResultTable