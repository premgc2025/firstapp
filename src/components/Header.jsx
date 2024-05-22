import {Link} from "react-router-dom";
function Header(){

    return(
        <div className="header">
            <div className="header-main">
            <div className="nav-bar-top">
                <div className="logo">
                <li > <Link to="/" className="header-link header-logo">&#9968; Logo <span className="header-logo-span">Here</span> </Link></li>
                   
                </div>
                <ul class="nav-bar-list">
                    
                    <li> <Link to="/aboutus" className="header-link">About us</Link> </li>
                    <li> <Link to="/services" className="header-link">Services</Link> </li>
                    <li> <Link to="/contact" className="header-link">Contact</Link> </li>
                   
                    {/* <li>Blogs</li> */}
                   
                    <li> <Link to="/login" className="header-link"> Login  </Link> </li>
                    
                </ul>
                
            </div>
            <ul className="nav-main-bar">
                    
                    <li> <Link className="header-link " to="/treking"><img class="nav-icon" src={`${import.meta.env.BASE_URL}img/Trekking.png`} alt="Trekking Image" /> Treking</Link></li>
                    <li> <Link className="header-link " to="/tours">&#9992; Tours</Link></li>
                    <li> <Link className="header-link" to="/bookingform">Booking</Link></li>

            </ul>


            </div>

        </div>
    )
}
export default Header;