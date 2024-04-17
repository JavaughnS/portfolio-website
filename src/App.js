import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import ToggleSwitch from "./components/ToggleSwitch";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";

function App() {
  const [trailDisabled, setTrailDisabled] = useState(true);
  const handleToggle = (id, isChecked) => {
    console.log(trailDisabled);
    if (id === "mouseTrailStatus") {
      console.log(trailDisabled);
      setTrailDisabled(isChecked);
    } // else statement will change the mouse trail
  };

  return (
    <>
      <nav class="navbar navbar-expand-lg bg-body-tertiary">
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
            <a class="navbar-brand" href="#">
              JS
            </a>
          </div>
          <div>
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
            <div class="navbar-nav">
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
      <div className="App">
        <header className="App-header">
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    </>
  );
}

export default App;
