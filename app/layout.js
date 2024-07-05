import { Inter } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react"
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "CloudMind",
  description: "CloudMind Center",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className='bg-gray-50'>
      <body className={inter.className}>
        {children}
        <Analytics />
      </body>

    </html>
  );
}
