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
  title: "Udgaman 2025 - Tech Fest at Uttaranchal University",
  description: "Join Udgaman 2025, the premier tech fest at Uttaranchal University, Dehradun. Experience two days of thrilling events, innovative competitions, and unforgettable fun. Showcase your talent, connect with bright minds, and be part of the ultimate celebration of technology and creativity. Register now to secure your spot!",
  keywords: "Udgaman 2025, Tech Fest, Uttaranchal University, Dehradun, Engineering Events, Competitions, Innovation, Technology, Fun, Registration",
  author: "Uttaranchal University",
  robots: "index, follow",
  viewport: "width=device-width, initial-scale=1.0",
  canonical: "https://udgaman.uudoon.in/", // Replace with your actual website URL
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
