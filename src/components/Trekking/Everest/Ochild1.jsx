import Overview from "../../tripinfo/Overview";
import {Link, Outlet} from "React-router-dom";
import React from "react";
function Ochild1(){
    return(
        <div className="ochild-section">
            <div className="ochil-main">
                <h3>This is Ochild 1 Page</h3>
                {/* <li><Link to="/treking" class="tripinfo-list-link" >Overview</Link> </li> */}
            </div>
            <div className="tripinfo-list">
                
                <ul className="tripinfo-list-ul">
                    <li><Link to="/treking" class="tripinfo-list-link" >Overview</Link> </li>
                    <li><Link to="/treking/itinerary" class="tripinfo-list-link">Itinerary</Link> </li>
                    <li><Link to="/treking/cost" class="tripinfo-list-link">Cost</Link> </li>
                    <li><Link to="/treking/hotels" class="tripinfo-list-link">Hotels</Link> </li>
                    <li><Link to="/treking/vehicles" class="tripinfo-list-link">Vehicles</Link> </li>
                </ul>
           
        </div>
        <Outlet/>
            {/* <Overview/> */}
        </div>
    )
}
export default Ochild1;