import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Component } from "react";

export default function SimpleSlider() {

    let products = [
        {name:"Mountain 12", image:"/src/components/image/Manasulu-image.webp", Duration:"15-Days" ,Price:"$1300", Description:"(September to November) (March to April)"},
        {name:"Annapurna Himalaya", image:"/src/components/image/ABC -image2.jpeg",Duration:"7-Days" ,Price:"$1000",Description:"(September to November) (March to April)"},
        {name:"Everest Base Camp", image:"/src/components/image/Everest-BaseCam.jpeg",Duration:"15-Days" ,Price:"$1500",Description:"(September to November) (March to April)"},
        {name:"Macchapuchhre", image:"/src/components/image/Macchapuchhre.jpeg",Duration:"15-Days" ,Price:"$500",Description:"(September to November) (March to April)"},
        {name:"Manaslu", image:"/src/components/image/manaslu-1.jpeg",Duration:"15-Days" ,Price:"$1300",Description:"(September to November) (March to April)"},
        {name:"Mountain Nepal", image:"/src/components/image/Mountain-Nepal.jpeg",Duration:"10-Days" ,Price:"$1000",Description:"(September to November) (March to April)"},
        {name:"Mountain 12", image:"/src/components/image/Manasulu-image.webp",Duration:"7-Days" ,Price:"$1500",Description:"(September to November) (March to April)"},
        {name:"Annapurna Himalaya", image:"/src/components/image/ABC -image2.jpeg",Duration:"7-Days" ,Price:"$1000",Description:"(September to November) (March to April)"},
    ]


function SampleNextArrow(props) {
    console.log(props)
    const { className, style, onClick } = props;
    console.log("Class Name",className)
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "green" }}
        onClick={onClick}
      />
    );
  }
  
  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "green" }}
        onClick={onClick}
      />
    );
  }

  // var settings = {
  //   dots: true,
  
  //   infinite: true,
  //   speed: 500,
  //   slidesToShow: 1,
  //   slidesToScroll: 1,
  //   autoplay: true,
  //   autoplaySpeed:3000,
  //   csEase: "linear",
  //   nextArrow: <SampleNextArrow/>,
  //   prevArrow: <SamplePrevArrow/>
    
  // };
  console.log(settings)
  return (
    <div className="slider-bar">
    <div className="main-slider">
    <Slider {...settings}>
       {products.map((product,index)=>{
        return (
        <div className="trekingpakage" key={index}>
            <h3>Hello{index}</h3>
            <h3>{product.name}</h3>
                        <img class="treking-image" src={product.image} alt={`image + ${index}+1`} />
                        <h4>Duration: {product.Duration}</h4>
                        <h4>Cost: {product.Price}</h4>
                        <h4>Best Seasion: {product.Description}</h4>
        </div>
        )
       


       }
      
       )}      
 
    </Slider>
    </div>
    </div>
  );
}