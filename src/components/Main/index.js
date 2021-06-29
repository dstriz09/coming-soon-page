import React from "react";
import styled from "styled-components";
import logo from "../../images/logo.svg";
import background from "../../images/bg-pattern-desktop.svg";
import arrow from "../../images/icon-arrow.svg";

const Main = styled.main`
  padding: 4rem 8rem;
  background-image: url(${background});
  background-position: center;
  background-size: cover;
  position: relative;
`;

const Container = styled.div`
  position: relative;
  top: 50%;
  transform: translateY(-50%);
  color: hsl(0, 36%, 70%);
`;

const H1 = styled.h1`
  margin: 0;
  max-width: 30rem;
  text-transform: uppercase;
  font-size: 4.5rem;
  line-height: 5rem;
  letter-spacing: 1.5rem;
  font-weight: 300;
  & span {
    font-weight: 600;
    color: hsl(0, 6%, 24%);
  }
`;

const P = styled.p`
  font-size: 1.2rem;
  line-height: 2rem;
`;

const InputContainer = styled.div`
  position: relative;
  margin-top: 2rem;
`;

const Input = styled.input`
  margin: 0;
  padding: 0;
  padding-left: 2rem;
  font-size: 1.2rem;
  border-radius: 5rem;
  height: 3.8rem;
  width: 90%;
  border: 1px solid hsl(0, 36%, 70%);
  border-right: 0;
  color: hsl(0, 6%, 24%);

  ::placeholder {
    font-family: "Josefin Sans", sans-serif;
    color: hsl(0, 36%, 70%);
    opacity: 0.5;
  }

  :focus {
    outline: none;
  }
`;

const Button = styled.button`
  border: 0;
  margin: 0;
  padding: 0;
  position: absolute;
  right: 0;
  top: 0;
  height: 100%;
  width: 6rem;
  border-radius: 5rem;
  background: linear-gradient(90deg, hsl(0, 80%, 86%), hsl(0, 74%, 74%));
  box-shadow: -0.5rem 0.5rem 1rem rgba(206, 151, 151, 0.4);
  cursor: pointer;

  :hover {
    background: hsl(0, 80%, 86%);
    box-shadow: -0.5rem 0.5rem 1rem rgba(206, 151, 151, 0.5);
  }
`;

const Content = () => {
  return (
    <Main>
      <img src={logo} alt="logo" />
      <Container>
        <H1>
          We're <span>coming soon</span>
        </H1>
        <P>
          Hello fellow shoppers! We're currently building our new fashion store.
          Add your email below to stay up-to-date with announcements and our
          launch deals.
        </P>
        <InputContainer>
          <Input
            placeholder="Email Address"
            type="email"
            placeholderTextColor="green"
          />
          <Button type="submit">
            <img src={arrow} alt="arrow" />
          </Button>
        </InputContainer>
      </Container>
    </Main>
  );
};

export default Content;
