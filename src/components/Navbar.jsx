import { NavLink } from "react-router-dom";
import { FaCode } from "react-icons/fa";

export default function Navbar() {
  return (
    <nav
      className="navbar navbar-expand-lg navbar-dark sticky-top shadow"
      style={{
        background: "#111827",
      }}
    >
      <div className="container">

        <NavLink
          className="navbar-brand fw-bold fs-3"
          to="/"
          style={{
            color: "#4F46E5",
          }}
        >
          <FaCode className="me-2" />
          DevFolio
        </NavLink>

        <button
          className="navbar-toggler"
          data-bs-toggle="collapse"
          data-bs-target="#menu"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className="collapse navbar-collapse"
          id="menu"
        >
          <ul className="navbar-nav ms-auto">

            <li className="nav-item">
              <NavLink
                to="/"
                className="nav-link"
              >
                Home
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                to="/about"
                className="nav-link"
              >
                About
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                to="/projects"
                className="nav-link"
              >
                Projects
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                to="/contact"
                className="nav-link"
              >
                Contact
              </NavLink>
            </li>

          </ul>
        </div>

      </div>
    </nav>
  );
}