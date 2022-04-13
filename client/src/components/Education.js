import { useState, useRef } from "react"
import StudentLessonForm from "./forms/StudentLessonForm"
import SendEmail from "./forms/SendEmail"
import emailjs from "@emailjs/browser"
import Container from "@mui/material/Container"
import Grid from "@mui/material/Grid"
import Typography from "@mui/material/Typography"

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
      <button onClick={handleClick}>Request Eduction</button>
      {clicked ? <StudentLessonForm /> : null}
      <form ref={form} onSubmit={sendEmail}>
        <label>Name</label>
        <input type="text" name="user_name" />
        <label>Email</label>
        <input type="email" name="user_email" />
        <label>Message</label>
        <textarea name="message" />
        <input type="submit" value="Send" />
      </form>
      <div sx={{ backgroundColor: "white" }}> hi</div>
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
        spacing={2}
      >
        <Grid xs={6} item sx={{ margin: "30px", backgroundColor: "white" }}>
          <Typography variant="h2">
            {" "}
            We Believe in Changing the Status Quo
          </Typography>
          <Typography variant="h6">
            {" "}
            As stylists, we love education. We take classes year after year to
            perfect our craft; we get so excited and inspired by it. When we get
            back to the salon, we do this amazingly satisfying new technique on
            our clients, and they love it! You walk them up to the front desk,
            and she asks, "How much for today?" And you flounder.
            <br />
          </Typography>{" "}
          <br />
          <Typography variant="body">
            {" "}
            You see, we vastly consume education for our technical skills but
            never how to cover our costs, price according to our demand, and
            calculate profit. Let's go back to that scene above for a minute.
          </Typography>{" "}
          <br />
          <Typography variant="body">
            {" "}
            Consultation is crucial and quoting pricing before you even drape
            your client. No matter what!
          </Typography>
          <br />
          <Typography variant="body"> That's where we come in.</Typography>
          <br />
          <Typography variant="body">
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
          <Typography variant="h6">
            We teach you the hard and soft skills you need to apply to your
            business today. You'll be able to assess and evaluate the knowledge
            you need to turn a profit, not just break even. So you can make more
            money behind the chair.
          </Typography>
        </Grid>
        <Grid xs={6} item sx={{ margin: "30px", backgroundColor: "white" }}>
          <Typography variant="h2">
            You can never be overdressed or overeducated:
          </Typography>
          <Typography variant="h6">What We Offer</Typography>
          <Typography variant="h6">Option 1</Typography>
          <Typography variant="h6">Option 2</Typography>
        </Grid>
      </Grid>
    </div>
  )
}

export default Education
