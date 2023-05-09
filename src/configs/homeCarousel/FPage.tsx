import React from "react";
import styled from "styled-components";
import fImg from "../../assets/carousel/1page.jpg";
import Button from "../../components/Button/Button";

const Wrapper = styled.div`
  background-image: url(${fImg});
  height: 400px;
  background-size: cover;
  background-repeat: no-repeat;
  background-position-y: 55%;
  position: relative;
  border-radius: 8px;
`;

const Blur = styled.div`
  background-color: rgba(0, 0, 0, 0.3);
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  position: relative;
  z-index: 1;
  border-radius: 8px;
`;

const Text = styled.p`
  color: ${(props) => props.theme.white};
  font-size: 32px;
  font-weight: 700;
  text-align: center;
  position: absolute;
  z-index: 2;
  top: 40%;
  left: 50%;
  text-transform: uppercase;
  transform: translate(-50%, -50%);

  max-width: 532px;
`;

const BtnText = styled.span`
  font-size: 16px;
  font-weight: 700;
`;

const FPage = () => {
  return (
    <Wrapper>
      <Blur />
      <Text>Level up your style with our summer collections</Text>
      <Button
        style={{
          position: "absolute",
          top: "60%",
          zIndex: 2,
          left: "50%",
          transform: "translate(-50%, 0)",
          width: 148,
          height: 48,
        }}
      >
        <BtnText>Shop now</BtnText>
      </Button>
    </Wrapper>
  );
};

export default FPage;
