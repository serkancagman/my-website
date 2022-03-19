import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import Pigeon from "../3DObjects/Pigeon";
import { OrbitControls } from "@react-three/drei";
const ContactCanvas = () => {
  return (
    <Canvas
      style={{
        width: "100%",
        height: "500px",
      }}
      camera={{
        position: [-1, 2, 10],
        fov: 405,
        near: 1.1,
        far: 1000,
        up: [0, 10, 0],
      }}
    >
      <OrbitControls enableZoom={false} />
      <ambientLight color=" #fff" intensity={0.4} />
      <pointLight color="#fff" position={[-2, 5, 2]} intensity={0.5} />
      <Suspense fallback={null}>
        <Pigeon />
      </Suspense>
    </Canvas>
  );
};

export default ContactCanvas;
