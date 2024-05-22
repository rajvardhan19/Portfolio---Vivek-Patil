import { useState, Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Environment, OrbitControls } from "@react-three/drei";
import Building from "/Building.jsx";
import "../App.css";

const Model = () => {
  <div className="model">
    <Canvas>
      <ambientLight intensity={2} />
      <OrbitControls minDistance={3} maxDistance={3} enableZoom={false} />
      <Suspense fallback={null}>
        <Building />
      </Suspense>
      <Environment preset="sunset" />
    </Canvas>
  </div>;
};

export default Model;
