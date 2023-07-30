import { OrbitControls, Stage } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import React from 'react'
import Mastered_ultra_instinct from "./Mastered_ultra_instinct_-_goku"
import { styled } from 'styled-components'

const Descrip = styled.div`
width: 200px;
height: 110px;
padding: 23px;
background-color: white;
border-radius: 10px;
position: absolute;
top: 90px;
right: 90px;

@media only screen and (max-width: 768px){
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
}
`


const Illustration = () => {
  return (

    <>

<Canvas>
    <Stage environment="city" intensity={0.6}>
   <Mastered_ultra_instinct/>
    </Stage>
      <OrbitControls autoRotate />
    </Canvas>
    
    <Descrip>
      These 3D modals are imported from Sketchfab! This is a 3D modal of Goku from the 
      animated series called Dragon Ball! This form Goku currently has is called 
      Mastered Ultra Instinct!
    </Descrip>
    </>
    
  )
}

export default Illustration