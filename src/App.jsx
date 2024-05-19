import { createContext, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './App.css'
import { BrowserRouter , Routes, Route} from "react-router-dom";
import Banner from './components/Banner'
import React from 'react';
import Tours from './Tours';
import Booking from './components/Booking';
import Treking from './Treking';
import Header from './components/Header';
import AboutUs from "./components/AboutUs";
import Overview from "./components/tripinfo/Overview";
import Itinerary from "./components/tripinfo/Itinerary";
import Cost from "./components/tripinfo/cost";
import Hotels from "./components/tripinfo/Hotels";
import Vehicles from "./components/tripinfo/Vehicles";
import Everest from "./components/Trekking/Everest";
import EverestOverview from "./components/Trekking/Everest/EverestOverview";
import EverestItinerary from "./components/Trekking/Everest/EverestItinerary";
import EverestCost from "./components/Trekking/Everest/EverestCost";
import EverestHotel from "./components/Trekking/Everest/EverestHotel";
import EverestVehicles from "./components/Trekking/Everest/EverestVehicles";
import BookingForm from "./components/BookingForm";
import CallBack from "./components/TestReact/CallBack";
import Registration from "./components/TestReact/Registration";
import Login from "./components/TestReact/Login";


export const TheContext = createContext();




function App() {

  const [userName, setUserName] = useState()
  const [valueContext, setValueContext] = useState([
    { id: 1, name: "Component1", os: "Windows" },
    { id: 2, name: "Component2", os: "Windows" },
    { id: 3, name: "Component3", os: "Windows" },
    { id: 4, name: "Component4", os: "Windows" },
    { id: 5, name: "Component5" },
  ])


  return (
    <div className="trekNepal">
      <TheContext.Provider value={[valueContext, { setValueContext }]}>
        <BrowserRouter>
          <Header />
          <Routes>


            <Route path="/" element={<Banner />} />
            
            <Route path="/tours" element={<Tours />} />

            <Route path="/treking" element={<Treking />}>
              <Route path="" element={<Overview />} />
              <Route path="itinerary" element={<Itinerary />} />
              <Route path="cost" element={<Cost />} />
              <Route path="hotels" element={<Hotels />} />
              <Route path="vehicles" element={<Vehicles />} />

            </Route>
           
            <Route path="/bookingform" element={<BookingForm />} />
            <Route path="/booking" element={<Booking />} />
            <Route path="/aboutus" element={<AboutUs />} />
            <Route path="/everest" element={<Everest />}>
              <Route path="everestoverview" element={<EverestOverview />} />
              <Route path="everestitinerary" element={<EverestItinerary />} />
              <Route path="everestcost" element={<EverestCost />} />
              <Route path="everesthotel" element={<EverestHotel />} />
              <Route path="everestvehicles" element={<EverestVehicles />} />

            </Route>
            <Route path="/registration" element={<Registration/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/callback" element={<CallBack/>}/>

          </Routes>

        </BrowserRouter>

      </TheContext.Provider>
      {/* <CallBack /> */}

      

      <div className="img">
        ima

      </div>
      
     


    </div>

  )
}

export default App
