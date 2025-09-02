import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavigationBar from "./components/Navbar";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import AboutAndExperience from './pages/AboutAndExperience';
import ProjectAndCaseStudy from "./pages/ProjectAndCaseStudy"

const App: React.FC = () => {
  return (
    <Router>
      <NavigationBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/experience" element={<AboutAndExperience />} />
        <Route path="/project" element={<ProjectAndCaseStudy />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
};

export default App;
