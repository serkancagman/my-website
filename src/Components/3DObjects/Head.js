
import { useFrame } from '@react-three/fiber'
import { useLerpedMouse } from "../../hooks/useMouse";
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Model({ ...props }) {
  const mouse = useLerpedMouse();
  const group = useRef()
  const { nodes, materials } = useGLTF('/head.gltf')
  useFrame((state) => {
    group.current.rotation.y = (mouse.current.x * Math.PI) / 10;
    group.current.rotation.x = (mouse.current.y * Math.PI) / 10;
  });
  return (
    <group scale={1.5} ref={group} {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, -2]}>
        <mesh geometry={nodes.Object_2.geometry} material={materials.Material} />
      </group>
    </group>
  )
}

useGLTF.preload('/head.gltf')
