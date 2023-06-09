import React, { useEffect } from "react";
import Header from "../Header/Header";
import { useQuery } from "@apollo/client";
import styled from "styled-components";

import { GET_SLIDERS } from "../../graphql/query";
// import bg from "../../assets/bg.avif";
import Wrapper from "../../components/Wrapper";
import { Carousel } from "antd";
import Partners from "./components/Partners";
import Currated from "./components/Currated";
import FPage from "../../configs/homeCarousel/FPage";
import Products from "./components/Products";
import Advertisment from "./components/Advertisment";
import Subscribe from "./components/Subscribe";

const contentStyle: React.CSSProperties = {
  color: "#fff",
  textAlign: "center",
  background: "#174655",
  height: 400,
  textJustify: "auto",
  borderRadius: 7,
};

const CarouselWrapper = styled.div`
  background-color: #9e9e9e;
  height: 400px;
  position: relative;
  border-radius: 8px;
`;

const Home = () => {
  const query = useQuery(GET_SLIDERS);
  useEffect(() => {
    console.log("query", query);
  }, [query]);

  return (
    <Wrapper>
      <Carousel>
        {query.loading ? (
          <CarouselWrapper />
        ) : (
          query?.data?.sliders.map((CarouselEl: any) => {
            return <FPage {...CarouselEl} />;
          })
        )}
      </Carousel>
      <Partners />
      <Currated />
      <Products />
      <Advertisment />
      <Subscribe />
    </Wrapper>
  );
};

export default Home;
