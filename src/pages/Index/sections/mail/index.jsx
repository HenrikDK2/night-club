import React, { useState } from "react";
import styled from "styled-components";
import { useForm } from "react-hook-form";

const Heading = styled.h2`
  text-transform: uppercase;
  font-size: 1.15rem;
  text-align: center;
  & > span {
    font-size: 0.875rem;
    margin-top: 15px;
    font-weight: normal;
    text-transform: none;
    display: block;
    & > span {
      color: var(--red);
    }
  }
`;
const Section = styled.section``;
const Form = styled.form`
  box-sizing: border-box;
  padding: 0 1rem;
  & input {
    outline: none;
    width: 100%;
    background: transparent;
    color: var(--text);
    padding: 2rem 2rem 1rem;
    box-sizing: Border-box;
    font-size: 1rem;
    font-weight: bold;
    border: none;
    border-bottom: 2px solid #fff;
    &::placeholder {
      opacity: 1;
    }
  }
  @media (min-width: 500px) {
    & div {
      display: flex;
      justify-content: center;
      max-width: 600px;
      margin: 0 auto;
    }
    & label {
      width: 80%;
    }
    & button {
      width: 25%;
      margin-left: 3rem;
    }
  }
`;
const Subscribe = styled.button`
  width: 100%;
  margin-top: 10px;
  text-transform: uppercase;
  font-weight: bold;
  font-size: 0.875rem;
  padding: 1rem 0;
  cursor: pointer;
  box-sizing: border-box;
  color: var(--text);
  border: none;
  border-top: 2px solid #fff;
  border-bottom: 2px solid #fff;
  background: transparent;
  &:focus,
  &:active {
    outline: none;
  }
`;

const ErrMsg = styled.p`
  color: var(--red);
  text-transform: uppercase;
  text-align: center;
`;

const EmailSend = styled.p`
  color: #0f0;
  text-align: center;
  text-transform: uppercase;
`;

const Index = () => {
  const [isEmailSubscribed, setIsEmailSubscribed] = useState(false);
  const { register, handleSubmit, watch, errors } = useForm();
  const onSubmit = async (data) => {
    try {
      const res = await fetch("http://night-club-api.herokuapp.com/newsletters", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: "email=" + data.email,
      });
      setIsEmailSubscribed(true);
      console.log(res);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <Section>
      <Heading>
        Want the latest night club news
        <span>
          Subscribe to our newsletter and never miss a <span>Event</span>
        </span>
      </Heading>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="email" aria-label="Email input">
            <input
              name="email"
              type="text"
              placeholder="Enter Your Email"
              ref={register({
                required: true,
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "This is an invalid email",
                },
              })}
            />
          </label>
          <Subscribe>Subscribe</Subscribe>
        </div>
        {errors.email && <ErrMsg>{errors.email.message}</ErrMsg>}
        {isEmailSubscribed && <EmailSend>Email is subscribed</EmailSend>}
      </Form>
    </Section>
  );
};

export default Index;
