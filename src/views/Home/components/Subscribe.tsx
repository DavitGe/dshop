import React from "react";
import styled from "styled-components";
import Wrapper from "../../../components/Wrapper";
import { Input } from "antd";
import { BsEnvelope } from "react-icons/bs";
import Button from "../../../components/Button/Button";

const StyledWrapper = styled(Wrapper)`
  display: flex;
  flex-direction: column;
  overflow-x: auto;
  margin-top: 64px;
  height: 264px;
  border-radius: 8px;
  align-items: center;
  gap: 12px;
  margin-top: 84px;
`;

const Title = styled.p`
  color: ${(props) => props.theme.text};
  font-weight: 800;
  font-size: ${(props) => props.theme.fontxl};
  max-width: 640px;
  text-align: center;
`;

const Text = styled.span`
  color: ${(props) => props.theme.text};
  opacity: 0.7;
  font-size: ${(props) => props.theme.fontmd};
`;

const MailWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0;
  align-items: center;
  margin-top: 16px;
`;

const StyledInput = styled(Input)`
  height: 48px;
  width: 248px;
  font-size: 16px;
  border-bottom-right-radius: 0;
  border-top-right-radius: 0;
`;

const StyledBtn = styled(Button)`
  height: 48px;
  margin-left: -2px;
  border-bottom-left-radius: 0;
  border-top-left-radius: 0;
`;

const Subscribe = () => {
  return (
    <StyledWrapper>
      <Title>
        Subscribe to our newsletter and get updates to our last collections
      </Title>
      <Text>
        Get 20% off on your first order just by subscribing to our newsletter
      </Text>
      <MailWrapper>
        <StyledInput
          prefix={<BsEnvelope style={{ opacity: 0.3 }} fontSize={14} />}
          placeholder="Enter your mail"
        />
        <StyledBtn dark>Subscribe</StyledBtn>
      </MailWrapper>
    </StyledWrapper>
  );
};

export default Subscribe;
