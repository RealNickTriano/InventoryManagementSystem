import React from 'react'

const Button = ({ text, bgColor, bgColorHover, onClick, shape }) => {
  return (
    <>
        <button 
          onClick={onClick}
          className={`${bgColor} rounded-lg  py-2 px-4 text-center text-black font-bold hover:text-white ${bgColorHover}`}>
          {text}
        </button>
    </>
  )
}



export default Button