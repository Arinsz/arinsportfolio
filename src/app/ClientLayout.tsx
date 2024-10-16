"use client"; // Client component directive

import { ReactNode } from "react";
import { usePathname } from "next/navigation"; // Import usePathname
import Navbar from "./components/Navbar"; // Import Navbar
import Footer from "./components/Footer"; // Import Footer

export default function ClientLayout({ children }: { children: ReactNode }) {
  const pathname = usePathname(); // Get the current pathname
  console.log(pathname); // Log current pathname for debugging

  return (
    <>
      {/* Check if the current path is not the privacy-policy page */}
      {pathname !== "/pages/privacy-policy" && <Navbar />}
      {children}
      <Footer />
    </>
  );
}
