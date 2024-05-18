import { useState } from "react";

function BookingForm(){

    let [details,setDetails]=useState({
      
    })

    function handleInput(event){
        setDetails((pre)=>{
            return(
                {...pre,[event.target.name]:event.target.value}
            )

        })
       
    }
    function handleSubmit(){
        console.log("Details",details)

        async (event) => {
            event.preventDefault();  
             
            const json = JSON.stringify(details);
        
            const res = await fetch("https://api.web3forms.com/submit", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
              },
              body: json
            }).then((res) => res.json());
        
            if (res.success) {
              console.log("Success", res);
            }
          };
        
    }
    return(
        <div className="bookingform-section">
            <div className="bookingform-main">
            <h1>Booking form</h1>
                <div className="bookingform-title">
               
                </div>
               <form action="https://api.web3forms.com/submit" method="POST" onSubmit={handleSubmit}>

                <div className="bookingform-data">
                   
                   <div className="tripform formdivmargin">
                   <input type="hidden" name="access_key" value="e35e2857-e3fd-48cb-a0c1-9a26a4bcd039"/>
                    <label htmlFor="tripnameid">Trip Name</label>
                    <select name="tripname" id="tripnameid" className="tripname inputheight" onChange={handleInput} value={details.tripname} required >
                        <option  value="Select Your Trip" defaultValue="default">Select Your Trip</option>
                        <option value="Annapurna Base Camp Trek - 14 Days">Annapurna Base Camp Trek - 14 Days</option>
                        <option  value="Short Annapurna Base Camp Trek - 10 Days">Short Annapurna Base Camp Trek - 10 Days</option>
                        <option  value="ABC">Annapurna Complete Circuit Trek - 16 Days</option>
                        <option  value="ABC">Everest Base Camp Trek - 14 Days</option>
                        <option  value="ABC">Short Everest Base Camp Trek - 10 Days</option>
                        <option  value="ABC">Manaslu Circuit Trek - 16 Days</option>
                        <option  value="ABC">Manaslu Circuit Trek - 13 Days</option>
                        <option  value="ABC">Manaslu Tsum Valley Trek - 22 Days</option>
                        <option  value="ABC">Langtang Valley Trek - 14 Days</option>
                        <option  value="ABC">Upper Mustang Trek with Yara - 18 Days</option>
                       

                    </select>
                    </div>
                  
                    <div className="nameaddressphone formdivmargin">
                        <div className="name commonNEP">
                    <label htmlFor="nameid">Your Name (Full)</label>
                    <input type="text" className="inputname inputheight" id="nameid" name="name"  placeholder="Enter Your Full Name" onChange={handleInput} value={details.name} required/>
                    </div>
                    <div className="email commonNEP">
                    <label htmlFor="emailid">Email address</label>
                    <input type="email" id="emailid" className="inputemail inputheight" name="email" placeholder="Enter Email" onChange={handleInput} value={details.email} required/>
                    </div>
                    <div className="phone commonNEP">
                    <label htmlFor="phoneid">Phone</label>
                    <input type="text" id="phoneid" className="inputphone inputheight" name="phone" placeholder="Enter Your Phone Number" onChange={handleInput} value={details.phone}/>
                    </div>
                    </div>

                    <div className="nameaddressphone formdivmargin">

                    <div className="nationality formdivmargin">
                    <label htmlFor="nationalityid">Nationality</label>
                    <input type="text" name="nationality" id="nationalityid" className="inputheight" placeholder="Enter Your Nationality" onChange={handleInput} value={details.nationality} required />

                    </div>

                    <div className="nationality formdivmargin">
                    <label htmlFor="nationalityid">Number of Travellers</label>
                    <input type="text" name="nationality" id="nationalityid" className="inputheight" placeholder="Number of Travellers" onChange={handleInput} value={details.nationality} required />

                    </div>
                    </div>

                    <div className="arrivaldeparture formdivmargin">
                    <div className="arrival commonAD">
                    <label htmlFor="arrivaldateid">Arrival Date</label>
                    <input type="date"name="arrivaldate" id="arrivaldateid" className="arrivaldate inputheight" placeholder="Your Arrival Date" onChange={handleInput} value={details.arrivalDate} />
                    </div>
                    <div className="departure commonAD">
                    <label htmlFor="departuredateid">Departure Date</label>
                    <input type="date" name="departuredate" id="departuredateid" className="depaturedate inputheight" placeholder="Your Arrival Date" onChange={handleInput} value={details.departureDate} />
                    </div>
                   

                    </div>
                        
                
                    <div className="additionalrequirement formdivmargin">
                    <label htmlFor="additionalrequirementid">Additional Requirement</label>
                    <textarea  name="additionalrequirement" className="textareaAR"  id="additionalrequirementid" cols="30" rows="7" onChange={handleInput} value={details.additionalrequirement}></textarea>
                    </div>

                  
<div className="change">
               <h1>{details.name}</h1>
               <h1>{details.email}</h1>
               <h1>{details.additionalrequirement}</h1>

</div>
                </div>
                <button type="submit" className="form-btn">BOOK NOW</button>
              
                </form>
            </div>
        </div>

    )

    
}
export default BookingForm;