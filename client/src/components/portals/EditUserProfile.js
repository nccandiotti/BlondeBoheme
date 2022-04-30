import React, { useState, useContext, useEffect } from "react"
import { UserContext } from "../../UserContext"
import { format } from "date-fns"
import Button from "@mui/material/Button"
import CssBaseline from "@mui/material/CssBaseline"
import TextField from "@mui/material/TextField"
import FormControl from "@mui/material/FormControl"
import Grid from "@mui/material/Grid"
import Box from "@mui/material/Box"
import Typography from "@mui/material/Typography"
import Container from "@mui/material/Container"

function EditUserProfile({
  firstname,
  setFirstname,
  lastname,
  setLastname,
  email,
  setEmail,
  phone,
  setPhone,
  handleClose,
}) {
  const { currentUser } = useContext(UserContext)
  function handleSubmit(e) {
    e.preventDefault()
    fetch(`/users/${currentUser.id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        firstname: firstname,
        lastname: lastname,
        email: email,
        phone: phone,
      }),
    }).then((r) => r.json)
    setPhone(phone)
    setEmail(email)
    setFirstname(firstname)
    setLastname(lastname)
    handleClose()
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
          <Typography
            sx={{ fontFamily: "Sacramento", color: " #807b67" }}
            variant="h2"
          >
            My Profile Details
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
                    fullWidth
                    id="firstName"
                    label="First Name"
                    autoFocus
                    value={firstname}
                    onChange={(e) => setFirstname(e.target.value)}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    autoComplete="given-name"
                    name="firstName"
                    fullWidth
                    id="firstName"
                    label="Last Name"
                    autoFocus
                    value={lastname}
                    onChange={(e) => setLastname(e.target.value)}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    name="email"
                    fullWidth
                    id="email"
                    label="Email"
                    autoFocus
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    name="phone"
                    fullWidth
                    id="phone"
                    label="Phone Number"
                    autoFocus
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                  />
                </Grid>
              </Grid>

              <Button
                type="submit"
                onChange={handleSubmit}
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2, backgroundColor: "#b26446 " }}
              >
                Submit
              </Button>
              <Button
                type="onClick"
                onChange={() => handleClose()}
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2, backgroundColor: "#b26446 " }}
              >
                cancel
              </Button>
              <Grid container justifyContent="flex-end"></Grid>
            </Box>
          </FormControl>
        </Box>
      </Container>
    </>
  )
}

export default EditUserProfile
