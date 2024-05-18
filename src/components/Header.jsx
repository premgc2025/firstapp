import {Link} from "React-router-dom";
function Header(){

    return(
        <div className="header">
            <div className="header-main">
            <div className="nav-bar">
                <div className="logo">
                <li class="li"> <Link to="/" class="link logo">Logo Here</Link></li>
                    {/* <h3>Logo Here</h3> */}
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
                    
                    <li> <Link class="link" to="/treking"><img class="nav-icon" src="/src/components/image/Trekking.png" alt="Trekking Image" /> Treking</Link></li>
                    <li> <Link class="link" to="/tours"><img class="nav-icon-tour" src="/src/components/image/Tour.png" alt="Tour Image" /> Tours</Link></li>
                    <li> <Link class="link" to="/bookingform">Booking</Link></li>

            </ul>


            </div>

        </div>
    )
}
export default Header;