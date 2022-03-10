import React, { useRef } from 'react'
import { useLoader,useFrame } from '@react-three/fiber'
import { TextureLoader } from 'three/src/loaders/TextureLoader';


const Box = ({image}) => {
    const mesh = useRef(null)
    const colorMap = useLoader(TextureLoader, image)
    useFrame(() => (mesh.current.rotation.x = mesh.current.rotation.y += 0.005))
  return (
    <mesh ref={mesh}>
        <boxBufferGeometry attach="geometry" args={[5, 5, 5]} />
        <meshStandardMaterial attach="material" map={colorMap} />
    </mesh>
  )
}

export default Box