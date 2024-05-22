
function EverestCost(){

 // Note: gs=Group Size ,st =Standard Package, dp = Delux Package, sdp = Super Delux Package , lp = Luxury Package
 let costs = [
    { gs: "Per Person", sp: " USD 1399", dp: "USD 1500", sdp: "USD 1600", lp: "1700" },
    { gs: "Additional Night", sp: " USD 30", dp: "USD 40", sdp: "USD 50", lp: "100" },
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
                                    <li className="price-includes-li">&#9989; Two Nights Accommodation in Kathmandu in 3-star Hotel (breakfast included).</li>
                                    <li className="price-includes-li">&#9989; Kathmandu – Lukla – Kathmandu Domestic flight.</li>
                                    <li className="price-includes-li">&#9989; Meals (breakfast, lunch and dinner) with tea/coffee in each meal during the trek.</li>
                                    <li className="price-includes-li">&#9989; Neat and Clean Mountain Accommodation at Tea House Lodges.</li>
                                    <li className="price-includes-li">&#9989; Professional trekking guide, helpful and friendly guide, porters (2 trekkers = 1 porter).</li>
                                    <li className="price-includes-li">&#9989; Conservation Area entrance permit.</li>
                                    <li className="price-includes-li">&#9989; Sleeping and duffel bags.</li>
                                    <li className="price-includes-li">&#9989; Government tax and office service charge.</li>
                                    <li className="price-includes-li">&#9989; Medical first aid kit box.</li>
                                    <li className="price-includes-li">&#9989; Complementary Nepali Cultural Dinner.</li>
                                </ul>
                            </div>

                        </div>

                        <div className="price-excludes">
                            <h3>Price  Excludes</h3>
                            <div className="price-excludes-ul">
                                <ul>
                                    <li className="price-excludes-li"> &#10062; Personal expenses such as laundry, alcoholic beverages, bottled drinks.</li>                                   
                                    <li className="price-excludes-li"> &#10062; Any meals in Kathmandu  other than breakfast.</li>
                                    <li className="price-excludes-li"> &#10062; Travel insurance.</li>
                                    <li className="price-excludes-li"> &#10062; Extra night accommodation in Kathmandu  if any.</li>
                                    <li className="price-excludes-li"> &#10062; Nepal visa.</li>
                                    <li className="price-excludes-li"> &#10062; Optional activities cost.</li>
                                    <li className="price-excludes-li"> &#10062; Hot water shower during the Trek..</li>
                                    <li className="price-excludes-li"> &#10062; Staff Tipping.</li>

                                </ul>
                            </div>

                           
                        </div>


        </div>
    )
}
export default EverestCost;