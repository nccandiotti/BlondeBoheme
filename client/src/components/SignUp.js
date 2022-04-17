import { useState, useContext } from "react"
import { useNavigate } from "react-router-dom"
import Button from "@mui/material/Button"
import CssBaseline from "@mui/material/CssBaseline"
import TextField from "@mui/material/TextField"

import Link from "@mui/material/Link"
import Grid from "@mui/material/Grid"
import Box from "@mui/material/Box"

import Typography from "@mui/material/Typography"
import Container from "@mui/material/Container"
import flower from "../assets/flower1.png"
import { UserContext } from "../UserContext"

export default function SignUp() {
  let navigate = useNavigate()
  const { currentUser } = useContext(UserContext)
  const { setCurrentUser } = useContext(UserContext)
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [first_name, setFirstName] = useState("")
  const [last_name, setLastName] = useState("")
  const [phone, setPhone] = useState("")
  const [email, setEmail] = useState("")
  const admin = false

  const formData = {
    admin: false,
    firstname: first_name,
    lastname: last_name,
  }
  function handleSubmit(e) {
    e.preventDefault()
    fetch("/users", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        admin: admin,
        firstname: first_name,
        lastname: last_name,
        password: password,
        username: username,
        email: email,
        phone: phone,
      }),
    }).then((r) => {
      if (r.ok) {
        r.json().then((currentUser) => setCurrentUser(currentUser))
        // setUsername = ""
        // setPassword = ""
        // setFirstName = ""
        navigate("/login")
      }
    })
  }

  return (
    <>
      <Container
        sx={{
          backgroundImage: `url(${flower})`,
          borderRadius: "30px",
          padding: "10px",
          justifyContent: "center",
          display: "flex",
        }}
        component="main"
        maxWidth="xs"
      >
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography
            sx={{ fontFamily: "Sacramento" }}
            component="h1"
            variant="h2"
          >
            Sign up
          </Typography>
          {/* <form> */}
          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit}
            sx={{ mt: 3, padding: "20px" }}
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
                  value={first_name}
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
                  value={last_name}
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
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="username"
                  label="username"
                  type="username"
                  id="username"
                  autoComplete="username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
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

            <Button
              type="submit"
              onChange={handleSubmit}
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>

            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="/login" variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </>
  )
}
