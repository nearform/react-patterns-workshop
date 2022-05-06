import { forwardRef } from 'react'

export const FancyInputSolution = forwardRef((props, ref) => {
  return (
    <input
      {...props}
      ref={ref}
      style={{
        padding: '16px',
        fontWeight: 'bold',
        border: '1px solid azure',
        fontSize: '24px'
      }}
    />
  )
})

FancyInputSolution.displayName = 'FancyInput'
