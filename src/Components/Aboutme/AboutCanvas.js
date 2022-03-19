import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import Model from "../3DObjects/Head";
import { OrbitControls } from "@react-three/drei";
const AboutCanvas = () => {
  return (
    <Canvas
      style={{
        width: "100%",
        height: "500px",
      }}
   
    >
      <OrbitControls enableZoom={false} />
      <ambientLight intensity={0.5} color="purple" />
      <pointLight intensity={1} color="green" position={[1, 10, 10]} />
      <Suspense fallback={null}>
        <Model />
      </Suspense>
    </Canvas>
  );
};

export default AboutCanvas;
