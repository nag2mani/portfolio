import React from "react";
import "./main.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Footer from "./components/Footer";

const App: React.FC = () => {
  return (
    <div className="portfolio">
      <Navbar />
      <main className="main-content">
        <Hero />
        <About />
        <Experience />
        <Projects />
      </main>
      <Footer />
    </div>
  );
};

export default App;
