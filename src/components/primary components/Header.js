import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { HeaderNavigation } from "../atoms";
import { REGISTRATION_PATH } from "../../constants";

const HeaderContainer = styled(motion.div)`
  position: fixed;
  height: 100px;
  width: calc(100vw - 100px);
  background-color: ${(props) => props.theme.text};
  color: ${(props) => props.theme.body};
  padding: 0 50px;

  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10;
`;

const HeaderWrapper = styled.div`
  width: 100%;
  max-width: 1500px;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const HeaderLogo = styled.h3`
  transform: translateY(-25%);
  width: 10%;
  font-family: "Pacifico", cursive;
  background: linear-gradient(
    180deg,
    rgba(255, 251, 8, 1) 0%,
    rgba(255, 255, 255, 1) 70%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const HeaderUserSide = styled.div`
  width: 20%;
  display: flex;
  justify-content: flex-end;
  gap: 30px;
  transform: translateY(-25%);
  button {
    width: 80px;
    padding: 5px 0;
    border-radius: 50px;
    font-weight: 900;
    letter-spacing: 0.5px;
    border: none;
    cursor: pointer;
  }
  > :first-child {
    background-color: #fffb08;
    box-shadow: 5px 5px 50px gray;
    &:hover {
    }
  }
  > :last-child {
    background-color: transparent;
    color: #fffb08;
  }
`;

export const Header = () => {
  const navigate = useNavigate();

  return (
    <HeaderContainer
      initial={{ y: "-200px" }}
      animate={{ y: "-100px", transition: { duration: 0.5, type: "spring" } }}
    >
      <HeaderWrapper>
        <HeaderLogo>LOGO</HeaderLogo>
        <HeaderNavigation />
        <HeaderUserSide>
          <motion.button
            onClick={() => navigate(REGISTRATION_PATH)}
            whileHover={{ scale: 1.1 }}
          >
            Sign Up
          </motion.button>
          <motion.button whileHover={{ scale: 1.2 }}>Sign In</motion.button>
        </HeaderUserSide>
      </HeaderWrapper>
    </HeaderContainer>
  );
};
