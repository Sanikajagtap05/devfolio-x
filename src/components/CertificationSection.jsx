import certificates from "../data/Certifications";
import { FaExternalLinkAlt } from "react-icons/fa";

export default function CertificationSection() {
  return (
    <section
      style={{
        padding: "90px 0",
        background: "#F8FAFC",
      }}
    >
      <div className="container">

        <div className="text-center mb-5">
          <h1 className="fw-bold">
            Certifications & Achievements
          </h1>

          <p className="text-secondary">
            Courses, certifications and milestones in my learning journey.
          </p>
        </div>

        <div className="row">
          {certificates.map((certificate) => (
            <div
              className="col-lg-4 col-md-6 mb-4"
              key={certificate.id}
            >
              <div
                className="card h-100 border-0 shadow"
                style={{
                  borderRadius: "18px",
                  overflow: "hidden",
                  transition: "all 0.3s ease",
                  cursor: "pointer",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-10px)";
                  e.currentTarget.style.boxShadow =
                    "0 20px 40px rgba(79,70,229,0.25)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "";
                }}
              >
                <img
                  src={certificate.image}
                  alt={certificate.title}
                  style={{
                    height: "220px",
                    objectFit: "cover",
                  }}
                />

                <div className="card-body">
                  <h4>{certificate.title}</h4>

                  <p className="text-secondary mb-1">
                    {certificate.issuer}
                  </p>

                  <small className="text-muted">
                    {certificate.date}
                  </small>

                  <div className="mt-4">
                    <a
                      href={certificate.verify}
                      target="_blank"
                      rel="noreferrer"
                      className="btn btn-primary"
                    >
                      <FaExternalLinkAlt className="me-2" />
                      Verify Certificate
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