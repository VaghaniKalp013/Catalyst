import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';

import Header from "./Components/Header/Navbar"
import Footer from "./Components/Footer/Footer"
import Home from "./Components/Home/Home";

import Aboutus from "./Components/Aboutus/Aboutus";

import Material from "./Components/Material/Material";



import Services from "./Components/Services/Services"
import Explore from "./Components/Explore/Explore";
// import Navbar from "./Components/Header/Navbar";


import GetAQuote from "./Components/GetAQuote/GetAQuote"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const App = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          
          <Route path="/" element={<Home />} />

          <Route path="/Aboutus" element={<Aboutus />} />

          <Route path="/services" element={<Services />} />

          <Route path="/Explore" element={<Explore />} />

          <Route path="/Material" element={<Material />} />

          <Route path="/GetAQuote" element={<GetAQuote />} />

              <Route path="/" element={<Services />} />

              <Route path="/aboutus" element={<Aboutus />} />



        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App;



































