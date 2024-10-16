import { Metadata } from "next";
import { ReactNode } from "react"; // Importera ReactNode
import "./styles/styles.css"; // Importera globala CSS
import Navbar from "./components/Navbar"; // Importera Navbar
import Footer from "./components/Footer"; // Importera Footer

export const metadata: Metadata = {
  title: "Arin's Portfolio"
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Navbar />

        {children}
        <Footer />
      </body>
    </html>
  );
}
