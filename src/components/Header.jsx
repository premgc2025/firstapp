import {Link} from "react-router-dom";
function Header(){

    return(
        <div className="header">
            <div className="header-main">
            <div className="nav-bar-top">
                <div className="logo">
                <li class="li"> <Link to="/" class="link logo">Logo Here</Link></li>
                   
                </div>
                <ul class="nav-bar-list">
                    
                    <li> <Link to="/aboutus" >About us</Link> </li>
                    <li>Services</li>
                    <li>Blogs</li>
                    <li>Contact</li>
                    <li> <Link to="/login"> Login  </Link> </li>
                    
                </ul>
                
            </div>
            <ul className="nav-main-bar">
                    
                    <li> <Link class="link" to="/treking"><img class="nav-icon" src="./img/Trekking.png" alt="Trekking Image" /> Treking</Link></li>
                    <li> <Link class="link" to="/tours"><img class="nav-icon-tour" src="./img/Tour.png" alt="Tour Image" /> Tours</Link></li>
                    <li> <Link class="link" to="/bookingform">Booking</Link></li>

            </ul>


            </div>

        </div>
    )
}
export default Header;