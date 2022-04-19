import Grid from "@mui/material/Grid"

import Button from "@mui/material/Button"
import Typography from "@mui/material/Typography"

function Services() {
  return (
    <>
      <Grid
        container
        spacing={2}
        sx={{
          display: "flex",
          flexDirection: "row",
          justifycontent: "center",
          fontFamily: "Montserrat",
          padding: "30px",
        }}
      >
        <Grid
          sx={{
            borderRadius: "20px",
            backgroundColor: "hsl(21, 50%, 71%, 0.6)",
          }}
          item
          xs={3}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Typography sx={{ fontFamily: "Montserrat" }} variant="h3">
              SIMPLICITY
            </Typography>
            <hr style={{ width: "50%", size: "3", color: "black" }} />
            <br />
            <Typography sx={{ fontFamily: "Montserrat" }} variant="h5">
              Maintenance Services
            </Typography>
            <table>
              {" "}
              <tbody>
                <tr>
                  <td className="tdspacing">Gloss + Blowout</td>
                  <td className="tdspacing">90+</td>
                  <td className="tdspacing">(1 hr)</td>
                </tr>
                <tr>
                  <td className="tdspacing">Gloss + Cut + Blowout</td>
                  <td className="tdspacing">135+</td>
                  <td className="tdspacing">(1.5 hr)</td>
                </tr>
                <tr>
                  <td className="tdspacing">Virgin Retouch + Gloss</td>
                  <td className="tdspacing">185+</td>
                  <td className="tdspacing">(2 hr)</td>
                </tr>
                <tr>
                  <td className="tdspacing">
                    Virgin Retouch + Gloss + Cut + Blowout
                  </td>
                  <td className="tdspacing">225+</td>
                  <td className="tdspacing">(2.5 hr)</td>
                </tr>
              </tbody>
            </table>
            <br />
            <hr style={{ width: "25%", size: "3", color: "black" }} />
            <Typography sx={{ fontFamily: "Montserrat" }} variant="h6">
              Accompaniments
            </Typography>
            <table>
              {" "}
              <tbody>
                <tr>
                  <td className="tdspacing">K18 Treatment</td>
                  <td className="tdspacing">+$30</td>
                </tr>
                <tr>
                  <td className="tdspacing">Curls</td>
                  <td className="tdspacing">+$15</td>
                </tr>
              </tbody>
            </table>
            <Grid
              container
              spacing={2}
              sx={{
                display: "flex",
                flexDirection: "row",
                justifycontent: "center",
                alignItems: "center",
                fontFamily: "Montserrat",
              }}
            >
              {" "}
            </Grid>
          </div>
        </Grid>
        <Grid
          sx={{
            borderRadius: "20px",
            backgroundColor: "hsl(21, 50%, 71%, 0.9)",
          }}
          item
          xs={6}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Typography sx={{ fontFamily: "Montserrat" }} variant="h3">
              LUXURY
            </Typography>
            <hr style={{ width: "50%", size: "3", color: "black" }} />
            <Typography sx={{ fontFamily: "Montserrat" }} variant="h5">
              Customized Coloring
            </Typography>
            <Typography sx={{ fontFamily: "Montserrat" }} variant="h6">
              Includes any of the following needed to achieve desired look:
            </Typography>

            <Grid
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
                padding: "10px",
              }}
              container
              spacing={1}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Grid
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                  item
                  xs={6}
                >
                  <Typography
                    sx={{ fontWeight: "bold", fontFamily: "Montserrat" }}
                    variant="body"
                  >
                    PREP & TREAT
                  </Typography>
                  <ul>
                    <li sx={{ fontFamily: "Montserrat" }} variant="body">
                      Demineralization
                    </li>
                    <li sx={{ fontFamily: "Montserrat" }} variant="body">
                      Color Remover
                    </li>
                    <li sx={{ fontFamily: "Montserrat" }} variant="body">
                      K18 Treatment
                    </li>
                  </ul>
                </Grid>
                <Grid
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                  item
                  xs={6}
                >
                  <Typography
                    sx={{ fontWeight: "bold", fontFamily: "Montserrat" }}
                    variant="body"
                  >
                    FOUNDATIONS
                  </Typography>
                  <ul>
                    <li sx={{ fontFamily: "Montserrat" }} variant="body">
                      Fill/Gloss
                    </li>
                    <li sx={{ fontFamily: "Montserrat" }} variant="body">
                      Virgin Retouch
                    </li>
                    <li sx={{ fontFamily: "Montserrat" }} variant="body">
                      Cut & Style
                    </li>
                  </ul>
                </Grid>
              </div>
            </Grid>
            <Grid
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
                padding: "10px",
              }}
              container
              spacing={1}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Grid
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                  item
                  xs={6}
                >
                  <Typography
                    sx={{ fontWeight: "bold", fontFamily: "Montserrat" }}
                    variant="body"
                  >
                    BLONDING
                  </Typography>
                  <ul>
                    <li sx={{ fontFamily: "Montserrat" }} variant="body">
                      Foiled Highlights
                    </li>
                    <li sx={{ fontFamily: "Montserrat" }} variant="body">
                      Hand Painted Balayage
                    </li>

                    <li sx={{ fontFamily: "Montserrat" }} variant="body">
                      Wet Balayage
                    </li>
                  </ul>
                </Grid>

                <Grid
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                  item
                  xs={6}
                >
                  <Typography
                    sx={{ fontWeight: "bold", fontFamily: "Montserrat" }}
                    variant="body"
                  >
                    DEPTH
                  </Typography>
                  <ul>
                    <li sx={{ fontFamily: "Montserrat" }} variant="body">
                      Shadow Root
                    </li>
                    <li sx={{ fontFamily: "Montserrat" }} variant="body">
                      Reverse Balayage
                    </li>
                    <li sx={{ fontFamily: "Montserrat" }} variant="body">
                      Panels of Depth
                    </li>
                    <li sx={{ fontFamily: "Montserrat" }} variant="body">
                      Color Melting
                    </li>
                  </ul>
                </Grid>
              </div>
            </Grid>
          </div>{" "}
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <hr style={{ width: "25%", size: "3", color: "black" }} />
            <Typography sx={{ fontFamily: "Montserrat" }} variant="h6">
              *all color services include bond builder*
            </Typography>
            <Typography sx={{ fontFamily: "Montserrat" }} variant="h6">
              *all luxury line services will be styled for photos*
            </Typography>
            <Typography sx={{ fontFamily: "Montserrat" }} variant="h6">
              *PERSONALIZED PRICING*
            </Typography>
            <Typography sx={{ fontFamily: "Montserrat" }} variant="h6">
              Based on budget, time, and guest's inspiration
            </Typography>
            <Typography sx={{ fontFamily: "Montserrat" }} variant="h6">
              *$110/Hour*
            </Typography>
          </div>
        </Grid>
        <Grid
          sx={{
            borderRadius: "20px",
            backgroundColor: "hsl(21, 50%, 71%, 0.6)",
          }}
          item
          xs={3}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {" "}
            <Typography sx={{ fontFamily: "Montserrat" }} variant="h3">
              THERAPEUTIC
            </Typography>
            <hr style={{ width: "50%", size: "3", color: "black" }} />
            <Typography sx={{ fontFamily: "Montserrat" }} variant="h5">
              Hair and Scalp Treatments
            </Typography>
            <br />
            <Typography sx={{ fontFamily: "Montserrat" }} variant="h5">
              Scalp Therapy
            </Typography>
            <br />
            <Typography sx={{ fontFamily: "Montserrat" }} variant="body">
              Relax in a padded massage bed and receive :
            </Typography>
            <ul>
              <li sx={{ fontFamily: "Montserrat" }} variant="body">
                Fresh Lavendar Aromatherpay
              </li>
              <li sx={{ fontFamily: "Montserrat" }} variant="body">
                Dry Brushing
              </li>
              <li sx={{ fontFamily: "Montserrat" }} variant="body">
                Charcoal Detox Oil Scalp Massage
              </li>
              <li sx={{ fontFamily: "Montserrat" }} variant="body">
                Eucalyptus Steam
              </li>
              <li sx={{ fontFamily: "Montserrat" }} variant="body">
                Infared Healing/Warmth
              </li>
              <li sx={{ fontFamily: "Montserrat" }} variant="body">
                Hand and Forearm Massage
              </li>
              <li sx={{ fontFamily: "Montserrat" }} variant="body">
                Exfoliating & Purifying Shampoo
              </li>
              <li sx={{ fontFamily: "Montserrat" }} variant="body">
                Cooling Conditioner
              </li>
              <li sx={{ fontFamily: "Montserrat" }} variant="body">
                Essential Oil Scalp Tonic
              </li>
            </ul>
            <Typography sx={{ fontFamily: "Montserrat" }} variant="body">
              $90 (1hour)
            </Typography>
            <Typography sx={{ fontFamily: "Montserrat" }} variant="body">
              + Blowout $135
            </Typography>
            <hr style={{ width: "25%", size: "3", color: "black" }} />
            <Typography sx={{ fontFamily: "Montserrat" }} variant="h6">
              Hair Treatments
            </Typography>
            <table>
              {" "}
              <tbody>
                <tr>
                  <td className="tdspacing">Nourishing Mask + Blowout</td>
                  <td className="tdspacing">$65</td>
                </tr>
                <tr>
                  <td className="tdspacing">K18 Treatment + Blowout</td>
                  <td className="tdspacing">$80</td>
                </tr>
              </tbody>
            </table>
          </div>
        </Grid>
      </Grid>
    </>
  )
}

export default Services
