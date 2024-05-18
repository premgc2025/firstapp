
import {Link} from "React-router-dom";
import { useState } from "react";
function Registration(){

    const [userDetails, setUserDetails] = useState(
        {
            name:"",
            email:"",
            password:"",
            age:"",
        }        
    )
    function handleInput(event){
        

        setUserDetails((preInput)=>{
            return ({...preInput,[event.target.name]:event.target.value})
        })
    }
    
    function handelForm(event){
        event.preventDefault();
        console.log(userDetails)

        fetch("https://localhost:3300/registration",{
            method:"POST",
            body:JSON.stringify(userDetails),
            headers:{
                "Content-type":"application/json"
            }
        })
        .then((response)=>{
            console.log(response)
        })
       .catch((err)=>{
        console.log(err)
       })


    }

    return(
        <div className="registration-header">
            <div className="registration-section">
               
                <form className="registration-form" onSubmit={handelForm}>
                <h1>Registration</h1>
                    <input type="text" placeholder="Enter Your Name " name="name" className="input-form" onChange={handleInput} value={userDetails.name}/>
                    <input type="email" placeholder="Enter Your Email " name="email" className="input-form" onChange={handleInput} value={userDetails.email}/>
                    <input type="password" placeholder="Enter new Password " name="password" className="input-form" onChange={handleInput} value={userDetails.password}/>
                    <input type="number" placeholder="Enter Your Age " name="age"  className="input-form" onChange={handleInput} value={userDetails.age}/>
                
                    <button className="registration-btn">Registration</button>
                    <p>Already Registered ? <Link to="/login">Login</Link> </p>
                </form>
               
            </div>
        </div>
    )
}
export default Registration;