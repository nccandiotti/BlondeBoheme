import React, { useContext, useState } from "react"
import Calendar from "./Calendar"
import Button from "@mui/material/Button"
import { UserContext } from "../../UserContext"
import EditUserProfile from "./EditUserProfile"
import UploadPicsForm from "../forms/UploadPicsForm"
import CssBaseline from "@mui/material/CssBaseline"
import Modal from "@mui/material/Modal"
import Box from "@mui/material/Box"
import Typography from "@mui/material/Typography"
import Container from "@mui/material/Container"
import Grid from "@mui/material/Grid"
import { format } from "date-fns"
import Stepper from "@mui/material/Stepper"
import Step from "@mui/material/Step"
import StepButton from "@mui/material/StepButton"
import NewGuestConsultation from "../forms/NewGuestConsultation"
import ExpandMoreIcon from "@mui/icons-material/ExpandMore"
import sun from "../../assets/sun.png"
import bohoart4 from "../../assets/bohoart4.png"
import bohoart2 from "../../assets/bohoart2.png"
import mcm1 from "../../assets/mcm1.png"
import flower from "../../assets/flower1.png"

const steps = [
  "Complete Consultation Paperwork",
  "Upload Inspiration Pictures",
  "Leave Deposit",
  "Select Date",
]

function UserPortal() {
  const { currentUser } = useContext(UserContext)
  const [firstname, setFirstname] = useState(currentUser.firstname)
  const [lastname, setLastname] = useState(currentUser.lastname)
  const [email, setEmail] = useState(currentUser.email)
  const [phone, setPhone] = useState(currentUser.phone)
  const [dateValue, setDateValue] = useState("")
  const [time, setTime] = useState("")
  const [activeStep, setActiveStep] = useState(0)
  const [completed, setCompleted] = useState({})
  const [clicked, setClicked] = useState(false)
  const [userFirstname, setUserFirstname] = useState(currentUser.firstname)
  const [userLastname, setUserLastname] = useState(currentUser.lastname)
  const [userEmail, setUserEmail] = useState(currentUser.email)
  const [userPhone, setUserPhone] = useState(currentUser.phone)
  const toggleClicked = () => setClicked(!clicked)
  const [open, setOpen] = useState(false)
  const [formOpen, setFormOpen] = useState(false)
  const [apptOpen, setApptOpen] = useState(false)
  const [consultOpen, setConsultOpen] = useState(false)
  const [showUploads, setShowUploads] = useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)
  const handleFormOpen = () => setFormOpen(true)
  const handleFormClose = () => setOpen(false)
  const handleApptClose = () => setApptOpen(false)
  const handleApptOpen = () => setApptOpen(true)
  const handleConsultOpen = () => setConsultOpen(true)
  const handleConsultClose = () => setConsultOpen(false)
  const handleShowUploads = () => setShowUploads(!showUploads)
  const [picone, setPicone] = useState(bohoart4)
  const [pictwo, setPictwo] = useState(sun)
  const [picthree, setPicthree] = useState(bohoart2)
  const [picfour, setPicfour] = useState(mcm1)
  const [picfive, setPicfive] = useState(flower)
  const [picsix, setPicsix] = useState(mcm1)
  const [picseven, setPicseven] = useState(sun)

  const totalSteps = () => {
    return steps.length
  }

  const completedSteps = () => {
    return Object.keys(completed).length
  }

  const isLastStep = () => {
    return activeStep === totalSteps() - 1
  }

  const allStepsCompleted = () => {
    return completedSteps() === totalSteps()
  }

  const handleNext = () => {
    const newActiveStep =
      isLastStep() && !allStepsCompleted()
        ? steps.findIndex((step, i) => !(i in completed))
        : activeStep + 1
    setActiveStep(newActiveStep)
  }

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1)
  }

  const handleStep = (step) => () => {
    setActiveStep(step)
  }

  const handleComplete = () => {
    const newCompleted = completed
    newCompleted[activeStep] = true
    setCompleted(newCompleted)
    handleNext()
  }

  const handleReset = () => {
    setActiveStep(0)
    setCompleted({})
  }

  function handleClick(e) {
    toggleClicked()
  }
  function handleUpdateInfo(e) {
    e.preventDefault()
    fetch(`/users/${currentUser.id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        firstname: userFirstname,
        lastname: userLastname,
        email: userEmail,
        phone: userPhone,
      }),
    }).then((r) => r.json)

    handleClose()
  }

  function datePick(newDateValue) {
    setDateValue(newDateValue)
    const formattedDate = format(newDateValue, "EEEE, MMM d yyyy 'at' h:mmaaa")
    setTime(formattedDate.toString())
  }
  function filterWeekends(date) {
    return date.getDay() === 0
  }

  function handleBookAppointment(e) {
    e.preventDefault()

    fetch("/appointments", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        user_id: `${currentUser.id}`,
        time: time,
        duration: "1 hour",
        salon_id: 2,
      }),
    }).then((r) => {
      if (r.ok) {
        r.json().then(setDateValue(null))
        handleApptClose()
      } else
        alert("This day/time is not available, please select another time.")
    })
  }

  return (
    <>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div
          style={{
            backgroundColor: "#b5b8a3",
            borderRadius: "10px",
            marginBottom: "20px",
          }}
        >
          <Button
            sx={{
              color: "white",
              backgroundColor: "#b5b8a3",
              borderRadius: "10px",
            }}
            onClick={handleOpen}
          >
            Update Contact Information
          </Button>
        </div>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <EditUserProfile
            key={currentUser.username}
            firstname={firstname}
            setFirstname={setFirstname}
            lastname={lastname}
            setLastname={setLastname}
            phone={phone}
            setPhone={setPhone}
            email={email}
            setEmail={setEmail}
            handleClose={handleClose}
          />
          {/* <Container component="main" maxWidth="s">
            <CssBaseline />
            <Box
              sx={{
                marginTop: 8,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                backgroundColor: "rgba(255, 255, 255)",
                padding: "40px",
                borderRadius: "20px",
              }}
            >
              <Typography
                sx={{ fontFamily: "Sacramento", color: " #807b67" }}
                // component="h1"
                variant="h2"
              >
                My Profile Details
              </Typography>

              <FormControl>
                <Box
                  component="form"
                  noValidate
                  onSubmit={handleUpdateInfo}
                  sx={{ mt: 3 }}
                >
                  <Grid container spacing={2}>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        autoComplete="given-name"
                        name="firstName"
                        fullWidth
                        id="firstName"
                        label="First Name"
                        autoFocus
                        value={currentUser.firstname}
                        onChange={(e) => setUserFirstname(e.target.value)}
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        autoComplete="last-name"
                        name="lastname"
                        fullWidth
                        id="lastname"
                        label="Last Name"
                        autoFocus
                        value={currentUser.lastname}
                        onChange={(e) => setUserLastname(e.target.value)}
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        name="email"
                        fullWidth
                        id="email"
                        label="Email"
                        autoFocus
                        value={currentUser.email}
                        onChange={(e) => setUserEmail(e.target.value)}
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        name="phone"
                        fullWidth
                        id="phone"
                        label="Phone Number"
                        autoFocus
                        value={currentUser.phone}
                        onChange={(e) => setUserPhone(e.target.value)}
                      />
                    </Grid>
                  </Grid>

                  <Button
                    type="submit"
                    onChange={handleUpdateInfo}
                    fullWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 2, backgroundColor: "#b26446 " }}
                  >
                    Submit
                  </Button>
                  <Button
                    type="onClick"
                    onChange={() => handleClose()}
                    fullWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 2, backgroundColor: "#b26446 " }}
                  >
                    cancel
                  </Button>
                  <Grid container justifyContent="flex-end"></Grid>
                </Box>
              </FormControl>
            </Box>
          </Container> */}
        </Modal>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        <Box
          sx={{
            padding: "20px",
            width: "100%",
            backgroundColor: "white",
            borderRadius: "20px",
            width: "95%",
            alignItems: "center",
            marginLeft: "15px",
          }}
        >
          <Stepper nonLinear activeStep={activeStep}>
            {steps.map((label, index) => (
              <Step sx={{}} key={label} completed={completed[index]}>
                <StepButton color="inherit" onClick={handleStep(index)}>
                  {label}
                </StepButton>
              </Step>
            ))}
          </Stepper>
          <div>
            {allStepsCompleted() ? (
              <>
                <Typography sx={{ mt: 2, mb: 1 }}>
                  All steps completed - you&apos;re finished
                </Typography>
                <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
                  <Box sx={{ flex: "1 1 auto" }} />
                  <Button onClick={handleReset}>Reset</Button>
                </Box>
              </>
            ) : (
              <>
                <div style={{ height: "50px" }}></div>
                {activeStep === 0 ? (
                  <>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      {!currentUser.user_consults ? (
                        <Button sx={{ color: "#b26446" }} disabled>
                          Consultation paperwork completed, thank you!
                        </Button>
                      ) : (
                        <Button
                          sx={{ color: "#b26446" }}
                          onClick={handleConsultOpen}
                        >
                          Complete Consultation Form
                        </Button>
                      )}
                      <Modal
                        open={consultOpen}
                        onClose={handleConsultClose}
                        aria-labelledby="modal-modal-title"
                        aria-describedby="modal-modal-description"
                      >
                        <NewGuestConsultation
                          setPicone={setPicone}
                          setPictwo={setPictwo}
                          setPicthree={setPicthree}
                          setPicfour={setPicfour}
                          setPicfive={setPicfive}
                          setPicsix={setPicsix}
                          handleConsultClose={handleConsultClose}
                        />
                      </Modal>{" "}
                    </div>
                  </>
                ) : null}
                {activeStep === 1 ? (
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    {!currentUser.user_images ? (
                      <Button sx={{ color: "#b26446" }} disabled>
                        Inspation Pics uploaded, thank you!
                      </Button>
                    ) : (
                      <UploadPicsForm handleConsultClose={handleConsultClose} />
                    )}
                  </div>
                ) : null}
                {activeStep === 2 ? (
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Button
                      sx={{ color: "#b26446" }}
                      onClick={() =>
                        window.open(
                          "https://buy.stripe.com/test_fZe7sKfho7Vhe9G8ww"
                        )
                      }
                    >
                      Leave Deposit
                    </Button>
                  </div>
                ) : null}
                {activeStep === 3 ? (
                  <>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <Button
                        sx={{ color: "#b26446" }}
                        onClick={handleApptOpen}
                      >
                        Select A Date
                      </Button>
                      <Modal
                        open={apptOpen}
                        onClose={handleApptClose}
                        aria-labelledby="modal-modal-title"
                        aria-describedby="modal-modal-description"
                      >
                        <Container component="main" maxWidth="s">
                          <CssBaseline />
                          <Box
                            sx={{
                              marginTop: 8,
                              display: "flex",
                              flexDirection: "column",
                              alignItems: "center",
                              backgroundColor: "rgba(255, 255, 255)",
                              padding: "40px",
                              borderRadius: "20px",
                            }}
                          >
                            <Grid container spacing={2}>
                              <Grid item xs={12}>
                                <Calendar
                                  key={currentUser.id}
                                  handleApptPatch={handleBookAppointment}
                                  time={time}
                                  setTime={setTime}
                                />
                              </Grid>
                            </Grid>

                            <Grid container justifyContent="flex-end"></Grid>
                          </Box>
                        </Container>
                      </Modal>{" "}
                    </div>
                  </>
                ) : null}
                <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
                  <Button
                    color="inherit"
                    disabled={activeStep === 0}
                    onClick={handleBack}
                    sx={{ color: "#748067 ", mr: 1 }}
                  >
                    Back
                  </Button>
                  <Box sx={{ flex: "1 1 auto" }} />
                  <Button
                    onClick={handleNext}
                    sx={{ color: "#748067 ", mr: 1 }}
                  >
                    Next
                  </Button>
                  {activeStep !== steps.length &&
                    (completed[activeStep] ? (
                      <Typography
                        variant="caption"
                        sx={{ display: "inline-block" }}
                      >
                        Step {activeStep + 1} already completed
                      </Typography>
                    ) : (
                      <Button
                        sx={{ color: "#748067 " }}
                        onClick={handleComplete}
                      >
                        {completedSteps() === totalSteps() - 1
                          ? "Finish"
                          : "Complete Step"}
                      </Button>
                    ))}
                </Box>
              </>
            )}
          </div>
        </Box>
        <div>
          <div>
            <Typography
              sx={{
                marginTop: "20px",
                marginBottom: "20px",
                fontFamily: "Montserrat",
              }}
              variant="h4"
            >
              View My Uploads <ExpandMoreIcon onClick={handleShowUploads} />
            </Typography>
            {showUploads ? (
              <div>
                {" "}
                <Grid
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-evenly",
                    alignItems: "center",
                  }}
                  container
                  spacing={1}
                >
                  <Grid sx={{ marginBottom: "20px" }} item xs={12}>
                    <Typography sx={{ fontFamily: "Sacramento" }} variant="h3">
                      My Pictures (complete steps one and two to show your
                      current and inspo pictures below!)
                    </Typography>
                  </Grid>
                  <div style={{ height: "50px" }}></div>
                  <Grid item xs={2}>
                    <img
                      style={{
                        height: "250px",
                        width: "200px",

                        borderRadius: "100px",
                        objectFit: "cover",
                      }}
                      src={
                        currentUser.user_consults?.hasOwnProperty(0)
                          ? currentUser.user_consults[0].mugshotone.url
                          : picone
                      }
                      alt="picture"
                    />{" "}
                  </Grid>
                  <Grid item xs={2}>
                    <img
                      style={{
                        height: "250px",
                        width: "200px",

                        borderRadius: "100px",
                        objectFit: "cover",
                      }}
                      src={
                        currentUser.user_consults?.hasOwnProperty(0)
                          ? currentUser.user_consults[0].mugshottwo.url
                          : picone
                      }
                      alt="picture"
                    />{" "}
                  </Grid>
                  <Grid item xs={2}>
                    <img
                      style={{
                        height: "250px",
                        width: "200px",

                        borderRadius: "100px",
                        objectFit: "cover",
                      }}
                      src={
                        currentUser.user_consults?.hasOwnProperty(0)
                          ? currentUser.user_consults[0].mugshotthree.url
                          : picone
                      }
                      alt="picture"
                    />{" "}
                  </Grid>
                  <Grid item xs={2}>
                    <img
                      style={{
                        height: "250px",
                        width: "200px",

                        borderRadius: "100px",
                        objectFit: "cover",
                      }}
                      src={
                        currentUser.user_consults?.hasOwnProperty(0)
                          ? currentUser.user_consults[0].mugshotfour.url
                          : picone
                      }
                      alt="picture"
                    />{" "}
                  </Grid>
                  <Grid item xs={2}>
                    <img
                      style={{
                        height: "250px",
                        width: "200px",

                        borderRadius: "100px",
                        objectFit: "cover",
                      }}
                      src={
                        currentUser.user_consults?.hasOwnProperty(0)
                          ? currentUser.user_consults[0].mugshotfive.url
                          : picone
                      }
                      alt="picture"
                    />{" "}
                  </Grid>{" "}
                  <Grid
                    sx={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "space-evenly",
                      alignItems: "center",
                    }}
                    container
                    spacing={1}
                  >
                    <Grid item xs={12}>
                      <Typography
                        sx={{ fontFamily: "Sacramento" }}
                        variant="h3"
                      >
                        <br />
                        My Inspo Pictures
                      </Typography>
                    </Grid>
                    <Grid item xs={4}>
                      <img
                        style={{
                          height: "250px",
                          width: "200px",

                          borderRadius: "100px",
                          objectFit: "cover",
                        }}
                        src={
                          currentUser.user_images?.hasOwnProperty(0)
                            ? currentUser.user_images[0].picture.url
                            : mcm1
                        }
                        alt="picture"
                      />{" "}
                    </Grid>
                    <Grid item xs={4}>
                      <img
                        style={{
                          height: "250px",
                          width: "200px",

                          borderRadius: "100px",
                          objectFit: "cover",
                        }}
                        src={
                          currentUser.user_images?.hasOwnProperty(0)
                            ? currentUser.user_images[0].picturetwo.url
                            : sun
                        }
                        alt="picture"
                      />{" "}
                    </Grid>
                  </Grid>
                </Grid>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </>
  )
}

export default UserPortal
