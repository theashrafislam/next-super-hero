import { Inter, Roboto } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// const inter = Inter({ subsets: ["latin"] });
const roboto = Roboto({ weight: ['400', '700', '900'], subsets: ["latin"] });

export const metadata = {
  title: {
    default: "Ashraful Islam || Next Hero",
    template: "%s || Next Hero"
  },
  description: "Hello, I am Ashrauful Islam. I am MERN Stack Developer.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <Navbar />
        <div>
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
