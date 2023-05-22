import React from "react";
import styled from "styled-components";
import { BsCart } from "react-icons/bs";

const ProductWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 326px;
  @media (max-width: 764px) {
    margin: 0 auto;
  }
  @media (max-width: 384px) {
    width: 100%;
    margin: 0;
  }
`;

const ProductImg: any = styled.div`
  height: 282px;
  width: 326px;
  background-image: url(${(props: any) => props.src});
  background-size: cover;
  background-position-x: center;
  border-radius: 8px;
  padding-top: 12px;
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

const SaleWrapper = styled.span`
  padding-inline: 8px;
  padding-block: 2px;
  background-color: ${(props) => props.theme.secondary};
  color: ${(props) => props.theme.white};
  border-radius: 4px;
  margin-left: 12px;
`;

const PricesContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 6px;
`;

const OldPrice = styled.span`
  color: ${(props) => props.theme.grey};
  font-size: ${(props) => props.theme.fontsm};
  margin-top: -4px;
  text-decoration: line-through;
  opacity: 0.7;
`;

interface propsInterface {
  img: string;
  title: string;
  price: string | number;
  sale?: boolean;
  oldPrice?: string | number;
}

const Product = (props: propsInterface) => {
  return (
    <ProductWrapper>
      <ProductImg src={props.img}>
        {props.sale && <SaleWrapper>Sale</SaleWrapper>}
      </ProductImg>
      <ProductInfo>
        <ProductDesc>
          <Title>{props.title}</Title>
          <PricesContainer>
            <Price>{props.price}$</Price>
            {props.oldPrice && <OldPrice>{props.oldPrice}$</OldPrice>}
          </PricesContainer>
        </ProductDesc>
        <AddToCart>
          <BsCart />
        </AddToCart>
      </ProductInfo>
    </ProductWrapper>
  );
};

export default Product;
