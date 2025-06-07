import { OrbitControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import React from 'react'
import { useMediaQuery } from 'react-responsive'
// import { Room } from './Room.jsx'
import { Robot } from './Robot.jsx'
import HeroLight from './HeroLight.jsx'
import Particles from './Particle.jsx'

const HeroExperience = () => {
    const isTablet = useMediaQuery({ query: '(max-width: 1024px)' })
    const isMobile = useMediaQuery({ query: '(max-width: 768px)' })
  return (
    <Canvas camera={{position: [0, 0, 15], fov: 45}}>
        <ambientLight intensity={0.2} color="#1a1a40"/>
        <directionalLight position={[5,5,5]} intensity={3}/> 
        <OrbitControls
            enablePan={false}
            enableZoom={isTablet}
            maxDistance={20}
            minDistance={5}
            minPolarAngle={Math.PI / 5}
            maxPolarAngle={Math.PI / 2}

        />
        <HeroLight />

        <Particles count={100}/>
        <group scale={isMobile ?  2 : 3}
        position={isMobile ? [0, -6, 0] : [0, -5, 0]}
        rotation={[0, -Math.PI/4, 0]}
        >
            <Robot />
        </group>
    </Canvas>
  )
}

export default HeroExperience
