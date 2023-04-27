import React from "react";
import { Carousel as AntCarousel, CarouselProps } from "antd";

type propsType = CarouselProps & {};

const Carousel = (props: propsType) => {
  return (
    <AntCarousel autoplay dots>
      {props.children}
    </AntCarousel>
  );
};

export default Carousel;
