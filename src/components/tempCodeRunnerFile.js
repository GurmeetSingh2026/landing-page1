import "../Style.css";
import Hero from "../assets/heroimage.png"; // 👈 apna right wala image yaha lagana

function Hero() {
  return (
    <section className="hero-section">
      <div className="hero-container">

        {/* LEFT CONTENT */}
        <div className="hero-left">

          {/* AI Powered Hiring */}
          <div className="hero-tag">
            <span className="hero-dot"></span>
            <span>AI-Powered Hiring</span>
          </div>

          {/* Main Heading */}
          <h1 className="hero-heading">
            Automation hiring &{" "}
            <span className="highlight-text">
              cut time-to-hire
            </span>{" "}
            in half
          </h1>

          {/* Description */}
          <p className="hero-description">
            One smart platform that helps recruiters hire faster and job
            seekers find the right job without the hassle.
          </p>

          {/* Button */}
          <button className="hero-btn">
            Book Demo
          </button>

        </div>

        {/* RIGHT CARD */}
        <div className="hero-right">

          <div className="hero-card">
            <h3 className="card-title">
              Hi,<br /> I’m VASI
            </h3>

            <p className="card-text">
              An AI recruiter built by Vasitum. I help recruiters
              screen candidates faster and more fairly.
            </p>

            <p className="card-text">
              And help candidates find roles that truly fit their skills.
            </p>
          </div>

          {/* Avatar */}
          <div className="hero-avatar">
            <img src={VasiImage} alt="Vasi AI" />
          </div>

        </div>

      </div>
    </section>
  );
}

export default Hero;