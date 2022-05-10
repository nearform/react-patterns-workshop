import styles from './ModalContainer.module.css'
import { useDialogContext } from '../../context/DialogContext'

// Note modal is for demo purposes only and shouldn't be used in a production environment
export const ModalContainer = ({ children }) => {
  const { isOpen, setIsOpen } = useDialogContext()
  return isOpen ? (
    <div className={styles.container}>
      <div className={styles.header}>
        <button
          onClick={() => {
            setIsOpen(false)
          }}
        >
          Close
        </button>
      </div>
      <div>{children}</div>
    </div>
  ) : null
}
