import React from "react";
import Wrapper from "../../components/Wrapper";
import styled from "styled-components";
import { Radio } from "antd";
import Input from "../../components/inputs/Input";

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
  width: 578px;
  border-radius: 8px;
  padding: 12px;
  column-gap: 32px;
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

const StyledRadioGroup = styled(Radio.Group)`
  width: 578px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 12px;

  span {
    color: ${(props) => props.theme.text};
  }
  .ant-radio-wrapper {
    span {
      opacity: 0.7;
    }
  }
  .ant-radio-wrapper-checked {
    span {
      opacity: 1;
    }
  }
`;

const DeliveryInfo = () => {
  return (
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
        <InputWrapper>
          <p>ZIP</p>
          <Input width={132} placeholder="90250" />
        </InputWrapper>
        <InputWrapper style={{ marginLeft: "-24px" }}>
          <p>State</p>
          <Input width={132} placeholder="CA" />
        </InputWrapper>
        <InputWrapper style={{ width: "100%" }}>
          <p>Address</p>
          <Input placeholder="Gagarin st." />
        </InputWrapper>
      </DeliveryContainer>
      <ContentBox style={{ marginTop: 32 }}>
        <Title>Schedule delivery</Title>
        <DeliveryContainer>
          <InputWrapper style={{ width: "100%" }}>
            <p>Dates</p>
            <Input placeholder={"17 Apr - 23 Apr"} />
          </InputWrapper>
          <InputWrapper style={{ width: "100%" }}>
            <p>Note</p>
            <Input placeholder={"Type your note"} />
          </InputWrapper>
        </DeliveryContainer>
      </ContentBox>
      <ContentBox style={{ marginTop: 32 }}>
        <Title>Paymnent Method</Title>
        <DeliveryContainer>
          <StyledRadioGroup>
            <Radio value={1}>Online Payment</Radio>
            <Radio value={2}>Cash on Delivery</Radio>
            <Radio value={3}>POS on Delivery</Radio>
          </StyledRadioGroup>
        </DeliveryContainer>
      </ContentBox>
    </ContentBox>
  );
};

export default DeliveryInfo;
