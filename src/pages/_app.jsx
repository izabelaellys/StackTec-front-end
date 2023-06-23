import Footer from '@/components/Footer'
import Header from '@/components/Header'
import SideMenu from '@/components/SideMenu'
import '@/styles/globals.css'

export default function App({ Component, pageProps }) {
  return (
    <>
      <Header />
      <SideMenu />
      <main>
        <Component {...pageProps} />
      </main>
      <Footer />
    </>
  )
}
