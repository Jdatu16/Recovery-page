import styled from "styled-components";
import aware from "../../images/be-aware.jpg";
import scam from "../../images/scam.jpg";
import secure from "../../images/secure.jpg";

const TipsContainer = styled.div`
  width: calc(100vw - 100px);
  padding: 50px 50px;
  max-width: 1500px;

  display: flex;
  flex-direction: column;
  gap: 50px;
  align-items: center;

  @media only screen and (min-width: 1500px) {
    position: relative;
    left: 50%;
    transform: translate(-50%, 0);
  } ;
`;

const SingleTip = styled.a`
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  color: ${(props) => props.theme.text};
  text-decoration: none;
`;

const TipsWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 30px;

  img {
    width: 370px;
    max-height: 200px;
  }

  p {
    background-color: ${(props) => props.theme.body};

    border-radius: 5px;
    box-shadow: 0px 0px 10px rgba(28, 28, 28, 0.4);
    padding: 15px 20px;
    position: relative;
    top: -20px;
    font-weight: 700;
  }
`;

const TipsHeadline = styled.h1`
  font-size: 35px;
  font-weight: 900;
`;

export const Tips = () => {
  return (
    <TipsContainer>
      <TipsHeadline>Here are some tips from us</TipsHeadline>
      <TipsWrapper>
        <SingleTip
          target="_blank"
          href="https://www.asecurelife.com/how-to-spot-a-fake-website/"
        >
          <img src={aware} alt="" />
          <p>How to spot a fake or scam website? </p>
        </SingleTip>
        <SingleTip
          target="_blank"
          href="https://www.scamwatch.gov.au/about-scamwatch/tools-resources/online-resources/spot-the-scam-signs"
        >
          <img src={scam} alt="" />
          <p>Spot the scam signs...</p>
        </SingleTip>
        <SingleTip
          target="_blank"
          href="https://www.police.act.gov.au/sites/default/files/PDF/bizsafe-internet-fraud-factsheet.pdf"
        >
          <img src={secure} alt="" />
          <p>Information is the best defence</p>
        </SingleTip>
      </TipsWrapper>
    </TipsContainer>
  );
};
