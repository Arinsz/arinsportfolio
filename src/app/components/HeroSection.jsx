"use client";

import { Link } from "react-scroll";
import Image from "next/image"; // Import Next.js Image component

export default function HeroSection() {
  return (
    <section id="heroSection" className="hero--section">
      <div className="hero--section--img">
        {/* Use Next.js Image component for optimization */}
        <Image
          src="/heroSection.jpg"
          alt="Hero Section"
          width={500}
          height={500} // You can adjust these values
          priority // Optional, to prioritize image loading
        />
      </div>
      <div className="hero--section--content-box">
        <div className="hero--section--content">
          <p className="section--title">
            Psykologer i Stockholm, Göteborg, Malmö, Uppsala, Västerås,
            Norrköping & Härnösand
          </p>

          <p className="hero--section-description">
            Sveapsykologerna består av legitimerade psykologer och legitimerade
            psykoterapeuter som erbjuder terapi i Stockholm, Göteborg och Malmö
            samt neuropsykiatriska utredningar i Stockholm, Göteborg, Malmö,
            Uppsala, Västerås, Norrköping & Härnösand för fysiska besök. Vi
            erbjuder även terapi och neuropsykiatriska utredningar via
            videosamtal och då kan man befinna sig vart som helst i landet. Vi
            erbjuder terapi samt neuropsykiatriska utredningar under dagtid,
            kvällstid och helger på mottagningar, via video och telefon. Vi
            arbetar med individuell terapi, coaching, par- och familjeterapi,
            neuropsykiatriska utredningar – både mot privatpersoner och företag
            – samt tillhandahåller föreläsningar.
          </p>
        </div>
        {/* Button should be directly in the parent container */}
        <Link
          className="btn btn-primary hero--section--button-link"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          to="Contact"
        >
          BOKA GRATIS KONSULTATION
        </Link>
      </div>
    </section>
  );
}
