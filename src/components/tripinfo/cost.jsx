
function Cost() {
    // Note: gs=Group Size ,st =Standard Package, dp = Delux Package, sdp = Super Delux Package , lp = Luxury Package
    let costs = [
        { gs: "5 Persons", sp: " USD 500", dp: "USD 600", sdp: "USD 700", lp: "850" },
        { gs: "10 Persons", sp: " USD 1000", dp: "USD 1300", sdp: "USD 1400", lp: "1550" },
        { gs: "15 Persons", sp: " USD 1500", dp: "USD 1600", sdp: "USD 1700", lp: "1850" },
        { gs: "20 Persons", sp: " USD 2500", dp: "USD 2600", sdp: "USD 7200", lp: "8250" },
        { gs: "5 Persons", sp: " USD 500", dp: "USD 600", sdp: "USD 700", lp: "850" },
    ]
    return (
        <div className="cost-section">
            <div className="cost">
                <table class="table">
                    <thead>
                        <tr>
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
            </div>
        </div>
    )
}
export default Cost;