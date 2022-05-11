import { useMemo, useState } from 'react'
import { ThemeContext } from '../../context/ThemeContext'

export const ThemeProviderSolution = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(false)
  const value = useMemo(
    () => ({
      isDarkMode,
      toggleDarkMode: () => {
        setIsDarkMode(current => !current)
      }
    }),
    [isDarkMode]
  )
  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
}
