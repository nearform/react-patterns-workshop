import { useMemo, useState } from 'react'
import { DialogContext } from '../../context/DialogContext'

export const DialogProviderSolution = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false)

  const value = useMemo(
    () => ({
      isOpen,
      setIsOpen,
      toggle: () => {
        setIsOpen(current => !current)
      }
    }),
    [isOpen]
  )

  return (
    <DialogContext.Provider value={value}>{children}</DialogContext.Provider>
  )
}
