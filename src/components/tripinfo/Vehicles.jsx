function Vehicles() {
    // note , vt= "Vehicle Type"
    let vehicles = [
        { persons: "2-3 Persons",  vt: " Car" },
        { persons: "4-5 Persons",  vt: " Jeep/Van" },
        { persons: "6-12 Persons", vt: " Hiace Van" },
    
    ]
    return (
        <div className="cost-section">
            <div className="cost">
                <table className="table">
                    <thead>
                        <tr className="table-header">
                            <th>No. of Passengers</th>
                            <th>Vehicle Type(A/C)</th>
                           
                        </tr>
                    </thead >
                    <tbody id="tbody">
                        {vehicles.map((vehicle, index) => {
                            return (

                                <tr>
                                    <td>{vehicle.persons}</td>
                                    <td>{vehicle.vt}</td>
                                    
                                </tr>)
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    )
}
export default Vehicles;