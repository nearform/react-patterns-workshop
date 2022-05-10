import React, { Suspense } from 'react'

const DetailedHelpBox = React.lazy(() =>
  import('../../components/DetailedHelpBox/DetailedHelpBox.js')
)

export const CodeSplittingSolution = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <DetailedHelpBox />
    </Suspense>
  )
}
