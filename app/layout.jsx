import '../src/styles/tailwind.css'

// import { Montserrat } from '@next/font/google'

// const montserrat = Montserrat({
//   subsets: ['latin'],
//   weight: ['400', '700', '600'],
//   variable: '--font-mont',
// })

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head />

      <body >
     
        {children}
   
      </body>
    </html>
  )
}


// add to body tag
// className={` ${montserrat.className}`}