import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';

const pulsate = keyframes`
  0% {
    transform: translate(-50%, -50%) scale(1);
    background: radial-gradient(circle, rgba(255, 94, 77, 0.9), rgba(255, 165, 0, 0.6));
  }
  50% {
    transform: translate(-50%, -50%) scale(1.2);
    background: radial-gradient(circle, rgba(255, 85, 60, 0.9), rgba(255, 155, 0, 0.6));
  }
  100% {
    transform: translate(-50%, -50%) scale(1);
    background: radial-gradient(circle, rgba(255, 94, 77, 0.9), rgba(255, 165, 0, 0.6));
  }
`;

const Cursor = styled.div`
  position: absolute;
  width: 20px;
  height: 20px;
  background: radial-gradient(circle, rgba(255, 94, 77, 0.9), rgba(255, 165, 0, 0.6));
  border-radius: 50%;
  transform: translate(-50%, -50%);
  pointer-events: none;
  z-index: 9999;
  animation: ${props => props.isStationary ? pulsate : 'none'} 1.5s infinite;

  &::before {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    width: 40px;
    height: 40px;
    background: rgba(255, 155, 0, 0.3);
    border-radius: 50%;
    transform: translate(-50%, -50%);
    opacity: 0.7;
  }
`;

const CustomCursor = () => {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [isMoving, setIsMoving] = useState(true);
    let moveTimer;

    useEffect(() => {
        document.body.style.cursor = 'none';

        const handleMouseMove = (event) => {
            setPosition({
                x: event.clientX,
                y: event.clientY
            });
            setIsMoving(true);
            
            clearTimeout(moveTimer);
            moveTimer = setTimeout(() => {
                setIsMoving(false);
            }, 2000); // start animation after 2 seconds of inactivity
        };

        document.addEventListener("mousemove", handleMouseMove);

        return () => {
            document.removeEventListener("mousemove", handleMouseMove);
            document.body.style.cursor = 'auto';
            clearTimeout(moveTimer);
        };
    }, []);

    return (
        <Cursor 
            isStationary={!isMoving}
            style={{
                left: `${position.x}px`,
                top: `${position.y}px`
            }}
        />
    );
}

export default CustomCursor;
