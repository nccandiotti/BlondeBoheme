import { useState, useContext } from "react"
import Button from "@mui/material/Button"
import CssBaseline from "@mui/material/CssBaseline"
import TextField from "@mui/material/TextField"
import FormControlLabel from "@mui/material/FormControlLabel"
import FormControl from "@mui/material/FormControl"
import Grid from "@mui/material/Grid"
import Box from "@mui/material/Box"
import Radio from "@mui/material/Radio"
import RadioGroup from "@mui/material/RadioGroup"
import FormLabel from "@mui/material/FormLabel"

import Typography from "@mui/material/Typography"
import Container from "@mui/material/Container"

import { UserContext } from "../../UserContext"

function StudentLessonForm() {
  const { currentUser } = useContext(UserContext)

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
        user_id: 28,
      }),
    }).then((r) => {
      if (r.ok) {
        r.json()
        setFirstName("")
        setLastName("")
        setEmail("")
        setPhone("")
        setTravel(false)
        setLessonType(false)
        setTechnique(false)
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
          <Typography
            sx={{ fontFamily: "Sacramento" }}
            component="h1"
            variant="h2"
          >
            Student Education Inquiry
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
                  label="I'd like a private lesson (**only available locally)"
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
                sx={{ mt: 3, mb: 2, backgroundColor: " #cdadaf " }}
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

export default StudentLessonForm
