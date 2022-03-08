import styled from "styled-components";

const IntroductionTextContainer = styled.div`
  width: 30%;
  color: ${(props) => props.theme.body};
  padding-top: 50px;
  display: flex;
  flex-direction: column;
  gap: 30px;
  h1 {
    font-size: 50px;
    font-weight: 900;
    letter-spacing: 1px;
  }

  z-index: 1;
`;

export const IntroductionText = () => {
  return (
    <IntroductionTextContainer>
      <h1>
        Been scammed by a broker?
        <span style={{ color: "#fffb08" }}> Let's get your money back!</span>
      </h1>
      <h3>
        If you’ve been ripped off by scammers, get in touch and our team of
        experts will work to get your money back
      </h3>
    </IntroductionTextContainer>
  );
};
