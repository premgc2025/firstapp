import { useState, useTransition } from "react"
import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useContext } from "react";
import { Link, Outlet, useNavigate} from "react-router-dom";
function Tours() {
    let products = [
        { name: "Lumbini", image: "./img/Lumbini.jpeg", Duration: "6 Days", Price: "$1000",Description: "All Seasion", Read:"(Read More)" },     
        { name: "BhumeshworiTemple", image: "./img/Bhumeshwori Temple.JPG", Duration: "3 Hours", Price: "$100",Description: "All Seasion", Read:"(Read More)" },
        { name: "ViewTowerLowlang", image: "./img/ViewTower.JPG", Duration: "2-Hours", Price: "$100",Description: "All Seasion", Read:"(Read More)" },      
        { name: "Manaslu-Gorkha", image: "./img/manaslu-1.jpeg", Duration: "7-Days", Price: "$900",Description: "March-June & Oct- Dec", Read:"(Read More)" },
        { name: "Lukla", image: "./img/Lukla Airport.JPG", Duration: "3-Days", Price: "$1000",Description: "All Seasion", Read:"(Read More)" },


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
            navigate("/lumbini")
        }

        else if (products[1].name === id) {

            navigate("/lumbini")
           

        }
        else if (products[2].name === id) {
            navigate("/lumbini")
        }
        else if (products[3].name === id) {
            navigate("/lumbini")
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

                {
                    products.slice(currentImageIndex, currentImageIndex + 4).map((product, index) => {
                        return (<div className="trekingpakage" key={index + 1}  style={{ transform: "30s" }} id={index} onClick={(() => {
                            loadItinerary(product.name)
                        })}>
                            <h3>{product.name}</h3>
                            <img class="tour-image" src={product.image} alt={`image + ${index}+1`} />
                            <h4>Duration: {product.Duration}</h4>
                            <h4>Cost: {product.Price}</h4>
                            <h4>Best Seasion: {product.Description}</h4>
                            <h4 className="readmore">{product.Read}</h4>

                        </div>)
                    })
                }

            </div>
            </div>

        </div>

    )
}
export default Tours;