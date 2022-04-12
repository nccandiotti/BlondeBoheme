import React, { useContext, useState } from "react"
import { useNavigate } from "react-router-dom"
import Button from "@mui/material/Button"
import { UserContext } from "../UserContext"
import UserApptCard from "./UserApptCard"
import UploadPicsForm from "./forms/UploadPicsForm"
import DateTimePicker from "@mui/lab/DateTimePicker"
import TextField from "@mui/material/TextField"

import CssBaseline from "@mui/material/CssBaseline"

import Modal from "@mui/material/Modal"

import Typography from "@mui/material/Typography"
import Container from "@mui/material/Container"
import Alert from "@mui/material/Alert"
import InputLabel from "@mui/material/InputLabel"
import MenuItem from "@mui/material/MenuItem"
import FormHelperText from "@mui/material/FormHelperText"
import FormControl from "@mui/material/FormControl"
import Select from "@mui/material/Select"
import { format } from "date-fns"
import Box from "@mui/material/Box"
import Grid from "@mui/material/Grid"
import { createTheme, ThemeProvider } from "@mui/material/styles"

const calendarTheme = createTheme({
  overrides: {
    Input: {
      color: "white",
    },
    MuiPickersToolbar: {
      toolbar: {
        backgroundColor: "black",
      },
    },
    MuiPickersCalendarHeader: {
      switchHeader: {
        // backgroundColor: lightBlue.A200,
        // color: "white",
      },
    },
    MuiPickersDay: {
      day: {
        color: "black",
      },
      daySelected: {
        backgroundColor: "blue",
      },
      dayDisabled: {
        color: "red",
      },
      current: {
        color: "black",
      },
    },
    MuiPickersModal: {
      dialogAction: {
        color: "black",
      },
    },
  },
})

function UserPortal() {
  const [dateValue, setDateValue] = useState("")

  const { currentUser } = useContext(UserContext)

  const [clicked, setClicked] = useState(false)
  const [firstname, setFirstname] = useState(currentUser.firstname)
  const [lastname, setLastname] = useState(currentUser.lastname)
  const [email, setEmail] = useState(currentUser.email)
  const [phone, setPhone] = useState(currentUser.phone)
  const toggleClicked = () => setClicked(!clicked)
  const [open, setOpen] = useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  let navigate = useNavigate()
  const [appointments, setAppointments] = useState(currentUser.appointments)
  const userApptCards = appointments?.map((appt) => (
    <UserApptCard key={appt.id} time={appt.time} duration={appt.duration} />
  ))

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

  function datePick(newDateValue) {
    setDateValue(newDateValue)
    const formattedDate = format(newDateValue, "EEEE, MMM d yyyy 'at' h:mmaaa")
    // setTime(formattedDate.toString())
  }
  function filterWeekends(date) {
    return date.getDay() === 0
  }

  console.log(currentUser)
  return (
    <div>
      UserPortal
      <div>New Guest Form</div>
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
                      fullWidth
                      id="firstName"
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
                  onChange={handleSubmit}
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
        {/* </ThemeProvider> */}
      </Modal>
      <Button onClick={() => navigate("/newguest")}>
        Request an Appointment
      </Button>
      <Button onClick={handleClick}>Upload Pics</Button>
      {!clicked ? null : <UploadPicsForm />}
      <Button
        onClick={() =>
          window.open("https://buy.stripe.com/test_fZe7sKfho7Vhe9G8ww")
        }
      >
        Leave Deposit
      </Button>
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
        renderInput={(props) => <TextField {...props} />}
        value={dateValue}
        onChange={(newDateValue) => {
          datePick(newDateValue)
        }}
      />
    </div>
  )
}

export default UserPortal
