import type { Metadata } from 'next'
import './globals.css'
import Navbar from '@/components/layout/Navbar'
import StoreProvider from '@/lib/store/StoreProvider'

export const metadata: Metadata = {
  title: 'TravelAI - Smart Travel Planning with AI',
  description: 'Experience luxury travel planning powered by artificial intelligence',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <StoreProvider>
          <Navbar />
          {children}
        </StoreProvider>
      </body>
    </html>
  )
}
