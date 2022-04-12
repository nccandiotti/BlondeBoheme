import React, { useState, useContext } from "react"
// import { DirectUpload } from "@rails/activestorage"
import CssBaseline from "@mui/material/CssBaseline"
import Button from "@mui/material/Button"
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
import { createTheme, ThemeProvider } from "@mui/material/styles"

import { UserContext } from "../../UserContext"
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

function UploadPicsForm() {
  const { currentUser } = useContext(UserContext)
  const [picture, setPicture] = useState("")
  const [image, setImage] = useState(null)
  const [imageURL, setImageURL] = useState(null)
  const [inspo, setInspo] = useState([])
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

  function handleSubmit(event) {
    event.preventDefault()

    const data = new FormData()
    // data.append("name", this.state.name)
    data.append("picture", picture)

    fetch("/user_images", {
      method: "POST",
      body: data,
    })
      .then((res) => {
        res.json()
      })
      .then(setImageURL)
  }

  function handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    })
  }

  function handleFileUpload(event) {
    console.log(event.nativeEvent, event.target.files, event.target.files[0])

    setImage(event.target.files[0])
    // this.setState({
    //   image: event.target.files[0],
    // })
  }

  return (
    <>
      <div>
        <Button onClick={handleOpen}>Upload Images</Button>
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
                    value="Upload"
                    sx={{ mt: 3 }}
                  >
                    <Grid container spacing={2}>
                      <FormLabel id="current photos">
                        {" "}
                        "Mugshot" style photos of your current hair in indirect,
                        natural lighting (in front of a window, or under an
                        awning). 5 photos total: front, left side, back, right
                        side, root area
                      </FormLabel>
                      <Grid item xs={12} sm={6}>
                        <input
                          //   enctype="multipart/form-data"
                          name="name"
                          type="file"
                          // accept="image/*"
                          onChange={handleFileUpload}
                        />
                      </Grid>
                      {/* ----------- */}
                      {/* <FormLabel id="inspo pics">
                        {" "}
                        *No more than 3* Inspiration photos of your desired
                        look- bonus points if you submit ones from my Instagram!
                        @the.blonde.boheme
                      </FormLabel> */}
                      {/* <Grid item xs={12} sm={6}>
                        <input
                          //   enctype="multipart/form-data"
                          name="inspos"
                          //   onChange={(e) => setInspo(e.target.files[0])}
                          onChange={handleImageUpload}
                          type="file"
                          multiple
                          accept="image/*"
                        />
                      </Grid> */}
                    </Grid>

                    <Button
                      type="submit"
                      onSubmit={handleSubmit}
                      value="Upload"
                      fullWidth
                      variant="contained"
                      sx={{ mt: 3, mb: 2 }}
                    >
                      Submit
                    </Button>
                  </Box>
                </FormControl>
              </Box>
            </Container>
          </ThemeProvider>
        </Modal>

        {!!imageURL ? <img src={imageURL} alt="img" /> : null}
      </div>
    </>
  )
}

export default UploadPicsForm
//   const input = document.querySelector("input[type=file]")
//   input.addEventListener("change", () => {
//     for (const file of input.files) {
//       const formData = new FormData()
//       formData.append("collection_id", this.id)
//       formData.append("mugshots", file)
//       formData.append("inspos", file)
//       pictureApiCall.uploadPictures(formData)
//     }
//   })

// function handleImageUpload(e) {
//   e.preventDefault()
//   // setInspo(e.target.files[0])
//   setMugshot(e.target.files[0])
//   //
//   const formData = new FormData()

//   formData.append(inspo, formData)
//   formData.append(mugshot, formData)
//   //
//   fetch(`/user_images`, {
//     method: "POST",
//     body: formData,
//   })
//   //
// }
// function handleSubmit(e) {
//   e.preventDefault()
//   fetch("/user_images", {
//     method: "POST",
//     headers: { "Content-Type": "application/json" },
//     body: JSON.stringify({
//       mugshots: mugshot,
//       inspos: inspo,
//     }),
//   }).then((r) => {
//     if (r.ok) {
//       r.json()
//       handleImageUpload()
//     } else alert("Error")
//   })
// }
