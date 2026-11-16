import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from './componets/Header/Header'
import Announcemnt_Bar from './componets/Announcemnt_Bar/Announcemnt_Bar';

import About from './pages/About/about';
import Brands from './pages/Brands/brands';
import Contect from './pages/Contact/contect';
import Discounds from './pages/Discounds/discounds'
import EyeMakeup from './pages/EyeMakeup/eyemakeupe'
import FaceMakeup from './pages/FaceMakeup/facemakeup'
import HairCare from './pages/HairCare/haircare'
import Home from './pages/Home/home'
import Hygiene from './pages/Hygiene/hygiene'
import LipMakeup from './pages/LipMakeup/lipmakeup'
import Perfume from './pages/Perfume/perfume'
import Shop from './pages/Shop/shop'
import Skincare from './pages/Skincare/skincare'



export const App = () => {

  return (
     <>
     <BrowserRouter>
     <Announcemnt_Bar/>
     <Header/>
     <page_content/>

      <Routes>
         <Route path="/" element={<Home/>} />
         <Route path="About" element={<About/>} />
         <Route path="Brands" element={<Brands/>} />
         <Route path="Contect" element={<Contect/>} />
         <Route path="Discounds" element={<Discounds/>} />
         <Route path="EyeMakeup" element={<EyeMakeup/>} />
         <Route path="FaceMakeup" element={<FaceMakeup/>} />
         <Route path="HairCare" element={<HairCare/>} />
         <Route path="Hygiene" element={<Hygiene/>} />
         <Route path="LipMakeup" element={<LipMakeup/>} />
         <Route path="Perfume" element={<Perfume/>} />
         <Route path="Shop" element={<Shop/>} />
         <Route path="Skincare" element={<Skincare/>} />
      </Routes>
     </BrowserRouter>
  
  </>
  )
}
export default App