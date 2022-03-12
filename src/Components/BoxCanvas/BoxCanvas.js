import React,{Suspense} from 'react'
import { OrbitControls } from "@react-three/drei";
import Box from "../Box/Box";
import { Canvas } from "@react-three/fiber";
const BoxCanvas = ({image,canvasWidth}) => {
  
  return (
    <Canvas
    style={canvasWidth}
    camera={{ position: [-5, 2, 10], fov: 60 }}
  >
    <OrbitControls enableZoom={false} />
    <ambientLight intensity={0.4} />
    <directionalLight position={[0, 10, 0]} intensity={0} />
    <pointLight intensity={0.3} position={[-10, -5, -20]} />  
    <Suspense fallback={null}>
      <Box image={image} position={[0, 0, 0]} />
    </Suspense>
  </Canvas>
  )
}

export default BoxCanvas