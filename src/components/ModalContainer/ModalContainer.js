import styles from './ModalContainer.module.css'
import { useModal } from '../../context/ModalContext'
import { Button } from '../Button/Button'

export const ModalContainer = ({ children }) => {
  const { isOpen, setIsOpen } = useModal()
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
