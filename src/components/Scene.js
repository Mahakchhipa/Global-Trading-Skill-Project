// components/Scene.js
'use client' // Make sure this is at the top

import { Canvas } from '@react-three/fiber'
import { useGLTF, useAnimations } from '@react-three/drei'
import { useRef, useEffect } from 'react'

function Scene() {
  const { scene, animations } = useGLTF('/models/scene.gltf', true) // Automatically loads the associated .bin
  const { actions } = useAnimations(animations, scene)
  const modelRef = useRef()

  useEffect(() => {
    if (actions && actions[0]) {
      actions[0].play() // Play the first animation in the file
    }
  }, [actions])

  return (
    <Canvas>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      <primitive ref={modelRef} object={scene} />
    </Canvas>
  )
}

export default Scene
