import React, { Component } from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { Container } from "./styles";

import grid1 from "../../assets/grid2.png";
import grid2 from "../../assets/grid3.png";
import grid3 from "../../assets/grid4.png";
import grid4 from "../../assets/grid5.png";
import grid5 from "../../assets/grid6.png";
import grid6 from "../../assets/grid7.png";
import grid7 from "../../assets/grid8.png";
import grid8 from "../../assets/grid9.png";
import grid9 from "../../assets/grid10.png";
import grid10 from "../../assets/grid11.png";
import grid11 from "../../assets/grid12.png";

export default class Carrocel extends Component {
  render() {
    var settings = {
      rows: 2,
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
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
      <Container>
        <strong> Projetos: </strong>
        <div>
          <Slider {...settings}>
            <div>
              <img src={grid1} alt=" " />
            </div>
            <div>
              <img src={grid2} alt=" " />
            </div>{" "}
            <div>
              <img src={grid3} alt=" " />
            </div>{" "}
            <div>
              <img src={grid4} alt=" " />
            </div>{" "}
            <div>
              <img src={grid5} alt=" " />
            </div>{" "}
            <div>
              <img src={grid6} alt=" " />
            </div>{" "}
            <div>
              <img src={grid7} alt=" " />
            </div>{" "}
            <div>
              <img src={grid8} alt=" " />
            </div>{" "}
            <div>
              <img src={grid9} alt=" " />
            </div>{" "}
            <div>
              <img src={grid10} alt=" " />
            </div>{" "}
            <div>
              <img src={grid11} alt=" " />
            </div>
          </Slider>
        </div>
      </Container>
    );
  }
}
