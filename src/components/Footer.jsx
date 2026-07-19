import { FaArrowUp } from "react-icons/fa";

export default function Footer() {
  return (
    <footer
      style={{
        background: "#0F172A",
        color: "white",
        padding: "30px 0",
      }}
    >
      <div className="container d-flex justify-content-between align-items-center flex-column flex-md-row">

        <p className="mb-3 mb-md-0">
          © 2026 Sanika Jagtap. All Rights Reserved.
        </p>

        <button
          className="btn btn-primary"
          onClick={() =>
            window.scrollTo({
              top: 0,
              behavior: "smooth",
            })
          }
        >
          <FaArrowUp />
        </button>

      </div>
    </footer>
  );
}