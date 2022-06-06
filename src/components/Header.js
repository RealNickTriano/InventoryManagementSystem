import React from 'react'

const Header = ({ title }) => {
  return (
    <>
        <h1 
          className="text-center font-bold text-4xl mt-10">
          {title}
        </h1>
        <div className="flex space-x-10 justify-center items-center mt-5">
        </div>
    </>
  )
}

export default Header