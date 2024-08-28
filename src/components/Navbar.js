import React, { useState } from "react";
// import MouseTrail from "./MouseTrail";
import ToggleSwitch from "./ToggleSwitch";
import "./Navbar.css"

function Navbar({ themeToggle }) {
  const [trailDisabled, setTrailDisabled] = useState(true);
  // const [trailType, setTrailType] = useState(false);
  // let languages = ["A", "B", "C", "D", "E"];
  // let employers = ["F", "G", "You?"];
  const toggleTrail = (id, isChecked) => {
    console.log(trailDisabled);
    if (id === "mouseTrailStatus") {
      console.log(trailDisabled);
      setTrailDisabled(isChecked);
    } /*else {
        setTrailType(isChecked ? employers : languages);
      }*/
  };

  return (
    <nav className="navbar navbar-expand-lg navigation">
      <div className="container-fluid">
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <button className="navbar-brand" onClick={themeToggle}>JS</button>
        <div className="nav-switch">
          <ToggleSwitch
            id="mouseTrailStatus"
            classes="form-check form-switch"
            labelText={["On", "Off"]}
            isDisabled={false}
            onToggle={toggleTrail}
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
            onToggle={toggleTrail}
          />
        </div>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link" aria-current="page" href="/">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/about">About</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/projects">Projects</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/demos">Demos</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" aria-current="page" href="/blog">Blog</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/contact-me">Contact</a>
            </li>
          </ul>
          {/* <form className="d-flex" role="search">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-outline-success" type="submit">Search</button>
          </form> */}
        </div>
      </div>
    </nav>
    
  );
}

export default Navbar;
