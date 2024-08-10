import React, {useState} from "react";
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
    <nav class="navbar navbar-expand-lg bg-body-tertiary App-nav">
      <div class="container-fluid">
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div>
          {/* // TODO: change to button that toggles light and dark theme */}
          <Link class="navbar-brand m-2" href="/"> 
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
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <ul class="navbar-nav" aria-current="page">
            <li class="nav-item">
              <NavLink class="nav-link" to="/">
                Home
              </NavLink>
            </li>
            <li class="nav-item">
              <NavLink class="nav-link" to="/about">
                About
              </NavLink>
            </li>
            <li class="nav-item">
              <NavLink class="nav-link" to="/projects">
                Projects
              </NavLink>
            </li>
            <li class="nav-item">
              <NavLink class="nav-link" to="/demos">
                Demos
              </NavLink>
            </li>
            <li class="nav-item">
              <NavLink class="nav-link" to="/blog">
                Blog
              </NavLink>
            </li>
            <li class="nav-item">
              <NavLink class="nav-link" to="/contact-me">
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
        <form class="d-flex justify-content-end" role="search">
          <input
            class="form-control me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button class="btn btn-outline-success" type="submit">
            Search
          </button>
        </form>
      </div>
    </nav>
  );
}

export default Navbar;
