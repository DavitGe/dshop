import React from "react";
import styled from "styled-components";
import Button from "../../../../components/Button/Button";
import { BsArrowRight } from "react-icons/bs";

const CategoryWrapper: any = styled.div`
  width: 298px;
  height: 192px;
  background-image: url(${(props: any) => props.img});
  border-radius: 8px;
  padding-inline: 12px;
  padding-bottom: 20px;
  display: flex;
  align-items: end;
  background-size: cover;
  position: relative;
`;

const Blur = styled.div`
  position: absolute;
  background-color: rgba(0, 0, 0, 0.1);
  width: 316px;
  height: 212px;
  top: 0;
  left: 0;
  border-radius: 8px;
`;

const BtnText = styled.span`
  font-size: 14px;
  font-weight: 600;
`;

interface propsType {
  buttonText: string;
  img: string;
}

const Category = (props: propsType) => {
  return (
    <CategoryWrapper img={props.img}>
      <Blur />
      <Button
        style={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          height: 42,
        }}
      >
        <BtnText>{props.buttonText}</BtnText>
        <BsArrowRight fontSize={16} />
      </Button>
    </CategoryWrapper>
  );
};

export default Category;
