import React, { useRef } from "react";
import { useLoader, useFrame } from "@react-three/fiber";
import { TextureLoader } from "three/src/loaders/TextureLoader";
import { useLerpedMouse } from "../../hooks/useMouse";

const Box = ({ image }) => {
  const mouse = useLerpedMouse();

  const mesh = useRef(null);
  const colorMap = useLoader(TextureLoader, image);
  useFrame(() => {
    mesh.current.rotation.y = (mouse.current.x * Math.PI) / 10;
    mesh.current.rotation.x = (mouse.current.y * Math.PI) / 10;
  });
  return (
    <mesh ref={mesh}>
      <boxBufferGeometry attach="geometry" args={[5, 5, 5]} />
      <meshStandardMaterial attach="material" map={colorMap} />
    </mesh>
  );
};

export default Box;
