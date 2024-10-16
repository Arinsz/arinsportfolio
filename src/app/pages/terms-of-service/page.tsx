"use client";
import Link from "next/link"; // Import Link from Next.js

export default function TermsOfService() {
  return (
    <section className="TermsOfService--Section">
      <div className="TermsOfService-container">
        <h1>Welcome to the Terms of Service Page!</h1>
        <p>These terms govern the use of our website</p> <br />
        <div className="TermsOfService-Content">
          <h2>Key Points</h2>

          <ul className="TermsOfService-List">
            <li>By using this site, you agree to our terms and conditions.</li>
            <li>
              We reserve the right to modify these terms at any time without
              notice.
            </li>
            <li>
              You must not misuse our services or engage in illegal activities.
            </li>
          </ul>
        </div>
        <section className="TermsOfService-Details">
          <h2>Service Use</h2> <br />
          <p>
            By accessing our site, you agree to follow all applicable laws and
            regulations. Your responsibilities include:
          </p>
          <ul>
            <li>
              Using the service as intended and not for fraudulent purposes.
            </li>
            <li>
              Respecting the intellectual property of others on the platform.
            </li>
          </ul>
        </section>
        {/* Navigation button */}
        <Link
          href="/"
          className="btn btn-primary TermsOfService--section--button-link"
        >
          Home
        </Link>
      </div>
    </section>
  );
}
