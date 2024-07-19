import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import Navbar from "./components/Navbar";
import { Home, About, Blog, ContactMe } from "./pages";

function App() {
  return (
    <>
      <div className="App">
        <header>
          <Navbar />
          <div className="navbar-curve"/>
        </header>
        <body>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contact-me" element={<ContactMe />} />
          </Routes>
        </body>
      </div>
    </>
  );
}

export default App;
