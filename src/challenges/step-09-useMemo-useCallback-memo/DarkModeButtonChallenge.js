import { useTheme } from '../../context/ThemeContext'
import { Button } from '../../components/Button/Button'

export const DarkModeButtonChallenge = () => {
  const { toggleDarkMode, isDarkMode } = useTheme()

  return (
    <Button variant="ghost" onClick={toggleDarkMode}>
      {isDarkMode ? 'Light mode' : 'Dark mode'}
    </Button>
  )
}
