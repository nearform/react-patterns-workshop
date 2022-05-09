import { useState } from 'react'
import { DialogContext } from '../../context/DialogContext.js'

export const DialogProviderChallenge = ({ children }) => {
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
