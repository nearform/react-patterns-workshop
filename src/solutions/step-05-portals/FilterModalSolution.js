import { createPortal } from 'react-dom'
import { ModalContainer } from '../../components/ModalContainer/ModalContainer'

export const FilterModalSolution = ({ children }) => {
  if (typeof window !== 'undefined') {
    return createPortal(
      <ModalContainer>{children}</ModalContainer>,
      document.getElementById('modal')
    )
  }
  return <>{children}</>
}
