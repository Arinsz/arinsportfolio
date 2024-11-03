"use client";

import { Link } from "react-scroll"; // Ensure you import Link from the appropriate package

function Footer() {
  return (
    <div>
      <hr className="my-12 h-px bg-gradient-to-r from-transparent via-neutral-500 to-transparent opacity-100" />
      <footer className="footer--container">
        <div className="footer--button-container">
          <Link
            className="footer--button" // Adjusted to use footer--button class
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            to="Contact"
          >
            BOKA GRATIS KONSULTATION
          </Link>
        </div>
        <div className="footer--content--container">
          <div className="footer--titles">
            <div className="footer--title about-us-title">
              <div className="about-us-container">
                <h4 className="about-us-header">About Us</h4>
                <p className="about-us-description">
                  Sveapsykologerna är en grupp anslutna legitimerade psykologer
                  och psykoterapeuter som arbetar med psykologisk
                  behandling/psykoterapi utifrån flera inriktningar såsom KBT,
                  ACT, psykodynamisk terapi och MI samt neuropsykiatriska
                  utredningar (ADHD/ADD, autism etc).
                </p>
              </div>
            </div>
            <div className="footer--title services-title">
              <div className="services-container">
                <h4 className="services-header">Tjänster</h4>
                <a href="/services" className="footer--link service-link">
                  ADHD-utredning
                </a>
                <a href="/services" className="footer--link service-link">
                  Autism-utredning
                </a>
                <a href="/services" className="footer--link service-link">
                  Parterapi
                </a>
                <a href="/services" className="footer--link service-link">
                  KBT
                </a>
              </div>
            </div>
            <div className="footer--title contact-title">
              <div className="contact-container">
                <h4 className="contact-header">Kontakta oss</h4>
                <h4 className="contact-phone">Telefonnummer: 08-123123123</h4>
                <h4 className="contact-email">E-post: tjock@hotmail.com </h4>
                <h4 className="contact-address">
                  Huvudkontor: Östermalmstorg 14
                </h4>
              </div>
            </div>
          </div>
        </div>
        <div className="footer--social--icon">
          <ul>
            <li>
              <a
                href=""
                className="navbar--content"
                target="_blank"
                rel="noreferrer"
              >
                {/* Facebook SVG Icon */}
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/chillbill88x/profilecard/?igsh=dnQ5NXI1MHE3ejVx"
                className="navbar--content"
                target="_blank"
                rel="noreferrer"
              >
                {/* Instagram SVG Icon */}
              </a>
            </li>
            <li>
              <a
                href="https://www.twitter.com/"
                className="navbar--content"
                target="_blank"
                rel="noreferrer"
              >
                {/* Twitter SVG Icon */}
              </a>
            </li>
            <li>
              <a
                href=""
                className="navbar--content"
                target="_blank"
                rel="noreferrer"
              >
                {/* LinkedIn SVG Icon */}
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
