import React, { useContext, useMemo, useState } from 'react'
import { DEFAULT_YEAR } from '../../constants'

const FilterStateContext = React.createContext(null)

export const FilterStateProviderSolution = ({ children }) => {
  const [state, setState] = useState({ year: DEFAULT_YEAR })

  const value = useMemo(
    () => ({
      year: state.year,
      setYear: year => {
        setState({ year })
      }
    }),
    [state.year]
  )

  return (
    <FilterStateContext.Provider value={value}>
      {children}
    </FilterStateContext.Provider>
  )
}

export const useFilterStateSolution = () => {
  return useContext(FilterStateContext)
}
