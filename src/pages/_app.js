import 'modern-normalize/modern-normalize.css'
import './index.css'
import { ModalProvider } from '../context/ModalContext'

const MovieExplorerApp = ({ Component, pageProps }) => {
  return (
    <ModalProvider>
      <Component {...pageProps} />
    </ModalProvider>
  )
}

export default MovieExplorerApp
