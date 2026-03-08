import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Provider } from "@/components/ui/provider";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { Box, Flex } from "@chakra-ui/react/";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Coding United Club",
  description: "Cloding United Club for SNHU",
};

export default function RootLayout({
  children,}: Readonly<{
  children: React.ReactNode;}>) {
  return (
    <html lang="en">
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
