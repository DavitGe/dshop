import React from "react";
import styled from "styled-components";
import Button from "../../../../components/Button/Button";
import { BsArrowRight } from "react-icons/bs";

const CategoryWrapper: any = styled.div`
  width: 298px;
  height: 192px;
  background-image: url(${(props: any) => props.img});
  border-radius: 8px;
  background-size: cover;
  position: relative;
  /* filter: brightness(50%); */
`;

const CategoryContainer = styled.div`
  position: absolute;
  bottom: 20px;
  width: 274px;
  left: 50%;
  transform: translate(-50%);
  z-index: 2;
`;

const Blur = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.2);
  top: 0;
  left: 0;
  border-radius: 8px;
  z-index: 1;
  transition: 0.2s;
`;

const BtnText = styled.span`
  font-size: 14px;
  font-weight: 600;
`;

interface propsType {
  buttonText: string;
  img: string;
}

const StyledButton = styled(Button)`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 42px;
`;

const Category = (props: propsType) => {
  return (
    <CategoryWrapper img={props.img}>
      <Blur />

      <CategoryContainer>
        <StyledButton>
          <BtnText>{props.buttonText}</BtnText>
          <BsArrowRight fontSize={16} />
        </StyledButton>
      </CategoryContainer>
    </CategoryWrapper>
  );
};

export default Category;
