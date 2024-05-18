import Tours from "./Tours";
import Treking from "./Treking";
import {Link} from "React-router-dom";


function MiddleBar(){


    return(
        <div className="middlebar-section">
        <div className="middlebar">
            <div className="tours-title middlebtn">
            <h3><Link to="/" class="middle-link">Tours</Link> </h3>

            </div>
            
            <div className="treking-title middlebtn">
            <h3> <Link to="/treking" class="middle-link">Treking</Link> </h3>
            
            </div>
            <div className="booking middlebtn">
                <h3>
                   <Link to="/booking" class="middle-link">Booking</Link> </h3>
            </div>
        </div>

  
        </div>

    )
}
export default MiddleBar;