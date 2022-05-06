import 'modern-normalize/modern-normalize.css'
import { QueryClientProvider, QueryClient } from 'react-query'
import { NextQueryParamProvider } from 'next-query-params'
import { DialogProvider } from '../providers/DialogProvider'

const reactQueryClient = new QueryClient()

const MovieExplorerApp = ({ Component, pageProps }) => {
  return (
    <DialogProvider>
      <QueryClientProvider client={reactQueryClient}>
        <NextQueryParamProvider>
          <Component {...pageProps} />
        </NextQueryParamProvider>
      </QueryClientProvider>
    </DialogProvider>
  )
}

export default MovieExplorerApp
