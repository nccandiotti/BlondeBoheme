import React from "react"
import Typography from "@mui/material/Typography"
import { styled } from "@mui/material/styles"
import Box from "@mui/material/Box"
import Paper from "@mui/material/Paper"
import Grid from "@mui/material/Grid"
import headshot from "../assets/SuzieHeadshot.png"
import doinghair from "../assets/SuzieDoingHair.png"
import ButtonBase from "@mui/material/ButtonBase"

const Img = styled("img")({
  margin: "auto",
  display: "block",
  width: "100%",
  height: "80%%",
})

function AboutSuzie() {
  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          marginTop: "40px",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Typography variant="h1" sx={{ fontFamily: "Sacramento" }}>
          Meet Suzie
        </Typography>
        <Typography
          sx={{ fontFamily: "Sacramento", marginBottom: "40px" }}
          variant="h4"
        >
          Colorist | Educator | Mentor{" "}
        </Typography>
        {/* <Paper
          sx={{
            p: 2,
            height: 400,
            margin: "auto",
            maxWidth: "80%",
            flexGrow: 1,
            backgroundColor: (theme) =>
              theme.palette.mode === "dark" ? "#1A2027" : "#fff",
          }}
        >
          <Grid container spacing={2}>
            <Grid item>
              <ButtonBase sx={{ width: 300, height: 300 }}>
                <Img alt="complex" src={headshot} />
              </ButtonBase>
            </Grid>
            <Grid item xs={12} sm container>
              <Grid item xs container direction="column" spacing={2}>
                <Grid item xs>
                  <Typography
                    sx={{ fontFamily: "Montserrat" }}
                    gutterBottom
                    variant="subtitle1"
                    component="div"
                  >
                    Hello! I'm Suzie, a color focused stylist and educator. With
                    a full decade of hair in my hands, I have grown into the
                    role of a luxury service provider and mentor to stylists. I
                    specialize in "lived-in" and dimensional coloring services.
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Paper> */}
        {/* <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(6, 1fr",
            gridTemplateRows: "repeat(7, 1fr",
            gridColumnGap: "0px",
            gridRowGap: "0px",
          }}
        >
          <div style={{ gridArea: "1/1/5/4" }}>
            {" "}
            <Img alt="complex" src={headshot} />
          </div>
          <div style={{ gridArea: "1/4/4/7" }}>
            {" "}
            <Typography
              sx={{ fontFamily: "Montserrat" }}
              gutterBottom
              variant="subtitle1"
              component="div"
            >
              Hello! I'm Suzie, a color focused stylist and educator. With a
              full decade of hair in my hands, I have grown into the role of a
              luxury service provider and mentor to stylists. I specialize in
              "lived-in" and dimensional coloring services.
            </Typography>{" "}
          </div>
          <div style={{ gridArea: "4/4/6/7" }}>
            <Img alt="complex" src={doinghair} />
          </div>
          <div style={{ gridArea: "5/1/8/4" }}> </div>
        </div> */}
      </div>
    </>
  )
}

export default AboutSuzie
