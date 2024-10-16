"use client";

import { Link } from "react-scroll";
import Image from "next/image"; // Import Next.js Image component

export default function HeroSection() {
  return (
    <section id="heroSection" className="hero--section">
      <div className="hero--section--content-box">
        <div className="hero--section--content">
          {/* Escape the apostrophe here */}
          <p className="section--title">Hey, I&apos;m Arin</p>
          <h1 className="hero--section--title">
            <span className="hero--section-title--color">
              Student at Jensens Yrkeshögskola -
            </span>{" "}
            <br />
            Cloud Developer
          </h1>
          <p className="hero--section-description">
            I started by ordering computer parts and building computers when I
            was young, and I found it very exciting to learn all about how
            computers are built and which hardware components work best
            together.
            <br /> Since then, my interest in hardware, software, networking,
            and gaming within IT has grown. I have decided that I want to work
            in IT because that is where my interest and curiosity are the
            greatest.
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
          Get in touch
        </Link>
      </div>
      <div className="hero--section--img">
        {/* Use Next.js Image component for optimization */}
        <Image
          src="/arin.jpg"
          alt="Hero Section"
          width={500}
          height={500} // You can adjust these values
          priority // Optional, to prioritize image loading
        />
      </div>
    </section>
  );
}
