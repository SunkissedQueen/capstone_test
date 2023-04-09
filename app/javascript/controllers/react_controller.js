import { Controller } from "@hotwired/stimulus"
import App from "./App"
import React from "react"
import ReactDOM from "react-dom/client"

// Connects to data object on home.html.erb
export default class extends Controller {
  connect() {
    // console.log("react controller connected")

    const root = ReactDOM.createRoot(document.getElementById("app"))
    root.render(<App />)
  }
}
