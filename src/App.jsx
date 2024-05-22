import { useState, Suspense } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { Canvas } from "@react-three/fiber";
import { Environment, OrbitControls } from "@react-three/drei";
import Building from "../public/Building";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";

function App() {
  return (
    <>
      <Navbar />
      <Home />
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
    </>
  );
}

export default App;
