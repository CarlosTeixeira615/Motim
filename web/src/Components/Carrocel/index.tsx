import React, {Component} from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default class Carrocel extends Component {
  render() {
    var settings = {
      rows: 2,
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 4,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };
    return (
      <div>
        <h2> Responsive </h2>
        <Slider {...settings}>
          <div>
            <img src="http://placekitten.com/305/205" alt=" " />
          </div>
          <div>
            <img src="http://placekitten.com/305/205" alt=" " />
          </div>
          <div>
            <img src="http://placekitten.com/305/205" alt=" " />
          </div>
          <div>
            <img src="http://placekitten.com/305/205" alt=" " />
          </div>
          <div>
            <img src="http://placekitten.com/305/205" alt=" " />
          </div>
          <div>
            <img src="http://placekitten.com/305/205" alt=" " />
          </div>
          <div>
            <img src="http://placekitten.com/305/205" alt=" " />
          </div>
          <div>
            <img src="http://placekitten.com/305/205" alt=" " />
          </div>
          <div>
            <img src="http://placekitten.com/305/205" alt=" " />
          </div>
          <div>
            <img src="http://placekitten.com/305/205" alt=" " />
          </div>
          <div>
            <img src="http://placekitten.com/305/205" alt=" " />
          </div>
        </Slider>
      </div>
    );
  }
}
