import React from "react";
import { NavLink, Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link className="navbar-brand" to="/">
          <img
            src="https://img.icons8.com/android/24/000000/home.png"
            alt="home"
          />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <NavLink className="nav-item nav-link active" to="/">
              Home
            </NavLink>
            <NavLink className="nav-item nav-link" to="/">
              Features
            </NavLink>
            <NavLink className="nav-item nav-link" to="/">
              Pricing
            </NavLink>
            <NavLink className="nav-item nav-link" to="/">
              Disabled
            </NavLink>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
