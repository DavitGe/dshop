import React from "react";
import Categories from "./Categories";
import Products from "./Products";
import Wrapper from "../../components/Wrapper";

const Shop = () => {
  return (
    <Wrapper>
      <Categories />
      <Products />
    </Wrapper>
  );
};

export default Shop;
