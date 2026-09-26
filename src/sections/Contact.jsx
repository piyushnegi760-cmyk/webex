export default function Contact() {
  const phone = "9762463324";

  const whatsappLink =
    `https://wa.me/91${phone}`;

  return (
    <section className="content-section contact-section">

      <div className="section-top">
        <span>04</span>
        <span>CONTACT</span>
      </div>

      <div className="contact-content">

        <p className="contact-label">
          HAVE A PROJECT IN MIND?
        </p>

        <h1>
          LET'S BUILD
          <br />

          SOMETHING
          <br />

          <span>GREAT.</span>
        </h1>

        <p className="contact-description">
          Have an idea, business or project?
          Let's talk about it.
        </p>

        <div className="contact-actions">

          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="primary-button"
          >
            <span>CHAT ON WHATSAPP</span>
            <b>↗</b>
          </a>

          <a
            href={`tel:${phone}`}
            className="secondary-button"
          >
            CALL {phone}
          </a>

        </div>

        <div className="contact-number">
          +91 {phone}
        </div>

      </div>

    </section>
  );
}