import { useState, useEffect } from 'react'
import './App.css'
import FollowersDashboard from './components/followersDashboard/FollowersDashboard'
import OverviewDashboard from './components/overviewDashboard/OverviewDashboard'
import Header from './components/header/Header'

function App() {
  const [theme, setTheme] = useState('')

  const toggleTheme = () => {
    setTheme((curr) => (curr === 'light' ? 'dark' : 'light'))
    const mode = localStorage.getItem('isDarkMode')
    if (mode === 'true') {
      localStorage.setItem('isDarkMode', false)
    } else {
      localStorage.setItem('isDarkMode', true)
    }
  }

  useEffect(() => {
    setDarkMode()
  }, [])

  const setDarkMode = () => {
    const mode = localStorage.getItem('isDarkMode')
    if (mode === 'true') {
      setTheme('dark')
      document.getElementById('slider').checked = true
    } else {
      setTheme('light')
      document.getElementById('slider').checked = false
    }
  }

  return (
    <div id={theme} data-theme={theme} className="page">
      <Header toggleTheme={toggleTheme} theme={theme} />

      <FollowersDashboard />

      <OverviewDashboard />
    </div>
  )
}

export default App
