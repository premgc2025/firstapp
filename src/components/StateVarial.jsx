import React, { useState } from "react";
import { TheContext } from "../App";
import { useContext } from "react";

function StateVariable (){

    let u = useContext(TheContext)
    console.log("useState",u)

   
 const student = [
    {name:"Prem", age:"45"},
    {name:"Pravaker", age:"32"}
 ]
    const [countries, setCountries]=useState
    (
        [
            {name:"Nepal",capital:"Kathmandu",population:"30M"},
            {name:"India",capital:"New Delhi",population:"3.3B"},
            {name:"China",capital:"Beijing",population:"3.4B"},
            {name:"Canada",capital:"Toronto",population:"40M"},
            {name:"United Kingdom",capital:"London",population:"1B"},
        ]
    )

    function loadNewCountries(){
        setCountries([
            {name:"America",capital:"Washington DC",population:"300M"},
            {name:"Canada",capital:"Toronto",population:"40M"},
            {name:"United Kingdom",capital:"London",population:"1B"},
            {name:"Nepal",capital:"Kathmandu",population:"30M"},
            {name:"India",capital:"New Delhi",population:"3.3B"},

        ])
    }

    function loadSouthAsiaCountries(){
        setCountries([
            {name:"Nepal",capital:"Kathmandu",population:"30M"},
            {name:"India",capital:"New Delhi",population:"3.3B"},
            {name:"Maldives",capital:"Male",population:"3.4B"},
            {name:"Pakistan",capital:"Karachi",population:"3.4B"},
            {name:"Sri-Lanka",capital:"Colombo",population:"3.4B"},
            {name:"Afganistan",capital:"Cabul",population:"3.4B"},
            {name:"Bangaladesh",capital:"Dhaka",population:"3.4B"},
            {name:"Bhutan",capital:"Thimpu",population:"3.4B"},

        ])
    }


   let [currentIndex, setCurrentIndex] = useState(0)

   let next = ()=>{
       setCurrentIndex((preIndex)=>{
           
           return ( preIndex  <countries.length-1 ? preIndex+2 : preIndex)
       })
   }
   
   let previous = ()=>{
    setCurrentIndex((preIndex)=>{
        return(
            preIndex>0 ? preIndex-2: preIndex
        )
    })
   }
    
   let [user, setUser]=useState("Bidhan")
   let [age, setAge]=useState("35")

   function newUser(){
    setUser("Prem")

   }
   function newAge(){
    setAge("45")
   }



    return(

        <div className="statevariable">

          {/* <Link to=" " >  */}
          <div className="select-div" onClick={loadNewCountries}>
                <img  class="select-image" src="/src/components/image/ABC -image2.jpeg" alt="" />
                <div className="select-subdiv">
                    <h3>Location ABC</h3>
                    <p>Price: $2500</p>
                    <p>Duration: 15Days</p>
                </div>
            </div>
            {/* </Link>  */}

            <button onClick={loadNewCountries}>Load New Countries</button>
            <button onClick={loadSouthAsiaCountries}>Asia Countries</button>
            <button onClick={()=>{
                next()
            }} >  Next</button>
            <button onClick={previous} >Previous</button>
            {countries.slice(currentIndex, currentIndex+5) .map((country,index)=>{
                console.log(country)
                currentIndex++
            return(
                <div className="country" key={index+1}>
                <h3>{country.name}</h3>
                <h3>{country.capital}</h3>
                <h3>{country.population}</h3>

            </div>
            )
            
            }


            )}

            <div className="testStateVariable">
                <h3>{user}</h3>
                <h3>{age}</h3>
                <h1>{u.userName}</h1>
             
                <button onClick={newUser}>Chnage User Name</button>
                <button onClick={newAge}>Change Age</button>

            </div>
        
        </div>
       

    )
}
export default StateVariable;