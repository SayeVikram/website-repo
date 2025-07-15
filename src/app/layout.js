import './globals.css'
import { Inter } from 'next/font/google'
import NavBar from './Components/NavBar'
import Footer from './Components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Saye Karthikeyan',
  description: 'Personal portfolio website with projects/posts/etc',
}

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={inter.className} style={{
        backgroundColor: "#121212"
      }}>
        <NavBar/>
        {children}
        <Footer/>
      </body>
    </html>
  )
}