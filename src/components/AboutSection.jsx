import profile from "../assets/images/profile.png";
import { FaGraduationCap, FaLaptopCode, FaMapMarkerAlt, FaHeart } from "react-icons/fa";

export default function AboutSection() {
  return (
    <section
      style={{
        background: "#F8FAFC",
        padding: "80px 0",
      }}
    >
      <div className="container">

        {/* Heading */}
        <div className="text-center mb-5">
          <h1 className="fw-bold">About Me</h1>
          <p className="text-secondary">
            Get to know me better.
          </p>
        </div>

        <div className="row align-items-center">

          {/* Image */}
          <div className="col-lg-5 text-center mb-4">
            <img
              src={profile}
              alt="Profile"
              className="img-fluid rounded-4 shadow"
              style={{
                maxWidth: "320px",
                border: "5px solid #4F46E5",
              }}
            />
          </div>

          {/* Content */}
          <div className="col-lg-7">

            <h2 className="fw-bold mb-3">
              Hi, I'm Sanika 👋
            </h2>

            <p
              style={{
                fontSize: "18px",
                color: "#555",
                lineHeight: "1.8",
              }}
            >
              I'm a Computer Science Engineering student passionate about
              Full Stack Web Development. I enjoy building responsive,
              user-friendly web applications and continuously learning
              modern technologies.
            </p>

            <div className="row mt-4">

              <div className="col-md-6 mb-3">
                <div className="card border-0 shadow-sm p-3 h-100">
                  <FaGraduationCap
                    className="text-primary mb-2"
                    size={28}
                  />
                  <h5>Education</h5>
                  <p className="mb-0">
                    B.Tech Computer Science Engineering
                  </p>
                </div>
              </div>

              <div className="col-md-6 mb-3">
                <div className="card border-0 shadow-sm p-3 h-100">
                  <FaLaptopCode
                    className="text-success mb-2"
                    size={28}
                  />
                  <h5>Skills</h5>
                  <p className="mb-0">
                    React, Node.js, JavaScript, MongoDB
                  </p>
                </div>
              </div>

              <div className="col-md-6 mb-3">
                <div className="card border-0 shadow-sm p-3 h-100">
                  <FaMapMarkerAlt
                    className="text-danger mb-2"
                    size={28}
                  />
                  <h5>Location</h5>
                  <p className="mb-0">
                    Maharashtra, India
                  </p>
                </div>
              </div>

              <div className="col-md-6 mb-3">
                <div className="card border-0 shadow-sm p-3 h-100">
                  <FaHeart
                    className="text-warning mb-2"
                    size={28}
                  />
                  <h5>Interests</h5>
                  <p className="mb-0">
                    Web Development, UI Design & Learning
                  </p>
                </div>
              </div>

            </div>

          </div>

        </div>

      </div>
      <div className="row text-center mt-5">

  <div className="col-md-3 mb-3">
    <div className="card shadow-sm border-0 p-4">
      <h2 className="text-primary fw-bold">10+</h2>
      <p>Projects</p>
    </div>
  </div>

  <div className="col-md-3 mb-3">
    <div className="card shadow-sm border-0 p-4">
      <h2 className="text-success fw-bold">15+</h2>
      <p>Technologies</p>
    </div>
  </div>

  <div className="col-md-3 mb-3">
    <div className="card shadow-sm border-0 p-4">
      <h2 className="text-danger fw-bold">3+</h2>
      <p>Certifications</p>
    </div>
  </div>

  <div className="col-md-3 mb-3">
    <div className="card shadow-sm border-0 p-4">
      <h2 className="text-warning fw-bold">100%</h2>
      <p>Dedication</p>
    </div>
  </div>

</div>
    </section>
  );
}