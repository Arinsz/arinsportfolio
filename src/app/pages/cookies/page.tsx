"use client";
import Link from "next/link"; // Import Link from Next.js

export default function Cookies() {
  return (
    <section className="Cookies--Section">
      <div className="Cookies-container">
        <h1>This is the Cookies Page!</h1>
        <p>Learn how we use cookies on our site</p> <br />
        <div className="Cookies-Content">
          <h2>Key Points</h2>

          <ul className="Cookies-List">
            <li>We use cookies to enhance your browsing experience.</li>
            <li>
              Cookies help us understand your preferences and improve site
              functionality.
            </li>
            <li>
              You can disable cookies at any time via your browser settings.
            </li>
          </ul>
        </div>
        <section className="Cookies-Details">
          <h2>Types of Cookies We Use</h2> <br />
          <p>Our website uses the following types of cookies:</p>
          <ul>
            <li>Essential Cookies: Necessary for site functionality.</li>
            <li>
              Performance Cookies: Used for analytics and site optimization.
            </li>
          </ul>
        </section>
        {/* Navigation button */}
        <Link
          href="/"
          className="btn btn-primary Cookies--section--button-link"
        >
          Home
        </Link>
      </div>
    </section>
  );
}
