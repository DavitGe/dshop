import React from "react";
import styled from "styled-components";
import { curratedConfig } from "../../configs/currated.config";
import Category from "../Home/components/Currated/Category";
import Wrapper from "../../components/Wrapper";

const StyledWrapper = styled(Wrapper)`
  display: flex;
  flex-direction: column;
  overflow-x: auto;
  margin-top: 64px;
  margin-bottom: 32px;
`;

const CategoriesContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 46px;
  justify-content: space-between;

  @media (max-width: 1023px) {
    flex-wrap: wrap;
    /* align-items: center; */
    justify-content: center;
  }
`;

const Currated = () => {
  return (
    <StyledWrapper>
      {/* <Title>Categories</Title> */}
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
