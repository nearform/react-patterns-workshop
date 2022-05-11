import { createContext, useContext } from 'react'

export const ThemeContext = createContext(null)

export const useTheme = () => {
  return useContext(ThemeContext)
}
