import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import CapstoneIndex from "./CapstoneIndex"
import CapstoneShow from "./CapstoneShow"
import Navigation from "./Navigation"

const App = () => {
  
  return (
    <BrowserRouter>
      <Navigation />
      <h1>How to Have a Successful Capstone Experience</h1>
      <Routes>
        <Route path="/index" element={<CapstoneIndex />}/>
        <Route path="/show" element={<CapstoneShow />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App