import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
// import MouseTrail from "./MouseTrail";
import ToggleSwitch from "./ToggleSwitch";

function Navbar() {
  const [trailDisabled, setTrailDisabled] = useState(true);
  // const [trailType, setTrailType] = useState(false);
  // let languages = ["A", "B", "C", "D", "E"];
  // let employers = ["F", "G", "You?"];
  const handleToggle = (id, isChecked) => {
    console.log(trailDisabled);
    if (id === "mouseTrailStatus") {
      console.log(trailDisabled);
      setTrailDisabled(isChecked);
    } /*else {
        setTrailType(isChecked ? employers : languages);
      }*/
  };

  return (
    <nav id="navigation" className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div>
          {/* // TODO: change to button that toggles light and dark theme */}
          <Link className="navbar-brand m-2" href="/">
            JS
          </Link>
        </div>
        <div className="nav-switch">
          <ToggleSwitch
            id="mouseTrailStatus"
            classes="form-check form-switch"
            labelText={["On", "Off"]}
            isDisabled={false}
            onToggle={handleToggle}
          />
          <ToggleSwitch
            id="mouseTrailType"
            classes={
              trailDisabled
                ? "form-check form-switch invisible"
                : "form-check form-switch"
            }
            labelText={["Exp", "Lang"]}
            isDisabled={trailDisabled}
            onToggle={handleToggle}
          />
        </div>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <ul className="navbar-nav" aria-current="page">
            <li className="nav-item">
              <NavLink className="nav-link" to="/">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/about">
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/projects">
                Projects
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/demos">
                Demos
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/blog">
                Blog
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/contact-me">
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
        {/* <form className="d-flex justify-content-end" role="search">
          <input
            className="form-control me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button className="btn btn-outline-success" type="submit">
            Search
          </button>
        </form> */}
      </div>
    </nav>
  );
}

export default Navbar;
