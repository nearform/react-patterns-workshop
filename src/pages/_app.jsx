import 'modern-normalize/modern-normalize.css'
import {MainLayout} from "../components/MainLayout/MainLayout";
import {QueryClientProvider, QueryClient} from 'react-query'

const reactQueryClient = new QueryClient()

const MovieExplorerApp = ({Component, pageProps}) => {
  return <QueryClientProvider client={reactQueryClient}>
    <MainLayout>
      <Component {...pageProps} />
    </MainLayout>
  </QueryClientProvider>
}

export default MovieExplorerApp
