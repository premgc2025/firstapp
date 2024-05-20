import { useContext } from "react";
import { TheContext } from "../../App";

function Itinerary() {

    let itineraryvalue = useContext(TheContext)

    console.log("context", itineraryvalue.userName)

    return (
        <div className="itinerary-section">



            <div className="itinerary-all">
                <div className="itinerary">
                    <h1>Day1</h1>
                    <h3>Arrival in Kathmandu and Transfer to your hotel</h3>
                </div>
                <div className="itinerary-detail">
                    <p> When you arrive at Kathmandu’s Tribhuvan International Airport, our representative will meet you and take you to your hotel. Meeting with your Guide for Trekking information. We will assist if you need to buy any gear/equipment for the trek.</p>
                </div>
            </div>

            <div className="itinerary-all">
                <div className="itinerary">
                    <h1>Day2</h1>
                    <h3>Drive from Kathmandu to Pokhara,  Distance: 204 KM, Duration:(approx 7 hours) </h3>
                </div>
                <div className="itinerary-detail">
                    <p> After breakfast at 8:AM, you will be transported to Pokhara by Tourist bus  or Local Domestic Flight (30 minutes), prepare & rest day in Pokhara.
                    </p>
                    <p>Optional: Daily Domestic flight available from Kathmandu to Pokhara with additional cost.</p>

                </div>
            </div>

            <div className="itinerary-all">
                <div className="itinerary">
                    <h1>Day3</h1>
                    <h3>Drive from Pokhara to Nayapul(1hrs) and Trek to Tikhedhunga </h3>
                </div>
                <div className="itinerary-detail">
                    <p> After breakfast at 8:AM, we will drive to Nayapul, which is the starting point of our trek,the first day you will trek Nayapul to Tikhedhunga, approx 4-5 hours.
                    </p>
                   

                </div>
            </div>

            <div className="itinerary-all">
                <div className="itinerary">
                    <h1>Day4</h1>
                    <h3>Trek to Ghorepani</h3>
                </div>
                <div className="itinerary-detail">
                    <p> Today, we will trek to Ghorepani.Today you have a pretty long journey.You need to walk a little more & hard. During the trek, you could enjoy the natural beauty of the Nepalese hills & the lifestyle of local villages. In Ghorepani, you will spend the night. The total walking time is approx 6-7 hours.
                    </p>                 
                </div>
            </div>

            <div className="itinerary-all">
                <div className="itinerary">
                    <h1>Day5</h1>
                    <h3>Sunrise View from Poon-Hill(3210m) and trek to Tadapani</h3>
                </div>
                <div className="itinerary-detail">
                    <p> A wonderful sunrise & breathtaking view of the mountains will be a surprise view from Poon Hill (1-hour hike) that could make your day better. This day in the early morning you will trek to Poon Hill & then after will trek to Tadhapani (4-5 hours), where you are going to spend the night.
                    </p>                 
                </div>
            </div>

            <div className="itinerary-all">
                <div className="itinerary">
                    <h1>Day6</h1>
                    <h3>Tadapani to Chhomrong village</h3>
                </div>
                <div className="itinerary-detail">
                    <p> Parting from Tadapani, today, you hike towards Chomrong village. The route to Chomrong is a gradual descent, and it consists of crossing suspension bridges, walking past rhododendron forest, and hike along with the crop fields.
                    </p>                 
                </div>
            </div>

            <div className="itinerary-all">
                <div className="itinerary">
                    <h1>Day7</h1>
                    <h3>Trek to Deurali </h3>
                </div>
                <div className="itinerary-detail">
                    <p>Through the jungle walk, you are heading toward Deurali, where you will spend the night. All the while (5-6 hour trek) you will see suspension bridge, small rivers (Khola) & birds.
                    </p>                 
                </div>
            </div>

            <div className="itinerary-all">
                <div className="itinerary">
                    <h1>Day8</h1>
                    <h3>Trek to Machhapuchhre Base Camp </h3>
                </div>
                <div className="itinerary-detail">
                    <p>You will walk through the basins of Machhapuchhre Mountain towards Machhapuchhre Base Camp, which lies around 3700 meters of altitude & takes about 5-6 hour walking.
                    </p>                 
                </div>
            </div>

            <div className="itinerary-all">
                <div className="itinerary">
                    <h1>Day9</h1>
                    <h3>Trek to  Annapurna Base Camp </h3>
                </div>
                <div className="itinerary-detail">
                    <p>You are heading towards the journey’s extreme point, ABC. Approx 3-4 hour walk will make our journey complete into the ultimate point.
                    </p>                 
                </div>
            </div>

            <div className="itinerary-all">
                <div className="itinerary">
                    <h1>Day10</h1>
                    <h3>Trek form Annapurna Base Camp to Bamboo </h3>
                </div>
                <div className="itinerary-detail">
                    <p>This day morning you are a trek to Bamboo (5-6 hour walking) is the next destination to spend your night.
                    </p>                 
                </div>
            </div>

            <div className="itinerary-all">
                <div className="itinerary">
                    <h1>Day11</h1>
                    <h3>Bamboo to Jhinu Danda Hot Spring </h3>
                </div>
                <div className="itinerary-detail">
                    <p>Today, we will trek to Jhinu Dada, which is famous for its natural hot springs. You could enjoy the natural hot water bath, for this, you should walk 20 minutes from your staying point. We will spend the night at Jhinu Dada.                   
                    </p>                 
                </div>
            </div>

            <div className="itinerary-all">
                <div className="itinerary">
                    <h1>Day12</h1>
                    <h3>Trek from Jhinu Danda to Naypool and drive back to Pokhara, </h3>
                </div>
                <div className="itinerary-detail">
                    <p>Your trekking trip is almost over now that the Himalayan views are behind you. We cross the suspension bridge and then drive to Pokhara by jeep which takes about 2 hours.
                    Pokhara is where we’ll be staying for the night.                  
                    </p>                 
                </div>
            </div>

            <div className="itinerary-all">
                <div className="itinerary">
                    <h1>Day13</h1>
                    <h3>Drive from Pokhara to Kathmandu & Farewell Dinner </h3>
                </div>
                <div className="itinerary-detail">
                    <p>Now that your trek is complete,On this day you are returning to Kathmandu, either drive  or by domestic flight. If you choose a flight we will provide you half a day of sightseeing in Kathmandu. We will have free time in the evening to explore the city and do some last-minute shopping.
                    </p>
                    <p>Optional: Domestic flight available from Pokhara to Kathmandu with additional cost.   </p>   

                </div>
            </div>

            <div className="itinerary-all">
                <div className="itinerary">
                    <h1>Day14</h1>
                    <h3>Departure</h3>
                </div>
                <div className="itinerary-detail">
                    <p>You will be free until your flight time; we will drop you at Kathmandu Airport 3 hours before your flight.We hope you had a wonderful time trekking to the Annapurna Base Camp via Poon Hill and we look forward to welcoming you back to Nepal in the future.                  
                    </p>                 
                </div>
            </div>



        </div>
    )
}
export default Itinerary;