import { useState, useContext, useEffect } from "react"
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
function NewGuestConsultation({
  setPicone,
  setPictwo,
  setPicthree,
  setPicfour,
  setPicfive,
}) {
  const { currentUser } = useContext(UserContext)

  const [firstname, setFirstName] = useState(currentUser.firstname)
  const [lastname, setLastName] = useState(currentUser.lastname)
  const [phone, setPhone] = useState(currentUser.phone)
  const [email, setEmail] = useState(currentUser.email)
  const [graycvg, setGrayCvg] = useState("")
  const [allergies, setAllergies] = useState("")
  const [hairHx, setHairHx] = useState("")
  const [checked, setChecked] = useState(false)
  const [open, setOpen] = useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)
  const [mugshotone, setmugshotone] = useState(null)
  const [mugshottwo, setmugshottwo] = useState(null)
  const [mugshotthree, setmugshotthree] = useState(null)
  const [mugshotfour, setmugshotfour] = useState(null)
  const [mugshotfive, setmugshotfive] = useState(null)

  useEffect(() => {
    fetch("/user_consults").then((r) => r.json())
  }, [])
  function handleSubmit(e) {
    e.preventDefault()

    const formData = new FormData()

    formData.append("mugshotone", mugshotone)
    formData.append("mugshottwo", mugshottwo)
    formData.append("mugshotthree", mugshotthree)
    formData.append("mugshotfour", mugshotfour)
    formData.append("mugshotfive", mugshotfive)
    formData.append("user_id", currentUser.id)
    formData.append("firstname", firstname)
    formData.append("lastname", lastname)
    formData.append("email", email)
    formData.append("phone", phone)
    formData.append("graycvg", graycvg)
    formData.append("allergies", allergies)
    formData.append("hairhx", hairHx)
    formData.append("salon_id", 2)

    fetch("/user_consults", {
      method: "POST",
      body: formData,
    })
    setFirstName("")
    setLastName("")
    setEmail("")
    setPhone("")
    setPicone(mugshotone)
    setPictwo(mugshottwo)
    setPicthree(mugshotthree)
    setPicfour(mugshotfour)
    setPicfive(mugshotfive)
  }

  function handleGrayCvg(e) {
    e.preventDefault()
    setGrayCvg(e.target.value)
  }

  return (
    <>
      <Container
        sx={{ overflow: "scroll", height: "90vh" }}
        component="main"
        maxWidth="s"
      >
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
            sx={{ fontSize: "80px", fontFamily: "Sacramento" }}
            component="h1"
            variant="h5"
          >
            New Guest Intake Form
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
                <Grid item xs={6}>
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

                <Grid item xs={6}>
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
                Do you require grey coverage?
              </FormLabel>

              <RadioGroup name="radio-buttons-group">
                <FormControlLabel
                  value="yes"
                  onChange={handleGrayCvg}
                  control={<Radio />}
                  label="yes"
                />
                <FormControlLabel
                  value="no"
                  onChange={handleGrayCvg}
                  control={<Radio />}
                  label="no"
                />
              </RadioGroup>
              <FormLabel id="size">Known allergies to chemicals </FormLabel>
              <Grid item xs={12} sm={6}>
                <TextField
                  name="hairHx"
                  required
                  fullWidth
                  id="firstName"
                  autoFocus
                  value={allergies}
                  onChange={(e) => setAllergies(e.target.value)}
                />
              </Grid>

              <FormLabel id="which-technique">
                {" "}
                Detailed hair color history from *at least* the past 3 years
              </FormLabel>
              <Grid item xs={12} sm={6}>
                <TextField
                  multiline
                  minRows={4}
                  name="hx"
                  required
                  fullWidth
                  id="hx"
                  autoFocus
                  value={hairHx}
                  onChange={(e) => setHairHx(e.target.value)}
                />
              </Grid>
              {/* ------ */}
              <FormLabel id="current photos">
                {" "}
                "Mugshot" style photos of your current hair in indirect, natural
                lighting (in front of a window, or under an awning). 5 photos
                total: front, left side, back, right side, root area
              </FormLabel>
              <FormLabel id="current photos">front</FormLabel>
              <Grid item xs={12} sm={6}>
                <input
                  required
                  type="file"
                  accept="image/*"
                  onChange={(e) => setmugshotone(e.target.files[0])}
                />
              </Grid>
              <FormLabel id="current photos">left side</FormLabel>
              <Grid item xs={12} sm={6}>
                <input
                  required
                  type="file"
                  accept="image/*"
                  onChange={(e) => setmugshottwo(e.target.files[0])}
                />
              </Grid>
              <FormLabel id="current photos">right side</FormLabel>
              <Grid item xs={12} sm={6}>
                <input
                  required
                  type="file"
                  accept="image/*"
                  onChange={(e) => setmugshotthree(e.target.files[0])}
                />
              </Grid>
              <FormLabel id="current photos">back</FormLabel>
              <Grid item xs={12} sm={6}>
                <input
                  required
                  type="file"
                  accept="image/*"
                  onChange={(e) => setmugshotfour(e.target.files[0])}
                />
              </Grid>
              <FormLabel id="current photos">roots</FormLabel>
              <Grid item xs={12} sm={6}>
                <input
                  required
                  type="file"
                  accept="image/*"
                  onChange={(e) => setmugshotfive(e.target.files[0])}
                />
              </Grid>

              <Button
                type="submit"
                onChange={handleSubmit}
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2, backgroundColor: " #cdadaf" }}
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

export default NewGuestConsultation
