import { Nunito } from 'next/font/google'
import './globals.css'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Skills from './components/skills/Skills'
import Projects from './components/projects/Projects'
import Contact from './components/Contact'

export const metadata = {
  title: "Imran's Porfolio",
  description: 'Generated by create next app',
}

// const font = Nunito({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
          {children}            
      </body>
    </html>
  )
}