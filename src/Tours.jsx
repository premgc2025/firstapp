import { Link } from "react-router-dom";
function Tours() {
    let products = [
        { name: "Bhumeshwori Temple", image: "./img/Bhumeshwori Temple.JPG", Duration: "3 Hours", Price: "$100" },
        { name: "View Tower Lowlang", image: "./img/ViewTower.JPG", Duration: "2-Hours", Price: "$100" },
        { name: "Lukla", image: "./img/Lukla Airport.JPG", Duration: "3-Days", Price: "$500" },
        { name: "Manasulu-Gorkha", image: "./img/manaslu-1.jpeg", Duration: "7-Days", Price: "$900" },


    ]


    return (
        <div className="tour-header">
            <div className="tours">

                {
                    products.map((product, index) => {
                        return (<div className="tourpakage" key={index + 1}>
                            <h3>{product.name}</h3>
                            <img class="tour-image" src={product.image} alt={`image + ${index}+1`} />
                            <h4>Duration: {product.Duration}</h4>
                            <h4>Cost: {product.Price}</h4>

                        </div>)
                    })
                }

            </div>

        </div>

    )
}
export default Tours;