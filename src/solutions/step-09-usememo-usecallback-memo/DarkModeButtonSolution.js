import { useTheme } from '../../context/ThemeContext'
import { memo } from 'react'

export const DarkModeButtonSolution = memo(function DarkModeSolution() {
  const { toggleDarkMode, isDarkMode } = useTheme()

  return (
    <button onClick={toggleDarkMode}>
      {isDarkMode ? 'Light mode' : 'Dark mode'}
    </button>
  )
})
