import { useFrame } from '@react-three/fiber';
import { useLerpedMouse } from "../../hooks/useMouse";
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Model({ ...props }) {
  const mouse = useLerpedMouse();
  const group = useRef()
  const { nodes} = useGLTF('/computer.gltf')
  useFrame((state) => {
    group.current.rotation.y = (mouse.current.x * Math.PI) / 10;
    group.current.rotation.x = (mouse.current.y * Math.PI) / 10;
  });
  return (
    <group ref={group} scale={5} {...props} dispose={null}>
      <group rotation={[-Math.PI / 2.2, 0, 0]}>
        <mesh geometry={nodes.Object_2.geometry} material={nodes.Object_2.material} />
        <mesh geometry={nodes.Object_3.geometry} material={nodes.Object_3.material} />
      </group>
    </group>
  )
}

useGLTF.preload('/computer.gltf')
