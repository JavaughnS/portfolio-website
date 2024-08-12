import React from "react";
import { Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css"; // Note to self: later css imports will overwrite earlier ones
import Navbar from "./components/Navbar";
import { Home, About, Projects, Demos, Blog, ContactMe } from "./pages";
import SiteFooter from "./components/SiteFooter";
import content from "./pages/content.json";

function App() {
  return (
    // <>
      <div className="App">
        <header>
          {" "}
          {/* comment out header tags to stick navbar */}
          <Navbar />
        </header>
        <body>
          <Routes>
            <Route path="/" element={<Home content={content} />} />
            <Route path="/about" element={<About content={content} />} />
            <Route path="/projects" element={<Projects content={content} />} />
            <Route path="/demos" element={<Demos content={content} />} />
            <Route path="/blog" element={<Blog content={content} />} />
            <Route path="/contact-me" element={<ContactMe />} />
          </Routes>
        </body>
        <footer>
          <SiteFooter />
        </footer>
      </div>
    // </>
  );
}

export default App;
