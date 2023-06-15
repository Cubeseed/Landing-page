import type { AppProps } from 'next/app'
import '../styles/index.css'
import Navbar from '@/components/Navbar/navbar'
import Footer from '@/components/Footer/footer'



export default function App({ Component, pageProps }: AppProps) {
  return <div>

    <Navbar />
    <Component {...pageProps} />
    <Footer />

  </div> 
   
  

}
