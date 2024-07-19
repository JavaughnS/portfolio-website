import React from "react";
import { Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css"; // Note to self: later imports will overwrite earlier ones
import Navbar from "./components/Navbar";
import { Home, About, Blog, ContactMe } from "./pages";
import SiteFooter from "./components/SiteFooter";

function App() {
  return (
    <>
      <div className="App">
        <header>
          <Navbar />
        </header>
        <body>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contact-me" element={<ContactMe />} />
          </Routes>
        </body>
        <footer>
          <SiteFooter />
        </footer>
      </div>
    </>
  );
}

export default App;
