import { motion } from "framer-motion";
import styled from "styled-components";
import { IntroductionForm, IntroductionText } from "../atoms";

const IntroductionContainer = styled(motion.div)`
  margin-top: 100px;
  height: 90vh;
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
  } ;
`;

const IntroductionBackground = styled(motion.div)`
  position: absolute;
  height: 80%;
  width: 100vw;
  top: 0;
  background-color: ${(props) => props.theme.text};
  z-index: 0;
`;

export const Introduction = () => {
  return (
    <>
      <IntroductionBackground
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { delay: 0.5, duration: 0.5 } }}
        exit={{ opacity: 0, transition: { duration: 0.5 } }}
      />
      <IntroductionContainer
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { delay: 0.5, duration: 0.5 } }}
        exit={{ opacity: 0, transition: { duration: 0.5 } }}
      >
        <IntroductionText />
        <IntroductionForm />
      </IntroductionContainer>
    </>
  );
};
