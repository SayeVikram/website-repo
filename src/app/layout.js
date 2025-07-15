'use client'
import './globals.css'
import { Inter } from 'next/font/google'
import NavBar from './Components/NavBar'
import Footer from './Components/Footer'
import SplashScreen from './Components/SplashScreen'
import { useState, useEffect } from 'react'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({ children }) {
  const [showSplash, setShowSplash] = useState(true)

  const handleSplashComplete = () => {
    setShowSplash(false)
  }

  return (
    <html lang='en'>
      <body className={inter.className} style={{
        backgroundColor: "#121212"
      }}>
        {showSplash && <SplashScreen onComplete={handleSplashComplete} />}
        <div className={showSplash ? 'opacity-0' : 'opacity-100 transition-opacity duration-300'}>
          <NavBar/>
          {children}
          <Footer/>
        </div>
      </body>
    </html>
  )
}