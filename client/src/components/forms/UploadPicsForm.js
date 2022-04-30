import React, { useState, useContext } from "react"
import CssBaseline from "@mui/material/CssBaseline"
import Button from "@mui/material/Button"
import FormControl from "@mui/material/FormControl"

import Grid from "@mui/material/Grid"
import Box from "@mui/material/Box"
import FormLabel from "@mui/material/FormLabel"
import Modal from "@mui/material/Modal"

import Typography from "@mui/material/Typography"
import Container from "@mui/material/Container"
import { UserContext } from "../../UserContext"

function UploadPicsForm({ handleConsultClose }) {
  const { currentUser } = useContext(UserContext)
  const [picture, setPicture] = useState(null)
  const [pictureTwo, setPictureTwo] = useState(null)

  const [open, setOpen] = useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  function handleSubmit(e) {
    e.preventDefault()

    const formData = new FormData()

    formData.append("picture", picture)
    formData.append("picturetwo", pictureTwo)
    formData.append("user_id", currentUser.id)

    fetch("/user_images", {
      method: "POST",
      body: formData,
    })
    handleConsultClose()
  }

  return (
    <>
      <div>
        <Button sx={{ color: "#b26446" }} onClick={handleOpen}>
          Upload Inspo Pics
        </Button>
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
                        required
                        type="file"
                        accept="image/*"
                        onChange={(e) => setPicture(e.target.files[0])}
                      />
                      <input
                        //   enctype="multipart/form-data"
                        required
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
                    sx={{ mt: 3, mb: 2, backgroundColor: " #ebc696  " }}
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
