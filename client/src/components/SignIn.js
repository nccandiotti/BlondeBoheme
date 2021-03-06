import { useState, useContext } from "react"
import { UserContext } from "../UserContext"

import Button from "@mui/material/Button"
import CssBaseline from "@mui/material/CssBaseline"
import TextField from "@mui/material/TextField"
import FormControlLabel from "@mui/material/FormControlLabel"
import Checkbox from "@mui/material/Checkbox"
import Link from "@mui/material/Link"
import Paper from "@mui/material/Paper"
import Box from "@mui/material/Box"
import Grid from "@mui/material/Grid"
import Typography from "@mui/material/Typography"
import UserHome from "./portals/UserHome"
import hair from "../assets/hair.png"

export default function SignIn() {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const { currentUser } = useContext(UserContext)
  const { setCurrentUser } = useContext(UserContext)

  function handleLogin(e) {
    e.preventDefault()
    fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: username,
        password: password,
      }),
    }).then((response) => {
      if (response.ok) {
        response.json().then((currentUser) => setCurrentUser(currentUser))
      } else alert("Invalid login. Please try again.")
    })
  }

  return (
    <div style={{ marginTop: "20px" }}>
      {" "}
      {currentUser ? (
        <UserHome />
      ) : (
        <div>
          <Grid container component="main">
            <CssBaseline />

            <Grid item xs={false} sm={4} md={7}>
              <img
                src={hair}
                style={{
                  display: "flex",
                  width: "100%",
                  height: "auto",
                  objectFit: "cover",
                }}
              />
            </Grid>
            <Grid
              item
              xs={12}
              sm={8}
              md={5}
              component={Paper}
              elevation={6}
              square
            >
              <Box
                sx={{
                  my: 8,
                  mx: 4,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <Typography
                  sx={{ fontFamily: "Sacramento", color: "#2c3d26" }}
                  variant="h1"
                >
                  Sign in
                </Typography>
                <Box
                  component="form"
                  noValidate
                  onSubmit={handleLogin}
                  sx={{ mt: 1 }}
                >
                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="email"
                    label="username"
                    name="username"
                    autoComplete="email"
                    autoFocus
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                  />
                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    autoComplete="current-password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <FormControlLabel
                    control={<Checkbox value="remember" color="primary" />}
                    label="Remember me"
                  />

                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 2, backgroundColor: "#cb8568" }}
                  >
                    Sign In
                  </Button>

                  <Grid container>
                    <Grid item>
                      <Link
                        sx={{ color: "#2c3d26" }}
                        href="/signup"
                        variant="body2"
                      >
                        {"Don't have an account? Sign Up"}
                      </Link>
                    </Grid>
                  </Grid>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </div>
      )}
    </div>
  )
}
