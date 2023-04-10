import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import CapstoneIndex from "./CapstoneIndex"
import CapstoneShow from "./CapstoneShow"
import Navigation from "./Navigation"

const App = ({
  logged_in,
  current_user,
  new_user_route,
  sign_in_route,
  sign_out_route
}) => {
  console.log("logged_in:", logged_in)
  console.log("current_user:", current_user)
  console.log("new_user_route:", new_user_route)
  console.log("sign_in_route:", sign_in_route)
  console.log("sign_out_route:", sign_out_route)
  
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