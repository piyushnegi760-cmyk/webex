export default function Home({ onNavigate }) {
  return (
    <section className="home-section">

      <div className="hero-grid" />

      <div className="hero-orb">
        <div className="orb-inner" />
      </div>

      <div className="hero-content">

        <div className="hero-label">
          <span className="status-dot" />
          WEBEX / DIGITAL STUDIO
        </div>

        <h1 className="hero-title">
          WE CREATE
          <br />

          <span>
            DIGITAL
          </span>

          <br />

          EXPERIENCES.
        </h1>

        <p className="hero-description">
          We design and build websites, applications,
          3D experiences and digital products that
          people remember.
        </p>

        <div className="hero-actions">

          <button
            className="primary-button"
            onClick={() => onNavigate("work")}
          >
            <span>EXPLORE OUR WORK</span>
            <b>↗</b>
          </button>

          <button
            className="secondary-button"
            onClick={() => onNavigate("services")}
          >
            WHAT WE DO
          </button>

        </div>

      </div>

      <div className="hero-bottom">

        <span>
          SCROLL TO EXPLORE
        </span>

        <div className="scroll-line">
          <span />
        </div>

      </div>

    </section>
  );
}