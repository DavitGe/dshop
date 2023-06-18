import React from "react";
import styled from "styled-components";
import Wrapper from "../../components/Wrapper";
import Input from "../../components/inputs/Input";

const StyledWrapper = styled(Wrapper)`
  display: flex;
  flex-direction: row;
  margin-top: 64px;
  margin-bottom: 32px;
`;

const ContentBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const DeliveryContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  height: 300px;
  width: 700px;
  border-radius: 8px;
  padding: 12px;
  column-gap: 32px;
`;

const OrderContainer = styled.div`
  display: flex;
`;

const Title = styled.h4`
  font-size: ${(props) => props.theme.fontmd};
  font-weight: 600;
  color: ${(props) => props.theme.text};
`;

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  p {
    font-size: ${(props) => props.theme.fontsm};
    font-weight: 500;
    color: ${(props) => props.theme.text};
    opacity: 0.8;
  }
`;

const Cart = () => {
  return (
    <StyledWrapper>
      <ContentBox>
        <Title>Delivery information</Title>
        <DeliveryContainer>
          <InputWrapper>
            <p>Name</p>
            <Input width={272} placeholder={"James Benington"} />
          </InputWrapper>
          <InputWrapper>
            <p>Mobile Number</p>
            <Input width={272} placeholder="(212)456-7890" />
          </InputWrapper>
          <InputWrapper>
            <p>Email</p>
            <Input width={272} placeholder="James@gmail.com" />
          </InputWrapper>
          <InputWrapper>
            <p>City</p>
            <Input width={272} placeholder="Los Angeles" />
          </InputWrapper>
          <InputWrapper>
            <p>State</p>
            <Input width={272} placeholder="California" />
          </InputWrapper>
        </DeliveryContainer>
      </ContentBox>
      <OrderContainer></OrderContainer>
    </StyledWrapper>
  );
};

export default Cart;
