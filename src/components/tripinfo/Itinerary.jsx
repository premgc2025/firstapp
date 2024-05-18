import { useContext } from "react";
import { TheContext } from "../../App";

function Itinerary(){
  
    let itineraryvalue = useContext(TheContext)
   
    console.log("context",itineraryvalue.userName)

    return(
        <div className="itinerary-section">
           

          
            <div className="itinerary-all">
            <div className="itinerary">
                <h1>Day1</h1>
                <h3>Pick up from Tribhuwan International  Airport  and Transfer to your hotel</h3>
            </div>
            <div className="itinerary-detail">
                <p>Welcome to Nepal. Pick up from Tribhuwan International  Airport  and Transfer to your hotel. Meeting with your Guide for Trekking information. We will assist if you need to buy any gear/equipment for the trek.</p>
            </div>
            </div>


            {/* <div className="itinerary-all">
            <div className="itinerary">
                <h1>Day2</h1>
                <h3>Travel to Pokhara</h3>
            </div>
            <div className="itinerary-detail">
                <p>Travel to Pokhara and visit Fewa lake . Meeting with your Guide for Trekking information. We will assist if you need to buy any gear/equipment for the trek.</p>
            </div>
            </div> */}
        </div>
    )
}
export default Itinerary;