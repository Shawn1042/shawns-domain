import { OrbitControls, Stage } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import React_logo from "./React_logo"
import React from 'react'
import { styled } from 'styled-components'

const Descrip = styled.div`
width: 200px;
height: 70px;
padding: 20px;
background-color: white;
border-radius: 10px;
position: absolute;
top: 90px;
right: 100px;
`

const ProductDesign = () => {
  return (

    <>
    <Canvas>
    <Stage environment="city" intensity={0.6}>
    <React_logo/>
    </Stage>
      <OrbitControls enableZoom={false} autoRotate/>
    </Canvas>

    </>
  )
}

export default ProductDesign
