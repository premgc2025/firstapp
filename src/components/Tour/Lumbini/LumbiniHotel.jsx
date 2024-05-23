

function LumbiniHotel(){

     // note,    s ="Standard (2 Star)",        d = "Delux (3 Star)"" , p = "Premium (4 Star)""   , l = "Luxury (5 Star)""
     let hotels = [
        { city: "Kathmandu",  s:"Kathmandu Boutique or Similar", d: "Hotel Ambasdor or Similar",     p: "Kathmandu Guest House or Similar",   l: "Radission or Similar" },       
        { city: "Lumbini",    s: " Lumbini Guest House",    d: "Hotel Little Buddha", p: "Hotel Lumbini Hokke", l: "Hotel Kasai" },
    ]
    return (
        <div className="cost-section">
            <div className="cost">
                <table className="table">
                    <thead>
                        <tr className="table-header">
                            <th>City</th>
                            <th>Standard (2 Star)</th>
                            <th>Deluxe (3 Star)</th>
                            <th>Premium (4 Star)</th>
                            <th>Luxuary (5 Star)</th>
                        </tr>
                    </thead >
                    <tbody id="tbody">
                        {hotels.map((hotel, index) => {
                            return (

                                <tr>
                                    <td>{hotel.city}</td>
                                    <td>{hotel.s}</td>
                                    <td>{hotel.d}</td>
                                    <td>{hotel.p}</td>
                                    <td>{hotel.l}</td>
                                </tr>)
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    )
}
export default LumbiniHotel;