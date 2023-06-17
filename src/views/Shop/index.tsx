import React from "react";
import Categories from "./Categories";
import Products from "./Products";
import Wrapper from "../../components/Wrapper";
import styled from "styled-components";

const StyledWrapper = styled(Wrapper)`
  width: 100%;
  max-width: 1400px;
`;
const Shop = () => {
  return (
    <>
      <Categories />
      <Products />
    </>
  );
};

export default Shop;
