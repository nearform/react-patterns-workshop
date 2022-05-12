import { createContext, useContext, useState } from 'react'

export const ModalContext = createContext(null)

export const ModalProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false)
  const value = {
    isOpen,
    setIsOpen,
    toggle: () => {
      setIsOpen(current => !current)
    }
  }
  return <ModalContext.Provider value={value}>{children}</ModalContext.Provider>
}

export const useModal = () => {
  return useContext(ModalContext)
}
