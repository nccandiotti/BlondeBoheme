import React, { useState, useRef, useContext } from "react"
// import { DirectUpload } from "@rails/activestorage"
import CssBaseline from "@mui/material/CssBaseline"
import Button from "@mui/material/Button"
import TextField from "@mui/material/TextField"
import FormControlLabel from "@mui/material/FormControlLabel"
import FormControl from "@mui/material/FormControl"
import Checkbox from "@mui/material/Checkbox"
import Grid from "@mui/material/Grid"
import Box from "@mui/material/Box"
import FormLabel from "@mui/material/FormLabel"
import Modal from "@mui/material/Modal"

import Typography from "@mui/material/Typography"
import Container from "@mui/material/Container"
import placeholder from "../../assets/bohoart2.png"
import { UserContext } from "../../UserContext"
import axios from "axios"

function UploadPicsForm() {
  const { currentUser } = useContext(UserContext)
  const [picture, setPicture] = useState(null)
  const [pictureTwo, setPictureTwo] = useState(null)
  const imageUpload = useRef()
  // const [inspo, setInspo] = useState([])

  const [open, setOpen] = useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  function handleSubmit(e) {
    e.preventDefault()
    console.log(imageUpload.current)

    const formData = new FormData()

    formData.append("picture", picture)
    formData.append("picturetwo", pictureTwo)
    formData.append("user_id", currentUser.id)

    fetch("/user_images", {
      method: "POST",
      body: formData,
    })
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

                        type="file"
                        accept="image/*"
                        onChange={(e) => setPicture(e.target.files[0])}
                      />
                      <input
                        //   enctype="multipart/form-data"

                        type="file"
                        accept="image/*"
                        onChange={(e) => setPictureTwo(e.target.files[0])}
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
