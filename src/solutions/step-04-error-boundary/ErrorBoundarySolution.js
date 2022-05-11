import React from 'react'
import { ExampleComponentWithError } from '../../components/ExampleComponentWithError/ExampleComponentWithError'

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError() {
    // Update state so the next render will show the fallback UI.
    return { hasError: true }
  }

  componentDidCatch(error, errorInfo) {
    // You can also log the error to an error reporting service
    console.error(error, errorInfo)
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return <h1>Something went wrong!!!</h1>
    }

    return this.props.children
  }
}

export const ErrorBoundarySolution = ({ children }) => {
  return (
    <ErrorBoundary>
      {/* Uncomment below to trigger error */}
      {/*<ExampleComponentWithError />*/}
      {children}
    </ErrorBoundary>
  )
}
