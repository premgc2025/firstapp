
function Manasluvehicles(){
     // note , vt= "Vehicle Type"
     let vehicles = [
        { persons: "4-6 Persons",  vt: " 4WD Jeep-One" },
        { persons: "7-12 Persons", vt: "4WD Jeep-Two" },
    
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
export default Manasluvehicles;