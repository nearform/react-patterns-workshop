import { createContext, useContext, useState } from 'react'

export const DialogContext = createContext(null)

export const DialogProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false)
  const value = {
    isOpen,
    setIsOpen,
    toggle: () => {
      setIsOpen(current => !current)
    }
  }
  return (
    <DialogContext.Provider value={value}>{children}</DialogContext.Provider>
  )
}

export const useDialogContext = () => {
  return useContext(DialogContext)
}
