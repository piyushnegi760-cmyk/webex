import projects from "../data/projects";

export default function OurWork() {
  return (
    <section className="content-section">

      <div className="section-top">
        <span>03</span>
        <span>OUR WORK</span>
      </div>

      <div className="section-intro">

        <h1>
          SELECTED
          <br />

          <span>WORK.</span>
        </h1>

        <p>
          A collection of projects, experiments and
          digital experiences created by Webex.
        </p>

      </div>

      <div className="projects-grid">

        {projects.map((project) => (
          <article
            className="project-card"
            key={project.id}
          >

            <div className="project-image">

              {project.image ? (
                <img
                  src={project.image}
                  alt={project.title}
                />
              ) : (
                <div className="project-placeholder">
                  <span>WEBEX</span>
                  <small>
                    PROJECT {project.id}
                  </small>
                </div>
              )}

            </div>

            <div className="project-meta">

              <div>
                <span>
                  {project.category}
                </span>

                <h2>
                  {project.title}
                </h2>

                <p>
                  {project.description}
                </p>
              </div>

              <button>
                ↗
              </button>

            </div>

          </article>
        ))}

      </div>

    </section>
  );
}