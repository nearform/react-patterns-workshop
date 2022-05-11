import styles from './ModalContainer.module.css'
import { useDialogContext } from '../../context/DialogContext'

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
