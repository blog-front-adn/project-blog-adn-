import React from "react";
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";
import Pict1 from "./pict/carosel/1.png";
import Pict2 from "./pict/carosel/2.png";
import Pict3 from "./pict/carosel/3.png";
import Pict4 from "./pict/carosel/4.png";
import "../App.css";

function Caraousel() {
  const slide = [
    {
      pict: Pict1,
      h3: "ini first slide",
      p:
        "ini first slideini first slideini first slideini first slideini first slideini first slideini first slideini first slideini first slide",
      p2: "ini baris kedua",
      cgdcgh: "hfgdh",
    },
    {
      pict: Pict2,
      h3: "ini second slide",
      p:
        "ini first slideini first slideini first slideini first slideini first slideini first slideini first slideini first slideini first slide",
      p2: "ini baris kedua",
    },
    {
      pict: Pict3,
      h3: "ini third slide",
      p:
        "ini first slideini first slideini first slideini first slideini first slideini first slideini first slideini first slideini first slide",
    },
    {
      pict: Pict4,
      h3: "ini four slide",
      p:
        "ini first slideini first slideini first slideini first slideini first slideini first slideini first slideini first slideini first slide",
    },
  ];

  return (
    <div id="div-carosel">
      <Carousel id="slideHome">
        {slide.map((data) => (
          <Carousel.Item className="class-gambar">
            <img
              id="slideHome"
              className="d-block w-100 h-100"
              src={data.pict}
              alt="First slide"
            />
            <Carousel.Caption>
              {/* <h3>{data.h3}</h3>
  <p>{data.p}</p>
  <p>{data.p2}</p>
  <p>{data.cgdcgh}</p> */}
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
}

export default Caraousel;
