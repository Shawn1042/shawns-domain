import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const Cursor = styled.div`
  position: absolute;
  width: 20px;
  height: 20px;
  background-color: rgba(40, 0, 60, 0.9); // Dark purple color for the main circle
  border-radius: 50%;
  transform: translate(-50%, -50%);
  pointer-events: none;
  transition: all 0.2s ease;
  z-index: 9999;
  box-shadow: 0 0 5px rgba(75, 0, 130, 0.9), // Smaller, inner glow in a lighter purple
              0 0 15px rgba(75, 0, 130, 0.9), // Medium glow
              0 0 30px rgba(75, 0, 130, 0.9); // Outermost glow

  // Inner circle with its own glow
  &::before {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    width: 10px;
    height: 10px;
    background-color: black; 
    border-radius: 50%;
    transform: translate(-50%, -50%);
    box-shadow: 0 0 5px rgba(0, 0, 255, 0.7), 
                0 0 10px rgba(0, 0, 255, 0.7),
                0 0 15px rgba(0, 0, 255, 0.7);
  }
`;


const CustomCursor = () => {
    const [position, setPosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (event) => {
            setPosition({
                x: event.clientX,
                y: event.clientY
            });
        };

        document.addEventListener("mousemove", handleMouseMove);

        return () => {
            document.removeEventListener("mousemove", handleMouseMove);
        };
    }, []);

    return (
        <Cursor 
            style={{
                left: `${position.x}px`,
                top: `${position.y}px`
            }}
        />
    );
}

export default CustomCursor;
