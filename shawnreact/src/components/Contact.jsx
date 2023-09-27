import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import styled from 'styled-components';

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
`;

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  gap: 50px;
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  @media only screen and (max-width: 768px){
    justify-content: center;
  }
`;

const Title = styled.h1`
  font-weight: 300;
`;

const Form = styled.form`
  width: 500px;
  display: flex;
  flex-direction: column;
  gap: 25px;

  @media only screen and (max-width: 768px){
    width: 300px;
  }
`;

const Input = styled.input`
  background-color: #e8e6e6;
  border: none;
  border-radius: 5px;
  padding: 20px;
`;

const TextArea = styled.textarea`
  background-color: #e8e6e6;
  border: none;
  border-radius: 5px;
  padding: 20px;
`;

const Button = styled.button`
  background-color: #da4ea2;
  color: white;
  font-weight: bold;
  cursor: pointer;
  border-radius: 5px;
  padding: 20px;
`;

const Message = styled.p`
  color: #da4ea2;
  margin-top: 20px;
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;

  @media only screen and (max-width: 768px){
    display: none;
  }
`;

const PyramidLoader = styled.div`
    position: relative;
    width: 700px;
    height: 700px;
    display: block;
    transform-style: preserve-3d;
    transform: rotateX(-20deg);
    margin: 50px auto;
`;

const Wrapper = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
    transform-style: preserve-3d;
    animation: spin 4s linear infinite;

    @keyframes spin {
        100% {
            transform: rotateY(360deg);
        }
    }
`;

const Side = styled.span`
    width: 161.5px;
    height: 161.5px;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
    transform-origin: center top;
    clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
    box-shadow: 0 0 10px 3px rgba(255, 255, 255, 0.6);  /* subtle glow effect */

    &.side1 {
        transform: rotateZ(-30deg) rotateY(90deg);
        background: linear-gradient(45deg, #aaa, #fff, #aaa);
    }

    &.side2 {
        transform: rotateZ(30deg) rotateY(90deg);
        background: linear-gradient(45deg, #ddd, #fff, #ddd);
    }

    &.side3 {
        transform: rotateX(30deg);
        background: linear-gradient(45deg, #bbb, #fff, #bbb);
    }

    &.side4 {
        transform: rotateX(-30deg);
        background: linear-gradient(45deg, #ccc, #fff, #ccc);
    }
`;

const Shadow = styled.span`
    width: 140px;
    height: 140px;
    background: #8f76b5;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
    transform: rotateX(90deg) translateZ(-84px);
    filter: blur(30px);
`;




const Contact = () => {
  const ref = useRef();
  const [success, setSuccess] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('contact_service', 'template_03jbkze', ref.current, 'Luz0WnUL5FNmUQGm9')
      .then(
        (result) => {
          console.log(result.text);
          setSuccess(true);
          ref.current.reset();

          setTimeout(() => {
            setSuccess(null);
          }, 7000);
        },
        (error) => {
          console.log(error.text);
          setSuccess(false);
        }
      );
  };

  return (
    <Section id="contact-section">
      <Container>
        <Left>
          <Form ref={ref} onSubmit={handleSubmit}>
            <Title>Contact Me!</Title>
            <Input placeholder='Name' name='user_name' required />
            <Input placeholder='Email' name='user_email' required/>
            <TextArea placeholder='Write your message please!' rows={10} name='message' required />
            <Button type='submit'>Send Email</Button>
            {success === true && <Message>Your message has been sent. I'll get back to you soon :)</Message>}
            {success === false && <Message>Oops! Something went wrong. Please try again.</Message>}
          </Form>
        </Left>
        <Right>
        <PyramidLoader>
          <Wrapper>
              <Side className="side1"></Side>
              <Side className="side2"></Side>
              <Side className="side3"></Side>
              <Side className="side4"></Side>
              <Shadow></Shadow>
          </Wrapper>
      </PyramidLoader>
        </Right>
      </Container>
    </Section>
  );
};

export default Contact;
