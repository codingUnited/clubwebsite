"use client";

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Provider } from "@/components/ui/provider";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { Box, Flex } from "@chakra-ui/react/";
import { useEffect } from "react";
import { usePathname } from "next/navigation";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});



export default function RootLayout({
  children,}: Readonly<{
  children: React.ReactNode;}>) {
  const pathname = usePathname();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
          <Provider>
            <Flex direction="column" minHeight="100vh">
              <Navbar />
              <Box as="main" flex="1" pb={10}>
                {children}
              </Box>
              <Footer />
            </Flex>
          </Provider>
      </body>
    </html>
  );
}
