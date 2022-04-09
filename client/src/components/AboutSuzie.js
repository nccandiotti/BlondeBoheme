import React from "react"
import Typography from "@mui/material/Typography"
import { styled } from "@mui/material/styles"
import Box from "@mui/material/Box"
import Paper from "@mui/material/Paper"
import Grid from "@mui/material/Grid"
import headshot from "../assets/SuzieHeadshot.png"
import doinghair from "../assets/SuzieDoingHair.png"
import pinkwatercolor from "../assets/pampas.png"
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
        <Box>
          <Grid
            sx={{
              width: "80%",
              margin: "40px",
              display: "flex",
              flexDirection: "row",
            }}
            container
            spacing={3}
          >
            <Grid item xs={6}>
              {" "}
              <Paper
                sx={{
                  padding: "10px",
                  // backgroundImage: `url(${pinkwatercolor})`,
                  backgroundColor: "#9e786c",
                  width: "100%",
                }}
                variant="outlined "
                elevation={24}
              >
                {" "}
                <img
                  style={{
                    display: "flex",
                    width: "100%",
                    height: "auto",
                    objectFit: "cover",
                  }}
                  src={headshot}
                />
              </Paper>
            </Grid>

            <Grid item xs={6}>
              <Typography
                sx={{
                  fontSize: "20px",
                  fontFamily: "Montserrat",
                  fontWeight: "bold",
                }}
                gutterBottom
                variant="subtitle1"
                component="div"
              >
                Hello! I'm Suzie, a color focused stylist and educator. With a
                full decade of hair in my hands, I have grown into the role of a
                luxury service provider and mentor to stylists. I specialize in
                "lived-in" and dimensional coloring services. I am passionate
                about creating an elevated alon experience for my guests.
              </Typography>
            </Grid>

            <Grid item xs={8}>
              <Typography
                sx={{
                  fontSize: "20px",
                  fontFamily: "Montserrat",
                  fontWeight: "bold",
                }}
                gutterBottom
                variant="subtitle1"
                component="div"
              >
                As passionate as I am about creating an elevated salon
                experience for my guests, I am equally as passionate about
                elevating eager stylist's skill sets and confidence- guiding
                them into a positive, and more balanced work environment.
              </Typography>

              <Typography
                sx={{
                  fontSize: "20px",
                  fontFamily: "Montserrat",
                  fontWeight: "bold",
                }}
                gutterBottom
                variant="subtitle1"
                component="div"
              >
                I began my role as an educator with an indie company based out
                of California back in 2016- and have since launched and co-own
                an independent education company, beginning 2021.{" "}
              </Typography>
            </Grid>
            <Grid item xs={4}>
              {" "}
              <Paper
                sx={{
                  padding: "10px",
                  // backgroundImage: `url(${pinkwatercolor})`,
                  backgroundColor: "#e7b694",
                  width: "100%",
                }}
                variant="outlined "
                elevation={24}
              >
                <img
                  style={{
                    display: "flex",
                    width: "100%",
                    height: "600px",
                    objectFit: "cover",
                  }}
                  src={doinghair}
                />
              </Paper>
            </Grid>
          </Grid>
        </Box>
      </div>
    </>
  )
}

export default AboutSuzie
