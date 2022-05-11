import { useTheme } from '../../context/ThemeContext'

export const DarkModeButtonChallenge = () => {
  const { toggleDarkMode, isDarkMode } = useTheme()

  return (
    <button onClick={toggleDarkMode}>
      {isDarkMode ? 'Light mode' : 'Dark mode'}
    </button>
  )
}
