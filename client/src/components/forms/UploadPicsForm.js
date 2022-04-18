import React, { useState, useRef, useContext } from "react"
import CssBaseline from "@mui/material/CssBaseline"
import Button from "@mui/material/Button"
import FormControl from "@mui/material/FormControl"

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
              <Typography
                style={{ fontFamily: "Sacramento", fontSize: "8vw" }}
                component="h1"
                variant="h5"
              >
                Inspo Pics
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
                      Please share some of your hair #goals - bonus if they're
                      from my instagram!
                    </FormLabel>
                    <Grid item xs={12} sm={6}>
                      <input
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
                  </Grid>
                  <Button
                    type="submit"
                    onSubmit={handleSubmit}
                    value="Upload"
                    fullWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 2, backgroundColor: " #cdadaf " }}
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
