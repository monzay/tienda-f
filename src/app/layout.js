import localFont from "next/font/local";
import "./globals.css";
import Header from "./componentes/Header";
import { HeaderProvider } from "./Providers/HeaderContexto";
import Footer from "./componentes/Footer";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <HeaderProvider>
           <Header/>
           {children}
           <Footer />
        </HeaderProvider>
      </body>
    </html>
  );
}
