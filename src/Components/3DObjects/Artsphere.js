import { useLerpedMouse } from "../../hooks/useMouse";
import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
export default function Model({ ...props }) {
  const group = useRef();
  const { nodes, materials } = useGLTF("/artsphere.gltf");
  const mouse = useLerpedMouse();

  useFrame((state) => {
    group.current.rotation.y = (mouse.current.x * Math.PI) / 10;
    group.current.rotation.x = (mouse.current.y * Math.PI) / 10;
  });
  return (
    <group ref={group} {...props} dispose={null}>
      <group rotation={[-Math.PI / 2.5, 0, 10.05]}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <group rotation={[-Math.PI / 2, 0, 0]} scale={[3, 3, 3]}>
            <mesh
              geometry={nodes.VoronoiDynoBake_Material_0.geometry}
              material={materials.Material}
            />
          </group>
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/artsphere.gltf");
