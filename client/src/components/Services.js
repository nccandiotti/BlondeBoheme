import { useState, useEffect } from "react"

import { styled } from "@mui/material/styles"
import Box from "@mui/material/Box"
import Paper from "@mui/material/Paper"
import Grid from "@mui/material/Grid"
import Card from "@mui/material/Card"
import CardActions from "@mui/material/CardActions"
import CardContent from "@mui/material/CardContent"
import Button from "@mui/material/Button"
import Typography from "@mui/material/Typography"

const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  >
    •
  </Box>
)

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}))

function Services() {
  const [simpleServicesArray, setSimpleServicesArray] = useState([])
  const [therapeuticServicesArray, setTherapeuticServicesArray] = useState([])
  const [luxuryServicesArray, setLuxuryServicesArray] = useState([])
  console.log(simpleServicesArray)

  useEffect(() => {
    fetch("/simpleServices")
      .then((r) => r.json())
      .then(setSimpleServicesArray)
  }, [])
  useEffect(() => {
    fetch("/therapeuticServices")
      .then((r) => r.json())
      .then(setTherapeuticServicesArray)
  }, [])
  useEffect(() => {
    fetch("/luxuryServices")
      .then((r) => r.json())
      .then(setLuxuryServicesArray)
  }, [])

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={3}>
        <Grid sx={{ display: "flex", justifyContent: "center" }} item xs>
          <CardContent>
            {/* <Typography
              sx={{ fontSize: 14 }}
              color="text.secondary"
              gutterBottom
            >
              Simplicity
            </Typography> */}
            <Typography variant="h5" component="div">
              Simplicity
            </Typography>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
              adjective
            </Typography>
            <Typography variant="body2">
              well meaning and kindly.
              <br />
              {'"a benevolent smile"'}
            </Typography>
          </CardContent>
        </Grid>
        <Grid sx={{ display: "flex", justifyContent: "center" }} item xs={6}>
          <CardContent>
            <Typography variant="h5" component="div">
              Luxury
            </Typography>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
              adjective
            </Typography>
            <Typography variant="body2">
              well meaning and kindly.
              <br />
              {'"a benevolent smile"'}
            </Typography>
          </CardContent>
        </Grid>
        <Grid sx={{ display: "flex", justifyContent: "center" }} item xs>
          <CardContent>
            <Typography variant="h5" component="div">
              Therapeutic
            </Typography>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
              adjective
            </Typography>
            <Typography variant="body2">
              well meaning and kindly.
              <br />
              {'"a benevolent smile"'}
            </Typography>
          </CardContent>
        </Grid>
      </Grid>
    </Box>
  )
}

export default Services
