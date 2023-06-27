import Link from 'next/link'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Basics of Next App',
  description: 'Basics of Next App',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      
      <body className={inter.className}>
      <nav>
        <ul className='flex justify-between'>
          <Link href='/'>Home</Link>
          <Link href='/users'>Users</Link>
          <Link href='/kamrul'>Kamrul</Link>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>
        {children}
        
        <footer>THis is footer </footer>
        </body>
    </html>
  )
}
