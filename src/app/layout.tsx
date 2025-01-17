import './globals.css'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Test Website',
  description: 'My test website',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
