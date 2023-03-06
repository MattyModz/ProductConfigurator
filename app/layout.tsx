import '../src/styles/tailwind.css'
import { GlobalStatusContextProvider } from './Context/status'
// import { Montserrat } from '@next/font/google'
import Nav from './componants/Nav'
import Footer from './componants/footer'
// const montserrat = Montserrat({
//   subsets: ['latin'],
//   weight: ['400', '700', '600'],
//   variable: '--font-mont',
// })

export default function RootLayout({ children }) {
  return (
    <>
      <html lang="en">
        <head />

        <body>
          <Nav />
          <GlobalStatusContextProvider>{children}</GlobalStatusContextProvider>
          <Footer />
        </body>
      </html>
    </>
  )
}

// add to body tag
// className={` ${montserrat.className}`}
