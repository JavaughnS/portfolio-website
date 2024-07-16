import React, {useState} from "react";
import MouseTrail from "./MouseTrail";
import ToggleSwitch from "./ToggleSwitch";

function Navbar() {
    const [trailDisabled, setTrailDisabled] = useState(true);
    const [trailType, setTrailType] = useState(false);
    // let languages = ["A", "B", "C", "D", "E"];
    // let employers = ["F", "G", "H"];
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
          <a class="navbar-brand m-2" href="#">
            JS
          </a>
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
          <div class="navbar-nav justify-content-center">
            <a class="nav-link active" aria-current="page" href="#">
              Home
            </a>
            <a class="nav-link" href="#">
              About
            </a>
            <a class="nav-link" href="#">
              Projects
            </a>
            <a class="nav-link" href="#">
              Contact
            </a>
          </div>
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
