import { Route, Routes } from "react-router-dom"
import { useState, useEffect } from "react"
import { UserContext } from "./UserContext"
import "./App.css"
import SignIn from "./components/SignIn"
import SignUp from "./components/SignUp"
import UserHome from "./components/portals/UserHome"
import NavBar from "./components/NavBar"
import NewGuestConsultation from "./components/forms/NewGuestConsultation"
import Container from "@mui/material/Container"
import Education from "./components/Education"
import Services from "./components/Services"
import Policies from "./components/Policies"
import AboutSuzie from "./components/AboutSuzie"
import Typography from "@mui/material/Typography"
import Box from "@mui/material/Box"
import Grid from "@mui/material/Grid"
import Link from "@mui/material/Link"
import pic from "./assets/me.png"
import hair2 from "./assets/hair2.png"
import hair3 from "./assets/hair3.png"
import hair4 from "./assets/hair4.png"
import hair5 from "./assets/hair5.png"

const footers = [
  {
    title: "The Blonde Boheme",
    description: [
      "B(l)eached Washed Creator",
      "Local Lux.u.ry Co-Educator",
      <Link href="https://www.instagram.com/the.blonde.boheme/">
        @the.blonde.boheme
      </Link>,
      <Link href="https://www.instagram.com/local_lux.u.ry_/">
        @local_lux.u.ry_
      </Link>,
    ],
  },
  {
    title: "Information",
    description: [
      "House of 'Mavriks",
      "1402 Stone Road, Rochester, NY 14615 (lower level, suite 100)",
      <Link href="https://www.instagram.com/house_of_mavriks">
        @house_of_mavriks
      </Link>,
    ],
  },
  {
    title: "Service Hours",
    description: [
      "SUMMER  (June-Sept)",
      "Tue/Thur/Fri 9am-5pm",
      "WINTER (Oct-May",
      "Tue/Thur/Fri 10am-6pm",
    ],
  },
  {
    title: "Contact",
    description: [
      "EXISTING CLIENTS ONLY: text (585-880-2679",
      <Link href="/education">Education request</Link>,
      <Link href="/signup">New Clients</Link>,
    ],
  },
]

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
          <Typography
            sx={{ fontFamily: "Sacramento", fontSize: "10vw" }}
            variant="h1"
          >
            The Blonde Boheme
          </Typography>
          <Typography
            sx={{
              fontFamily: "Montserrat",
              fontSize: "2vw",
            }}
            variant="h6"
          >
            Luxury Color Services | Laid Back Vibe
          </Typography>
        </Box>
        <NavBar />

        <Routes>
          <Route exact path="/" element={<AboutSuzie />} />
          <Route exact path="/myaccount" element={<UserHome />} />
          <Route exact path="/login" element={<SignIn />} />
          <Route exact path="/signup" element={<SignUp />} />
          <Route exact path="/education" element={<Education />} />
          <Route exact path="/services" element={<Services />} />
          <Route exact path="/policies" element={<Policies />} />
          <Route exact path="/newguest" element={<NewGuestConsultation />} />
        </Routes>
      </UserContext.Provider>
      <Container
        component="footer"
        sx={{
          borderTop: (theme) => `1px solid ${theme.palette.divider}`,
          mt: 8,
          py: [3, 6],
          bottom: 0,
          left: 0,
          right: 0,
          marginTop: "20px",
          minWidth: "80%",
        }}
      >
        <Typography
          sx={{
            fontFamily: "MontSerrat",
            "&:hover": "textDecoration: 'underline'",
          }}
          onClick={() =>
            window.open("https://www.instagram.com/the.blonde.boheme/")
          }
          variant="h3"
        >
          Follow @the.blonde.boheme
        </Typography>

        <Grid
          container
          sx={{
            display: "flex",
            alignItems: "center",
            flexDirection: "row",
            justifyContent: "space-evenly",
          }}
        >
          <Grid item xs={2}>
            <img
              style={{
                display: "flex",
                width: "100%",
                height: "auto",
                objectFit: "cover",
              }}
              src={hair2}
              alt="instagram picture"
            />
          </Grid>
          <Grid sx={{ margin: "10px" }} item xs={2}>
            <img
              style={{
                display: "flex",
                width: "100%",
                height: "auto",
                objectFit: "cover",
              }}
              src={hair3}
              alt="instagram picture"
            />
          </Grid>
          <Grid
            sx={{
              display: "flex",
              width: "100%",
              height: "auto",
              objectFit: "cover",
            }}
            item
            xs={2}
          >
            <img
              style={{
                display: "flex",
                width: "100%",
                height: "auto",
                objectFit: "cover",
              }}
              src={pic}
              alt="instagram picture"
            />
          </Grid>
          <Grid item xs={2}>
            <img
              style={{
                display: "flex",
                width: "100%",
                height: "auto",
                objectFit: "cover",
              }}
              src={hair4}
              alt="instagram picture"
            />
          </Grid>
          <Grid item xs={2}>
            <img
              style={{
                display: "flex",
                width: "100%",
                height: "auto",
                objectFit: "cover",
              }}
              src={hair5}
              alt="instagram picture"
            />
          </Grid>
        </Grid>

        <Grid container spacing={4} justifyContent="space-evenly">
          {footers.map((footer) => (
            <Grid item xs={6} sm={3} key={footer.title}>
              <Typography variant="h6" color="text.primary" gutterBottom>
                {footer.title}
              </Typography>
              <ul>
                {footer.description.map((item) => (
                  <li key={item.title}>{item}</li>
                ))}
              </ul>
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  )
}

export default App
