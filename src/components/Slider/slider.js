import React from "react";
import './sliderStyle.scss'
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import img1 from "../../images/img1.png";
import img2 from "../../images/img2.png";
import ArrowLeft from '../../Icons/ArrowLeft'

const Slider = () => {
  return (
    <div>
      <Carousel renderArrowPrev={() => (
            <button>
                <img 
                    style={{ height: "30px", width: "30px" }}
                    src={ArrowLeft} />
            </button>
        )
    } showIndicators={false} showThumbs={false} infiniteLoop autoPlay>
        <div>
          <img src={img1} />
        </div>
        <div>
          <img src={img2} />
        </div>
      </Carousel>
    </div>
  );
};

export default Slider;