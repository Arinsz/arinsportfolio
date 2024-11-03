"use client";

import { Link } from "react-scroll"; // Ensure you import Link from the appropriate package

function Footer() {
  return (
    <div>
      <hr className="my-0 h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-neutral-500 to-transparent opacity-25 dark:via-neutral-900" />
      <footer className="footer--container">
        <div className="footer--button-container">
          <Link
            className="btn btn-primary footer--section--button-link"
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
                {/* Flyttade knappen hit */}
                <span style={{ fontWeight: "bold", fontSize: "18px" }}>
                  Om oss
                </span>{" "}
                <p className="about-us-description">
                  Sveapsykologerna är en grupp anslutna legitimerade psykologer
                  och psykoterapeuter som arbetar med psykologisk
                  behandling/psykoterapi utifrån flera inriktningar såsom KBT,
                  ACT, psykodynamisk terapi och MI samt neuropsykiatriska
                  utredningar (ADHD/ADD, autism etc).
                </p>
              </div>
            </div>
            {/* Resterande kod oförändrad */}
            <div className="footer--title services-title">
              <div className="services-container">
                <span style={{ fontWeight: "bold", fontSize: "18px" }}>
                  Tjänster
                </span>{" "}
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
                <h4
                  className="contact-header"
                  style={{ fontWeight: "bold", fontSize: "18px" }}
                >
                  Kontakt
                </h4>
                <h4 className="contact-phone">
                  <span style={{ fontWeight: "bold" }}>Telefonnummer:</span>{" "}
                  08-123123123
                </h4>
                <h4 className="contact-email">
                  <span style={{ fontWeight: "bold" }}>E-post:</span>{" "}
                  Tjock@Hotmail.com
                </h4>
                <h4 className="contact-adress">
                  <span style={{ fontWeight: "bold" }}>Huvudkontor:</span>{" "}
                  TjockareblirdeinteGatan 215
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
