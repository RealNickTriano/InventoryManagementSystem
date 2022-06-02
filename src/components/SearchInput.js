import React from 'react'

const SearchInput = ({ name, placeholder, onChange }) => {

  return (
    <>
        <input 
            name={name}
            type="text" 
            placeholder={placeholder}
            onChange={onChange} 
            className="bg-slate-100 placeholder:text-black font-medium border-b-2 border-black focus:outline-none"
        />
    </>
  )
}

export default SearchInput