
import { useState } from "react";
function Contact() {
    let [details, setDetails] = useState({

    })

    function handleInput(event) {
        setDetails((pre) => {
            return (
                { ...pre, [event.target.name]: event.target.value }
            )

        })

    }
    function handleSubmit() {
        console.log("Details", details)

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
    return (
        <div className="contact-section bookingform-section">
            <div className="contact-main ">
                <h1>Quick Contact</h1>

                <form action="https://api.web3forms.com/submit" method="POST" onSubmit={handleSubmit}>

                    <div className="contact-data">

                        <div className="tripform formdivmargin ">
                            <input type="hidden" name="access_key" value="e35e2857-e3fd-48cb-a0c1-9a26a4bcd039" />
                        </div>

                        <div className="contact-commondiv">
                            <div className="contactNEP">
                                <label htmlFor="nameid"  className="contact-common-font">Your Name (Full)</label>
                                <input type="text" className="contact-input-common" id="nameid" name="name" placeholder="Enter Your Full Name" onChange={handleInput} value={details.name} required />
                            </div>
                            <div className="contactNEP">
                                <label htmlFor="emailid"  className="contact-common-font">Email address</label>
                                <input type="email" id="emailid" className="contact-input-common" name="email" placeholder="Enter Email" onChange={handleInput} value={details.email} required />
                            </div>
                        </div>


                        <div className="contact-commondiv">
                            <div className="contactNEP">
                                <label htmlFor="phoneid"  className="contact-common-font">Phone</label>
                                <input type="text" id="phoneid" className="contact-input-common" name="phone" placeholder="Enter Your Phone Number" onChange={handleInput} value={details.phone} />
                            </div>
                            <div className="contactNEP">
                                <label htmlFor="nationalityid"  className="contact-common-font">Country</label>
                                <input type="text" id="nationalityid" className="contact-input-common" name="nationalityid" placeholder="Enter Your Phone Number" onChange={handleInput} value={details.nationality} required />
                            </div>
                        </div>


                        <div className="additionalrequirement formdivmargin">
                            <label htmlFor="additionalrequirementid"  className="contact-common-font">Message</label>
                            <textarea name="additionalrequirement" className="textareaAR" id="additionalrequirementid" cols="30" rows="7" onChange={handleInput} value={details.additionalrequirement}></textarea>
                        </div>
                    </div>
                    <button type="submit" className="form-btn">Send</button>
                </form>
            </div>

            <div className="aboutus-section">
                <h3>Contact Us</h3>
                <p>
                    Ready to embark on your Himalayan adventure? Get in touch with us today to start planning your trek. Our team is here to answer any questions and help you choose the perfect trek for your needs.
                    <p>
                        Email: [info@abc.com]
                    </p>
                    <p>
                        Phone: [+977-1-XXXXXXX]
                    </p>
                    <p>
                        Website: [www.trekcompanyname.com]
                    </p>
                    Embark on a journey with us and discover the beauty, challenge, and wonder of the Himalayas. Your adventure awaits!</p>
            </div>
        </div>

    )

}
export default Contact;