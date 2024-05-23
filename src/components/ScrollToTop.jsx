import { useEffect } from "react"
import { useLocation } from "react-router-dom"
function ScrollToTop(){

    const { pathname } = useLocation()

    useEffect(()=>{
        if(pathname==="/" || pathname==="/treking" 
        || pathname==="/bookinginformation" || pathname==="/bookingform" 
        || pathname==="/aboutus" || pathname==="/everest" || pathname==="/contact"
        || pathname==="/services" || pathname==="/tours" || pathname==="/lumbini"
        || pathname==="/manaslu" || pathname==="/langtang" || pathname==="/login"
        || pathname==="/registration"){

        window.scrollTo({
            top:0,
            behaviour:"smooth"
        })}
    },[pathname])

    return null;

    
}
export default ScrollToTop;