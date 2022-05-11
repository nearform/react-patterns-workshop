import PropTypes from 'prop-types'
import { Button } from '../Button/Button'

export const ToggleFiltersButton = ({ onToggle, isOpen }) => {
  return (
    <Button variant="primary" onClick={onToggle}>
      {isOpen ? 'Hide filters' : 'Show filters'}
    </Button>
  )
}

ToggleFiltersButton.propTypes = {
  onToggle: PropTypes.func,
  isOpen: PropTypes.bool
}
