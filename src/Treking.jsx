import { useState, useTransition } from "react"
import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useContext } from "react";
import { Link, Outlet } from "react-router-dom";





function Treking() {


    let products = [
        { name: "Mountain 12", image: "/src/components/image/Manasulu-image.webp", Duration: "15-Days", Price: "$1300", Description: "(September to November) (March to April)" },
        { name: "Annapurna Himalaya", image: "/src/components/image/ABC -image2.jpeg", Duration: "7-Days", Price: "$1000", Description: "(September to November) (March to April)" },
        { name: "Everest Base Camp", image: "/src/components/image/Everest-BaseCam.jpeg", Duration: "15-Days", Price: "$1500", Description: "(September to November) (March to April)" },
        { name: "Macchapuchhre", image: "/src/components/image/Macchapuchhre.jpeg", Duration: "15-Days", Price: "$500", Description: "(September to November) (March to April)" },
        { name: "Manaslu", image: "/src/components/image/manaslu-1.jpeg", Duration: "15-Days", Price: "$1300", Description: "(September to November) (March to April)" },
        { name: "Mountain Nepal", image: "/src/components/image/Mountain-Nepal.jpeg", Duration: "10-Days", Price: "$1000", Description: "(September to November) (March to April)" },
        { name: "Mountain 12", image: "/src/components/image/Manasulu-image.webp", Duration: "7-Days", Price: "$1500", Description: "(September to November) (March to April)" },
        { name: "Annapurna Himalaya", image: "/src/components/image/ABC -image2.jpeg", Duration: "7-Days", Price: "$1000", Description: "(September to November) (March to April)" },
        { name: "Mountain 12", image: "/src/components/image/Manasulu-image.webp", Duration: "15-Days", Price: "$1300", Description: "(September to November) (March to April)" },
        { name: "Annapurna Himalaya", image: "/src/components/image/ABC -image2.jpeg", Duration: "7-Days", Price: "$1000", Description: "(September to November) (March to April)" },
        { name: "Everest Base Camp", image: "/src/components/image/Everest-BaseCam.jpeg", Duration: "15-Days", Price: "$1500", Description: "(September to November) (March to April)" },
        { name: "Macchapuchhre", image: "/src/components/image/Macchapuchhre.jpeg", Duration: "15-Days", Price: "$500", Description: "(September to November) (March to April)" },
        { name: "Manaslu", image: "/src/components/image/manaslu-1.jpeg", Duration: "15-Days", Price: "$1300", Description: "(September to November) (March to April)" },
        { name: "Mountain Nepal", image: "/src/components/image/Mountain-Nepal.jpeg", Duration: "10-Days", Price: "$1000", Description: "(September to November) (March to April)" },
        { name: "Mountain 12", image: "/src/components/image/Manasulu-image.webp", Duration: "7-Days", Price: "$1500", Description: "(September to November) (March to April)" },
        { name: "Annapurna Himalaya", image: "/src/components/image/ABC -image2.jpeg", Duration: "7-Days", Price: "$1000", Description: "(September to November) (March to April)" },

        { name: "Mountain 12", image: "/src/components/image/Manasulu-image.webp", Duration: "15-Days", Price: "$1300", Description: "(September to November) (March to April)" },
        { name: "Annapurna Himalaya", image: "/src/components/image/ABC -image2.jpeg", Duration: "7-Days", Price: "$1000", Description: "(September to November) (March to April)" },
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
            duration: "14 Days", activities: "Treking/Hiking", meals: "Breakfast, Lunch & Dinne",
            bestseasion: "Feb-May & Sept- Dec", maxaltitude: "5364m", difficultlevel: "Modrate",
            groupsize: "2-10 persons", accomodation: "Hotel and Tea Houses", destination: "Nepal"
        }

    ])


    function loadItinerary(id) {

        if (products[1].name === id) {
        }

        else if (products[2].name === id) {
            window.location.href = '/everest';

        }
        else if (products[3].name === id) {
            location.href = '/everest/everestoverview'
        }
        else {

        }
    }


    return (
        <div className="treking-main">
            <h3>Top destinations</h3>
            <div className="treking">

                <div className="button-pre-next-treking">

                    <div className="btnicon" >
                        <i class="fa-solid fa-arrow-left icon-pre-previous" onClick={previous} ></i>
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

                            </div>)


                    })



                    }



                </div>

            </div>

            {/* Template */}

            <div className="trek-header">
                <div className="trek-main">

                    <div className="trek-title">
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
                        <li><h4>-Trained and experienced guide and porters.</h4></li>
                        <li><h4>-Maximum flexibility in itinerary, route with personalized service.</h4></li>
                        <li><h4>-Trekking with minimum impact in the local environment.</h4></li>
                        <li><h4>-Everest view from the Everest Base Camp.</h4></li>

                    </ul>
                </div>
                    <div className="trek-information">
                        <div className="trek-list">

                            <ul className="trek-list-ul">
                                <li><Link to="/treking">Overview</Link></li>
                                <li><Link to="/treking/itinerary">Itenerary</Link></li>
                                <li><Link to="/treking/cost">Cost</Link></li>
                                <li><Link to="/treking/hotels">Hotel</Link></li>
                                <li><Link to="/treking/vehicles">Vehicles</Link></li>

                            </ul>

                        </div>
                        <div className="outlet">
                            <Outlet />
                        </div>
                    </div>


                </div>



                <div className="trek-banner-rightside">

                    <div className="trek-banner-rightside-main">
                        <div className="trek-banner-rightside-image">
                            <img class="trek-banner-rightside-bookingimage" src="/src/components/image/ABC -image2.jpeg" alt="ABC Image" />

                        </div>
                        <h4 >Annapurna Base Camp Trek</h4>
                        <p>13 Nights/14 days</p>
                        <p>Starting Form</p>
                        <p> 1150USD</p>
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