import PropTypes from 'prop-types'

export const ToggleFiltersButton = ({ onToggle, isOpen }) => {
  return (
    <button onClick={onToggle}>
      {isOpen ? 'Hide filters' : 'Show filters'}
    </button>
  )
}

ToggleFiltersButton.propTypes = {
  onToggle: PropTypes.func,
  isOpen: PropTypes.bool
}
