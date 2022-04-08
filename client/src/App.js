import { Route, Routes } from "react-router-dom"
import { useState, useEffect } from "react"
import { UserContext } from "./UserContext"
import "./App.css"
import SignIn from "./components/SignIn"
import SignUp from "./SignUp"
import UserHome from "./UserHome"
import NavBar from "./NavBar"

import MessengerFeed from "./components/MessengerFeed"
import Education from "./components/Education"
import Services from "./components/Services"
import Policies from "./components/Policies"
import AboutSuzie from "./components/AboutSuzie"
import Typography from "@mui/material/Typography"
import Box from "@mui/material/Box"
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
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            paddingTop: "40px",
          }}
        >
          {" "}
          <Typography sx={{ fontFamily: "Sacramento" }} variant="h1">
            The Blonde Boheme
          </Typography>
          <Typography
            sx={{ fontFamily: "Montserrat", fontWeight: "bold" }}
            variant="h6"
          >
            Luxury Color Services | Laid Back Vibe
          </Typography>
          {/* <h1 style={{ fontSize: "80px", fontFamily: "Sacramento" }}>
          The Blonde Boheme
          </h1> */}
          {/* <h3 style={{ fontFamily: "Montserrat" }}>
            Luxury Color Services | Laid Back Vibe
          </h3> */}
        </Box>
        <NavBar />
        <AboutSuzie />
        <Routes>
          <Route exact path="/myaccount" element={<UserHome />} />
          {/* <Route exact path="/" element={<App />} /> */}
          <Route exact path="/login" element={<SignIn />} />
          <Route exact path="/signup" element={<SignUp />} />
          <Route exact path="/education" element={<Education />} />
          <Route exact path="/services" element={<Services />} />
          <Route exact path="/policies" element={<Policies />} />
          <Route exact path="/about" element={<AboutSuzie />} />
        </Routes>
        {/* <ChatEngine
          height=" 50vh"
          projectID={process.env.REACT_APP_PROJECT_ID}
          userName="admin"
          userSecret="admin"
          renderChatFeed={(chatAppProps) => <MessengerFeed {...chatAppProps} />}
        /> */}
      </UserContext.Provider>
      {/* <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2907.753123155224!2d-77.6623780845272!3d43.21466717913881!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89d6b1496fdd8883%3A0xab84c4616032acac!2s1401%20Stone%20Rd%2C%20Rochester%2C%20NY%2014615!5e0!3m2!1sen!2sus!4v1649279418765!5m2!1sen!2sus"
        width="400"
        height="300"
        allowFullScreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
        style={{
          filter: "sepia(100%) saturate(100%)  hue-rotate(180deg)",
        }}
      ></iframe> */}
    </div>
  )
}

export default App
