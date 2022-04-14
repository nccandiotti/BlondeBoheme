import React from "react"
import emailjs from "@emailjs/browser"
document.querySelector("form")
function Email() {
  const form = document.querySelector("form")
  console.log(form)
  function sendEmail(e) {
    e.preventDefault()
    // emailjs
    //   .sendForm(
    //     "service_d8l7rbi",
    //     "template_7b3gddd",
    //     e.target,
    //     "c2exSZS4hXds9sN1eYdnh",
    //     "99a2K4FL3yMM8RdRo"
    //   )
    //   .then((r) => {
    //     console.log(r)
    //   })
    //   .catch((err) => console.log(err))

    emailjs
      .sendForm("service_d8l7rbi", "template_7b3gddd", "99a2K4FL3yMM8RdRo", {
        form,
      })

      .then(
        function (response) {
          console.log("SUCCESS!", response.status, response.text)
        },
        function (error) {
          console.log("FAILED...", error)
        }
      )
  }

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        backgroundImage: "url(../assets/mcm1.png",
      }}
    >
      <h1>Contact Form</h1>
      <form
        className="form"
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundImage: "url(../assets/mcm1.png",
        }}
        onSubmit={sendEmail}
      >
        <label>Name</label>
        <input type="text" name="name" />
        <label>Email</label> <input type="email" name="user_email" />
        <label>Message</label>
        <textarea name="name" rows="4" />
        <input type="submit" value="Send" />
      </form>
    </div>
  )
}

export default Email
