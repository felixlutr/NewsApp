import React from "react";
import { useNavigate, Link } from "react-router-dom";

const Navbar = ({}) => {
  const navigate = useNavigate();

  return (
    <nav
      className="navbar navbar-expand-lg bg-body-tertiary sticky-top"
      data-bs-theme="dark"
    >
      <div className="container-fluid">
        <Link to='/' className="navbar-brand" href="#">
          <span className="badge bg-light text-dark fs-4">News Squared</span>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to={'/technology'}>Technology</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to={'/business'}>Business</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to={'/health'}>Health</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to={'/sports'}>Sports</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to={'/entertainment'}>Enterteinment</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to={'/science'}>Science</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
