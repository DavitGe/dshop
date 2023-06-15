import React from "react";
import Wrapper from "../../components/Wrapper";
import styled from "styled-components";
import Product from "../../components/Product";
import img from "../../assets/featured/1.jpg";

const StyledWrapper = styled(Wrapper)`
  margin-bottom: 64px;
`;

const ProductsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  row-gap: 24px;
  column-gap: 32px;
  justify-content: space-between;
`;

const Title = styled.h3`
  font-size: ${(props) => props.theme.fontxl};
  color: ${(props) => props.theme.text};
  font-weight: 600;
  margin-bottom: 32px;
`;

const Products = () => {
  return (
    <StyledWrapper>
      <Title>Catalog</Title>
      <ProductsWrapper>
        <Product img={img} title="Jacket" price="22.99" />
        <Product img={img} title="Jacket" price="22.99" />
        <Product img={img} title="Jacket" price="22.99" />
        <Product img={img} title="Jacket" price="22.99" />
        <Product img={img} title="Jacket" price="22.99" />
        <Product img={img} title="Jacket" price="22.99" />
        <Product img={img} title="Jacket" price="22.99" />
        <Product img={img} title="Jacket" price="22.99" />
        <Product img={img} title="Jacket" price="22.99" />
        <Product img={img} title="Jacket" price="22.99" />
        <Product img={img} title="Jacket" price="22.99" />
        <Product img={img} title="Jacket" price="22.99" />
        <Product img={img} title="Jacket" price="22.99" />
        <Product img={img} title="Jacket" price="22.99" />
        <Product img={img} title="Jacket" price="22.99" />
        <Product img={img} title="Jacket" price="22.99" />
        <Product img={img} title="Jacket" price="22.99" />
        <Product img={img} title="Jacket" price="22.99" />
        <Product img={img} title="Jacket" price="22.99" />
        <Product img={img} title="Jacket" price="22.99" />
      </ProductsWrapper>
    </StyledWrapper>
  );
};

export default Products;
