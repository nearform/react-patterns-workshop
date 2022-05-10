// Uncomment this import to use a helpful modal container component with some
// useful styles and behaviours setup:
// import { ModalContainer } from '../../components/ModalContainer/ModalContainer'

export const FilterModalChallenge = ({ children }) => {
  // We only show modals when in a browser environment
  if (typeof window !== 'undefined') {
    // Add your code here
    return <>{children}</>
  }
  return <>{children}</>
}
