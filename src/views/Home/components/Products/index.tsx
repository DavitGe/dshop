import React from "react";
import styled from "styled-components";
import Wrapper from "../../../../components/Wrapper";
import Product from "../../../../components/Product";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import Button from "../../../../components/Button/Button";
import { featuredConfig } from "../../../../configs/featured.config";

const StyledWrapper = styled(Wrapper)`
  display: flex;
  flex-direction: column;
  overflow-x: auto;
  margin-top: 64px;
`;

const Title = styled.h3`
  font-size: ${(props) => props.theme.fontxl};
  color: ${(props) => props.theme.text};
  font-weight: 600;
  margin-bottom: 32px;
`;

const BtnWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 32px;
`;

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 3,
    slidesToSlide: 3,
  },
  desktop: {
    breakpoint: { max: 3000, min: 464 },
    items: 3,
    slidesToSlide: 3,
  },

  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const Products = () => {
  return (
    <StyledWrapper>
      <Title>Featured Products</Title>
      <Carousel responsive={responsive} centerMode>
        {featuredConfig.map((props) => {
          return <Product {...props} />;
        })}
      </Carousel>
      <BtnWrapper>
        <Button>See More</Button>
      </BtnWrapper>
    </StyledWrapper>
  );
};

export default Products;
