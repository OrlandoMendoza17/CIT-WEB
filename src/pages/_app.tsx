import type { AppProps } from 'next/app'
import { Roboto } from "next/font/google"
import '@/styles/App.scss'

const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
})

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <div className={roboto.className}>
      <Component {...pageProps} />
    </div>
  )
}

export default App;