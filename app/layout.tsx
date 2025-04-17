import type React from "react"
import "@/app/globals.css"
import { Inter } from "next/font/google"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "المؤتمر الطلابي الأول لكلية التربية النوعية - جامعة الإسكندرية",
  description: "الالتقاء - خطوات نحو التغيير | CONVERGENCE - STEPS TOWARDS CHANGE",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ar" dir="rtl">
      <body className={inter.className}>
     
          {children}
    
      </body>
    </html>
  )
}


import './globals.css'