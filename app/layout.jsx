import '../styles/globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'VitalSenseAI - AI-Powered Lung and Heart Disease Detection',
  description: 'Revolutionizing healthcare with cutting-edge AI technology for rapid and accurate lung and heart disease detection.',
}

export default function RootLayout({
  children,
} ) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}

