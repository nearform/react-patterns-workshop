import styles from './ModalContainer.module.css'
import { useDialog } from '../../providers/DialogProvider.js'

// Note modal is for demo purposes only and shouldn't be used in a production environment
export const ModalContainer = ({ children }) => {
  const { isOpen, setIsOpen } = useDialog()
  return (
    isOpen && (
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
    )
  )
}
