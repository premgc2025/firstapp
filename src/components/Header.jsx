import { useEffect, useState } from "react";
import {Link, useLocation} from "react-router-dom";
function Header(){
    let location = useLocation()
    useEffect(()=>{
        console.log(location.pathname)
    },[location])

    const [isOpen, setIsOpen] = useState(false)
    const toggleNav = ()=>{
        setIsOpen(!isOpen)

    }
     const closeNav = ()=>{
        setIsOpen(false)
     }

    return(
        <div className="header">
            <div className="header-main">
            <div className="nav-bar-top">
                <div className="logo">
                <li > <Link to="/" className= {`header-link header-logo ${location.pathname==="/" ? "active":""} `} >&#9968; Logo <span className="header-logo-span header-link">Here</span> </Link></li>
                   
                </div>

                


                <ul className={`nav-bar-list ${isOpen ? "nav-active":" "}`}>
                
                    
                    <li> <Link to="/aboutus" onClick={closeNav} className= {`header-link ${location.pathname==="/aboutus" ? "active":""} `} >About us</Link> </li>
                    <li> <Link to="/services" onClick={closeNav}  className={`header-link ${location.pathname==="/services" ? "active":""} `}>Services</Link> </li>
                    <li> <Link to="/contact"  onClick={closeNav}  className={`header-link ${location.pathname==="/contact" ? "active":""} `}>Contact</Link> </li>
                   
                    {/* <li>Blogs</li> */}
                   
                    <li> <Link to="/login" onClick={closeNav}  className={`header-link ${location.pathname==="/login" ? "active":""} `}> Login  </Link> </li>
                    
                </ul>
                
                    
                <div className="nav-toggle" onClick={toggleNav}>
                    <span className="burger-bar"></span>
                    <span className="burger-bar"></span>
                    <span className="burger-bar"></span>

                    </div>

               

                
            </div>
            <ul className="nav-main-bar">
                    <div className="nav-main-linkdiv">
                    <img className="nav-icon" src={`${import.meta.env.BASE_URL}img/Trekking.png`} alt="Trekking Image" /> 
                    <li> <Link className={`header-link ${location.pathname==="/treking" ? "active":""} `}to="/treking">Treking</Link></li>
                    </div>
                    <div className="nav-main-linkdiv">
                        <h2>&#9992;</h2>

                    <li> <Link className={`header-link  ${location.pathname==="/tours" ? "active":""}  tour-icon>`} to="/tours">Tours </Link></li>
                    </div>
                    <li> <Link className={`header-link ${location.pathname==="/bookingform" ? "active":""} `}to="/bookingform">Booking</Link></li>

            </ul>


            </div>

        </div>
    )
}
export default Header;