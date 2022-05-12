import { Button } from '../../components/Button/Button'
import { useModal } from '../../context/ModalContext'

export const ToggleModalSolution = () => {
  const dialog = useModal()
  return (
    <Button variant="primary" onClick={dialog.toggle}>
      {dialog.isOpen ? 'Hide filters' : 'Show filters'}
    </Button>
  )
}
