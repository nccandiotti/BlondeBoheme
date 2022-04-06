import { Route, Routes } from "react-router-dom"
import { useState, useEffect } from "react"
import { UserContext } from "./UserContext"
import "./App.css"
import SignIn from "./SignIn"
import SignUp from "./SignUp"
import UserHome from "./UserHome"
import NavBar from "./NavBar"
import MessengerFeed from "./components/MessengerFeed"

import { ChatEngine } from "react-chat-engine"

function App() {
  const [currentUser, setCurrentUser] = useState({})

  useEffect(() => {
    fetch("/me")
      .then((res) => res.json())
      .then(setCurrentUser)
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
        <ChatEngine
          height=" 50vh"
          projectID={process.env.REACT_APP_PROJECT_ID}
          userName="admin"
          userSecret="admin"
          renderChatFeed={(chatAppProps) => <MessengerFeed {...chatAppProps} />}
        />
      </UserContext.Provider>
    </div>
  )
}

export default App
