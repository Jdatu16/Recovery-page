import { useState } from "react";
import { motion } from "framer-motion";
import styled from "styled-components";
import { stateChangeHandler } from "../../../tools";
import { USER_CASE_FORM } from "../../../constants";

const IntroductionFormContainer = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 350px;
  align-items: center;
  gap: 20px;
  padding: 30px;
  border-radius: 10px;
  z-index: 3;
  height: fit-content;

  background-color: ${(props) => props.theme.body};
  box-shadow: 0px 0px 50px rgba(28, 28, 28, 0.4);
  h3 {
    font-weight: 900;
  }
  input {
    width: 95%;
    outline: none;
    border: none;
    border-radius: 10px;
    padding: 15px 10px;
    background-color: #7a7a7a;
    color: ${(props) => props.theme.body};
    font-weight: 700;
    ::placeholder,
    ::-webkit-input-placeholder {
      color: ${(props) => props.theme.body};
    }
  }
  textarea {
    width: 95%;
    border-radius: 10px;
    padding: 15px 10px;
    outline: none;
    resize: none;
    height: 150px;
    background-color: #7a7a7a;
    border: none;
    color: ${(props) => props.theme.body};
    font-weight: 700;
    ::placeholder,
    ::-webkit-input-placeholder {
      font-weight: 700;
      color: ${(props) => props.theme.body};
    }
  }
  button {
    width: 100%;
    border-radius: 10px;
    padding: 15px 10px;
    border: none;
    background-color: ${(props) => props.theme.tretiary};
    color: ${(props) => props.theme.text};
    font-weight: 900;
    letter-spacing: 2px;
    box-shadow: 0px 0px 50px #7a7a7a;
    cursor: pointer;
  }
  div {
    display: flex;
    gap: 10px;
  }
`;

export const IntroductionForm = () => {
  const [userCase, setUserCase] = useState(USER_CASE_FORM);
  const onSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <IntroductionFormContainer onSubmit={onSubmit}>
      <h3>Want to recover Your money?</h3>
      <p>apply for a free consultation</p>
      <div>
        <motion.input
          whileTap={{
            scale: 0.9,
          }}
          autocomplete="off"
          type="text"
          name="firstName"
          value={userCase.firstName}
          onChange={(e) => {
            stateChangeHandler(setUserCase, e.target.name, e.target.value);
          }}
          placeholder="First Name"
        />
        <motion.input
          whileTap={{
            scale: 0.9,
          }}
          autocomplete="off"
          type="text"
          name="lastName"
          value={userCase.lastName}
          onChange={(e) => {
            stateChangeHandler(setUserCase, e.target.name, e.target.value);
          }}
          placeholder="Last Name"
        />
      </div>
      <motion.input
        whileTap={{
          scale: 0.9,
        }}
        autocomplete="off"
        type="text"
        name="email"
        value={userCase.email}
        onChange={(e) => {
          stateChangeHandler(setUserCase, e.target.name, e.target.value);
        }}
        placeholder="E-mail Adress"
      />
      <motion.input
        whileTap={{
          scale: 0.9,
        }}
        autocomplete="off"
        type="text"
        name="amount"
        value={userCase.amount}
        onChange={(e) => {
          stateChangeHandler(setUserCase, e.target.name, e.target.value);
        }}
        title="Enter The sum"
        placeholder="How much did You invest?"
      />
      <motion.textarea
        whileTap={{
          scale: 0.9,
        }}
        name="case"
        value={userCase.case}
        onChange={(e) => {
          stateChangeHandler(setUserCase, e.target.name, e.target.value);
        }}
        placeholder="Tell us about Your case"
        cols="30"
        rows="10"
      />
      <motion.button
        whileHover={{
          backgroundColor: "#5ae000",
          transition: { durcation: 0.1, type: "tween" },
        }}
      >
        Submit
      </motion.button>
    </IntroductionFormContainer>
  );
};
