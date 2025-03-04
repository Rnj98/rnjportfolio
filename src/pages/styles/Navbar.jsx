import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <div className="navContent">
      <nav className="nav">
        <Link to="/">
          <button>Home</button>
        </Link>
        <Link to="/projects">
          <button>Projects</button>
        </Link>
        <Link to="/skills">
          <button>Skills</button>
        </Link>
        <Link to="/contact">
          <button>Contact</button>
        </Link>
      </nav>
    </div>
  );
}

export default Navbar;
