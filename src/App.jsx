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
import Manaslu from "./components/Trekking/Manaslu";
import Manasluoverview from "./components/Trekking/Manaslu/Manasluoverview";
import Manasluitinerary from "./components/Trekking/Manaslu/Manasluitinerary";
import Manaslucost from "./components/Trekking/Manaslu/Manaslucost";
import Manasluhotel from "./components/Trekking/Manaslu/Manasluhotel";
import Manasluvehicles from "./components/Trekking/Manaslu/Manasluvehicles";
import Langtang from "./components/Trekking/Langtang";
import LangtangOverview from "./components/Trekking/Langtang/LangtangOverview";
import LangtangItinerary from "./components/Trekking/Langtang/LangtangItinerary";
import LangtangCost from "./components/Trekking/Langtang/LangtangCost";
import LangtangHotel from "./components/Trekking/Langtang/LangtangHotel";
import LangtangVehicles from "./components/Trekking/Langtang/LangtangVehicles";
import Services from "./components/Services";
import Contact from "./components/Contact";
import Annapurna from "./components/Trekking/Annapurna";


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
        <BrowserRouter basename="/firstapp/">
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

            <Route path="/annapurna" element={<Annapurna/>} />

            <Route path="/everest" element={<Everest />}>
              <Route path="" element={<EverestOverview />} />
              <Route path="everestitinerary" element={<EverestItinerary />} />
              <Route path="everestcost" element={<EverestCost />} />
              <Route path="everesthotel" element={<EverestHotel />} />
              <Route path="everestvehicles" element={<EverestVehicles />} />
            </Route>

            <Route path="/langtang" element={<Langtang/>} >
              <Route path="" element={<LangtangOverview/>}/>
              <Route path="langtangitinerary" element={<LangtangItinerary/>} />
              <Route path="langtangcost" element={<LangtangCost/>} />
              <Route path="langtanghotel" element={<LangtangHotel/>} />
              <Route path="langtangvehicles" element={<LangtangVehicles/>} />
            </Route>

            <Route path="/manaslu" element={<Manaslu/>}>
              <Route path="" element={<Manasluoverview/>} />
              <Route path="manasluitinerary" element={<Manasluitinerary/>} />
              <Route path="manaslucost" element={<Manaslucost/>} />
              <Route path="manasluhotel" element={<Manasluhotel/>} />
              <Route path="manasluvehicles" element={<Manasluvehicles/>} />


            </Route>

            <Route path="/services" element={<Services/>}/>
            <Route path="/contact" element={<Contact/>}/>
            <Route path="/registration" element={<Registration/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/callback" element={<CallBack/>}/>

          </Routes>

   
        
        </BrowserRouter>

     
      </TheContext.Provider>
      {/* <CallBack /> */}
    


      <div className="img">
        

      </div>
      
     


    </div>

  )
}

export default App
