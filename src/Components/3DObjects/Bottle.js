/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
author: rollthebryce (https://sketchfab.com/rollthebryce)
license: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
source: https://sketchfab.com/3d-models/message-in-a-bottle-2e738dfccbf34ec4bfbaf2c1d1203911
title: Message in a Bottle
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Model({ ...props }) {
  const group = useRef()
  const { nodes, materials } = useGLTF('/bottle.gltf')
  return (
    <group ref={group} {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <mesh geometry={nodes.defaultMaterial.geometry} material={materials.Cork} />
          <mesh geometry={nodes.defaultMaterial_1.geometry} material={materials.Glass} />
          <mesh geometry={nodes.defaultMaterial_2.geometry} scale={1} material={materials.Parchment} />
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/bottle.gltf')
