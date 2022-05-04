import 'modern-normalize/modern-normalize.css'
import { MainLayout } from '../components/MainLayout/MainLayout'
import { QueryClientProvider, QueryClient } from 'react-query'
import { NextQueryParamProvider } from 'next-query-params'

const reactQueryClient = new QueryClient()

const MovieExplorerApp = ({ Component, pageProps }) => {
  return (
    <QueryClientProvider client={reactQueryClient}>
      <NextQueryParamProvider>
        <MainLayout>
          <Component {...pageProps} />
        </MainLayout>
      </NextQueryParamProvider>
    </QueryClientProvider>
  )
}

export default MovieExplorerApp
