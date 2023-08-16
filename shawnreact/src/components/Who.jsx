import React from 'react'
import { styled } from 'styled-components'
import Cube from './Cube'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'

const Section = styled.div`
height:100vh;
scroll-snap-align:center;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;

`

const Container = styled.div`
  height: 100%;
  scroll-snap-align: center;
  width: 1400px;
  display: flex;
  justify-content: center;

  @media only screen and (max-width: 768px) {
    height: 80%;
    width: 100%;
    flex-direction: column; /* Stack Left and Right sections on top of each other */
    align-items: center; /* Center content horizontally */
  }
`;

const Left = styled.div`
  flex: 1;

  @media only screen and (max-width: 768px) {
    padding: 0;
    margin-right: -10px; /* Add negative margin to bring it closer to the right section */
  }
`;


const Title = styled.h1`
font-size: 74px;

@media only screen and (max-width: 768px){
    font-size: 60px;
    
}
`
const Right = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;

  @media only screen and (max-width: 768px) {
    align-items: center;
    text-align: center;
    padding: 20px;
    margin-left: -10px; /* Add negative margin to bring it closer to the left section */
    gap: 10px;
  }
`;

const WhatWeDoSection = styled.div`
display: flex;
align-items: center;
gap: 10px;
`

const Line = styled.img`height: 5px;`

const Subtitle = styled.h2`
color: #da4ea2;
`

const Description = styled.p`
font-size: 24px;

color: lightgray;

@media only screen and (max-width: 768px){
    padding: 0;
    
}
`

const Button = styled.button`
background-color: #da4ea2;
color: white;
font-weight: 500;
width: 100px;
padding: 10px;
border: none;
border-radius: 5px;
cursor: pointer;
`





const Who= () => {
  return (
    <Section>
    <Container>
      <Left>
      <Canvas camera={{fov:25, position: [5,5,5]}}>
        <OrbitControls enableZoom={false} autoRotate={true}/>
        <ambientLight intensity={1}/>
        <directionalLight position={[3,2,1]}/>
        <Cube/>
            
        </Canvas>
       
      </Left>

      <Right>
        <Title>About Me</Title>
        <WhatWeDoSection>
          <Line src="img/line.png"/>
          <Subtitle>Shawn Holmes</Subtitle>
        </WhatWeDoSection>
        <Description>
        I'm quietly confident, naturally curious, and I enjoy the road to improving my problem thinkings skills every day.
           
        </Description>
        
        <Description>
        I love to work on challenging projects.
        </Description>
        
      </Right>
    </Container>
    </Section>
  )
}

export default Who
