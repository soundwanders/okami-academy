"use client";

import '../globals.css';
import { ThemeProvider } from 'next-themes'
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export default function DojoLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
};
