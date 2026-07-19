import profile from "../assets/images/profile.png";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 80 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      style={{
        minHeight: "90vh",
        background: "linear-gradient(135deg,#0f172a,#1e293b)",
        color: "white",
        display: "flex",
        alignItems: "center",
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

            <TypeAnimation
              sequence={[
                "Full Stack Developer",
                2000,
                "React Developer",
                2000,
                "Frontend Developer",
                2000,
                "Backend Learner",
                2000,
              ]}
              wrapper="h3"
              speed={40}
              repeat={Infinity}
              style={{
                color: "#60A5FA",
                fontWeight: "bold",
                marginTop: "15px",
                minHeight: "45px",
              }}
            />

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

              <motion.button
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.95 }}
                className="btn btn-primary btn-lg me-3"
              >
                View Projects
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.95 }}
                className="btn btn-outline-light btn-lg"
              >
                Download Resume
              </motion.button>

            </div>

            {/* Social Icons */}
            <div className="mt-4 d-flex gap-4 justify-content-center justify-content-lg-start">

              <motion.a
                href="https://github.com/your-github-username"
                target="_blank"
                rel="noreferrer"
                whileHover={{ scale: 1.3, rotate: 10 }}
                whileTap={{ scale: 0.9 }}
                className="text-white fs-3"
              >
                <FaGithub />
              </motion.a>

              <motion.a
                href="https://www.linkedin.com/in/your-linkedin-username"
                target="_blank"
                rel="noreferrer"
                whileHover={{ scale: 1.3, rotate: 10 }}
                whileTap={{ scale: 0.9 }}
                className="text-white fs-3"
              >
                <FaLinkedin />
              </motion.a>

              <motion.a
                href="mailto:youremail@gmail.com"
                whileHover={{ scale: 1.3, rotate: 10 }}
                whileTap={{ scale: 0.9 }}
                className="text-white fs-3"
              >
                <FaEnvelope />
              </motion.a>

            </div>

          </div>

          {/* Right Side */}
          <div className="col-lg-6 text-center mt-5 mt-lg-0">

            <motion.img
              src={profile}
              alt="Profile"
              className="img-fluid rounded-circle shadow-lg"
              style={{
                width: "350px",
                height: "350px",
                objectFit: "cover",
                border: "6px solid #60A5FA",
              }}
              initial={{
                scale: 0.7,
                opacity: 0,
              }}
              animate={{
                scale: 1,
                opacity: 1,
              }}
              transition={{
                duration: 1,
                delay: 0.5,
              }}
            />

          </div>

        </div>
      </div>
    </motion.section>
  );
}