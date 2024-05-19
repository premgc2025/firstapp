import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Component } from "react";
import Treking from "../Treking";



function Banner() {

    let products = [


        { name: "Mountain 12", image: "./img/ABC.jpeg" },
        { name: "Mountain 12", image: "./img/Everest-BaseCam.jpeg" },
        { name: "Annapurna Himalaya", image: "./img/ABC Image.webp" },
        { name: "Everest Base Camp", image: "./img/Everest-BaseCam.jpeg" },
        { name: "Macchapuchhre", image: "./img/Macchapuchhre.jpeg" },
        { name: "Manaslu", image: "./img/manaslu-1.jpeg" },
        { name: "Mountain Nepal", image: "./img/Mountain-Nepal.jpeg" },
        { name: "Mountain 12", image: "./img/Everest-BaseCam.jpeg" },
        { name: "Annapurna Himalaya", image: "./img/ABC Image.webp" },

    ]

    const [currentImageIndex, setcurrentImageIndex] = useState(0)

    const next = () => {
        setcurrentImageIndex((preIndex) => {
            return (preIndex === products.length - 1 ? 0 : preIndex + 1)
        })
    }
    const previous = () => {
        setcurrentImageIndex((preIndex) => {
            return (preIndex === 0 ? products.length - 1 : preIndex - 1)
        })
    }



    let settings = {
        dots: true,

        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        csEase: "linear",
        // nextArrow: <NextArrow />,
        // prevArrow: <PrevArrow />

    };

    return (
        <div className="banner">
            
            <div className="banner-firm">


                <div className="banner-div" key={currentImageIndex + 1}>
                    <div className="button-pre-next">

                        <div className="btnicon" >
                            <i class="fa-solid fa-arrow-left icon-pre-next" onClick={previous}  ></i>
                        </div>
                        <div className="btnicon">
                            <i class="fa-solid fa-arrow-right icon-pre-next" onClick={next}></i>


                        </div>
                    </div>
                </div>
                <Slider {...settings}>

                    {products.map((product, index) => {
                        return (
                            <div className="banner-slid" key={index} id={currentImageIndex} >

                                <h3>{product.name}</h3>
                                <img class="banner-image" src={product.image} alt={`image + ${index}+1`} />
                            </div>
                        )

                    }

                    )}

                </Slider>
            </div>
            <Treking />
        </div>

    );


}
export default Banner;