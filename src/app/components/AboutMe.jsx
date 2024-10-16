import Image from "next/image";

export default function AboutMe() {
  return (
    <section id="AboutMe" className="about--section">
      <div className="about--section--img">
        <Image
          src="/arin2.jpg"
          alt="About Me"
          width={500}
          height={500}
          priority // Optional: Prioritizes loading of this image for better LCP performance
        />
      </div>
      <div className="hero--section--content--box about--section--box">
        <div className="hero--section--content">
          <h1 className="skills-section--heading">About Me</h1>
          <p className="hero--section-description"></p>
          <p className="hero--section-description">
            I am an IT enthusiast who also enjoys working out and was a
            competitive boxer when I was younger. I recently became a parent and
            live with my partner. In my free time, I enjoy spending time with my
            family, exercising, programming, and cooking.
          </p>
        </div>
      </div>
    </section>
  );
}
