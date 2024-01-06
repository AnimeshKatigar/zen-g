import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar.jsx'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Zen G',
  description: 'A Jewellery Website',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar/>
        {children}
        </body>
    </html>
  )
}
