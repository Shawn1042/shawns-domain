import { OrbitControls, Stage } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import React from 'react'
import Voxel_web_development from "./Voxel_web_development"
import { styled } from 'styled-components'

const Descrip = styled.div`
width: 200px;
height: 30px;
padding: 21px;
background-color: white;
border-radius: 8px;
position: absolute;
top: 90px;
right: 100px;

@media only screen and (max-width: 768px){
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
}

`

const WebDesign = () => {
  return (
    <>

    <Canvas>
      <Stage environment="city" intensity={0.1}>
      <Voxel_web_development/>
      </Stage>
      <OrbitControls enableZoom={false} autoRotate/>
    </Canvas>
    <Descrip>
      I use an HP laptop for personal work!
    </Descrip>
    </>
    
  )
}

export default WebDesign
