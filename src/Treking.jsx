import { useState, useTransition } from "react"
import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useContext } from "react";
import { Link, Outlet, useNavigate} from "react-router-dom";





function Treking() {


    let products = [
        
        { name: "Annapurna Himalaya", image: `${import.meta.env.BASE_URL}img/ABC Image.webp`, Duration: "14-Days", Price: "$1000", Description: "(September to November) (March to April)", Read:"(Read More)" },
        { name: "Everest Base Camp", image: `${import.meta.env.BASE_URL}img/Everest-BaseCam.jpeg`, Duration: "14-Days", Price: "$1500", Description: "(September to November) (March to April)",Read:"(Read More)" },        
        { name: "Manaslu", image: `${import.meta.env.BASE_URL}img/manaslu-1.jpeg`, Duration: "16-Days", Price: "$1399", Description: "(September to November) (March to April)",Read:"(Read More)"},
        { name: "Langtang", image: `${import.meta.env.BASE_URL}img/Langtang Valley.webp`, Duration: "9-Days", Price: "$1000", Description: "(September to November) (February to May)",Read:"(Read More)"  },
        { name: "Mardi", image: `${import.meta.env.BASE_URL}img/Mardi.jpeg`, Duration: "14-Days", Price: "$1000", Description: "(September to November) (March to April)",Read:"(Read More)" },
        { name: "Everest Base Camp", image: `${import.meta.env.BASE_URL}img/Everest-BaseCam.jpeg`, Duration: "14-Days", Price: "$1500", Description: "(September to November) (March to April)",Read:"(Read More)" },        
        { name: "Manaslu", image: `${import.meta.env.BASE_URL}img/manaslu-1.jpeg`, Duration: "16-Days", Price: "$1399", Description: "(March-June & Oct- Dec)",Read:"(Read More)"},
        { name: "Langtang", image: `${import.meta.env.BASE_URL}img/Langtang Valley.webp`, Duration: "9-Days", Price: "$1000", Description: "(September to November) (February to May)",Read:"(Read More)"},
        
    ]
    let slidNum = products.length;

    let [currentImageIndex, setcurrentImageIndex] = useState(0)

    let next = () => {
        setcurrentImageIndex((preIndex) => {

            return (preIndex < products.length - 4 ? preIndex + 4 : preIndex)
        })
    }
    let previous = () => {

        setcurrentImageIndex((preIndex) => {

            return (preIndex > 0 ? preIndex - 4 : preIndex)
        })
       
    }

    // Template for Trip Details
    let [tripdetails, setTripdetails] = useState([
        {
            duration: "14 Days", activities: "Treking/Hiking", meals: "Breakfast, Lunch & Dinner",
            bestseasion: "Feb-May & Sept- Dec", maxaltitude: "4130m", difficultlevel: "Modrate",
            groupsize: "2-10 persons", accomodation: "Hotel and Tea Houses", destination: "Nepal"
        }

    ])
     let navigate = useNavigate();

    function loadItinerary(id) {

        if (products[0].name === id) {
            navigate("/annapurna")
        }

        else if (products[1].name === id) {

            navigate("/everest")
           

        }
        else if (products[2].name === id) {
            navigate("/manaslu")
        }
        else if (products[3].name === id) {
            navigate("/langtang")
        }

        else {

        }
    }


    return (
        <div className="treking-main">
         
            <h3>Top destinations</h3>
            <div className="treking">

                <div className="button-pre-next-treking" >

                    <div className="btnicon" >
                        <i class="fa-solid fa-arrow-left icon-pre-previous" onClick={previous}  ></i>
                    </div>
                    <div className="btnicon">
                        <i class="fa-solid fa-arrow-right icon-pre-next" onClick={next}></i>

                    </div>
                </div>


                <div className="treking-div" id="treking-div-id">


                    {products.slice(currentImageIndex, currentImageIndex + 4).map((product, index) => {


                        return (

                            <div className="trekingpakage" key={index} style={{ transform: "30s" }} id={index} onClick={(() => {
                                loadItinerary(product.name)
                            })} >

                                <h3>{product.name}</h3>
                                <div className="treking-image-div">
                                    <img class="treking-image" src={product.image} alt={`image + ${index}+1`} />
                                </div>
                                <h4>Duration: {product.Duration}</h4>
                                <h4>Cost: {product.Price}</h4>
                                <h4>Best Seasion: {product.Description}</h4>
                                <h4 className="readmore">{product.Read}</h4>

                            </div>)


                    })



                    }



                </div>

            </div>

            {/* Template */}

            <div className="trek-header">
                <div className="trek-main">

                    <div className="trek-title trek-tilte-fontpage">
                        <h1>Annapurna Base Camp Trek | 14-Day</h1>
                    </div>
                    <div className="trek-itinerary">
                        <h2>Trip Details</h2>

                        <div className="trek-itinerary-dashboard">
                            <div className="trek-dashboard-box">
                                <i class="fa-regular fa-clock"></i>
                                <div className="trek-box-title">
                                    <h3>Duration</h3>
                                    <p>{tripdetails[0].duration}</p>
                                </div>

                            </div>


                            <div className="trek-dashboard-box">
                                <i class="fa-solid fa-person-hiking"></i>
                                <div className="trek-box-title">
                                    <h3>Activities</h3>
                                    <p>{tripdetails[0].activities}</p>
                                </div>

                            </div>

                            <div className="trek-dashboard-box">
                                <i class="fa-solid fa-bowl-food"></i>
                                <div className="trek-box-title">
                                    <h3>Meals</h3>
                                    <p>{tripdetails[0].meals}</p>
                                </div>
                            </div>

                            <div className="trek-dashboard-box">
                                <i class="fa-solid fa-cloud-sun-rain"></i>
                                <div className="trek-box-title">
                                    <h3>Best Season</h3>
                                    <p>{tripdetails[0].bestseasion}</p>
                                </div>

                            </div>

                            <div className="trek-dashboard-box">
                                <i class="fa-solid fa-chart-simple"></i>
                                <div className="trek-box-title">
                                    <h3>Max-Altitude</h3>
                                    <p>{tripdetails[0].maxaltitude}</p>
                                </div>

                            </div>


                            <div className="trek-dashboard-box">
                                <i class="fa-solid fa-person-hiking"></i>
                                <div className="trek-box-title">
                                    <h3>Difficulti Level</h3>
                                    <p>{tripdetails[0].difficultlevel}</p>
                                </div>

                            </div>


                            <div className="trek-dashboard-box">
                                <i class="fa-solid fa-people-group"></i>
                                <div className="trek-box-title">
                                    <h3>Group Size</h3>
                                    <p>{tripdetails[0].groupsize}</p>
                                </div>

                            </div>


                            <div className="trek-dashboard-box">
                                <i class="fa-regular fa-building"></i>
                                <div className="trek-box-title">
                                    <h3>Accomodation</h3>
                                    <p>{tripdetails[0].accomodation}</p>
                                </div>

                            </div>


                            <div className="trek-dashboard-box">
                                <i class="fa-solid fa-location-dot"></i>
                                <div className="trek-box-title">
                                    <h3>Destination</h3>
                                    <p>{tripdetails[0].destination}</p>
                                </div>

                            </div>
                        </div>



                    </div>
                    <div className="trek-highlight">
                    <ul>
                        <h3>Trip Highlights</h3>
                      
                        
                        <li><h4>&#10171;  Experience the local village lifestyle. </h4></li>
                        <li><h4>&#10171; Trained and experienced guide and porters.</h4></li>                        
                        <li><h4>&#10171; Maximum flexibility in itinerary, route with personalized service.</h4></li> 
                        <li><h4>&#10171; Enjoy 360-degree views of the Himalayas from the base camp.</h4></li>                                         
                        <li><h4>&#10171; Explore the beautiful lake city of Pokhara during the trip.</h4></li>

                    </ul>
                </div>
                    <div className="trek-information">
                        <div className="trek-list">

                            <ul className="trek-list-ul">
                            <li><Link to="/annapurna/" className="trek-list-link">Overview</Link></li>
                            <li><Link to="/annapurna/itinerary" className="trek-list-link">Itinerary</Link></li>
                            <li><Link to="/annapurna/cost" className="trek-list-link">Cost</Link></li>
                            <li><Link to="/annapurna/hotels" className="trek-list-link">Hotel</Link></li>
                            <li><Link to="/annapurna/vehicles" className="trek-list-link">Vehicles</Link></li>

                            </ul>

                        </div>
                        <div className="outlet">
                            <Outlet />
                        </div>
                    </div>


                </div>



                <div className="trek-banner-rightside trek-banner-rightside-frontpage">

                    <div className="trek-banner-rightside-main">
                        <div className="trek-banner-rightside-image">
                            <img class="trek-banner-rightside-bookingimage" src= {`${import.meta.env.BASE_URL}img/ABC Image.webp`} />

                        </div>
                        <h4 >Annapurna Base Camp Trek</h4>
                        <p>13 Nights/14 days</p>
                        <p>Starting Form</p>
                        <p>&#36;1150</p>
                        <p>Per Person</p>

                        <button class="banner-booknow" ><Link to="/bookingform"> Book Now</Link></button>

                        <p>Talk to Travel Expert</p>
                        <p>Whatsapp/Viber</p>
                        <p>+977-984111111</p>




                    </div>

                </div>
            </div>


        </div>
    )
}
export default Treking;