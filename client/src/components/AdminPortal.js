import React, { useState, useContext, useEffect } from "react"
import { Link, useNavigate } from "react-router-dom"
import { UserContext } from "../UserContext"
import StudentInquiryCard from "./StudentInquiryCard"
import AppointmentCardsAdmin from "./AppointmentCardsAdmin"
import { create } from "@mui/material/styles/createTransitions"

import Button from "@mui/material/Button"
import CssBaseline from "@mui/material/CssBaseline"
import TextField from "@mui/material/TextField"
import FormControlLabel from "@mui/material/FormControlLabel"
import FormControl from "@mui/material/FormControl"
import Checkbox from "@mui/material/Checkbox"

import Grid from "@mui/material/Grid"
import Box from "@mui/material/Box"
import Radio from "@mui/material/Radio"
import RadioGroup from "@mui/material/RadioGroup"
import FormLabel from "@mui/material/FormLabel"
import Modal from "@mui/material/Modal"

import Typography from "@mui/material/Typography"
import Container from "@mui/material/Container"

function AdminPortal() {
  let navigate = useNavigate()
  const { currentUser } = useContext(UserContext)
  const [clicked, setClicked] = useState(false)
  const [firstname, setFirstname] = useState(currentUser.firstname)
  const [lastname, setLastname] = useState(currentUser.lastname)
  const [email, setEmail] = useState(currentUser.email)
  const [phone, setPhone] = useState(currentUser.phone)

  const [salon, setSalon] = useState([])
  const [studentInq, setStudentInq] = useState([])
  const studentInquiries = salon.student_inquiries
  const appointments = salon.appointments
  console.log(appointments)

  useEffect(() => {
    fetch("./salons")
      .then((r) => r.json())

      .then((data) => setSalon(data[0]))
  }, [])

  const createStudentInquiriesCard = studentInquiries?.map((inq) => (
    <StudentInquiryCard
      key={inq.id}
      firstname={inq.firstname}
      lastname={inq.lastname}
      lessonType={inq.lessonType}
      phone={inq.phone}
      travel={inq.travel}
    />
  ))
  const createAppointmentsCardAdmin = appointments?.map((appt) => (
    <AppointmentCardsAdmin
      key={appt.id}
      firstname={appt.firstname}
      lastname={appt.lastname}
      time={appt.time}
      duration={appt.duration}
      deposit={appt.deposit_received}
    />
  ))

  const toggleClicked = () => setClicked((prevstate) => !prevstate)
  function handleClick(e) {
    toggleClicked()
  }

  function handleSubmit(e) {
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

  const [open, setOpen] = useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  }

  return (
    <div>
      <Button onClick={handleOpen}>Edit Profile</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        {/* <ThemeProvider theme={theme}> */}
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
                onSubmit={handleSubmit}
                sx={{ mt: 3 }}
              >
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      autoComplete="given-name"
                      name="firstName"
                      required
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
                      autoComplete="given-name"
                      name="firstName"
                      required
                      fullWidth
                      id="firstName"
                      label="First Name"
                      autoFocus
                      value={lastname}
                      onChange={(e) => setLastname(e.target.value)}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      autoComplete="given-name"
                      name="firstName"
                      required
                      fullWidth
                      id="firstName"
                      label="First Name"
                      autoFocus
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      autoComplete="given-name"
                      name="firstName"
                      required
                      fullWidth
                      id="firstName"
                      label="First Name"
                      autoFocus
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                    />
                  </Grid>
                </Grid>

                <Button
                  type="submit"
                  onChange={handleSubmit}
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                >
                  Submit
                </Button>
                <Grid container justifyContent="flex-end"></Grid>
              </Box>
            </FormControl>
          </Box>
        </Container>
        {/* </ThemeProvider> */}
      </Modal>

      <h1>Admin portal</h1>
      {/* <button onClick={handleClick}> Edit My Profile </button>
      {clicked ? (
        <form onSubmit={handleSubmit}>
          <label>Edit firstname</label>
          <input
            value={firstname}
            onChange={(e) => setFirstname(e.target.value)}
          ></input>
          <button onClick={handleSubmit}>Update</button>
        </form>
      ) : null} */}
      <div>
        <h1>Education Inquiries</h1>
        {createStudentInquiriesCard}
      </div>
      <div>
        <h1> New Guest Inquiries</h1>
        {createAppointmentsCardAdmin}
      </div>
    </div>
  )
}

export default AdminPortal
