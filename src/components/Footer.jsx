import {Link} from "react-router-dom";
function Footer() {
    return (
        <div className="footer-header">
            {/* <div className="footer-section"> */}
            <div className="footer-banner">
                <div className="footer-body">
                    <h3>Contact Info</h3>
                    <div className="footer-common-div ">
                        <h3>Phone: +977-1-XXXXXXX (WhatsApp)</h3>
                        <h3>Email: [info@abc.com]</h3>
                        <h3>Email: [info@abc.com]</h3>
                        <li> <Link to="/contact" className="footer-link">Quick Contact</Link> </li>
                    </div>
                </div>
                <div className="footer-body">
                    <h3>Quick Link</h3>
                    <div className="footer-common-div">
                    <li > <Link to="/" className="footer-link footer-logo">Home</Link></li>

                        <li> <Link to="/aboutus" className="footer-link">About us</Link> </li>
                        <li> <Link to="/services" className="footer-link">Services</Link> </li>
                        <li> <Link className="footer-link" to="/bookingform">Booking</Link></li>
                        <li> <Link to="/contact" className="footer-link">Quick Contact</Link> </li>



                    </div>
                </div>
                <div className="footer-body">
                    <h3>Treking</h3>
                    <div className="footer-common-div">
                        <li> <Link className="footer-link " to="/treking"> Treking</Link></li>

                        <li> <Link className="footer-link" to="/bookingform">Booking</Link></li>
                        <li> <Link to="/contact" className="footer-link">Quick Contact</Link> </li>

                    </div>
                </div>


                <div className="footer-body">
                    <h3>Tour</h3>
                    <div className="footer-common-div">
                        <li> <Link className="footer-link " to="/tours">&#9992; Tours</Link></li>

                        <li> <Link className="footer-link" to="/bookingform">Booking</Link></li>
                        <li> <Link to="/contact" className="footer-link">Quick Contact</Link> </li>


                    </div>
                </div>



                

            </div>




            <div className="footer-button">
                <h4>Copyright&#169; 2024</h4>
                <h4>Privacy Policy <span>Terms & Conditions</span></h4>

            </div>
        </div>



    )
}
export default Footer;