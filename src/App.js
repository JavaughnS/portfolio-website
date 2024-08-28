import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import { Home, About, Projects, Demos, Blog, ContactMe } from "./pages";
// import Footer from "./components/Footer";
import content from "./pages/content.json";

import "./App.css"; // Note to self: later css imports will overwrite earlier ones

function App() {
  // Initialize isDarkMode from localStorage or default to true (dark mode)
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem('isDarkMode');
    return savedTheme !== null ? savedTheme === 'true' : true;
  });
  const toggleTheme = () => {
    const newTheme = !isDarkMode;
    setIsDarkMode(newTheme);
    localStorage.setItem('isDarkMode', newTheme);
  };

  return (
    <div className="App" data-site-theme={isDarkMode ? "dark" : "light"}>
      <Navbar themeToggle={toggleTheme} />
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
