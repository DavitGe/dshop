import React from "react";
import styled from "styled-components";
import Wrapper from "../../../components/Wrapper";

const StyledWrapper = styled(Wrapper)`
  display: flex;
  flex-direction: column;
  overflow-x: auto;

  margin-top: 32px;
`;

const Title = styled.h3`
  font-size: ${(props) => props.theme.fontxl};
  color: ${(props) => props.theme.text};
  font-weight: 600;
`;
const Partners = () => {
  return (
    <StyledWrapper>
      <Title>Partners</Title>
    </StyledWrapper>
  );
};

export default Partners;
