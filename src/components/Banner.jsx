import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Component } from "react";
import Treking from "../Treking";



function Banner() {

    let products = [
        { name: "Mountain 12", image: "/src/components/image/Manasulu-image.webp" },
        { name: "Annapurna Himalaya", image: "/src/components/image/ABC -image2.jpeg" },
        { name: "Everest Base Camp", image: "/src/components/image/Everest-BaseCam.jpeg" },
        { name: "Macchapuchhre", image: "/src/components/image/Macchapuchhre.jpeg" },
        { name: "Manaslu", image: "/src/components/image/manaslu-1.jpeg" },
        { name: "Mountain Nepal", image: "/src/components/image/Mountain-Nepal.jpeg" },
        { name: "Mountain 12", image: "/src/components/image/Manasulu-image.webp" },
        { name: "Annanapurna Himalaya", image: "/src/components/image/ABC -image2.jpeg" },
    ]

    const [currentImageIndex, setcurrentImageIndex] = useState(0)

        const next = ()=>{
            setcurrentImageIndex((preIndex)=>{
                return ( preIndex===products.length-1 ? 0 : preIndex+1)
            })
        }
        const previous = ()=>{
            setcurrentImageIndex((preIndex)=>{
                return ( preIndex===0 ? products.length-1 : preIndex-1)
            })
        }





    // function NextArrow(props) {
    //     console.log(props)
    //     const { className, style, onClick } = props;
       
    //     return (
    //         <div
    //             className={className}
    //             style={{ ...style, display: "block", background: "green"}}
    //             onClick={onClick}
                
    //         />
    //     );
    // }

    // function PrevArrow(props) {
    //     const { className, style, onClick } = props;
     
    //     return (
    //         <div
    //             className={className}
    //             style={{ ...style, display: "block", background: "green" }}
    //             onClick={onClick}
    //         />
    //     );
    // }

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
          

            <div className="banner-div" key={currentImageIndex+1}>
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
            <Treking/>
            </div>
       
    );







    // Own Created 
    //     const [currentImageIndex, setcurrentImageIndex] = useState(0)

    //     const next = ()=>{
    //         setcurrentImageIndex((preIndex)=>{
    //             return ( preIndex===products.length-1 ? 0 : preIndex+1)
    //         })
    //     }
    //     const previous = ()=>{
    //         setcurrentImageIndex((preIndex)=>{
    //             return ( preIndex===0 ? products.length-1 : preIndex-1)
    //         })
    //     }


    //   // Automatically move to the next image every 3 seconds
    //     useEffect(() => {
    //     const interval = setInterval(() => {
    //       next();
    //     }, 3000);

    //     return () => clearInterval(interval);
    //   }, [currentImageIndex]);


    //     return(
    //         <div className="banner">
    //              {/* <button class="btn" onClick={previous}> Previous</button>
    //              <button class="btn" onClick={next}>Next</button> */}

    //             <div className="banner-firm">


    //                 <div className="banner-slid">

    //                 <div className="banner-div" key={currentImageIndex+1}>
    //                 <div className="button-pre-next">

    //                        <div className="btnicon" >
    //                        <i class="fa-solid fa-arrow-left icon-pre-next" onClick={previous}  ></i>
    //                        </div>
    //                        <div className="btnicon">
    //                        <i class="fa-solid fa-arrow-right icon-pre-next" onClick={next}  ></i>

    //                        </div>        
    //                      </div>              


    //                     <h3 class="image-title">{products[currentImageIndex].name}</h3>
    //                     <img class="banner-image" src={products[currentImageIndex].image} alt="ABC" />
    //                 </div>       

    //             </div>

    //             </div>

    //         </div>
    //     )
}
export default Banner;