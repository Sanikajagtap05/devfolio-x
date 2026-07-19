import profile from "../assets/images/profile.png";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Hero() {
  return (
    <section
      className="d-flex align-items-center"
      style={{
        minHeight: "90vh",
        background: "linear-gradient(135deg, #0f172a, #1e293b)",
        color: "white",
      }}
    >
      <div className="container">
        <div className="row align-items-center">

          {/* Left Side */}
          <div className="col-lg-6 text-center text-lg-start">

            <h5 className="text-info mb-3">
              👋 Hello, I'm
            </h5>

            <h1
              className="fw-bold display-3"
              style={{ color: "#60A5FA" }}
            >
              Sanika Jagtap
            </h1>

            <h3 className="mt-3">
              Full Stack Developer
            </h3>

            <p
              className="mt-4"
              style={{
                fontSize: "18px",
                color: "#CBD5E1",
                lineHeight: "1.8",
              }}
            >
              I build modern, responsive and user-friendly web applications
              using React, Node.js, MongoDB and JavaScript.
            </p>

            <div className="mt-4">

              <button className="btn btn-primary btn-lg me-3">
                View Projects
              </button>

              <button className="btn btn-outline-light btn-lg">
                Download Resume
              </button>

            </div>

            <div className="mt-4 d-flex gap-4 justify-content-center justify-content-lg-start">

              <a
                href="https://github.com/"
                target="_blank"
                rel="noreferrer"
                className="text-white fs-3"
              >
                <FaGithub />
              </a>

              <a
                href="https://linkedin.com/"
                target="_blank"
                rel="noreferrer"
                className="text-white fs-3"
              >
                <FaLinkedin />
              </a>

              <a
                href="mailto:example@gmail.com"
                className="text-white fs-3"
              >
                <FaEnvelope />
              </a>

            </div>

          </div>

          {/* Right Side */}
          <div className="col-lg-6 text-center mt-5 mt-lg-0">

            <img
              src={profile}
              alt="Profile"
              className="img-fluid rounded-circle shadow-lg"
              style={{
                width: "350px",
                height: "350px",
                objectFit: "cover",
                border: "6px solid #60A5FA",
              }}
            />

          </div>

        </div>
      </div>
    </section>
  );
}