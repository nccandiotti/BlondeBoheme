import React, { useState, useContext, useEffect } from "react"
import { Link, useNavigate } from "react-router-dom"
import { UserContext } from "../UserContext"
// import Button from "@mui/core/Button"

function AdminPortal() {
  let navigate = useNavigate()
  const { currentUser } = useContext(UserContext)
  console.log(currentUser)

  const [salon, setSalon] = useState([])
  const [studentInq, setStudentInq] = useState([])
  const studentInquiries = salon.student_inquiries
  const appointments = salon.appointments
  useEffect(() => {
    fetch("./salons")
      .then((r) => r.json())
      // .then((data) => console.log(data[0]))
      .then((data) => setSalon(data[0]))
  }, [])

  console.log(studentInquiries)
  return (
    <div>
      <h1>Admin portal</h1>
      <div>
        <h1>Education Inquiries</h1>
      </div>
      <div>
        <h1> New Guest Inquiries</h1>
      </div>
    </div>
  )
}

export default AdminPortal
