import React, { useEffect, useState } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";



function Everest() {

  

    let [tripdetails, setTripdetails] = useState([
        {
            duration: "14 Days", activities: "Treking/Hiking", meals: "Breakfast, Lunch & Dinner",
            bestseasion: "March-May & Sept- Nov", maxaltitude: "5364m", difficultlevel: "Advance",
            groupsize: "2-15 persons", accomodation: "Hotel and Tea Houses", destination: "Nepal"
        }

    ])

    return (
        <div className="trek-header-section">
            <div className="trek-main">

                <div className="trek-title">
                    <h1>Everest Base Camp Trek | 14-Days</h1>
                    <div className="trek-image">
                        <img class="trek-image-banner" src={`${import.meta.env.BASE_URL}img/Everest-BaseCam.jpeg`} alt="EBC Image" />
                    </div>
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

                        <li><h4>&#10171; Trek through the Sagarmatha National Park.</h4></li>                        
                        <li><h4>&#10171; Trained and experienced guide and porters.</h4></li>                  
                        <li><h4>&#10171; Everest view from the Everest Base Camp.</h4></li>
                        <li><h4>&#10171; Trekking with minimum impact in the local environment.</h4></li>
                        <li><h4>&#10171; Maximum flexibility in itinerary, route with personalized service.</h4></li>
                        <li><h4>&#10171; Experiencing the unique Sherpa culture and traditions of the Khumbu region.</h4></li>

                    </ul>
                </div>
                <div className="trek-information">
                    <div className="trek-list">

                        <ul className="trek-list-ul">
                            <li><Link to="/everest/" className="trek-list-link">Overview</Link></li>
                            <li><Link to="/everest/everestitinerary" className="trek-list-link">Itenerary</Link></li>
                            <li><Link to="/everest/everestcost" className="trek-list-link">Cost</Link></li>
                            <li><Link to="/everest/everesthotel" className="trek-list-link">Hotel</Link></li>
                            <li><Link to="/everest/everestvehicles" className="trek-list-link">Vehicles</Link></li>

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
                        <img class="trek-banner-rightside-bookingimage" src= {`${import.meta.env.BASE_URL}img/Everest-BaseCam.jpeg`}alt="EBC Image" />

                    </div>
                    <h4 >Everest Base Camp Trek</h4>
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
    )
}
export default Everest;