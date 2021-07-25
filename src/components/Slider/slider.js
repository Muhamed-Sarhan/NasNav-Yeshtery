import React, { Component } from "react";
import "./sliderStyle.scss";
import LeftSliderArrow from "../../Icons/leftSliderArrow";
import RightSliderArrow from "../../Icons/rightSliderArrow";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import img1 from "../../images/img1.png";
import img2 from "../../images/img2.png";

export default class Slider extends Component {
  constructor() {
    super();
    this.state = {
      currentImageIndex: 0,
    };
  }

  next = () => {
    this.setState((state) => {
      return {
        currentImageIndex: state.currentImageIndex + 1,
      };
    });
  };

  prev = () => {
    this.setState((state) => {
      return {
        currentImageIndex: state.currentImageIndex - 1,
      };
    });
  };

  render() {
    const { currentImageIndex } = this.state;
    return (
      <div className="gallery-carousel">
        <button className="gallery_previous" onClick={this.prev} type="button">
          <LeftSliderArrow />
        </button>
        <Carousel
          selectedItem={currentImageIndex}
          onChange={this.updateCurrentImageIndex}
          showStatus={false}
          showThumbs={false}
          showIndicators={false}
          showArrows={false}
          infiniteLoop={true}
          transitionTime={200}
          useKeyboardArrows
        >
          <div>
            <img src={img1} />
          </div>
          <div>
            <img src={img2} />
          </div>
        </Carousel>
        <button className="gallery_next" onClick={this.next} type="button">
          <RightSliderArrow />
        </button>
      </div>
    );
  }
}
