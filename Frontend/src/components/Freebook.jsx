// import React from 'react'
import "./freebook.css";
import list from "../../public/list.json";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Cards from "./Cards";
export default function Freebook() {
  const filterData = list.filter((data) => data.category === "free");
  // console.log(filterData);
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
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
    <>
      <div className="free_course">
        <h1>Free Offered Course</h1>
      </div>
      <div className="slider-container">
        <Slider {...settings} className="custom-slick">
          {filterData.map((item)=>(
            <Cards item={item} key={item.id}/>
          ))}
        </Slider>
      </div>
    </>
  );
}
