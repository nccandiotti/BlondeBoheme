import { useState, useContext } from "react"
import { useNavigate } from "react-router-dom"
import Button from "@mui/material/Button"
import CssBaseline from "@mui/material/CssBaseline"
import TextField from "@mui/material/TextField"
import FormControlLabel from "@mui/material/FormControlLabel"
import FormControl from "@mui/material/FormControl"
import Checkbox from "@mui/material/Checkbox"
import Link from "@mui/material/Link"
import Grid from "@mui/material/Grid"
import Box from "@mui/material/Box"
import Radio from "@mui/material/Radio"
import RadioGroup from "@mui/material/RadioGroup"
import FormLabel from "@mui/material/FormLabel"

import Typography from "@mui/material/Typography"
import Container from "@mui/material/Container"

import { UserContext } from "../../UserContext"

function StudentLessonForm() {
  let navigate = useNavigate()
  const { currentUser } = useContext(UserContext)
  const { setCurrentUser } = useContext(UserContext)

  const [firstname, setFirstName] = useState("")
  const [lastname, setLastName] = useState("")
  const [phone, setPhone] = useState("")
  const [email, setEmail] = useState("")
  const [technique, setTechnique] = useState("")
  const [travel, setTravel] = useState("")
  const [lessonType, setLessonType] = useState("")

  function handleSubmit(e) {
    e.preventDefault()
    fetch("/student_inquiries", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        firstname: firstname,
        lastname: lastname,
        email: email,
        phone: phone,
        travel: travel,
        technique: technique,
        lessonType: lessonType,
        salon_id: 2,
        user_id: currentUser.id,
      }),
    }).then((r) => {
      if (r.ok) {
        r.json()
        // r.json().then((currentUser) => setCurrentUser(currentUser))
        // setFirstName = ""
        // navigate("/login")
        setFirstName("")
        setLastName("")
        setEmail("")
        setPhone("")
      } else alert("Error")
    })
  }

  function handleTechnique(e) {
    e.preventDefault()
    setTechnique(e.target.value)
  }

  function handleTravel(e) {
    e.preventDefault()
    setTravel(e.target.value)
  }
  function handleType(e) {
    e.preventDefault()
    setLessonType(e.target.value)
  }
  console.log(lessonType)

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
            backgroundColor: "rgba(255, 255, 255, 0.3)",
            padding: "40px",
            borderRadius: "20px",
          }}
        >
          <Typography component="h1" variant="h5">
            Student Education Inquiry
          </Typography>
          {/* <form> */}
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
                    onChange={(e) => setFirstName(e.target.value)}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    fullWidth
                    id="lastName"
                    label="Last Name"
                    name="lastName"
                    autoComplete="family-name"
                    value={lastname}
                    onChange={(e) => setLastName(e.target.value)}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    autoComplete="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </Grid>

                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    name="phone"
                    label="phone"
                    type="phone"
                    id="phone"
                    autoComplete="phone"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                  />
                </Grid>
              </Grid>
              <FormLabel id="which-technique">
                {" "}
                Which signature technique are you interested in learning?
              </FormLabel>

              <RadioGroup name="radio-buttons-group">
                <FormControlLabel
                  value="balayage"
                  onChange={handleTechnique}
                  control={<Radio />}
                  label="No Brainer Balayage"
                />
                <FormControlLabel
                  value="remastered"
                  onChange={handleTechnique}
                  control={<Radio />}
                  label="No Brainer Balayage *Remastered*"
                />
                <FormControlLabel
                  value="worx"
                  onChange={handleTechnique}
                  control={<Radio />}
                  label="The Worx"
                />
                <FormControlLabel
                  value="mohawk"
                  onChange={handleTechnique}
                  control={<Radio />}
                  label="Modern Mohawk"
                />
                <FormControlLabel
                  value="other"
                  onChange={handleTechnique}
                  control={<Radio />}
                  label="I'm not sure, what do you recommend?"
                />
              </RadioGroup>
              <FormLabel id="size">Lesson Type</FormLabel>

              <RadioGroup name="radio-buttons-group">
                <FormControlLabel
                  value="private"
                  onChange={handleType}
                  control={<Radio />}
                  label="I'd like a public lesson (**only available locally)"
                />
                <FormControlLabel
                  value="group"
                  onChange={handleType}
                  control={<Radio />}
                  label="I'm interested in a group class"
                />
              </RadioGroup>
              <FormLabel id="which-technique"> Local, or Travel?</FormLabel>

              <RadioGroup name="radio-buttons-group">
                <FormControlLabel
                  value="local"
                  onChange={handleTravel}
                  control={<Radio />}
                  label="I will come to your suite (Rochester, New York"
                />
                <FormControlLabel
                  value="travel"
                  onChange={handleTravel}
                  control={<Radio />}
                  label="I'd like you to travel to me (elsewhere)"
                />
              </RadioGroup>
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
          {/* </form> */}
        </Box>
        {/* <Copyright sx={{ mt: 5 }} /> */}
      </Container>
    </>
  )
}

export default StudentLessonForm
