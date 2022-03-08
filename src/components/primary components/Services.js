import styled from "styled-components";
import { MdPreview } from "react-icons/md";
import { BsFiles } from "react-icons/bs";
import { GoLaw } from "react-icons/go";
import { RiRefund2Line } from "react-icons/ri";

const ServicesContainer = styled.div`
  width: calc(100vw - 100px);
  padding: 50px 50px;
  max-width: 1500px;

  display: flex;
  gap: 50px;
  flex-direction: column;
  align-items: center;

  @media only screen and (min-width: 1500px) {
    position: relative;
    left: 50%;
    transform: translate(-50%, 0);
  } ;
`;

const ServicesHeadline = styled.h1`
  font-size: 35px;
  font-weight: 900;
`;

const ServicesWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  flex-wrap: wrap;
  gap: 50px;
`;

const SingleService = styled.div`
  display: flex;
  max-width: 40%;
  gap: 10px;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0px 0px 20px rgba(28, 28, 28, 0.2);

  .icon-wrapper {
    background-color: ${(props) => props.theme.tretiary};
    padding: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 20px;
    width: 20px;
    border-radius: 10px;
    svg {
      transform: scale(1.6);
    }
  }
  .description-wrapper {
    display: flex;
    flex-direction: column;
    gap: 10px;
    p {
      letter-spacing: 1.3px;
      font-size: 14px;
    }
    h3 {
      font-size: 15px;
    }
  }
`;

export const Services = () => {
  return (
    <ServicesContainer>
      <ServicesHeadline>Why should You choose Us?</ServicesHeadline>
      <ServicesWrapper>
        <SingleService>
          <div className="icon-wrapper">
            <MdPreview />
          </div>
          <div className="description-wrapper">
            <h3>REVIEW YOUR STORY AND DOCUMENTATION</h3>
            <p>
              Performing preliminary checks to assess whether the case at hand
              is plausibly winnable, based on our experience.
            </p>
          </div>
        </SingleService>
        <SingleService>
          <div className="icon-wrapper">
            <BsFiles />
          </div>
          <div className="description-wrapper">
            <h3>GATHER THE EVIDENCE</h3>
            <p>
              Collecting all the information and documentation that would be
              evidence ascertaining possible fraudulent activity.
            </p>
          </div>
        </SingleService>
        <SingleService>
          <div className="icon-wrapper">
            <GoLaw />
          </div>
          <div className="description-wrapper">
            <h3>BUILD YOUR CASE</h3>
            <p>
              Put evidence and facts together with our trusted personnel to
              build a legal case in order to correctly proceed with refund
              procedures.
            </p>
          </div>
        </SingleService>
        <SingleService>
          <div className="icon-wrapper">
            <RiRefund2Line />
          </div>
          <div className="description-wrapper">
            <h3>SUBMITING FOR A REFUND</h3>
            <p>
              Contacting our trusted partners in relevant Exchages with
              sufficient documentation for a successful refund.
            </p>
          </div>
        </SingleService>
      </ServicesWrapper>
    </ServicesContainer>
  );
};
