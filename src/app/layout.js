import localFont from "next/font/local"
import "./globals.css"
import NavComp from "./_components/NavComp"

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
})
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
})

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-full">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col min-h-full`}
      >
        <NavComp />
        <main className="flex-grow">{children}</main>
        <footer className="bg-black backdrop-filter backdrop-blur-lg py-8">
          <div className="container mx-auto px-6 text-center text-white">
            <p>&copy; 2023 Elegant Events. Let&apos;s make magic happen!</p>
          </div>
        </footer>
      </body>
    </html>
  )
}