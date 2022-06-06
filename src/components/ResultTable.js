import React from 'react'
import TableHeader from './TableHeader'
import TableRow from './TableRow'

const ResultTable = ({ onClick }) => {

    

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