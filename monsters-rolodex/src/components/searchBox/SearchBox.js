import './SearchBox.css'
import React from 'react'

export const SearchBox = ({placeholder, handleChange}) => (
  <input 
    className="search"
    type="search"
    placeholder= {placeholder}
    handleChange= {handleChange}
  />
)