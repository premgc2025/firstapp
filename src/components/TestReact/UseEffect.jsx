import { useEffect, useState } from "react";



function UseEffect(){

    const [name, setName]=useState("iPhone-15")
    const [price, setPrice]= useState(55000)
    const [products, setProducts] = useState([])
    const [jokes,setJokes]= useState()
 
    console.log("Products",products)
    // console.log("Jokes",jokes.fact)
    useEffect(()=>{
      

        fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(data=> setProducts(data)
            
            )

            fetch("https://catfact.ninja/fact")
            .then(response=> response.json())
            .then(json=> setJokes(json) )
       

    },[])

    function changeName(){
        setName("iPhone-16")
    }

    function changePrice(){
        setPrice("65000")
    }
    return(
        <div className="useeffect-header">
            <div className="useeffect-section">
                <div className="useeffect main">
                    <h1> This is UseEffect page</h1>
                    <div className="product">
                        <h3>Mobile:{name}</h3>
                        <h3>Price: {price}</h3>
                        {/* <p>Products:{products[0].category}</p> */}
                     
                     
                        
                    </div>
                    <div className="button">
                        <button onClick={changeName}>Change Name</button>
                        <button onClick={changePrice}>Change Price</button>
                    </div>

                </div>
            </div>
        </div>

    )
}
export default UseEffect;