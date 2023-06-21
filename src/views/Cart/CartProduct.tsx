import { useQuery } from "@apollo/client";
import React, { useState } from "react";
import { GET_PRODUCT_BY_ID } from "../../graphql/query";
import { BarLoader } from "react-spinners";
import styled from "styled-components";
import { cart } from "../../utils/GlobalStorage";

const CartWrapper = styled.div`
  height: 84px;
  display: flex;
  align-items: center;
  border-bottom: 1px solid rgba(217, 217, 217, 0.7);
`;

const LoaderContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const ProductContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const InfoContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

const Image: any = styled.div`
  background-image: url(${(props: any) => props.src});
  width: 64px;
  height: 64px;
  border-radius: 4px;
  background-size: cover;
`;

const ProductTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  h6 {
    font-size: ${(props) => props.theme.fontmd};
    font-weight: 500;
  }
  span {
    font-weight: 300;
  }
`;

const CounterContainer = styled.div`
  display: flex;
  flex-direction: row;
  div {
    border: 1px solid rgba(217, 217, 217, 0.4);
    cursor: pointer;
    user-select: none;
  }
`;

const MethodContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
`;

const Value = styled.span`
  width: 32px;
  text-align: center;
`;

const CartProduct = (props: { id: String; count: number }) => {
  const { loading, data, error } = useQuery(GET_PRODUCT_BY_ID, {
    variables: { id: props.id },
  });
  const { increase, decrease } = cart((state: any) => ({
    increase: state.increaseCount,
    decrease: state.decreaseCount,
  }));

  const increaseHandler = () => {
    increase(props.id);
  };

  const decreaseHandler = () => {
    decrease(props.id);
  };

  console.log("data", data);
  if (loading || data?.getProductById[0]) {
    return (
      <CartWrapper>
        {loading ? (
          <LoaderContainer>
            <BarLoader color="#0d0e1c" height={4} />
          </LoaderContainer>
        ) : (
          data?.getProductById[0] && (
            <ProductContainer>
              <InfoContainer>
                <Image src={data.getProductById[0].img} />
                <ProductTextContainer>
                  <h6>{data.getProductById[0].title}</h6>
                  <span>
                    ${(props.count * data.getProductById[0].price).toFixed(2)}
                  </span>
                </ProductTextContainer>
              </InfoContainer>
              <CounterContainer>
                <MethodContainer onClick={decreaseHandler}>-</MethodContainer>
                <Value>{props.count}</Value>
                <MethodContainer onClick={increaseHandler}>+</MethodContainer>
              </CounterContainer>
            </ProductContainer>
          )
        )}
      </CartWrapper>
    );
  }
  return <div />;
};

export default CartProduct;
