
import {Link} from "react-router-dom";

function Login(){

    fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(data=> console.log(data)
            
            )

            
       

    
    return(
        <div className="registration-header">
            <div className="registration-section">
               
                <form className="registration-form">
                <h1>Login</h1>
                  
                    <input type="email" placeholder="Enter Your Email " name="email" className="input-form"/>
                    <input type="password" placeholder="Enter new Password " name="password" className="input-form" />
                 
                    <p>No Account? <Link to="/registration">Registration</Link> </p>
                </form>
               
            </div>
          
        </div>
    )
}
export default Login;