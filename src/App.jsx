import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import CursorGlow from "./components/CursorGlow";
import Projects from "./components/Projects";
import TechStack from "./components/TechStack";
import Employee from "./components/Employee";
import FloatingActions from "./components/FloatingActions";
import ProjectsShowcase from "./components/ProjectsShowcase";
import Industries from "./components/Industries";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Testimonials from "./components/Testimonials";
import AboutPage from "./pages/AboutPage";

export default function App() {
  const [currentPage, setCurrentPage] = useState("home");

  return (
    <div className="bg-black min-h-screen">
      <CursorGlow />

      {/* SINGLE Navbar */}
      <Navbar currentPage={currentPage} setCurrentPage={setCurrentPage} />

      {currentPage === "home" && (
        <>
          <Hero />
          <Services />
          <Projects />
          <TechStack />
          <ProjectsShowcase />
          <Industries />
          <Employee />
          <Testimonials />
          <Contact />
        </>
      )}

      {currentPage === "about" && (
        <AboutPage setCurrentPage={setCurrentPage} />
      )}

      {/* SINGLE Footer */}
      <Footer />

      <FloatingActions />
    </div>
  );
}
