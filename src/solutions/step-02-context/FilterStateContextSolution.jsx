import React, { useContext, useState } from 'react'

const FilterStateContext = React.createContext(null)

export const FilterStateProviderSolution = ({ children }) => {
  const [state, setState] = useState({ year: 1981 })

  const value = {
    year: state.year,
    setYear: year => setState({ year })
  }

  return (
    <FilterStateContext.Provider value={value}>
      {children}
    </FilterStateContext.Provider>
  )
}
export const useFilterStateSolution = () => {
  return useContext(FilterStateContext)
}
