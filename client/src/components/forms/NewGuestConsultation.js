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
import Modal from "@mui/material/Modal"

import Typography from "@mui/material/Typography"
import Container from "@mui/material/Container"
import { createTheme, ThemeProvider } from "@mui/material/styles"

import { UserContext } from "../../UserContext"
import { useDropzone } from "react-dropzone"

const theme = createTheme()
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

function NewGuestConsultation() {
  const { currentUser } = useContext(UserContext)
  const [files, setFiles] = useState([])
  //   const { getRootProps, getInputProps } = useDropzone({
  //     accept: "image/*",
  //     onDrop: (acceptedFiles) => {
  //         setFiles(acceptedFiles.map(file) =>Object.assign(file))
  //     },
  //   })

  const [firstname, setFirstName] = useState("")
  const [lastname, setLastName] = useState("")
  const [phone, setPhone] = useState("")
  const [email, setEmail] = useState("")
  const [graycvg, setGrayCvg] = useState("")
  const [allergies, setAllergies] = useState("")
  const [hairHx, setHairHx] = useState("")
  const [mugShot, setMugShot] = useState("")
  const [inspo, setInspo] = useState("")

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
  function handleSubmit(e) {
    e.preventDefault()
    fetch("/user_consults", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        firstname: firstname,
        lastname: lastname,
        email: email,
        phone: phone,
        graycvg: graycvg,
        allergies: allergies,
        hairhx: hairHx,
        mugshot: mugShot,
        inspo: inspo,
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

  function handleGrayCvg(e) {
    e.preventDefault()
    setGrayCvg(e.target.value)
  }

  //   function handleTravel(e) {
  //     e.preventDefault()
  //     setTravel(e.target.value)
  //   }
  //   function handleType(e) {
  //     e.preventDefault()
  //     setLessonType(e.target.value)
  //   }

  return (
    <>
      <div>
        <Button onClick={handleOpen}>Request Consultation</Button>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <ThemeProvider theme={theme}>
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
                  New Guest Consultation Form
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
                    <FormLabel id="size">
                      Known allergies to chemicals{" "}
                    </FormLabel>
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
                      Detailed hair color history from *at least* the past 3
                      years
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
                      "Mugshot" style photos of your current hair in indirect,
                      natural lighting (in front of a window, or under an
                      awning). 5 photos total: front, left side, back, right
                      side, root area
                    </FormLabel>
                    <Grid item xs={12} sm={6}>
                      <input
                        type="file"
                        value={mugShot}
                        multiple
                        accept="image/*"
                        onChange={(e) => console.log(e.target.value)}
                      />
                    </Grid>
                    {/* ----------- */}
                    <FormLabel id="inspo pics">
                      {" "}
                      *No more than 3* Inspiration photos of your desired look-
                      bonus points if you submit ones from my Instagram!
                      @the.blonde.boheme
                    </FormLabel>
                    <Grid item xs={12} sm={6}>
                      <input type="file" multiple accept="image/*" />
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
          </ThemeProvider>
        </Modal>
      </div>
    </>
  )
}

export default NewGuestConsultation
