"use client"; // Ensure this is a client component

import { useState, useEffect, useRef } from "react";
import { Link as ScrollLink } from "react-scroll"; // Import for smooth scrolling
import { usePathname } from "next/navigation"; // Import to check the current pathname
import Link from "next/link"; // Import for Next.js navigation

function Navbar() {
  const [navActive, setNavActive] = useState(false);
  const videoRef = useRef(null); // Reference to the video element
  const pathname = usePathname(); // Get the current pathname

  const toggleNav = () => {
    setNavActive((prev) => !prev); // Toggle navigation state
  };

  const closeMenu = () => {
    setNavActive(false); // Close the menu
  };

  // Define handleResize as a named function
  const handleResize = () => {
    // Close menu if window width is greater than 1200px
    if (window.innerWidth > 1200) {
      setNavActive(false);
    }
  };

  // Handle window resize to close menu on smaller screens
  useEffect(() => {
    // Attach the named function
    window.addEventListener("resize", handleResize);

    // Initial check on mount
    handleResize(); // Call once to set initial state

    // Cleanup function to remove the listener
    return () => {
      window.removeEventListener("resize", handleResize); // Cleanup on component unmount
    };
  }, []); // Empty dependency array ensures this runs only on mount and unmount

  // Function to determine if we're on the main page
  const isMainPage = pathname === "/"; // Adjust this if your main page is different

  return (
    <nav className={`navbar ${navActive ? "active" : ""}`}>
      <div>
        {/* Video without controls and plays only once */}
        <video
          ref={videoRef} // Attach the reference to the video element
          src="./A.mp4"
          alt="Logoipsum Video"
          className="navbar-video"
          autoPlay
          muted
          onEnded={() => {
            console.log("Video has ended."); // Optional: Log or handle video end here
          }}
        />
      </div>
      <button
        className={`nav__hamburger ${navActive ? "active" : ""}`}
        onClick={toggleNav}
      >
        <span className="nav__hamburger__line"></span>
        <span className="nav__hamburger__line"></span>
        <span className="nav__hamburger__line"></span>
      </button>
      <div className={`navbar--items ${navActive ? "active" : ""}`}>
        <ul>
          <li>
            {isMainPage ? (
              <ScrollLink
                to="heroSection"
                smooth={true}
                offset={-70}
                duration={500}
                className="navbar--content"
                onClick={closeMenu}
              >
                Home
              </ScrollLink>
            ) : (
              <Link href="/" className="navbar--content" onClick={closeMenu}>
                Home
              </Link>
            )}
          </li>
          <li>
            {isMainPage ? (
              <ScrollLink
                to="MyPortfolio"
                smooth={true}
                offset={-70}
                duration={500}
                className="navbar--content"
                onClick={closeMenu}
              >
                Portfolio
              </ScrollLink>
            ) : (
              <Link
                href="/#MyPortfolio" // Change this to point to the Portfolio section on the main page
                className="navbar--content"
                onClick={closeMenu}
              >
                Portfolio
              </Link>
            )}
          </li>
          <li>
            {isMainPage ? (
              <ScrollLink
                to="AboutMe"
                smooth={true}
                offset={-70}
                duration={500}
                className="navbar--content"
                onClick={closeMenu}
              >
                About Me
              </ScrollLink>
            ) : (
              <Link
                href="/#AboutMe" // Change this to point to the About Me section on the main page
                className="navbar--content"
                onClick={closeMenu}
              >
                About Me
              </Link>
            )}
          </li>
          <li>
            {isMainPage ? (
              <ScrollLink
                to="testimonial"
                smooth={true}
                offset={-70}
                duration={500}
                className="navbar--content"
                onClick={closeMenu}
              >
                Testimonials
              </ScrollLink>
            ) : (
              <Link
                href="/#Testimonials" // Change this to point to the Testimonials section on the main page
                className="navbar--content"
                onClick={closeMenu}
              >
                Testimonials
              </Link>
            )}
          </li>
        </ul>
      </div>
      {isMainPage ? (
        <ScrollLink
          to="Contact"
          smooth={true}
          offset={-70}
          duration={500}
          className="btn btn-outline-primary"
          onClick={closeMenu}
        >
          Contact Me
        </ScrollLink>
      ) : (
        <Link
          href="/#Contact" // Change this to point to the Contact section on the main page
          className="btn btn-outline-primary"
          onClick={closeMenu}
        >
          Contact Me
        </Link>
      )}
    </nav>
  );
}

export default Navbar;
