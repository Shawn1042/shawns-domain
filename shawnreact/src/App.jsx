import React, { Suspense, lazy } from 'react';
import { styled } from "styled-components";

const RainBackground = lazy(() => import('./components/RainBackground'));
const BackgroundAudio = lazy(() => import('./components/BackgroundAudio'));
const CustomCursor = lazy(() => import('./components/CustomCursor'));
const Hero = lazy(() => import('./components/Hero'));
const Who = lazy(() => import('./components/Who'));
const Works = lazy(() => import('./components/Works'));
const Contact = lazy(() => import('./components/Contact'));

const Container = styled.div`
  height: 100vh;
  width: 100%;
  scroll-snap-type: y mandatory;
  scroll-behavior: smooth;
  overflow-y: auto;
  scrollbar-width: none;
  color: white;
  background: url("img/bg.jpeg") no-repeat center center fixed;
  background-size: cover;

  &::-webkit-scrollbar {
    display: none;
  }
`;

function App() {
  return (
    <Container>
      <Suspense fallback={<div>Loading...</div>}>
        <RainBackground />
        <BackgroundAudio />
        <CustomCursor />
        <Hero id="Home" />
        <Who id="About-Me" />
        <Works id="My-Work" />
        <Contact id="Contact" />
      </Suspense>
    </Container>
  );
}

export default App;
