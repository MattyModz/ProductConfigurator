import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { useGlobalContext } from '../../app/Context/status'
import * as THREE from 'three'
const Door = (props) => {
  const { nodes, materials } = useGLTF('./model/Door2.gltf')
  const { door } = useGlobalContext()
  const { color } = useGlobalContext()
  const { IM } = useGlobalContext()
  const newColor = new THREE.Color('#EEE9E7')
  const data = [
    { color: '#EEE9E7', colorName: 'Wevet' },
    { color: '#C4BEB4', colorName: 'Purbeck stone' },
    { color: '#DFD6CB', colorName: 'Skimming Stone' },
    { color: '#C0C2B3', colorName: 'Mizzle' },
  ]
  return (
    <group {...props} dispose={null}>
      <group position={[-7.45, -1.3, 5.23]} scale={0.05}>
        <mesh
          geometry={nodes.Circle002.geometry}
          material={materials.DK_Metal}
          position={[149.3, 45.5, -97.08]}
          rotation={[0.54, 0.05, -1.57]}
          scale={21.53}
          visible={IM === 'Doorknob' ? true : false}
        />
      </group>
      <mesh
        geometry={nodes.Door.geometry}
        material={materials.WhiteWood}
        position={[0.01, 0, -0.49]}
        material-color={color}
      >
        <mesh
          geometry={nodes.handle.geometry}
          material={materials.MetalBronzeChrome}
          position={[-0.03, 0.98, 0.84]}
          visible={IM === 'Doorknob' ? false : true}
        />
        <mesh
          geometry={nodes.Lock1.geometry}
          material={materials.MetalBronzeChrome}
          position={[0.01, 0.87, 0.88]}
        />
        <mesh
          geometry={nodes.Lock1001.geometry}
          material={materials.MetalBronzeChrome}
          position={[-0.06, 0.87, 0.88]}
          rotation={[Math.PI, 0, Math.PI]}
        />
      </mesh>
    </group>
  )
}

useGLTF.preload('/Door+nobs.gltf')

export default Door

// Wevet #EEE9E7
// Purbeck Stone #C4BEB4
// DFD6CB Skimming stone
// Mizzle C0C2B3
