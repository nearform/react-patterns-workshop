import 'modern-normalize/modern-normalize.css'
import './index.css'
import { QueryClientProvider, QueryClient } from 'react-query'
import { NextQueryParamProvider } from 'next-query-params'

const reactQueryClient = new QueryClient()

const MovieExplorerApp = ({ Component, pageProps }) => {
  return (
    <QueryClientProvider client={reactQueryClient}>
      <NextQueryParamProvider>
        <Component {...pageProps} />
      </NextQueryParamProvider>
    </QueryClientProvider>
  )
}

export default MovieExplorerApp
