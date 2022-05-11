import { useState } from 'react'
import { ThemeContext } from '../../context/ThemeContext'

export const ThemeProviderChallenge = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(false)
  const value = {
    isDarkMode,
    toggleDarkMode: () => {
      setIsDarkMode(current => !current)
    }
  }
  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
}
