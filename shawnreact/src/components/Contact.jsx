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
  font-weight: 200;
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

  @media only screen and (max-width: 768px){
    display: none;
  }
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
          
          // Clear success message after 7 seconds
          setTimeout(() => {
            setSuccess(null);
          }, 6000);
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
            <Input placeholder='Email' name='user_email'  required/>
            <TextArea placeholder='Write your message please!' rows={10} name='message' required />
            <Button type='submit'>Send Email</Button>
            {success === true && <Message>Your message has been sent. I'll get back to you soon :)</Message>}
            {success === false && <Message>Oops! Something went wrong. Please try again.</Message>}
          </Form>
        </Left>
        <Right></Right>
      </Container>
    </Section>
  );
};

export default Contact;
