import { useState, useContext } from "react"
import { UserContext } from "../../UserContext"
import { format } from "date-fns"
import Button from "@mui/material/Button"
import CssBaseline from "@mui/material/CssBaseline"
import TextField from "@mui/material/TextField"
import FormControl from "@mui/material/FormControl"
import Grid from "@mui/material/Grid"
import DateTimePicker from "@mui/lab/DateTimePicker"
import Box from "@mui/material/Box"
import Typography from "@mui/material/Typography"
import Container from "@mui/material/Container"

function Calendar({ handleApptPatch, time, setTime, selectedApptTime }) {
  const { currentUser } = useContext(UserContext)
  const [dateValue, setDateValue] = useState("")
  function datePick(newDateValue) {
    setDateValue(newDateValue)
    const formattedDate = format(newDateValue, "EEEE, MMM d yyyy 'at' h:mmaaa")
    setTime(formattedDate.toString())
  }
  function filterWeekends(date) {
    return date.getDay() === 0
  }
  return (
    <>
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
          <Typography sx={{ fontFamily: "Sacramento" }} variant="h1">
            Schedule
          </Typography>

          <FormControl>
            <Box
              component="form"
              noValidate
              onSubmit={handleApptPatch}
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
                    renderInput={(props) => <TextField {...props} />}
                    value={dateValue}
                    placeholder={
                      currentUser.admin ? { selectedApptTime } : new Date()
                    }
                    onChange={(newDateValue) => {
                      datePick(newDateValue)
                    }}
                  />
                </Grid>

                <Grid item xs={6} sm={6}>
                  <Button>10:00</Button>
                  <Button>11:00</Button> <Button>12:00</Button>{" "}
                  <Button>1:00</Button> <Button>2:00</Button>{" "}
                  <Button>3:00</Button> <Button>4:00</Button>{" "}
                </Grid>
              </Grid>

              <Button
                type="submit"
                onChange={handleApptPatch}
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

              <Grid container justifyContent="flex-end"></Grid>
            </Box>
          </FormControl>
        </Box>
      </Container>
    </>
  )
}

export default Calendar
