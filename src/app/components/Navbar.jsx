"use client"; // Ensure this is a client component

import { Link as ScrollLink } from "react-scroll"; // For smooth scrolling
import { usePathname } from "next/navigation"; // To check the current pathname
import Link from "next/link"; // For Next.js navigation

function Navbar() {
  const pathname = usePathname(); // Get the current pathname
  const isMainPage = pathname === "/"; // Check if on the main page

  return (
    <nav className="navbar">
      <div className="navbar--container">
        {/* Title Above Navbar Items */}
        <div className="navbar--title-container">
          <Link href="/" passHref className="navbar--link">
            <h1 className="navbar--title" style={{ cursor: "pointer" }}>
              Polas Hemsida
            </h1>
          </Link>
        </div>

        <div className="navbar--items">
          <ul>
            {/* Home Dropdown */}
            <li className="dropdown">
              <div className="navbar--content">PSYKOTERAPI</div>
              <ul className="submenu">
                <li>
                  <Link href="/" className="submenu--content">
                    Hero Section
                  </Link>
                </li>
                <li>
                  <Link href="/intro" className="submenu--content">
                    Introduction Page
                  </Link>
                </li>
                <li>
                  <Link href="/features" className="submenu--content">
                    Features
                  </Link>
                </li>
              </ul>
            </li>

            {/* Portfolio Dropdown */}
            <li className="dropdown">
              <div className="navbar--content">METODER</div>
              <ul className="submenu">
                <li>
                  <Link href="/#MyPortfolio" className="submenu--content">
                    My Works
                  </Link>
                </li>
                <li>
                  <Link href="/projects" className="submenu--content">
                    All Projects
                  </Link>
                </li>
                <li>
                  <Link href="/portfolio/featured" className="submenu--content">
                    Featured Projects
                  </Link>
                </li>
              </ul>
            </li>

            {/* Services Dropdown */}
            <li className="dropdown">
              <div className="navbar--content">FÖRELÄSNINGAR</div>
              <ul className="submenu">
                <li>
                  <Link
                    href="/services/web-design"
                    className="submenu--content"
                  >
                    Web Design
                  </Link>
                </li>
                <li>
                  <Link href="/services/seo" className="submenu--content">
                    SEO Optimization
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services/consulting"
                    className="submenu--content"
                  >
                    Consulting
                  </Link>
                </li>
              </ul>
            </li>

            {/* Blog Dropdown */}
            <li className="dropdown">
              <div className="navbar--content">COACHING</div>
              <ul className="submenu">
                <li>
                  <Link href="/blog/latest" className="submenu--content">
                    Latest Posts
                  </Link>
                </li>
                <li>
                  <Link href="/blog/popular" className="submenu--content">
                    Popular Topics
                  </Link>
                </li>
              </ul>
            </li>

            {/* Testimonials Dropdown */}
            <li className="dropdown">
              <div className="navbar--content">FÖRETAG</div>
              <ul className="submenu">
                <li>
                  <Link href="/#Testimonials" className="submenu--content">
                    Client Feedback
                  </Link>
                </li>
                <li>
                  <Link href="/reviews" className="submenu--content">
                    All Reviews
                  </Link>
                </li>
              </ul>
            </li>

            {/* Additional Dropdowns */}
            <li className="dropdown">
              <div className="navbar--content">OM OSS</div>
              <ul className="submenu">
                <li>
                  <Link href="/blog/latest" className="submenu--content">
                    Latest Posts
                  </Link>
                </li>
                <li>
                  <Link href="/blog/popular" className="submenu--content">
                    Popular Topics
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
