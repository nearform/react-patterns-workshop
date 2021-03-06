import { memo } from 'react'
import { useTheme } from '../../context/ThemeContext'
import { Button } from '../../components/Button/Button'

export const DarkModeButtonSolution = memo(() => {
  const { toggleDarkMode, isDarkMode } = useTheme()

  console.log('Dark mode button rendered')

  return (
    <Button variant="ghost" onClick={toggleDarkMode}>
      {isDarkMode ? 'Light mode' : 'Dark mode'}
    </Button>
  )
})

DarkModeButtonSolution.displayName = 'DarkModeButtonSolution'
