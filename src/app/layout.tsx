import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import "./tailwind.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Singularity Voices",
  description: "Experience the future of voice technology",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel='icon' href='favicon.ico' type='image/x-icon' />
      </head>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
} 
