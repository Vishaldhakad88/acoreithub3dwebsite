import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import CursorGlow from "./components/CursorGlow";
import TechStack from "./components/TechStack";
import Employee from "./components/Employee";
import FloatingActions from "./components/FloatingActions";
import ProjectsShowcase from "./components/ProjectsShowcase";
import Industries from "./components/Industries";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Testimonials from "./components/testimonials";
import AboutPage from "./pages/AboutPage";

export default function App() {
  const [currentPage, setCurrentPage] = useState("home");

  return (
    <div className="bg-black min-h-screen">
      <CursorGlow />
      <Navbar currentPage={currentPage} setCurrentPage={setCurrentPage} />
      
      {currentPage === "home" ? (
        <>
          <Hero />
          <Services />
          <TechStack />
          <ProjectsShowcase />
          <Industries />
          <Employee />
          <Contact />
          <Testimonials />
        </>
      ) : currentPage === "about" ? (
        <AboutPage setCurrentPage={setCurrentPage} />
      ) : null}

      <Footer />
      <FloatingActions />
    </div>
  );
}