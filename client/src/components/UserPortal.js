import React, { useContext, useState } from "react"
import { useNavigate } from "react-router-dom"
import Button from "@mui/material/Button"
import { UserContext } from "../UserContext"
import UserApptCard from "./UserApptCard"
import UploadPicsForm from "./forms/UploadPicsForm"
import DateTimePicker from "@mui/lab/DateTimePicker"
import TextField from "@mui/material/TextField"

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
  const [clicked, setClicked] = useState(false)
  const { currentUser } = useContext(UserContext)
  const toggleClicked = () => setClicked(!clicked)
  let navigate = useNavigate()
  const [appointments, setAppointments] = useState(currentUser.appointments)
  const userApptCards = appointments?.map((appt) => (
    <UserApptCard key={appt.id} time={appt.time} duration={appt.duration} />
  ))

  function handleClick(e) {
    toggleClicked()
  }

  function datePick(newDateValue) {
    setDateValue(newDateValue)
    const formattedDate = format(newDateValue, "EEEE, MMM d yyyy 'at' h:mmaaa")
    // setTime(formattedDate.toString())
  }
  function filterWeekends(date) {
    return date.getDay() === 0
  }
  return (
    <div>
      UserPortal
      <div>New Guest Form</div>
      <div>Policies</div>
      <Button onClick={() => navigate("/newguest")}>
        Request an Appointment
      </Button>
      <Button onClick={handleClick}>Upload Pics</Button>
      {!clicked ? null : <UploadPicsForm />}
      <Button onClick={() => console.log("clicked")}>Leave Deposit</Button>
      {userApptCards}
      {/* <ThemeProvider theme={THEME}> */}
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
      {/* </ThemeProvider> */}
    </div>
  )
}

export default UserPortal
