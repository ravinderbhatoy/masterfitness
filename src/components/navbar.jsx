import React from "react";
import { Link } from "react-router-dom";
import AddWorkout from "../pages/addWorkout";

const Navbar = ({ isLogin }) => {
  return (
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
      <div class="container-fluid">
        <Link class="navbar-brand" to="/">
          <h3 className="fw-semi-bold">MasterFitness</h3>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavDropdown">
          <ul class="navbar-nav">
            <li class="nav-item">
              <Link className="nav-link" to="/exercises">
                Exercises
              </Link>
            </li>
            <li class="nav-item">
              <Link className="nav-link" to="/login">
                {isLogin ? "logout" : "login"}
              </Link>
            </li>
          </ul>
          <div className="nav-item ms-auto">
            <AddWorkout />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
