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
import placeholder from "../../assets/bohoart2.png"
import axios from "axios"

import { UserContext } from "../../UserContext"

function UploadPicsForm() {
  const { currentUser } = useContext(UserContext)
  const [picture, setPicture] = useState()
  const [image, setImage] = useState(null)
  const [imageURL, setImageURL] = useState(null)
  const [inspo, setInspo] = useState([])
  const [open, setOpen] = useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  const API_URL = "/user_images"

  function handleSubmit(event) {
    event.preventDefault()

    const data = new FormData()
    data.append("picture", picture)
    // let headers = new Headers()
    // headers.append("Access-Control-Allow-Origin", "*")
    // headers.append(
    //   "Access-Control-Allow-Methods",
    //   "POST, PUT, DELETE, GET, OPTIONS"
    // )
    // headers.append(
    //   "Access-Control-Allow-Headers",
    //   "Origin, X-Requested-With, Content-Type, Accept, Authorization"
    // )
    // headers["Access-Control-Allow-Origin"] = "*"
    // // headers["Access-Control-Allow-Methods"] = "POST, PUT, DELETE, GET, OPTIONS"
    // headers["Access-Control-Request-Method"] = "*"
    // headers["Access-Control-Allow-Headers"] =

    // let headers = new Headers()

    // headers.append("Content-Type", "application/json")
    // headers.append("Accept", "application/json")

    // headers.append("Access-Control-Allow-Origin", "http://localhost:3000")

    fetch("http://localhost:3000/user_images", {
      method: "POST",
      body: data,
    })
      .then((r) => r.json())
      .catch((error) => console.log(error))
  }

  // function handleChange(event) {
  //   this.setState({
  //     [event.target.name]: event.target.value,
  //   })
  // }

  function handleFileUpload(event) {
    setPicture(event.target.files[0])
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
                Inspo Pics
              </Typography>
              <img
                src={placeholder}
                alt="inspo"
                style={{ height: "200px", width: "200px" }}
              />
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
