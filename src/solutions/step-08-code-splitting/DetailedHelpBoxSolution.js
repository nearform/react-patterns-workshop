import React, { Suspense } from 'react'

const DetailedHelpBox = React.lazy(() =>
  import('../../components/DetailedHelpBox/DetailedHelpBox')
)

export const DetailedHelpBoxSolution = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <DetailedHelpBox />
    </Suspense>
  )
}
