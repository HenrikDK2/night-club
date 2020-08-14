import React from "react";
import styled from "styled-components";
import { useForm } from "react-hook-form";
import Subscribe from "../../../../components/Button";
import formInput from "../../../../components/formInput";

const Article = styled.article`
  width: 100%;
  & > h3 {
    font-size: 2rem;
  }
  @media (min-width: 900px) {
    padding: 0 50px;
  }
`;
const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: Center;
  align-items: center;
  & label {
    width: 100%;
  }

  & > button:nth-last-of-type(1) {
    width: 150px;
    margin: 0 0 0 auto;
  }
`;

const Input = styled.input`
  ${formInput}
  height: 50px;
`;

const TextArea = styled.textarea`
  ${formInput}
  height: 300px;
  resize: none;
  padding: 1rem 2rem;
  &::placeholder {
    font-weight: 500;
    font-family: "Ubuntu", sans-serif;
  }
`;

const ErrMsg = styled.p`
  color: var(--red);
  text-transform: uppercase;
  margin: 0;
  text-align: left;
  width: 100%;
`;

const EmailSend = styled.p`
  color: #0f0;
  text-align: left;
  font-weight: Bold;
  text-transform: uppercase;
`;

const Index = () => {
  const { register, handleSubmit, watch, errors } = useForm();
  const onSubmit = async (data) => {
    try {
      const formData =
        "name=" +
        data.name +
        "&email=" +
        data.email +
        "&message=" +
        data.comment +
        "&website=" +
        data.website;
      console.log(formData);
      const res = await fetch(`http://night-club-api.herokuapp.com/messages`, {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: formData,
      });
      console.log(data);
      console.log(res);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Article>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <label aria-label="Name Inputfield" htmlFor="name">
          <Input
            type="text"
            name="name"
            placeholder="Your Name"
            ref={register({
              required: {
                value: true,
                message: "Name field is required",
              },
            })}
          />
          {errors.name && <ErrMsg>{errors.name.message}</ErrMsg>}
        </label>
        <label aria-label="Email Inputfield" htmlFor="email">
          <Input
            type="text"
            name="email"
            placeholder="Your Email"
            ref={register({
              required: {
                value: true,
                message: "Email is required",
              },
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "This is an invalid email",
              },
            })}
          />
          {errors.email && <ErrMsg>{errors.email.message}</ErrMsg>}
        </label>{" "}
        <label aria-label="Website Inputfield" htmlFor="website">
          <Input
            type="text"
            name="website"
            placeholder="Your Website"
            ref={register({
              required: {
                value: true,
                message: "Website field is required",
              },
            })}
          />
          {errors.website && <ErrMsg>{errors.website.message}</ErrMsg>}
        </label>{" "}
        <label aria-label="Comment Textarea" htmlFor="comment">
          <TextArea
            name="comment"
            placeholder="Your Comment"
            ref={register({
              required: {
                value: true,
                message: "Comment field is required",
              },
            })}
          />
        </label>
        {errors.comment && <ErrMsg>{errors.comment.message}</ErrMsg>}
        <Subscribe>Submit</Subscribe>
      </Form>
    </Article>
  );
};

export default Index;
