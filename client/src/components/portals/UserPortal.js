import React, { useContext, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import Button from "@mui/material/Button"
import { UserContext } from "../../UserContext"

import UploadPicsForm from "../forms/UploadPicsForm"
import DateTimePicker from "@mui/lab/DateTimePicker"
import TextField from "@mui/material/TextField"
import CssBaseline from "@mui/material/CssBaseline"
import Modal from "@mui/material/Modal"
import Box from "@mui/material/Box"
import Typography from "@mui/material/Typography"
import Container from "@mui/material/Container"
import FormControl from "@mui/material/FormControl"
import Grid from "@mui/material/Grid"
import { format } from "date-fns"
import Stepper from "@mui/material/Stepper"
import Step from "@mui/material/Step"
import StepButton from "@mui/material/StepButton"
import NewGuestConsultation from "../forms/NewGuestConsultation"
import ExpandMoreIcon from "@mui/icons-material/ExpandMore"
import sun from "../../assets/sun.png"

const steps = [
  "Complete Consultation Paperwork",
  "Upload Inspiration Pictures",
  "Leave Deposit",
  "Select Date",
]

function UserPortal({ appointmentsArray }) {
  const { currentUser } = useContext(UserContext)
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
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)
  const handleFormOpen = () => setFormOpen(true)
  const handleFormClose = () => setOpen(false)
  const handleApptClose = () => setApptOpen(false)
  const handleApptOpen = () => setApptOpen(true)
  const handleConsultOpen = () => setConsultOpen(true)
  const handleConsultClose = () => setConsultOpen(false)
  const { id } = useParams()
  console.log(currentUser.firstname)
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
        ? // It's the last step, but not all steps have been completed,
          // find the first step that has been completed
          steps.findIndex((step, i) => !(i in completed))
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

  let navigate = useNavigate()
  const [appointments, setAppointments] = useState(currentUser.appointments)

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

    const doesApptExist = appointmentsArray.filter(
      (appt) => appt.time === { time }
    )

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
      } else alert("no dice")
    })
  }

  return (
    <>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div style={{ backgroundColor: "#b5b8a3", borderRadius: "10px" }}>
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

              <Grid container spacing={1}>
                {currentUser?.user_images?.length > 0 ? (
                  <>
                    <Grid sx={{ marginBottom: "20px" }} item xs={12}>
                      <Typography variant="h4">My Pictures</Typography>
                    </Grid>
                    <div style={{ height: "50px" }}></div>
                    <Grid item xs={2}>
                      <img
                        style={{
                          height: "100px",
                          width: "100px",
                          borderRadius: "100px",
                        }}
                        src={currentUser.user_images[0]?.picture.url}
                        alt="picture"
                      />{" "}
                    </Grid>
                    <Grid item xs={2}>
                      <img
                        style={{
                          height: "100px",
                          width: "100px",
                          borderRadius: "100px",
                        }}
                        src={
                          currentUser.user_images[1]?.picture.url
                            ? currentUser.user_images[1]?.picture.url
                            : { sun }
                        }
                        alt="picture"
                      />
                    </Grid>
                    <Grid item xs={2}>
                      <img
                        style={{
                          height: "100px",
                          width: "100px",
                          borderRadius: "100px",
                        }}
                        src={currentUser.user_images[2]?.picture.url}
                        alt="picture"
                      />
                    </Grid>
                    <Grid item xs={2}>
                      <img
                        style={{
                          height: "100px",
                          width: "100px",
                          borderRadius: "100px",
                        }}
                        src={currentUser.user_images[3]?.picture.url}
                        alt="picture"
                      />
                    </Grid>
                    <Grid item xs={2}>
                      <img
                        style={{
                          height: "100px",
                          width: "100px",
                          borderRadius: "100px",
                        }}
                        src={currentUser.user_images[4]?.picture.url}
                        alt="picture"
                      />
                    </Grid>{" "}
                    <Grid container spacing={1}>
                      <Grid item xs={12}>
                        Inspo Pics
                      </Grid>
                      <Grid item xs={4}>
                        Img
                      </Grid>
                      <Grid item xs={4}>
                        Img
                      </Grid>
                      <Grid item xs={4}>
                        Img
                      </Grid>
                    </Grid>
                  </>
                ) : (
                  <Grid item xs={12}>
                    {" "}
                    <Typography sx={{ fontFamily: "Montserrat" }} variant="h6">
                      Complete consult form and upload your pictures!
                    </Typography>{" "}
                  </Grid>
                )}
              </Grid>
            </Box>
          </Container>
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
                      <Button
                        sx={{ color: "#b26446" }}
                        onClick={handleConsultOpen}
                      >
                        Complete Consultation Form
                      </Button>
                      <Modal
                        open={consultOpen}
                        onClose={handleConsultClose}
                        aria-labelledby="modal-modal-title"
                        aria-describedby="modal-modal-description"
                      >
                        <NewGuestConsultation />
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
                    <Button sx={{ color: "#b26446" }} onClick={handleClick}>
                      Upload Pics
                    </Button>

                    {!clicked ? null : <UploadPicsForm />}
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
                            <Typography component="h1" variant="h5">
                              Schedule
                            </Typography>

                            <FormControl>
                              <Box
                                component="form"
                                noValidate
                                onSubmit={handleBookAppointment}
                                sx={{ mt: 3 }}
                              >
                                <Grid container spacing={2}>
                                  <Grid item xs={6} sm={6}>
                                    <DateTimePicker
                                      sx={{
                                        button: {
                                          color: "white",
                                        },
                                      }}
                                      minutesStep="0"
                                      shouldDisableDate={filterWeekends}
                                      minTime={new Date(0, 0, 0, 10)}
                                      maxTime={new Date(0, 0, 0, 14)}
                                      maxDate={new Date("2022-12-31")}
                                      minDate={new Date()}
                                      renderInput={(props) => (
                                        <TextField {...props} />
                                      )}
                                      value={dateValue}
                                      onChange={(newDateValue) => {
                                        datePick(newDateValue)
                                      }}
                                    />
                                  </Grid>

                                  <Grid item xs={6} sm={6}>
                                    <Button>10:00</Button>
                                    <Button>11:00</Button>{" "}
                                    <Button>12:00</Button> <Button>1:00</Button>{" "}
                                    <Button>2:00</Button> <Button>3:00</Button>{" "}
                                    <Button>4:00</Button>{" "}
                                  </Grid>
                                </Grid>

                                <Button
                                  type="submit"
                                  onChange={handleBookAppointment}
                                  fullWidth
                                  variant="contained"
                                  sx={{
                                    mt: 3,
                                    mb: 2,
                                    backgroundColor: "#b26446",
                                  }}
                                >
                                  Submit
                                </Button>

                                <Grid
                                  container
                                  justifyContent="flex-end"
                                ></Grid>
                              </Box>
                            </FormControl>
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
            <Typography sx={{ fontFamily: "Montserrat" }} variant="h5">
              View My Consults <ExpandMoreIcon />
            </Typography>
          </div>
        </div>
      </div>
    </>
  )
}

export default UserPortal
