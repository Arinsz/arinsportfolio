"use client";
import Link from "next/link"; // Import Link from Next.js

export default function Policy() {
  return (
    <section className="PrivacyPolicy--Section">
      <div className="PrivacyPolicy-container">
        <h1>Hello, this is the Privacy Policy Page!</h1>
        <p>This is an example page</p> <br />
        <div className="PrivacyPolicy-Content">
          <h2>Key Points</h2>

          <ul className="PrivacyPolicy-List">
            <li>We value your privacy and data security.</li>
            <li>
              Your data will not be shared with third parties without consent.
            </li>
            <li>We use cookies to improve user experience.</li>
          </ul>
        </div>
        <section className="PrivacyPolicy-Details">
          <h2>Data Collection</h2> <br />
          <p>
            We collect data to provide you with the best possible experience on
            our page, including :{" "}
          </p>
          <ul>
            <li>Analytics to improve the user experience.</li>
            <li>Cookies for personalizing content and ads.</li>
          </ul>
        </section>
        {/* Navigation button */}
        <Link
          href="/" // Use Next.js Link
          className="btn btn-primary PrivacyPolicy--section--button-link"
        >
          Home
        </Link>
      </div>
    </section>
  );
}
