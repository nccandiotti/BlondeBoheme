import React, { useState, useEffect } from "react"

import { styled } from "@mui/material/styles"
import Box from "@mui/material/Box"
import Paper from "@mui/material/Paper"
import Grid from "@mui/material/Grid"
import FormLabel from "@mui/material/FormLabel"
import FormControl from "@mui/material/FormControl"
import FormControlLabel from "@mui/material/FormControlLabel"
import RadioGroup from "@mui/material/RadioGroup"
import Radio from "@mui/material/Radio"
import services1 from "../assets/service1.png"
import services2 from "../assets/service2.png"
import services3 from "../assets/service3.png"

// import Grid from "@mui/material/Grid"
// import Card from "@mui/material/Card"
// import CardActions from "@mui/material/CardActions"
// import CardContent from "@mui/material/CardContent"
// import Button from "@mui/material/Button"
// import Typography from "@mui/material/Typography"

// import Table from "@mui/material/Table"
// import TableBody from "@mui/material/TableBody"
// import TableCell from "@mui/material/TableCell"
// import TableContainer from "@mui/material/TableContainer"
// import TableHead from "@mui/material/TableHead"
// import TableRow from "@mui/material/TableRow"

function createData(name, price, time) {
  return { name, price, time }
}

const rows = [
  createData("Gloss + Blowout", "$90+", "1hr"),
  createData("Gloss + Cut + Blowout", "$135+", "1.5hr"),
  createData("Virgin Retouch + Gloss + Blowout", "$180+", "2hr"),
  createData("Virgin Retouch + Gloss + Blowout", "$180+", "2hr"),
  createData("Virgin Retouch + Gloss + Cut + Blowout", "$180+", "2hr"),
]

// const Item = styled(Paper)(({ theme }) => ({
//   backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
//   ...theme.typography.body2,
//   padding: theme.spacing(1),
//   textAlign: "center",
//   color: theme.palette.text.secondary,
// }))

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
    <>
      <Grid
        sx={{
          flexGrow: 1,
          display: "flex",
          flexDirection: "row",
          marginTop: "150px",
          justifyContent: "center",
          alignItems: "center",
        }}
        container
        spacing={0}
      >
        <Grid xs={3} item sx={{ margin: "30px" }}>
          <img
            style={{
              display: "flex",
              width: "100%",
              height: "auto",
              objectFit: "contain",
            }}
            src={services1}
            alt="service1"
          />
        </Grid>
        <Grid item xs={3} sx={{ margin: "30px" }}>
          {" "}
          <img
            style={{
              display: "flex",
              width: "100%",
              height: "auto",
              objectFit: "cover",
            }}
            src={services2}
            alt="service1"
          />
        </Grid>
        <Grid xs={3} item sx={{ margin: "30px" }}>
          {" "}
          <img
            style={{
              display: "flex",
              width: "100%",
              height: "auto",
              objectFit: "cover",
            }}
            src={services3}
            alt="service1"
          />
        </Grid>
      </Grid>
    </>
    // <Box sx={{ flexGrow: 1 }}>
    // {
    /* <Grid container spacing={3}>
        <Grid sx={{ display: "flex", justifyContent: "center" }} item xs>
          <CardContent>
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
            <Typography
              sx={{ fontSize: 14 }}
              color="text.secondary"
              gutterBottom
            >
              ACCOMPANIMENTS
            </Typography>
            <Typography variant="caption">K18 Treatment</Typography>
            <br />
            <Typography variant="caption">Curls</Typography>
          </CardContent>
        </Grid>
        <Grid
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
          item
          xs={6}
        >
          <CardContent
            sx={{
              display: "flex",
              alignItems: "center",
              flexDirection: "column",
            }}
          >
            <Typography variant="h5" component="div">
              Luxury
            </Typography>
            <TableContainer component={Paper}>
              <Table s aria-label="simple table">
                <TableBody
                  sx={{
                    backgroundImage: "../assets/hair.png",
                  }}
                >
                  {rows.map((row) => (
                    <TableRow
                      key={row.name}
                      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    >
                      <TableCell component="th" scope="row">
                        {row.name}
                      </TableCell>
                      <TableCell align="right">{row.calories}</TableCell>
                      <TableCell align="right">{row.price}</TableCell>
                      <TableCell align="right">{row.time}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
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
      </Grid> */
    // }
    // </Box>
  )
}

export default Services
