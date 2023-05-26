import React from "react";
import styled from "styled-components";
import Wrapper from "../../../components/Wrapper";
import add from "../../../assets/advertisment.jpg";
import Button from "../../../components/Button/Button";
import { BsArrowRight } from "react-icons/bs";

const StyledWrapper = styled(Wrapper)`
  display: flex;
  flex-direction: row;
  overflow-x: auto;
  margin-top: 64px;
  height: 264px;
  background-color: ${(props) => props.theme.text};
  border-radius: 8px;
  gap: 48px;
  align-items: center;
  overflow: hidden;
  @media (max-width: 768px) {
    align-items: center;
    justify-content: center;
  }
`;

const StyledImg = styled.div`
  background-image: url(${add});
  background-size: cover;
  width: 60%;
  height: 100%;
  @media (max-width: 1064px) {
    width: 40%;
  }
  @media (max-width: 768px) {
    display: none;
  }
`;

const AddContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  margin-top: 64px;
  @media (max-width: 768px) {
    justify-content: center;
    align-items: center;
    margin-top: 0;
  }
`;

const Label = styled.span`
  text-transform: uppercase;
  font-weight: 300;
  font-size: 16px;
  color: ${(props) => props.theme.white};
  opacity: 0.8;
`;

const Text = styled.p`
  font-weight: 800;
  color: ${(props) => props.theme.white};
  font-size: 32px;
  margin-top: 12px;
  margin-bottom: 24px;
  max-width: 340px;
  @media (max-width: 768px) {
    font-size: 24px;
    text-align: center;
  }

  @media (max-width: 424px) {
    font-size: 24px;
  }
`;

const BtnWrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  span {
    font-size: ${(props) => props.theme.fontmd};
    font-weight: 600;
  }
`;

const Advertisment = () => {
  return (
    <StyledWrapper>
      <>
        <StyledImg />
        <AddContainer>
          <Label>Limited Offer</Label>
          <Text>35% off only this Friday and get special gift</Text>
          <Button style={{ height: 48, width: 216 }}>
            <BtnWrapper>
              <span>Grab it now</span>
              <BsArrowRight fontSize={16} />
            </BtnWrapper>
          </Button>
        </AddContainer>
      </>
    </StyledWrapper>
  );
};

export default Advertisment;
