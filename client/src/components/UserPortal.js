import React, { useContext, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import Button from "@mui/material/Button"
import { UserContext } from "../UserContext"
import UserApptCard from "./UserApptCard"
import UploadPicsForm from "./forms/UploadPicsForm"
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
import NewGuestConsultation from "./forms/NewGuestConsultation"

const steps = [
  "Complete Consultation Paperwork",
  "Upload Inspiration Pictures",
  "Leave Deposit",
  "Select Date",
]

function UserPortal({ appointmentsArray }) {
  const [dateValue, setDateValue] = useState("")
  const [time, setTime] = useState("")
  const { currentUser } = useContext(UserContext)
  const [activeStep, setActiveStep] = useState(0)
  const [completed, setCompleted] = useState({})
  const [clicked, setClicked] = useState(false)
  const [firstname, setFirstname] = useState(currentUser.firstname)
  const [lastname, setLastname] = useState(currentUser.lastname)
  const [email, setEmail] = useState(currentUser.email)
  const [phone, setPhone] = useState(currentUser.phone)
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
  const userApptCards = appointments?.map((appt) => (
    <UserApptCard key={appt.id} time={appt.time} duration={appt.duration} />
  ))

  function handleClick(e) {
    toggleClicked()
  }
  function handleUpdateInfo(e) {
    e.preventDefault()
    fetch(`/users/${currentUser.id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        firstname: firstname,
        lastname: lastname,
        email: email,
        phone: phone,
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
    // .then((r) => r.json())
    // .then(setDateValue(null))
  }

  return (
    <>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Button onClick={handleOpen}>Update Contact Information</Button>
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
              <Typography component="h1" variant="h5">
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
                        value={firstname}
                        onChange={(e) => setFirstname(e.target.value)}
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
                        value={lastname}
                        onChange={(e) => setLastname(e.target.value)}
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        name="email"
                        fullWidth
                        id="email"
                        label="Email"
                        autoFocus
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        name="phone"
                        fullWidth
                        id="phone"
                        label="Phone Number"
                        autoFocus
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                      />
                    </Grid>
                  </Grid>

                  <Button
                    type="submit"
                    onChange={handleUpdateInfo}
                    fullWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 2 }}
                  >
                    Submit
                  </Button>
                  <Button
                    type="onClick"
                    onChange={() => handleClose()}
                    fullWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 2 }}
                  >
                    cancel
                  </Button>
                  <Grid container justifyContent="flex-end"></Grid>
                </Box>
              </FormControl>
            </Box>
          </Container>
        </Modal>
      </div>
      <div>
        <Box sx={{ width: "100%" }}>
          <Stepper nonLinear activeStep={activeStep}>
            {steps.map((label, index) => (
              <Step key={label} completed={completed[index]}>
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
                      <Button onClick={handleConsultOpen}>
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
                    <Button onClick={handleClick}>Upload Pics</Button>

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
                      <Button onClick={handleApptOpen}>Select A Date</Button>
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
                                  sx={{ mt: 3, mb: 2 }}
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
                    sx={{ mr: 1 }}
                  >
                    Back
                  </Button>
                  <Box sx={{ flex: "1 1 auto" }} />
                  <Button onClick={handleNext} sx={{ mr: 1 }}>
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
                      <Button onClick={handleComplete}>
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
      </div>
    </>
  )
}

export default UserPortal
