import styled, { keyframes } from "styled-components";
// icons
import {
  FaUserAlt,
  FaGlobeEurope,
  FaPhoneSquareAlt,
  FaKey,
} from "react-icons/fa";
import { MdEmail } from "react-icons/md";
// select country component
import { Countries } from "./Countries";

const slideLeft = keyframes`
0%{right: 0}
100%{transform:translateX(-5px); color:#fffb08}
`;
const slideRight = keyframes`
0%{right:5px; color:#fffb08}
100%{ right: 0}
`;

const RegistrationPageFormContainer = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
  z-index: 3;
`;

const RegistrationInput = styled.div`
  width: 20vw;
  background-color: #7a7a7a;
  color: ${(props) => props.theme.body};
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 0 5px 0 30px;
  height: 50px;
  border-radius: 30px;
  svg {
    position: relative;
    right: 0;
    &.active {
      animation: ${slideLeft} 0.3s forwards;
    }
    &.inactive {
      animation: ${slideRight} 0.3s forwards;
    }
  }
  input {
    background-color: transparent;
    width: 100%;
    height: 100%;
    outline: none;
    color: ${(props) => props.theme.body};
    border: none;
    ::placeholder,
    ::-webkit-input-placeholder {
      color: ${(props) => props.theme.body};
    }
    :focus::placeholder {
      color: transparent;
    }
    z-index: 3;
  }
`;

const RegistrationPageButton = styled.button`
  width: 100%;
  border-radius: 30px;
  padding: 15px 10px;
  border: none;
  background-color: ${(props) => props.theme.tretiary};
  color: ${(props) => props.theme.text};
  font-weight: 900;
  letter-spacing: 2px;
  box-shadow: 0px 0px 50px #7a7a7a;
  cursor: pointer;
  transition: 0.3s ease;
  &:hover {
    background-color: #5ae000;
    color: ${(props) => props.theme.body};
  }
`;

export const RegistrationPageForm = ({ activeField, setActiveField }) => {
  const onSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <RegistrationPageFormContainer onSubmit={onSubmit}>
      <RegistrationInput onFocus={() => setActiveField("firstName")}>
        <FaUserAlt
          className={activeField === "firstName" ? "active" : "inactive"}
          style={{ fontSize: "20px" }}
        />
        <input type="text" placeholder="First Name" />
      </RegistrationInput>
      <RegistrationInput onFocus={() => setActiveField("lastName")}>
        <FaUserAlt
          className={activeField === "lastName" ? "active" : "inactive"}
          style={{ fontSize: "20px" }}
        />
        <input type="text" placeholder="Last Name" />
      </RegistrationInput>
      <RegistrationInput onFocus={() => setActiveField("email")}>
        <MdEmail
          className={activeField === "email" ? "active" : "inactive"}
          style={{ fontSize: "20px" }}
        />
        <input type="text" placeholder="Email" />
      </RegistrationInput>
      <RegistrationInput onFocus={() => setActiveField("country")}>
        <FaGlobeEurope
          className={activeField === "country" ? "active" : "inactive"}
          style={{ fontSize: "20px" }}
        />
        <Countries />
      </RegistrationInput>
      <RegistrationInput onFocus={() => setActiveField("city")}>
        <FaGlobeEurope
          className={activeField === "city" ? "active" : "inactive"}
          style={{ fontSize: "20px" }}
        />
        <input type="text" placeholder="City" />
      </RegistrationInput>
      <RegistrationInput onFocus={() => setActiveField("phone")}>
        <FaPhoneSquareAlt
          className={activeField === "phone" ? "active" : "inactive"}
          style={{ fontSize: "20px" }}
        />
        <input type="text" placeholder="Phone" />
      </RegistrationInput>
      <RegistrationInput onFocus={() => setActiveField("password")}>
        <FaKey
          style={{ fontSize: "20px" }}
          className={activeField === "password" ? "active" : "inactive"}
        />
        <input type="text" placeholder="Password" />
      </RegistrationInput>
      <RegistrationInput onFocus={() => setActiveField("conPassword")}>
        <FaKey
          style={{ fontSize: "20px" }}
          className={activeField === "conPassword" ? "active" : "inactive"}
        />
        <input type="text" placeholder="Confirm Password" />
      </RegistrationInput>
      <RegistrationPageButton onFocus={() => setActiveField("")}>
        Sign Up
      </RegistrationPageButton>
    </RegistrationPageFormContainer>
  );
};
