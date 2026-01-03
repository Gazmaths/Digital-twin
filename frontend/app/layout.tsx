import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Navigation from "@/components/Navigation";
import Twin from "@/components/twin";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "AI in Production - Digital Twin",
  description: "Your AI Digital Twin powered by cloud technology",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gradient-to-br from-slate-50 to-gray-100`}
      >
        <Navigation />
        <div className="flex min-h-screen">
          {/* Main Content Area */}
          <div className="flex-1">
            {children}
          </div>
          
          {/* Digital Twin Sidebar */}
          <div className="w-96 bg-white shadow-xl border-l border-gray-200 overflow-y-auto">
            <div className="p-4 h-full">
              <Twin />
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
