import { OrbitControls, Stage } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import React from 'react'
import Computer_and_laptop from "./Computer_and_laptop"
import { styled } from 'styled-components'

const Descrip = styled.div`
width: 200px;
height: 70px;
padding: 20px;
background-color: white;
border-radius: 10px;
position: absolute;
bottom: 80px;
right: 100px;

@media only screen and (max-width: 768px){
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
}
`

const Development = () => {
  return (
    <>

<Canvas>
    <Stage environment="city" intensity={0.6}>
    <Computer_and_laptop/>
    </Stage>
      <OrbitControls enableZoom={false}/>
    </Canvas>
      <Descrip>
      I built an internal Excel, Power Bi, HTML, and CSS training website for my company!
    </Descrip>
    </>
   
  )
}

export default Development