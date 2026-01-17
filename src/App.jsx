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



export default function App() {
  return (
    <div className="bg-black min-h-screen">
      <CursorGlow />
      <Navbar />
      <Hero />
      <Services />
            <Projects />
            <TechStack />
             <ProjectsShowcase />
      <Industries />
            <Employee />
     <Contact />
     <Footer />
      <FloatingActions />
    </div>
  );
}
