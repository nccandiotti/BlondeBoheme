import { Route, Routes } from "react-router-dom"
import { useState, useEffect } from "react"
import { UserContext } from "./UserContext"
import "./App.css"
import SignIn from "./SignIn"
import SignUp from "./SignUp"
import UserHome from "./UserHome"
import NavBar from "./NavBar"

function App() {
  const [currentUser, setCurrentUser] = useState({})

  useEffect(() => {
    fetch("/me")
      .then((res) => res.json())
      .then((currentUser) => setCurrentUser(currentUser))
    console.log(currentUser)
  }, [])
  return (
    <div className="App">
      <UserContext.Provider value={{ currentUser, setCurrentUser }}>
        <NavBar />
        test test test from App.js
        <Routes>
          <Route exact path="/myaccount" element={<UserHome />} />
          {/* <Route exact path="/" element={<App />} /> */}
          <Route exact path="/login" element={<SignIn />} />
          <Route exact path="/signup" element={<SignUp />} />
        </Routes>
      </UserContext.Provider>
    </div>
  )
}

export default App
