import React from 'react'
import User from './User'

const Header = () => {
  return (
    <>
        <h1 className="text-center font-bold text-4xl underline decoration-purple-400">Inventory Management System</h1>
        <div className="flex space-x-10 justify-center items-center mt-5">
            <User />
        </div>
    </>
  )
}

export default Header