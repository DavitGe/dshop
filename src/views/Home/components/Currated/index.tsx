import React from "react";
import styled from "styled-components";
import Wrapper from "../../../../components/Wrapper";
import Category from "./Category";
import { curratedConfig } from "../../../../configs/currated.config";

const StyledWrapper = styled(Wrapper)`
  display: flex;
  flex-direction: column;
  overflow-x: auto;
  margin-top: 64px;
  margin-bottom: 100vh;
`;

const Title = styled.h3`
  font-size: ${(props) => props.theme.fontxl};
  color: ${(props) => props.theme.text};
  font-weight: 600;
  margin-bottom: 32px;
`;

const CategoriesContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 46px;
`;

const Currated = () => {
  return (
    <StyledWrapper>
      <Title>Currated picks</Title>
      <CategoriesContainer>
        {curratedConfig.map((el, index) => {
          return (
            <Category img={el.img} buttonText={el.buttonText} key={index} />
          );
        })}
      </CategoriesContainer>
    </StyledWrapper>
  );
};

export default Currated;
