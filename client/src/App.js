import { Route, Routes } from "react-router-dom"

import "./App.css"
import SignIn from "./SignIn"
import SignUp from "./SignUp"
import UserHome from "./UserHome"
import NavBar from "./NavBar"

function App() {
  return (
    <div className="App">
      <NavBar />
      test test test from App.js
      <Routes>
        <Route exact path="/myaccount" element={<UserHome />} />
        {/* <Route exact path="/" element={<App />} /> */}
        <Route exact path="/login" element={<SignIn />} />
        <Route exact path="/signup" element={<SignUp />} />
      </Routes>
    </div>
  )
}

export default App
