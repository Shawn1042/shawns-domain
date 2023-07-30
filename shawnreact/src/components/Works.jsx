import React, { useState } from 'react'
import { styled } from 'styled-components'
import Development from "./Development"
import ProductDesign from "./ProductDesign"
import WebDesign from './WebDesign'
import Illustration from './Illustration'


const data = [
  "Tech",
  "Development",
  "Creative",
  "Product Design",
]

const Section = styled.div`
position: relative;
color: black;
font-size: 14px;
font-weight: 300;
height:100vh;
scroll-snap-align: center;
display: flex;
justify-content: center;
`

const Container = styled.div`
width: 1400px;
display: flex;
justify-content: space-between;

@media only screen and (max-width: 768px){
    width: 100%;
    flex-direction: column;
    
}
`
const Left = styled.div`
flex: 1;
display: flex;
align-items: center;

@media only screen and (max-width: 768px){
    padding: 20px;
    justify-content: center;
}


`

const List = styled.ul`
list-style: none;
display: flex;
flex-direction: column;
gap: 20px;
`;


const ListItem = styled.li`
cursor: pointer;
font-weight: bold;
font-size: 90px;
color: transparent;
position: relative;
-webkit-text-stroke: 1.4px white;
&::after{
  content: "${(props) => props.text}";
  position: absolute;
  top: 0;
  left: 0;
  color: pink;
  width: 0;
  overflow: hidden;
  white-space: nowrap;
}

@media only screen and (max-width: 768px){
    font-size: 24px;
    color: white;
    -webkit-text-stroke: 0px;
    
}

&:hover{
  &::after{
    animation: moveText 0.5s linear both;

    @keyframes moveText {
      to{
        width: 100%;
      }
    }
  }
}
`;


const Right = styled.div`
flex: 1;
`

const Works = () => {

  const [work,setWork] = useState("Web Design")

  return (
  <Section>
  <Container>
    <Left>
      <List>
      {data.map((item) => (
        <ListItem key={item} text={item} onClick={() => setWork(item)}>{item}</ListItem>
      ))}
      </List>
      </Left>
        <Right>
          {work==="Tech" ? (<WebDesign/>) : work === "Development" ? (<Development/>) :  work === "Creative" ? (<Illustration/>) : <ProductDesign/>}
        </Right>
      </Container>
    </Section>
  )
}

export default Works
