import React from "react";

import { Carousel } from "react-bootstrap";

import slide1 from "./assets/1-slide.jpg";
import slide2 from "./assets/2-slide.jpg";

const SliderBox = () => (
  <div>
    <Carousel>
      <Carousel.Item>
        <img className="d-block w-10" src={slide1} alt="forest" />
        <Carousel.Caption>
          <h3>Forest image</h3>
          <p>Forest ^_^</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-10" src={slide2} alt="forest" />
        <Carousel.Caption>
          <h3>Forest image</h3>
          <p>Forest ^_^</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  </div>
);

export default SliderBox;
