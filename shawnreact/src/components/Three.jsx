import { OrbitControls} from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import React from 'react'
import { styled } from 'styled-components'
import Cube from './Cube'

const Container = styled.div`
height: 100vh;
width: 100%;
scroll-snap-align: center;
`

const Three = () => {


  return (
    <Container>
        <Canvas>
        <OrbitControls enableZoom={false} autoRotate={true}/>
        <ambientLight intensity={1}/>
        <directionalLight position={[3,2,1]}/>
        <Cube/>
        </Canvas>
    </Container>
  )
}

export default Three
