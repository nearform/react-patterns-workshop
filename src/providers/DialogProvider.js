import { createContext, useContext, useState } from 'react'

const DialogContext = createContext(null)

export const DialogProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState()
  const value = {
    isOpen,
    setIsOpen
  }
  return (
    <DialogContext.Provider value={value}>{children}</DialogContext.Provider>
  )
}

export const useDialog = () => {
  return useContext(DialogContext)
}
