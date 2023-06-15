import React from "react";
import Wrapper from "../../components/Wrapper";
import styled from "styled-components";
import Product from "../../components/Product";
import img from "../../assets/featured/1.jpg";
import { useQuery } from "@apollo/client";
import { GET_PRODUCTS } from "../../graphql/query";
import { message } from "antd";

const StyledWrapper = styled(Wrapper)`
  margin-bottom: 64px;
  margin-top: 64px;
`;

const ProductsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(326px, 1fr));
  grid-gap: 32px 24px;
  /* justify-content: space-between; */
`;

const Title = styled.h3`
  font-size: ${(props) => props.theme.fontxl};
  color: ${(props) => props.theme.text};
  font-weight: 600;
  margin-bottom: 24px;
`;

const Products = () => {
  const { loading, error, data } = useQuery(GET_PRODUCTS);
  const [messageApi, contextHolder] = message.useMessage();

  const displayError = (msg: string) => {
    messageApi.open({
      type: "error",
      content: "Error! " + msg,
      duration: 5,
    });
  };

  return (
    <StyledWrapper>
      {contextHolder}
      <Title>Catalog</Title>
      <ProductsWrapper>
        {loading
          ? null
          : data.products.map((productProps: any) => (
              <Product {...productProps} />
            ))}
        {loading
          ? null
          : data.products.map((productProps: any) => (
              <Product {...productProps} />
            ))}
        {loading
          ? null
          : data.products.map((productProps: any) => (
              <Product {...productProps} />
            ))}
        {loading
          ? null
          : data.products.map((productProps: any) => (
              <Product {...productProps} />
            ))}
        {loading
          ? null
          : data.products.map((productProps: any) => (
              <Product {...productProps} />
            ))}
      </ProductsWrapper>
    </StyledWrapper>
  );
};

export default Products;
