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

const Home = () => {
  const query = useQuery(GET_SLIDERS);
  useEffect(() => {
    console.log("query", query);
  }, [query]);

  return (
    <Wrapper>
      <Carousel>
        {query.loading
          ? null
          : query?.data?.sliders.map((CarouselEl: any) => {
              console.log("CarouselEl", CarouselEl);
              return <FPage {...CarouselEl} />;
            })}
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
