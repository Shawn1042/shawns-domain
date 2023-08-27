import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import BackgroundAudio from './BackgroundAudio';

const navData = [
    "Home",
    "About Me", 
    "My Work",
    "Contact Me"
];

const Section = styled.div`
    display: flex;
    justify-content: center;

    @media only screen and (max-width: 768px){
        width: 100%;
    }
`;

const Container = styled.div`
    display: flex;
    justify-content: space-between;
    width: 1400px;
    align-items: center;
    padding: 15px 0px;

    @media only screen and (max-width: 768px){
        width: 100%;
        padding: 15px;
    }
`;

const Links = styled.div`
    display: flex;
    align-items: center;
    gap: 50px;
`;

const Logo = styled.img`
    height: 45px; 
    border-radius: 2px;
    transition: .5s;

    &:hover{
        cursor: pointer;
        transform: scale(0.8);
    }
`;

const List = styled.ul`
    display: flex;
    gap: 20px;
    list-style: none;

    @media only screen and (max-width: 768px){
        display: none;
    }
`;

const ListItem = styled.li`
    cursor: pointer;
    font-size: 17px;
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
    color: gray;

    &:hover{
        color: white;
        transition: 1s;
        border-bottom: 1px;
    }
`;

const Icons = styled.div`
    display: flex;
    gap: 20px;
    list-style: none;
`;

const buttonClickAnimation = keyframes`
    0% {
        transform: scale(1);
    }
    50% {
        transform: scale(1.2);
    }
    100% {
        transform: scale(1);
    }
`;

const Button = styled.button`
    width: 100px;
    padding: 10px;
    background-color: cornflowerblue;
    color: white;
    cursor: pointer;
    border: none;
    border-radius: 5px;
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;

    &:hover{
        transition: 0.9s;
        color: black;
        background-color: cornflowerblue;
    }

    position: relative;
    overflow: hidden;

    &:before {
        content: "";
        position: absolute;
        top: 0;
        left: -100%;
        width: 100%;
        height: 100%;
        background-color: rgba(255, 255, 255, 0.3);
        transform: skewX(-20deg);
        transition: 0.5s;
    }

    &:hover:before {
        left: 100%;
    }

    &:active:before {
        animation: ${buttonClickAnimation} 0.3s;
    }
`;

function Navbar({ onContactClick }) {
    const [audioPlaying, setAudioPlaying] = useState(false);

    const toggleAudio = () => {
        setAudioPlaying(!audioPlaying);
    };

    return (
      <Section>
          <Container>
              <Links>
                 <Logo src="./img/superman.jpg"/>
                 <List>
                     {navData.map((item) => (
                         <ListItem key={item}>{item}</ListItem>
                     ))}
                 </List>
              </Links>
              <Icons>
                  <Button onClick={onContactClick}>
                      Contact Me
                  </Button>
                  <Button onClick={toggleAudio}>
                      {audioPlaying ? "Pause Rain Sound" : "Play Rain Sound"}
                  </Button>
                  <BackgroundAudio play={audioPlaying} />
              </Icons>
          </Container>
      </Section>
    )
}

export default Navbar;
