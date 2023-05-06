import React from "react";
import styled from "styled-components";
import Wrapper from "../../../components/Wrapper";
import {
  SiAdidas,
  SiNike,
  SiAdobe,
  SiAmazon,
  SiBadoo,
  SiCrunchyroll,
  SiDribbble,
  SiEllo,
  SiEpicgames,
} from "react-icons/si";

import ScrollContainer from "react-indiana-drag-scroll";

const StyledWrapper = styled(Wrapper)`
  display: flex;
  flex-direction: column;
  overflow-x: auto;
  margin-top: 64px;
`;

const Title = styled.h3`
  font-size: ${(props) => props.theme.fontxl};
  color: ${(props) => props.theme.text};
  font-weight: 600;
  margin-bottom: 32px;
`;

const LogoWrapper = styled.div`
  width: 64px;
  height: 64px;
  svg {
    height: 100%;
    width: 100%;
    color: ${(props) => props.theme.text};
    transition: 0.2s;

    &:hover {
      color: ${(props) => props.theme.secondary};
      transition: 0.2s;
    }
  }
`;

const LogosContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  gap: 120px;
  width: max-content;
`;

const Partners = () => {
  return (
    <StyledWrapper>
      <Title>Brands</Title>
      <ScrollContainer className="scroll-container" vertical={false}>
        <LogosContainer>
          <LogoWrapper>
            <SiAdidas />
          </LogoWrapper>
          <LogoWrapper>
            <SiNike />
          </LogoWrapper>
          <LogoWrapper>
            <SiAdobe />
          </LogoWrapper>
          <LogoWrapper>
            <SiAmazon />
          </LogoWrapper>
          <LogoWrapper>
            <SiBadoo />
          </LogoWrapper>
          <LogoWrapper>
            <SiCrunchyroll />
          </LogoWrapper>
          <LogoWrapper>
            <SiDribbble />
          </LogoWrapper>
          <LogoWrapper>
            <SiEllo />
          </LogoWrapper>
          <LogoWrapper>
            <SiEpicgames />
          </LogoWrapper>
          <LogoWrapper>
            <SiAdidas />
          </LogoWrapper>
          <LogoWrapper>
            <SiNike />
          </LogoWrapper>
          <LogoWrapper>
            <SiAdobe />
          </LogoWrapper>
          <LogoWrapper>
            <SiAmazon />
          </LogoWrapper>
          <LogoWrapper>
            <SiBadoo />
          </LogoWrapper>
          <LogoWrapper>
            <SiCrunchyroll />
          </LogoWrapper>
          <LogoWrapper>
            <SiDribbble />
          </LogoWrapper>
          <LogoWrapper>
            <SiEllo />
          </LogoWrapper>
          <LogoWrapper>
            <SiEpicgames />
          </LogoWrapper>
        </LogosContainer>
      </ScrollContainer>
    </StyledWrapper>
  );
};

export default Partners;
