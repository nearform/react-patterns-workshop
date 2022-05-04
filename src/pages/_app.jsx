import 'modern-normalize/modern-normalize.css'
import {MainLayout} from "../components/MainLayout/MainLayout";

const MovieExplorerApp = ({ Component, pageProps }) => {
  return <MainLayout><Component {...pageProps} /></MainLayout>
}

export default MovieExplorerApp
