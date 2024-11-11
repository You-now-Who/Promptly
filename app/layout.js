// import localFont from "next/font/local";
import '@styles/globals.css'
import Navbar from './components/Navbar';
import { SessionProvider } from 'next-auth/react';

export const metadata = {
  title: "Promptum",
  description: "Prompting the next gen of prompts with AI.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="main">
          <div className="gradient"/>
        </div>
        <SessionProvider>
          <main className="app">
            <Navbar />
            {children}
          </main>
        </SessionProvider>
      </body>
    </html>
  );
}
