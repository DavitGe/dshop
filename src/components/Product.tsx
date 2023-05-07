import React from "react";
import styled from "styled-components";
import { BsCart } from "react-icons/bs";

const ProductWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 326px;
`;

const ProductImg: any = styled.div`
  height: 282px;
  width: 326px;
  /* background-color: ${(props) => props.theme.secondary}; */
  background-image: url(${(props: any) => props.src});
  background-size: cover;
  border-radius: 8px;
`;

const ProductInfo = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const ProductDesc = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0;
`;

const AddToCart = styled.div`
  width: 36px;
  height: 36px;
  border-radius: 6px;

  display: flex;
  align-items: center;
  justify-content: center;

  color: ${(props) => props.theme.white};
  background-color: ${(props) => props.theme.text};

  cursor: pointer;
`;

const Title = styled.span`
  color: ${(props) => props.theme.grey};
  font-size: ${(props) => props.theme.fontsm};
`;

const Price = styled.span`
  color: ${(props) => props.theme.text};
  font-size: ${(props) => props.theme.fontmd};
  font-weight: 800;
  margin-top: -4px;
`;

const Product = (props: any) => {
  return (
    <ProductWrapper>
      <ProductImg src={props.img} />
      <ProductInfo>
        <ProductDesc>
          <Title>{props.title}</Title>
          <Price>{props.price}$</Price>
        </ProductDesc>
        <AddToCart>
          <BsCart />
        </AddToCart>
      </ProductInfo>
    </ProductWrapper>
  );
};

export default Product;
