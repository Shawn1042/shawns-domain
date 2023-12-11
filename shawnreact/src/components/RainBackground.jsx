import React from 'react';
import styled, { keyframes } from 'styled-components';

const RainBackgroundContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 10000;
  pointer-events: none;
`;

const rainAnimation = keyframes`
  to {
    transform: translateY(1000px);
  }
`;

const Raindrop = styled.div`
  position: absolute;
  background: linear-gradient(rgba(200, 200, 255, 0.7) 30%, rgba(200, 200, 255, 0.7) 30%, rgba(200, 200, 255, 0.7) 70%, rgba(200, 200, 255, 0.7) 70%);
  width: 1.5px;
  height: 15px;
  animation: ${rainAnimation} 0.5s linear infinite;

  &:nth-child(odd) {
    animation-delay: ${() => `${Math.random() * 2}s`};
  }

  &:nth-child(even) {
    animation-delay: ${() => `${Math.random() * 2}s`};
  }
`;

const RainBackground = () => {
  return (
    <RainBackgroundContainer>
      {Array.from({ length: 100 }).map((_, index) => (
        <Raindrop key={index} style={{ left: `${Math.random() * 100}%`, top: `${Math.random() * 100}%` }} />
      ))}
    </RainBackgroundContainer>
  );
};

export default RainBackground;
