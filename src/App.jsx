import { useState, Suspense } from "react";
import "./index.css";
import { Canvas } from "@react-three/fiber";
import { Environment, OrbitControls } from "@react-three/drei";
import Building from "../public/Building";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import AboutMe from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Skill from "./components/Skills";
import Achievements from "./components/Achievements";
import Testimonials from "./components/Testimonals";
import ContactMe from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <section id="about-me">
        <div className="about-me-main">
          <div className="about-me-content">
            <AboutMe />
          </div>
          <div className="model">
            <Canvas>
              <ambientLight intensity={2} />
              <OrbitControls minDistance={2.5} maxDistance={2.5} />
              <Suspense fallback={null}>
                <Building />
              </Suspense>
              <Environment preset="sunset" />
            </Canvas>
          </div>
        </div>
      </section>
      <Experience />
      <Projects />
      <Skill />
      <Achievements />
      <Testimonials />
      <ContactMe />
      <Footer />
    </div>
  );
}

export default App;
