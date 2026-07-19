import skills from "../data/Skills";

export default function SkillsSection() {
  return (
    <section
      style={{
        background: "#111827",
        padding: "80px 0",
      }}
    >
      <div className="container">
        {/* Heading */}
        <div className="text-center mb-5">
          <h1 className="text-white fw-bold">My Skills</h1>

          <p className="text-secondary">
            Technologies I work with
          </p>
        </div>

        <div className="row">
          {skills.map((skill, index) => (
            <div
              className="col-lg-3 col-md-6 mb-4"
              key={index}
            >
              {/* Skill Card */}
              <div
                className="card h-100 border-0 shadow-lg"
                style={{
                  borderRadius: "20px",
                  transition: "all 0.3s ease",
                  cursor: "pointer",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-10px)";
                  e.currentTarget.style.boxShadow =
                    "0 20px 40px rgba(79, 70, 229, 0.25)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "";
                }}
              >
                <div className="card-body">
                  <h4
                    className="text-center fw-bold mb-4"
                    style={{
                      color: "#4F46E5",
                    }}
                  >
                    {skill.category}
                  </h4>

                  {skill.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="badge bg-light text-dark me-2 mb-2 p-2"
                      style={{
                        fontSize: "14px",
                        transition: "all 0.3s ease",
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}