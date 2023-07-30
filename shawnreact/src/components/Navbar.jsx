import React from 'react'
import { styled } from 'styled-components'

const navData = [
    "Home",
    "About Me", 
    "My Work",
    "Contact"
]

const Section = styled.div`
display: flex;
justify-content: center;

@media only screen and (max-width: 768px){
    width: 100%;

}

`

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

`


const Links = styled.div`
display: flex;
align-items: center;
gap: 50px;

`

const Logo = styled.img`
height: 45px; border-radius: 2px;
transition: .5s;

&:hover{
    cursor: pointer;
    transform: scale(0.8);
}
`
const List = styled.ul`
display: flex;
gap: 20px;
list-style: none;

@media only screen and (max-width: 768px){
    display: none;
    
}
`

const ListItem= styled.li`
cursor: pointer;
font-size: 17px;

  font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;

  &:hover{
    color: lightgray;
    transition: 1s;
    border-bottom: 1px;
  }

`


const Icon = styled.img`
width: 30px;

cursor: pointer;
`


const Icons = styled.div`

display: flex;
gap: 20px;
list-style: none;
`


const Button = styled.button`

width: 100px;
padding: 10px;
background-color: #7A316F;
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
`




function Navbar() {
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
                <Button>Hire Me!</Button>
            </Icons>
        </Container>
    </Section>
  )
}

export default Navbar
