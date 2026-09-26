const services = [
  {
    number: "01",
    title: "Website Development",
    description:
      "Premium responsive websites with modern interactions and smooth animations.",
  },

  {
    number: "02",
    title: "3D Experiences",
    description:
      "Immersive 3D websites and interactive digital experiences.",
  },

  {
    number: "03",
    title: "UI / UX Design",
    description:
      "Clean, modern and user-focused digital interfaces.",
  },

  {
    number: "04",
    title: "App Development",
    description:
      "Mobile and web applications designed for real-world use.",
  },

  {
    number: "05",
    title: "Branding",
    description:
      "Visual identities, logos and digital brand experiences.",
  },

  {
    number: "06",
    title: "AI Solutions",
    description:
      "AI-powered tools and experiences for modern businesses.",
  },

  {
    number: "07",
    title: "Game Development",
    description:
      "Interactive game concepts and digital experiences.",
  },
];

export default function Services() {
  return (
    <section className="content-section">

      <div className="section-top">
        <span>02</span>
        <span>WHAT WE DO</span>
      </div>

      <div className="section-intro">

        <h1>
          OUR
          <br />

          <span>SERVICES.</span>
        </h1>

        <p>
          From concept to creation, we build digital
          experiences designed to stand out.
        </p>

      </div>

      <div className="services-list">

        {services.map((service) => (
          <article
            className="service-card"
            key={service.number}
          >

            <span className="service-number">
              {service.number}
            </span>

            <div className="service-main">

              <h2>
                {service.title}
              </h2>

              <p>
                {service.description}
              </p>

            </div>

            <span className="service-arrow">
              ↗
            </span>

          </article>
        ))}

      </div>

    </section>
  );
}