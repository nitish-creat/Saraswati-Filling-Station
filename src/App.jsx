import React from "react"
import Header from "./components/header"
import Hero from "./components/hero"
import Services from "./components/services"
import Contact from "./components/contact"
import About from "./components/aboutus"
import { Route, Routes } from "react-router-dom"
import Loyality from "./components/loyalty"
function App() {
  return (
    <Routes>
      <Route path="/" element={<><Header /><Hero /></>} />
      <Route path="/services" element={<Services />} />
      <Route path="/about" element={<About />} />
      <Route path="/Contact" element={<Contact />} />
      <Route path="/Loyal-program" element={<Loyality />} />
      
    </Routes>
  )
}

export default App
