import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

// Use the Inter font with multiple subsets
const inter = Inter({ 
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
})

export const metadata: Metadata = {
  title: "ZenStudios",
  description:
    "We make apps & websites, that's it! ZenStudios is a dynamic development studio powered by a team of young, talented professionals.",
  keywords: ["web development", "mobile apps", "design", "branding", "consulting"],
  authors: [{ name: "ZenStudios" }],
  icons: {
    icon: '/images/draggable-logo.png',
    shortcut: '/images/draggable-logo.png',
    apple: '/images/draggable-logo.png',
  },
  openGraph: {
    title: "ZenStudios",
    description: "We make apps & websites, that's it!",
    url: "https://zenstudios.com",
    siteName: "ZenStudios",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ZenStudios",
    description: "We make apps & websites, that's it!",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  )
}
