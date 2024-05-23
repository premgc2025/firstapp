

function LumbiniCost(){
    // Note: gs=Group Size ,st =Standard Package, dp = Delux Package, sdp = Super Delux Package , lp = Luxury Package
 let costs = [
    { gs: "Per Person", sp: " USD 1000", dp: "USD 1100", sdp: "USD 1200", lp: "1300" },
    { gs: "Additional Night", sp: " USD 25", dp: "USD 30", sdp: "USD 50", lp: "100" },
    { gs: "Taxes & Fees", sp: "Included", dp: "Included", sdp: "Included", lp: "Included" },
   
]


    return(
        <div className="cost-section">
            
            <div className="cost">
                <table className="table">
                    <thead>
                        <tr className="table-header">
                            <th>Group Size</th>
                            <th>Standard Package</th>
                            <th>Deluxe Package</th>
                            <th>Super Deluxe Package</th>
                            <th>Luxuary Package</th>
                        </tr>
                    </thead >
                    <tbody id="tbody">
                        {costs.map((cost, index) => {
                            return (

                                <tr>
                                    <td>{cost.gs}</td>
                                    <td>{cost.sp}</td>
                                    <td>{cost.dp}</td>
                                    <td>{cost.sdp}</td>
                                    <td>{cost.lp}</td>
                                </tr>)
                        })}
                    </tbody>
                </table>
            </div><div className="price-includes">
                            <h3>Price Includes</h3>
                            <div className="price-includes-ul">
                                <ul>
                                    <li className="price-includes-li">&#9989; Airport pick up and transfer</li>
                                    <li className="price-includes-li">&#9989; Private vehicle with A/C for all mentioned transfers and sightseeing.</li>
                                    <li className="price-includes-li">&#9989; All hotel accommodations based on double sharing deluxe rooms.</li>
                                    <li className="price-includes-li">&#9989; Daily Breakfast at the hotel in Kathmandu and Bhairahawa</li>
                                    <li className="price-includes-li">&#9989; Sleeping and duffel bags.</li>
                                    <li className="price-includes-li">&#9989; Government tax and office service charge.</li>

                                </ul>
                            </div>

                        </div>

                        <div className="price-excludes">
                            <h3>Price  Excludes</h3>
                            <div className="price-excludes-ul">
                                <ul>
                                    <li className="price-excludes-li"> &#10062; Personal expenses such as laundry, alcoholic beverages, bottled drinks.</li>                                   
                                    <li className="price-excludes-li"> &#10062; Lunch and Dinner are excluded</li>
                                    <li className="price-excludes-li"> &#10062; Travel insurance.</li>
                                    <li className="price-excludes-li"> &#10062; Extra night accommodation if any.</li>
                                    <li className="price-excludes-li"> &#10062; Nepal visa.</li>
                                    <li className="price-excludes-li"> &#10062; Entrance fees at the monuments during the sightseeing.</li>
                                    <li className="price-excludes-li"> &#10062; Services that aren’t mentioned above.</li>
                                    <li className="price-excludes-li"> &#10062; Any tips and donations.</li>

                                </ul>
                            </div>

                           
                        </div>


        </div>
    )
}
export default LumbiniCost;