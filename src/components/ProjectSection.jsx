import projects from "../data/Projects";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

export default function ProjectsSection() {
  return (
    <section
      style={{
        padding: "90px 0",
        background: "#F8FAFC",
      }}
    >
      <div className="container">
        <div className="text-center mb-5">
          <h1 className="fw-bold">Featured Projects</h1>
          <p className="text-secondary">
            Some of the projects I've built using modern web technologies.
          </p>
        </div>

        <div className="row">
          {projects.map((project) => (
            <div className="col-lg-4 col-md-6 mb-4" key={project.id}>
              <div
                className="card h-100 border-0 shadow"
                style={{
                  borderRadius: "20px",
                  overflow: "hidden",
                  transition: "all 0.3s ease",
                  cursor: "pointer",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-10px)";
                  e.currentTarget.style.boxShadow =
                    "0 20px 40px rgba(0,0,0,0.15)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "";
                }}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="card-img-top"
                  style={{
                    height: "220px",
                    objectFit: "cover",
                  }}
                />

                <div className="card-body">
                  <h4 className="fw-bold">{project.title}</h4>

                  <p className="text-secondary">
                    {project.description}
                  </p>

                  <div className="mb-3">
                    {project.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="badge bg-primary me-2 mb-2"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="d-flex justify-content-between">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="btn btn-dark"
                    >
                      <FaGithub className="me-2" />
                      GitHub
                    </a>

                    <a
                      href={project.live}
                      target="_blank"
                      rel="noreferrer"
                      className="btn btn-primary"
                    >
                      <FaExternalLinkAlt className="me-2" />
                      Live Demo
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}