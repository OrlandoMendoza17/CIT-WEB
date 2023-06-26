import type { AppProps } from 'next/app'
import '@/styles/App.scss'

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <Component {...pageProps} />
  )
}

export default App;