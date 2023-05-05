import React, { useState } from "react";
import { Carousel } from "react-bootstrap";
import sliderimg from "../../images/slider1.png";
import slider4 from "../../images/slider4.png";
import prod3 from "../../images/prod3.png";
import prod4 from "../../images/prod4.png";
import "../../styles/HomePage.css"

export const Slider = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item interval={2000} style={{backgroundColor: "blueviolet"}}>
        <img
          className="d-block img-slide"
          src={slider4}
          alt="First slide"
          style={{ height: "296px", width: "313.53px" }}
        />
        <Carousel.Caption className="text-slide">
          <h3>هناك خصم كبير</h3>
          <p>خصم يصل 50% عند شرائك</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item interval={2000} style={{backgroundColor: "blueviolet"}}>
        <img
          className="d-block img-slide"
          src={sliderimg}
          alt="First slide"
          style={{ height: "296px", width: "313.53px" }}
        />
        <Carousel.Caption className="text-slide">
          <h3>هناك خصم كبير</h3>
          <p>خصم يصل 50% عند شرائك</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item interval={2000} style={{backgroundColor: "blueviolet"}}>
        <img
          className="d-block img-slide"
          src={prod3}
          alt="First slide"
          style={{ height: "296px", width: "313.53px" }}
        />
        <Carousel.Caption className="text-slide">
          <h3>هناك خصم كبير</h3>
          <p>خصم يصل 50% عند شرائك</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item interval={2000} style={{backgroundColor: "blueviolet"}}>
        <img
          className="d-block img-slide"
          src={prod4}
          alt="First slide"
          style={{ height: "296px", width: "313.53px" }}
        />
        <Carousel.Caption className="text-slide">
          <h3>هناك خصم كبير</h3>
          <p>خصم يصل 50% عند شرائك</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};
