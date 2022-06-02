import React from 'react'

const Button = ({ text, bgColor, bgColorHover, onClick }) => {
  return (
    <>
        <button 
          onClick={onClick}
          className={`${bgColor} rounded-full w-24 py-2 text-center text-black font-bold hover:text-white ${bgColorHover}`}>
          {text}
        </button>
    </>
  )
}



export default Button