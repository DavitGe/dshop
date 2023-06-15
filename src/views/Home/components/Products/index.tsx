import React from "react";
import styled from "styled-components";
import Wrapper from "../../../../components/Wrapper";
import Product from "../../../../components/Product";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import Button from "../../../../components/Button/Button";
import { useQuery } from "@apollo/client";
import { GET_FEATURED } from "../../../../graphql/query";
import { BarLoader } from "react-spinners";
import { Link } from "react-router-dom";

const StyledWrapper = styled(Wrapper)`
  display: flex;
  flex-direction: column;
  overflow-x: auto;
  margin-top: 64px;

  @media (max-width: 1023px) {
    align-items: unset;
  }
`;

const LoaderContainer = styled.div`
  width: 100%;
  height: 290px;
  display: flex;
  align-items: center;
  justify-content: center;
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
    breakpoint: { max: 4000, min: 1400 },
    items: 4,
    slidesToSlide: 3,
  },
  desktop: {
    breakpoint: { max: 1400, min: 1064 },
    items: 3,
  },

  tablet: {
    breakpoint: { max: 1064, min: 764 },
    items: 2,
    slidesToSlide: 2,
  },

  mobile: {
    breakpoint: { max: 764, min: 0 },
    items: 1,
    slidesToSlide: 1,
    centerMode: true,
  },
};

const Products = () => {
  const query = useQuery(GET_FEATURED);

  return (
    <StyledWrapper>
      <Title>Featured Products</Title>
      {query.loading ? (
        <StyledWrapper>
          <LoaderContainer>
            <BarLoader color="#0d0e1c" height={4} width={272} />
          </LoaderContainer>
        </StyledWrapper>
      ) : (
        <>
          <Carousel responsive={responsive}>
            {query.data.products.map((props: any) => {
              return <Product {...props} />;
            })}
          </Carousel>
          <BtnWrapper>
            <Link to="/shop">
              <Button>See More</Button>
            </Link>
          </BtnWrapper>
        </>
      )}
    </StyledWrapper>
  );
};

export default Products;
