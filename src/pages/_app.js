import 'modern-normalize/modern-normalize.css'
import './index.css'
import { DialogProvider } from '../context/DialogContext'

const MovieExplorerApp = ({ Component, pageProps }) => {
  return (
    <DialogProvider>
      <Component {...pageProps} />
    </DialogProvider>
  )
}

export default MovieExplorerApp
