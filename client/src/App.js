import { Route, Routes } from "react-router-dom"
import { useState, useEffect } from "react"
import { UserContext } from "./UserContext"
import "./App.css"
import SignIn from "./components/SignIn"
import SignUp from "./SignUp"
import UserHome from "./components/UserHome"
import NavBar from "./NavBar"
import Container from "@mui/material/Container"

// import MessengerFeed from "./components/MessengerFeed"
import Education from "./components/Education"
import Services from "./components/Services"
import Policies from "./components/Policies"
import AboutSuzie from "./components/AboutSuzie"
import Typography from "@mui/material/Typography"
import Box from "@mui/material/Box"
import Grid from "@mui/material/Grid"
import Link from "@mui/material/Link"
// import { ChatEngine } from "react-chat-engine"
import useMediaQuery from "@material-ui/core/useMediaQuery"
// import { Client, Environment } from "square"
import useScript from "./organization/importScript"

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

const appId = process.env.REACT_APP_SQUARE_APP_ID
const locationId = process.env.REACT_APP_SQUARE_LOCATION_ID
// const payments = Square.payments(appId, locationId)
function App() {
  const [currentUser, setCurrentUser] = useState({})
  const ourMediaQuery = useMediaQuery("(min-width:400px)")

  useEffect(() => {
    fetch("/me")
      .then((res) => res.json())
      .then(setCurrentUser)
  }, [])

  useScript("https://use.typekit.net/foobar.js")

  async function CardPay(fieldEl, buttonEl) {
    // Create a card payment object and attach to page
    const card = await window.payments.card({
      style: {
        ".input-container.is-focus": {
          borderColor: "#006AFF",
        },
        ".message-text.is-error": {
          color: "#BF0020",
        },
      },
    })
    await card.attach(fieldEl)

    async function eventHandler(event) {
      // Clear any existing messages
      window.paymentFlowMessageEl.innerText = ""

      try {
        const result = await card.tokenize()
        if (result.status === "OK") {
          // Use global method from sq-payment-flow.js
          window.createPayment(result.token)
        }
      } catch (e) {
        if (e.message) {
          window.showError(`Error: ${e.message}`)
        } else {
          window.showError("Something went wrong")
        }
      }
    }

    buttonEl.addEventListener("click", eventHandler)
  }

  return (
    <div className="App" style={{ ourMediaQuery }}>
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
        </Box>
        <NavBar />
        {/* 
        <form class="payment-form" id="fast-checkout">
          <div class="wrapper">
            <div id="apple-pay-button" alt="apple-pay" type="button"></div>
            <div id="google-pay-button" alt="google-pay" type="button"></div>
            <div class="border">
              <span>OR</span>
            </div>
            <div id="ach-wrapper">
              <label for="ach-account-holder-name">Full Name</label>
              <input
                id="ach-account-holder-name"
                type="text"
                placeholder="Jane Doe"
                name="ach-account-holder-name"
                autocomplete="name"
              />
              <span id="ach-message"></span>
              <button id="ach-button" type="button">
                Pay with Bank Account
              </button>
            </div>
            <div class="border">
              <span>OR</span>
            </div>
            <div id="card-container"></div>
            <button id="card-button" type="button">
              Pay with Card
            </button>
            <span id="payment-flow-message"></span>
          </div>
        </form>
        <form id="payment-form">
          <div id="card-container"></div>

          <button id="card-button" type="button">
            Pay
          </button>
        </form>
        <div id="payment-status-container"></div> */}
        {/* <AboutSuzie /> */}
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

      {/* <Container
        maxWidth="md"
        component="footer"
        sx={{
          borderTop: (theme) => `1px solid ${theme.palette.divider}`,
          mt: 8,
          py: [3, 6],
        }}
      >
        <Grid container spacing={4} justifyContent="space-evenly">
          {footers.map((footer) => (
            <Grid item xs={6} sm={3} key={footer.title}>
              <Typography variant="h6" color="text.primary" gutterBottom>
                {footer.title}
              </Typography>
              <ul>
                {footer.description.map((item) => (
                  <li key={item.title}>
                    <Link href="#" variant="subtitle1" color="text.secondary">
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </Grid>
          ))}
        </Grid>
      </Container> */}
    </div>
  )
}

export default App
