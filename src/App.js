import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import { Home, About, Projects, Demos, Blog, ContactMe } from "./pages";
// import Footer from "./components/Footer";
import content from "./pages/content.json";

import "bootstrap/dist/css/bootstrap.css";
import "./App.css"; // Note to self: later css imports will overwrite earlier ones

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home content={content} />} />
        <Route path="/about" element={<About content={content} />} />
        <Route path="/projects" element={<Projects content={content} />} />
        <Route path="/demos" element={<Demos content={content} />} />
        <Route path="/blog" element={<Blog content={content} />} />
        <Route path="/contact-me" element={<ContactMe />} />
      </Routes>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
