import React from "react"
import ReactDOM from "react-dom"
import { BrowserRouter } from "react-router-dom"
import AdapterDateFns from "@mui/lab/AdapterDateFns"
import LocalizationProvider from "@mui/lab/LocalizationProvider"

import App from "./App"

ReactDOM.render(
  <BrowserRouter>
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <App />
    </LocalizationProvider>
  </BrowserRouter>,
  document.getElementById("root")
)
