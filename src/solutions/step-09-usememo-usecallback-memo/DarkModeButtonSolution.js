import { useTheme } from '../../context/ThemeContext'
import { memo } from 'react'
import { Button } from '../../components/Button/Button'

export const DarkModeButtonSolution = memo(function DarkModeSolution() {
  const { toggleDarkMode, isDarkMode } = useTheme()

  return (
    <Button variant="ghost" onClick={toggleDarkMode}>
      {isDarkMode ? 'Light mode' : 'Dark mode'}
    </Button>
  )
})
