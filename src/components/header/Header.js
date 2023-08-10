import React from 'react'
import './Header.css'
import Toggle from '../toggle/Toggle'

const Header = ({ toggleTheme, theme }) => {
  return (
    <div className="header-container">
      <div className="header-inner-container">
        <section className="title-section">
          <h1>Social Media Dashboard</h1>
          <p> Total Followers: 23,004</p>
        </section>
        <section className="toggle-section">
          <Toggle toggleTheme={toggleTheme} theme={theme} />
        </section>
      </div>
    </div>
  )
}

export default Header
