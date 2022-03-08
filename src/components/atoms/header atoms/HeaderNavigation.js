import styled, { keyframes } from "styled-components";
import { useLocation, NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import { ABOUT_PATH, CONTACT_PATH, HOME_PATH } from "../../../constants";

const HeaderNavigationContainer = styled.div`
  width: 50%;
  display: flex;
  gap: 30px;
  transform: translateY(-25%);

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

const SingleNavLink = styled(motion(NavLink))`
  color: ${(props) => props.theme.body};
  text-decoration: none;
  font-weight: 700;
  letter-spacing: 1px;
  transition: 0.3s ease;

  &.active {
    color: ${(props) => props.theme.tretiary};
  }
  &.inactive {
    color: ${(props) => props.theme.body};
    &:hover {
      color: ${(props) => props.theme.tretiary};
      transform: translateY(-3px);
    }
  }
`;

const active = keyframes`
0%{width: 5%}
50%{width: 100%}
100%{width: 5%}
`;
const Line = styled.div`
  border-bottom: 2px solid #fffb08;
  position: relative;
  bottom: -10px;
  animation: ${active} 4s ease infinite;
  border-top-width: 0px;
`;

export const HeaderNavigation = () => {
  const { pathname: path } = useLocation();

  return (
    <HeaderNavigationContainer>
      <div>
        <SingleNavLink
          className={path === HOME_PATH ? "active" : "inactive"}
          to={HOME_PATH}
        >
          Home
        </SingleNavLink>
        {path === HOME_PATH ? <Line /> : null}
      </div>
      <div>
        <SingleNavLink
          className={path === ABOUT_PATH ? "active" : "inactive"}
          to={ABOUT_PATH}
        >
          About Us
        </SingleNavLink>
        {path === ABOUT_PATH ? <Line /> : null}
      </div>
      <div>
        <SingleNavLink
          className={path === CONTACT_PATH ? "active" : "inactive"}
          to={CONTACT_PATH}
        >
          Contact
        </SingleNavLink>
        {path === CONTACT_PATH ? <Line /> : null}
      </div>
    </HeaderNavigationContainer>
  );
};
