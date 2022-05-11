import styles from './ModalContainer.module.css'
import { useDialogContext } from '../../context/DialogContext'
import { Button } from '../Button/Button'

export const ModalContainer = ({ children }) => {
  const { isOpen, setIsOpen } = useDialogContext()
  return isOpen ? (
    <div className={styles.container}>
      <div className={styles.header}>
        <Button
          variant="ghost"
          onClick={() => {
            setIsOpen(false)
          }}
        >
          Close
        </Button>
      </div>
      <div>{children}</div>
    </div>
  ) : null
}
