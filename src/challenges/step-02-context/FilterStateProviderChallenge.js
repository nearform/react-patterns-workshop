import React from 'react'
import { DEFAULT_YEAR } from '../../constants'

// TODO: add code here
export const FilterStateProviderChallenge = ({ children }) => {
  return <>{children}</>
}

export const useFilterStateChallenge = () => {
  return {
    year: DEFAULT_YEAR,
    setYear: () => {}
  }
}
