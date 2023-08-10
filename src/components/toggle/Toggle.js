import React from 'react'
import './Toggle.css'

const Toggle = ({ toggleTheme, theme }) => {
  return (
    <div className="toggle-container">
      <p>{theme.charAt(0).toUpperCase() + theme.slice(1)} Mode</p>
      <label className="switch">
        <input type="checkbox" onChange={toggleTheme} id="slider" />
        <span className="slider round"></span>
      </label>
    </div>
  )
}

export default Toggle
