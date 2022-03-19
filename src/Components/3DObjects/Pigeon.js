import { useLerpedMouse } from "../../hooks/useMouse";
import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

export default function Model({ ...props }) {
  const mouse = useLerpedMouse();
  const group = useRef();
  const { nodes, materials} = useGLTF("/pigeon.gltf");
  
  useFrame((state) => {
    group.current.rotation.y = (mouse.current.x * Math.PI) / 10;
    group.current.rotation.x = (mouse.current.y * Math.PI) / 10;
  });
  return (
    <group ref={group} {...props} dispose={null}>
      <group rotation={[-Math.PI / 2.5, 0, 0.7]} scale={2.54}>
        <group
          position={[-2.21, 0.91, 11.49]}
          rotation={[-0.03, 0, -3.11]}
          scale={-0.74}
        />
        <group
          position={[-2.37, -0.48, 11.49]}
          rotation={[2.74, 1.55, -2.78]}
          scale={0.74}
        />
        <group position={[0.09, 0, -0.1]} scale={0.11}>
          <mesh
            geometry={nodes.PRIG01_0047Percy_Mesh002_0.geometry}
            material={materials["Top_Beak.001"]}
          />
        </group>
        <group position={[0.09, 0, -0.1]} scale={0.11}>
          <mesh
            geometry={nodes.PRIG01_0047Percy_Mesh001_0.geometry}
            material={materials["Wings.001"]}
          />
        </group>
        <mesh
          geometry={nodes.PRIG01_0047R_Eye_LidB004_0.geometry}
          material={materials["Lids.001"]}
        />
        <mesh
          geometry={nodes.PRIG01_0047L_Eye002_0.geometry}
          material={materials["Eye.001"]}
        />
        <mesh
          geometry={nodes.PRIG01_0047L_Eye002_1.geometry}
          material={materials["Pupil.001"]}
        />
        <mesh
          geometry={nodes.PRIG01_0047Percy_Mesh_0.geometry}
          material={materials["Percy.001"]}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/pigeon.gltf");
