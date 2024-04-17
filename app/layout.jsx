import { Footer, NavBar } from '@components';
import '@styles/globals.css';


export const metadata = {
  title: 'S-portfolio',
  description: 'Modern Next Js Portfolio',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
      <link rel="icon" href="/logo.svg" sizes="any" />
      </head>
      <body className='main' >
        <NavBar/>
        {children}
        <Footer/>
        </body>
    </html>
  )
}
