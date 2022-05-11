import { Button } from '../../components/Button/Button'
import { useDialogContext } from '../../context/DialogContext'

export const ToggleModalSolution = () => {
  const dialog = useDialogContext()
  return (
    <Button variant="primary" onClick={dialog.toggle}>
      {dialog.isOpen ? 'Hide filters' : 'Show filters'}
    </Button>
  )
}
