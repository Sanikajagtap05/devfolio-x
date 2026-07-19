import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";

export default function Contact() {
  return (
    <section
      style={{
        background: "#111827",
        padding: "90px 0",
        color: "white",
      }}
    >
      <div className="container">

        <div className="text-center mb-5">
          <h1 className="fw-bold">
            Contact Me
          </h1>

          <p className="text-secondary">
            Let's build something amazing together.
          </p>
        </div>

        <div className="row">

          {/* Left Side */}

          <div className="col-lg-5 mb-5">

            <h3 className="mb-4">
              Get In Touch
            </h3>

            <div className="mb-4">
              <FaEnvelope className="me-3 text-primary" />
              yourmail@gmail.com
            </div>

            <div className="mb-4">
              <FaPhone className="me-3 text-success" />
              +91 XXXXX XXXXX
            </div>

            <div className="mb-4">
              <FaMapMarkerAlt className="me-3 text-danger" />
              Maharashtra, India
            </div>

            <div className="mt-4">

              <a
                href="https://github.com/"
                className="btn btn-outline-light me-3"
              >
                <FaGithub />
              </a>

              <a
                href="https://linkedin.com/"
                className="btn btn-outline-light"
              >
                <FaLinkedin />
              </a>

            </div>

          </div>

          {/* Right Side */}

          <div className="col-lg-7">

            <form>

              <input
                type="text"
                placeholder="Your Name"
                className="form-control mb-3"
              />

              <input
                type="email"
                placeholder="Your Email"
                className="form-control mb-3"
              />

              <textarea
                rows="6"
                placeholder="Your Message"
                className="form-control mb-3"
              ></textarea>

              <button className="btn btn-primary btn-lg">
                Send Message
              </button>

            </form>

          </div>

        </div>

      </div>
    </section>
  );
}