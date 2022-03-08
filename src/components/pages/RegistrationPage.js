import { motion } from "framer-motion";
import { useState } from "react";
import styled from "styled-components";
import { RegistrationPageForm } from "../atoms";

const RegistrationPageContainer = styled(motion.div)`
  margin-top: 100px;
  height: calc(100vh - 200px);
  width: calc(100vw - 100px);
  padding: 50px 50px;
  max-width: 1500px;

  display: flex;
  justify-content: space-evenly;

  /* responsive */
  @media only screen and (min-width: 1500px) {
    position: relative;
    left: 50%;
    transform: translate(-50%, 0);
  }
`;
const RegistrationPageBackground = styled.div`
  position: absolute;
  background-color: ${(props) => props.theme.body};
  width: 100vw;
  height: calc(100vh - 200px);
  top: 0;
  z-index: 1;
`;

const RegistrationPageAd = styled.div`
  margin-top: 200px;
  display: flex;
  flex-direction: column;
  gap: 30px;
  h1 {
    font-size: 40px;
    color: ${(props) => props.theme.text};
    transform: translateY(-25%);
    font-family: "Pacifico", cursive;
    background: linear-gradient(
      0deg,
      rgba(255, 192, 0, 1) 0%,
      rgba(28, 28, 28, 1) 100%
    );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  h3 {
    font-weight: 900;
    font-size: 20px;
  }
  z-index: 3;
`;

export const RegistrationPage = () => {
  const [activeField, setActiveField] = useState("");

  return (
    <RegistrationPageContainer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { delay: 0.5, duration: 0.5 } }}
      exit={{ opacity: 0, transition: { duration: 0.5 } }}
    >
      <RegistrationPageBackground onClick={() => setActiveField("")} />
      <RegistrationPageAd onClick={() => setActiveField("")}>
        <h3>Here Goes Company Slogan</h3>
        <h1>Here Goes Logo</h1>
      </RegistrationPageAd>
      <RegistrationPageForm
        activeField={activeField}
        setActiveField={setActiveField}
      />
    </RegistrationPageContainer>
  );
};
