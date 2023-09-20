import { styled } from "styled-components"
import Contact from "./components/Contact"
import Hero from "./components/Hero"
import Who from "./components/Who"
import Works from "./components/Works"
import CustomCursor from "./components/CustomCursor"
import BackgroundAudio from "./components/BackgroundAudio"
import RainBackground from "./components/RainBackground"


const Container = styled.div`

height:100vh;
width: 100%;
scroll-snap-type: y mandatory;
scroll-behavior: smooth;
overflow-y: auto;
scrollbar-width: none;
color: white;
background: url("img/bg.jpeg") no-repeat center center fixed;
background-size: cover;


&::-webkit-scrollbar{
  display: none;
}
`

function App() {
  return (
      <Container>
          <RainBackground/>
          <BackgroundAudio/>
          <CustomCursor />

          <Hero id="Home"/>
          <Who id="About-Me"/>
          <Works id="My-Work"/>
          <Contact id="Contact"/>

      </Container>
  )
}


export default App

