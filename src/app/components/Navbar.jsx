"use client"; // Ensure this is a client component

import Link from "next/link"; // For Next.js navigation

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar--container">
        {/* Title Above Navbar Items */}
        <div className="navbar--title-container">
          <h1 className="navbar--title">Polas Hemsida</h1> {/* Title Added */}
        </div>

        <div className="navbar--items">
          <ul>
            {/* Home Dropdown */}
            <li className="dropdown">
              <div className="navbar--content">PSYKOTERAPI</div>
              <ul className="submenu">
                <li>
                  <Link href="/" className="submenu--content">
                    INDIVIDUELL PSYKOTERAPI
                  </Link>
                </li>
                <li>
                  <Link href="/intro" className="submenu--content">
                    TERAPI ONLINE
                  </Link>
                </li>
                <li>
                  <Link href="/features" className="submenu--content">
                    BARNTERAPI
                  </Link>
                </li>
              </ul>
            </li>

            {/* Portfolio Dropdown */}
            <li className="dropdown">
              <div className="navbar--content">TERAPIFORMER</div>
              <ul className="submenu">
                <li>
                  <Link href="/#MyPortfolio" className="submenu--content">
                    KBT – Kognitiv beteendeterapi
                  </Link>
                </li>
                <li>
                  <Link href="/projects" className="submenu--content">
                    PDT - Psykodynamisk terapi
                  </Link>
                </li>
                <li>
                  <Link href="/portfolio/featured" className="submenu--content">
                    MI - Motiverande samtal
                  </Link>
                </li>
              </ul>
            </li>

            {/* Services Dropdown */}
            <li className="dropdown">
              <div className="navbar--content">BEHANDLINGAR</div>
              <ul className="submenu">
                <li>
                  <Link href="/pages/depression" className="submenu--content">
                    Depression
                  </Link>
                </li>
                <li>
                  <Link href="/services/seo" className="submenu--content">
                    Ångest och oro
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services/consulting"
                    className="submenu--content"
                  >
                    Panikångest och agorafobi
                  </Link>
                </li>
              </ul>
            </li>

            {/* Blog Dropdown */}
            <li className="dropdown">
              <div className="navbar--content">NPF-UTREDNINGAR</div>
              <ul className="submenu">
                <li>
                  <Link href="/blog/latest" className="submenu--content">
                    ADHD utredning för vuxen
                  </Link>
                </li>
                <li>
                  <Link href="/blog/popular" className="submenu--content">
                    ADHD utredning för barn
                  </Link>
                </li>
                <li>
                  <Link href="/blog/popular" className="submenu--content">
                    ADD utredning
                  </Link>
                </li>
                <li>
                  <Link href="/blog/popular" className="submenu--content">
                    Autism utredning för vuxna
                  </Link>
                </li>
                <li>
                  <Link href="/blog/popular" className="submenu--content">
                    Autism utredning för barn
                  </Link>
                </li>
                <li>
                  <Link href="/blog/popular" className="submenu--content">
                    IF utredning
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

            {/* Additional Link for OM OSS */}
            <li>
              <Link href="/about" className="navbar--content">
                {" "}
                {/* Länk till "OM OSS" */}
                KONTAKT
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
