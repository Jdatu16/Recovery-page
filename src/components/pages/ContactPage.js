import { motion } from "framer-motion";
import styled from "styled-components";

const ContactPageContainer = styled(motion.div)`
  margin-top: 100px;
  height: 90vh;
  width: calc(100vw - 100px);
  padding: 50px 50px;
  max-width: 1500px;

  display: flex;
  justify-content: center;

  /* responsive */
  @media only screen and (min-width: 1500px) {
    position: relative;
    left: 50%;
    transform: translate(-50%, 0);
  } ;
`;

export const ContactPage = () => {
  return (
    <ContactPageContainer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { delay: 0.5, duration: 0.5 } }}
      exit={{ opacity: 0, transition: { duration: 0.5 } }}
    >
      <h1>Imagine if there was a contact info, how cool would it be???</h1>
    </ContactPageContainer>
  );
};
