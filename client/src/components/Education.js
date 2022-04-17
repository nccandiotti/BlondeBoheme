import { useState, useRef } from "react"
import StudentLessonForm from "./forms/StudentLessonForm"
import SendEmail from "./forms/SendEmail"
import emailjs from "@emailjs/browser"
import Container from "@mui/material/Container"
import Grid from "@mui/material/Grid"
import Button from "@mui/material/Button"
import Typography from "@mui/material/Typography"
import Email from "./Email"
import face from "../assets/face.png"

function Education() {
  const [clicked, setClicked] = useState(false)
  const toggleClicked = () => setClicked(!clicked)

  function handleClick(e) {
    toggleClicked()
  }

  const form = useRef()

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs
      .sendForm(
        "YOUR_SERVICE_ID",
        "YOUR_TEMPLATE_ID",
        form.current,
        "YOUR_USER_ID"
      )
      .then(
        (result) => {
          console.log(result.text)
        },
        (error) => {
          console.log(error.text)
        }
      )
  }

  return (
    <div>
      <Grid
        container
        spacing={1}
        sx={{
          flexGrow: 1,
          display: "flex",
          flexDirection: "row",
          marginTop: "150px",
          justifyContent: "center",
          alignItems: "center",
          padding: "20px",
        }}
      >
        <Grid
          xs={12}
          item
          sx={{
            borderRadius: "20px",
            padding: "30px",
            margin: "30px",
            backgroundColor: " #cdadaf ",
          }}
        >
          <Typography
            sx={{
              fontFamily: "Sacramento",
              display: "flex",
              justifyContent: "center",
              paddingTop: "20px",
            }}
            variant="h2"
          >
            {" "}
            We Believe in Changing the Status Quo
          </Typography>
          <br />
          <Typography sx={{ fontFamily: "Montserrat" }} variant="h6">
            {" "}
            As stylists, we love education. We take classes year after year to
            perfect our craft; we get so excited and inspired by it. When we get
            back to the salon, we do this amazingly satisfying new technique on
            our clients, and they love it! You walk them up to the front desk,
            and she asks, "How much for today?" And you flounder.
            <br />
          </Typography>{" "}
          <br />
          <Typography sx={{ fontFamily: "Montserrat" }} variant="body">
            {" "}
            You see, we vastly consume education for our technical skills but
            never how to cover our costs, price according to our demand, and
            calculate profit. Let's go back to that scene above for a minute.
          </Typography>{" "}
          <br />
          <Typography sx={{ fontFamily: "Montserrat" }} variant="body">
            {" "}
            Consultation is crucial and quoting pricing before you even drape
            your client. No matter what!
          </Typography>
          <br />
          <Typography sx={{ fontFamily: "Montserrat" }} variant="body">
            {" "}
            That's where we come in.
          </Typography>
          <br />
          <br />
          <Typography sx={{ fontFamily: "Montserrat" }} variant="body">
            {" "}
            We are Lesley and Suzie of Local Lux.u.ry, and we teach you
            profitable techniques to save you time behind the chair and put more
            money in your bank account. We believe in challenging the industry
            status quo, and we can get you started making a profit in your salon
            business with our combined knowledge. Suzie's skills training from
            previous experience as a theory and technical educator and myself
            with the knowledge and expertise from my formal education, together
            we have created the proven formula which you can apply to ANY salon
            service, not just balayage.
          </Typography>
          <br />
          <br />
          <Typography sx={{ fontFamily: "Montserrat" }} variant="h5">
            {" "}
            We teach you the hard and soft skills you need to apply to your
            business today. You'll be able to assess and evaluate the knowledge
            you need to turn a profit, not just break even. So you can make more
            money behind the chair.
          </Typography>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <Button
              sx={{ color: "  #807b67  ", fontWeight: "bold" }}
              onClick={handleClick}
            >
              Interested in learning more? Please send us an inquiry here!
            </Button>
          </div>
          {clicked ? <StudentLessonForm /> : null}
        </Grid>
        <Grid
          xs={12}
          item
          sx={{
            borderRadius: "20px",
            margin: "30px",
            backgroundColor: "#f4eddd",
          }}
        >
          <Typography
            sx={{
              fontFamily: "Sacramento",
              display: "flex",
              justifyContent: "center",
              paddingTop: "20px",
            }}
            variant="h2"
          >
            You can never be overdressed or overeducated:
          </Typography>
          <Typography
            sx={{
              fontFamily: "Montserrat",
              display: "flex",
              justifyContent: "center",
            }}
            variant="h6"
          >
            What We Offer
          </Typography>
          <br />
          {/* -----------------------Grid 2 ----------------------------- */}
          <Grid container spacing={2} sx={{ padding: "30px" }}>
            <Grid item xs={8}>
              <Typography
                sx={{ fontFamily: "Montserrat", fontWeight: "700" }}
                variant="h6"
              >
                Level Up Behind the Chair: One-on-One with @the.blonde.boheme
              </Typography>
              <Typography variant="caption">from $700.00</Typography>
              <br />

              <br />
              <Typography sx={{ fontFamily: "Montserrat" }} variant="body">
                <strong>
                  Class Descriptions: (choose one of the following):{" "}
                </strong>
              </Typography>
              <br />
              <Typography sx={{ fontFamily: "Montserrat" }} variant="body">
                <strong>NBB</strong>- A foolproof application method designed to
                take the guesswork out of sectioning and placement.
              </Typography>
              <br />
              <br />
              <Typography sx={{ fontFamily: "Montserrat" }} variant="body">
                <strong>MDM</strong>- a three-tiered blonding technique designed
                to create low maintenance yet high-impact look.
              </Typography>
              <br />
              <br />
              <Typography sx={{ fontFamily: "Montserrat" }} variant="body">
                <strong>The Works</strong>- A Blueprinted technique layering
                light and depth simultaneously in a single application for
                maximum contrast and dimension.
              </Typography>
              <br />
              <br />
              <Typography sx={{ fontFamily: "Montserrat" }} variant="body">
                <strong>How does it work?</strong>
              </Typography>
              <br />
              <Typography sx={{ fontFamily: "Montserrat" }} variant="body">
                Select your class option from the drop-down menu, and then we
                contact you with dates for you to meet Suzie in her private
                studio in Rochester, NY.
              </Typography>
              <br />
              <br />
              <Typography sx={{ fontFamily: "Montserrat" }} variant="body">
                <strong>What's included?</strong>
              </Typography>
              <br />
              <Typography sx={{ fontFamily: "Montserrat" }} variant="body">
                - Demo on a model
              </Typography>
              <br />
              <Typography sx={{ fontFamily: "Montserrat" }} variant="body">
                - Goodies bag with our favorite things!
              </Typography>
              <br />
              <Typography sx={{ fontFamily: "Montserrat" }} variant="body">
                - DMannequin (provided for hands-on options)
              </Typography>
              <br />
              <br />
              <Typography sx={{ fontFamily: "Montserrat" }} variant="body">
                <strong>Things to note: </strong>
              </Typography>
              <br />
              <Typography sx={{ fontFamily: "Montserrat" }} variant="body">
                -Travel fees are not included. Students are responsible for
                their own travel and accommodations.
              </Typography>
              <div style={{ display: "flex", justifyContent: "center" }}>
                <Button
                  sx={{ color: "#807b67 " }}
                  onClick={() =>
                    window.open(
                      "https://buy.stripe.com/test_fZe7sKfho7Vhe9G8ww"
                    )
                  }
                >
                  <br />
                  Purchase
                </Button>
              </div>
            </Grid>
            <Grid item xs={4}>
              <img
                style={{
                  display: "flex",
                  width: "100%",
                  height: "auto",
                  objectFit: "cover",
                }}
                src={face}
                alt="stock image "
              />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Email />
    </div>
  )
}

export default Education
