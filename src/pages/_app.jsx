import Footer from '@/components/Footer'
import Header from '@/components/Header'
import SideMenu from '@/components/SideMenu'
import '@/styles/globals.css'
import {HomeContextProvider } from '@/components/Context/HomeContext';
import Head from 'next/head';
import StylesReset from '@/styles/reset';
import GlobalStyles from '@/styles/global';


export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>

      </Head>
      <StylesReset />
      <GlobalStyles />
        <HomeContextProvider>
        <Header />
          <SideMenu />
          <main>
            
              <Component {...pageProps} />
            
          </main>
          <Footer />
        </HomeContextProvider>
    </>
  )
}
