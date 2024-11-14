import React from "react";
import "./App.scss";
import Hero from "./components/Hero";
import AboutMe from "./components/AboutMe";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="app">
      <Hero />
      <AboutMe />
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
