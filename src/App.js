import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Blog from "./pages/Blog";
import ContactMe from "./pages/ContactMe";

function App() {
  return (
    <>
      <div className="App">
        <header>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contact-me" element={<ContactMe />} />
          </Routes>
        </header>
      </div>
    </>
  );
}

export default App;
