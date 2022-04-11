import React, { useState, useContext, useEffect } from "react"
import { Link, useNavigate } from "react-router-dom"
import { UserContext } from "../UserContext"
import StudentInquiryCard from "./StudentInquiryCard"
import AppointmentCardsAdmin from "./AppointmentCardsAdmin"
import { create } from "@mui/material/styles/createTransitions"
// import Button from "@mui/core/Button"

function AdminPortal() {
  let navigate = useNavigate()
  const { currentUser } = useContext(UserContext)
  const [clicked, setClicked] = useState(false)
  const [firstname, setFirstname] = useState(currentUser.firstname)

  const [salon, setSalon] = useState([])
  const [studentInq, setStudentInq] = useState([])
  const studentInquiries = salon.student_inquiries
  const appointments = salon.appointments
  console.log(appointments)

  useEffect(() => {
    fetch("./salons")
      .then((r) => r.json())

      .then((data) => setSalon(data[0]))
  }, [])

  const createStudentInquiriesCard = studentInquiries?.map((inq) => (
    <StudentInquiryCard
      key={inq.id}
      firstname={inq.firstname}
      lastname={inq.lastname}
      lessonType={inq.lessonType}
      phone={inq.phone}
      travel={inq.travel}
    />
  ))
  const createAppointmentsCardAdmin = appointments?.map((appt) => (
    <AppointmentCardsAdmin
      key={appt.id}
      firstname={appt.firstname}
      lastname={appt.lastname}
      time={appt.time}
      duration={appt.duration}
      deposit={appt.deposit_received}
    />
  ))

  const toggleClicked = () => setClicked((prevstate) => !prevstate)
  function handleClick(e) {
    toggleClicked()
  }

  function handleSubmit(e) {
    e.preventDefault()
    fetch(`/users/${currentUser.id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        firstname: firstname,
      }),
    })
      .then((r) => r.json)
      .then(console.log(firstname))
  }

  return (
    <div>
      <h1>Admin portal</h1>
      <button onClick={handleClick}> Edit My Profile </button>
      {clicked ? (
        <form onSubmit={handleSubmit}>
          <label>Edit firstname</label>
          <input
            value={firstname}
            onChange={(e) => setFirstname(e.target.value)}
          ></input>
          <button onClick={handleSubmit}>Update</button>
        </form>
      ) : null}
      <div>
        <h1>Education Inquiries</h1>
        {createStudentInquiriesCard}
      </div>
      <div>
        <h1> New Guest Inquiries</h1>
        {createAppointmentsCardAdmin}
      </div>
    </div>
  )
}

export default AdminPortal
