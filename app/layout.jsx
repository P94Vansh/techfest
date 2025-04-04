import { Inter } from "next/font/google";
import Navbar from "./components/Navbar";
import "./globals.css";
import Footer from "./components/footer"
import { Montserrat } from 'next/font/google';

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '700'], // Adjust according to your needs
});

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Tech Fest 2025",
  description:"Celebrate Tech Fest at MAHOTSAVA 2025! Join us for two days of exciting events, competitions, and fun. Unleash your inner genius with activities. Don't miss out on the ultimate celebration! Register now and be part of the excitement!"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
      {/* <Navbar/> */}
        {children}
        <Footer/>
        </body>
    </html>
  );
}
