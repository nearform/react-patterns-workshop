import React from 'react'

// TODO: add code here
export const FilterStateProviderChallenge = ({ children }) => {
  return <>{children}</>
}

export const useFilterStateChallenge = () => {
  return {
    year: 2020,
    setYear: () => {}
  }
}
