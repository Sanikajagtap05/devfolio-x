import { useState } from "react";
import { motion } from "framer-motion";
import projects from "../data/Projects";
import { FaGithub, FaExternalLinkAlt, FaSearch } from "react-icons/fa";

export default function ProjectsSection() {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");

  const categories = ["All", "React", "JavaScript", "API"];

  const filteredProjects = projects.filter((project) => {
    const matchesSearch = project.title
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesCategory =
      filter === "All" || project.category === filter;

    return matchesSearch && matchesCategory;
  });

  return (
    <section
      style={{
        padding: "90px 0",
        background: "#F8FAFC",
      }}
    >
      <div className="container">

        {/* Heading */}

        <div className="text-center mb-5">
          <h1 className="fw-bold">Featured Projects</h1>

          <p className="text-secondary">
            Some of the projects I've built using modern web technologies.
          </p>
        </div>

        {/* Search */}

        <div className="row justify-content-center mb-4">

          <div className="col-lg-5">

            <div className="input-group">

              <span className="input-group-text">
                <FaSearch />
              </span>

              <input
                type="text"
                className="form-control"
                placeholder="Search Projects..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />

            </div>

          </div>

        </div>

        {/* Filter Buttons */}

        <div className="text-center mb-5">

          {categories.map((item) => (

            <button
              key={item}
              className={`btn me-2 mb-2 ${
                filter === item
                  ? "btn-primary"
                  : "btn-outline-primary"
              }`}
              onClick={() => setFilter(item)}
            >
              {item}
            </button>

          ))}

        </div>

        {/* Projects */}

        <div className="row">

          {filteredProjects.map((project) => (

            <div
              className="col-lg-4 col-md-6 mb-4"
              key={project.id}
            >

              <motion.div
                initial={{
                  opacity: 0,
                  y: 50,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  duration: 0.6,
                }}
                whileHover={{
                  y: -10,
                }}
                className="card h-100 border-0 shadow"
                style={{
                  borderRadius: "20px",
                  overflow: "hidden",
                }}
              >

                {/* Image */}

                <div
                  style={{
                    overflow: "hidden",
                  }}
                >

                  <motion.img
                    src={project.image}
                    alt={project.title}
                    className="card-img-top"
                    style={{
                      height: "220px",
                      objectFit: "cover",
                    }}
                    whileHover={{
                      scale: 1.08,
                    }}
                    transition={{
                      duration: 0.4,
                    }}
                  />

                </div>

                <div className="card-body d-flex flex-column">

                  <h4 className="fw-bold">
                    {project.title}
                  </h4>

                  <p className="text-secondary">
                    {project.description}
                  </p>

                  {/* Technologies */}

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

                  {/* Buttons */}

                  <div className="mt-auto">

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

                    <button className="btn btn-success w-100 mt-3">
                      View Details
                    </button>

                  </div>

                </div>

              </motion.div>

            </div>

          ))}

          {filteredProjects.length === 0 && (
            <div className="text-center">
              <h4>No Projects Found 😔</h4>
            </div>
          )}

        </div>

      </div>
    </section>
  );
}