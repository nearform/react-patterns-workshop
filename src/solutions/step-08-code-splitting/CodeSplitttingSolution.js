import React, { Suspense } from 'react'

const HelpBox = React.lazy(() =>
  import('../../components/DetailedHelpBox/DetailedHelpBox')
)

export const CodeSplittingSolution = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <HelpBox />
    </Suspense>
  )
}
