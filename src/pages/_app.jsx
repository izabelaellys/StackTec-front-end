import Footer from '@/components/Footer'
import Header from '@/components/Header'
import SideMenu from '@/components/SideMenu'
import '@/styles/globals.css'
import {HomeContextProvider } from '@/components/Context/HomeContext';

export default function App({ Component, pageProps }) {
  return (
    <>
      <Header />
      <SideMenu />
      <main>
        <HomeContextProvider>
          <Component {...pageProps} />
        </HomeContextProvider>
      </main>
      <Footer />
    </>
  )
}
