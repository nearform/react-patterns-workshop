import { ModalContainer } from '../../components/ModalContainer/ModalContainer'

export const FilterModalChallenge = ({ children }) => {
  // We only show modals when in a browser environment
  if (typeof window !== 'undefined') {
    return <ModalContainer>{children}</ModalContainer>
  }
  return children
}
