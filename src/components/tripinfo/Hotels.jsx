function Hotels() {
    // note,    s ="Standard (2 Star)",        d = "Delux (3 Star)"" , p = "Premium (4 Star)""   , l = "Luxury (5 Star)""
    let hotels = [
        { city: "Kathmandu",  s:"Kathmandu Guest House", d: "Hotel Thamel",     p: "Ambasder Hotel",   l: "Radission" },
        { city: "Pokhara",    s: "Pokhara Hotel",        d: "Fewa Hotel",       p: "Barahi Hotel",     l: "Fistel Hotel" },
        { city: "Lumbini",    s: " Lumbini Hotel",       d: "Pawan Hotel",      p: "Sidhartha Hotel",  l: "Hyaku Hotel" },
        { city: "Chitwan",    s: " Tiger-Top Hotel",     d: "Landmark Hotel",   p: "Sauraha Hotel",    l: "7-Star Hotel" },
        { city: "Mustang",    s: " Tea House Lodges",    d: "Tea House Lodges", p: "Tea House Lodges", l: "Tea House Lodges" },
    ]
    return (
        <div className="cost-section">
            <div className="cost">
                <table class="table">
                    <thead>
                        <tr>
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
export default Hotels;