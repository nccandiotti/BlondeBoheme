import React, { useState, useContext, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { UserContext } from "../UserContext"
import StudentInquiryCard from "./StudentInquiryCard"

import Button from "@mui/material/Button"
import CssBaseline from "@mui/material/CssBaseline"
import TextField from "@mui/material/TextField"

import FormControl from "@mui/material/FormControl"

import Grid from "@mui/material/Grid"
import Box from "@mui/material/Box"

import Modal from "@mui/material/Modal"

import Typography from "@mui/material/Typography"
import Container from "@mui/material/Container"
import { DataGrid } from "@mui/x-data-grid"

function AdminPortal() {
  let navigate = useNavigate()
  const { currentUser } = useContext(UserContext)
  const [clicked, setClicked] = useState(false)
  const [firstname, setFirstname] = useState(currentUser.firstname)
  const [lastname, setLastname] = useState(currentUser.lastname)
  const [email, setEmail] = useState(currentUser.email)
  const [phone, setPhone] = useState(currentUser.phone)

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

  const toggleClicked = () => setClicked((prevstate) => !prevstate)

  function handleSubmit(e) {
    e.preventDefault()
    fetch(`/users/${currentUser.id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        firstname: firstname,
        lastname: lastname,
        email: email,
        phone: phone,
      }),
    }).then((r) => r.json)
    handleClose()
  }

  const [open, setOpen] = useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  }

  const rows = appointments?.map((appt) => {
    return {
      id: appt.id,
      lastName: appt.lastname,
      firstName: appt.firstname,
      time: appt.time,
      desposit: appt.deposit_received,
      // { id: {appt.id} lastName: {appt.lastname} firstName: {appt.firstname} age: 42 },
      // { id: {appt.id} lastName: {appt.lastname} firstName: {appt.firstname}  age: 45 },
      // { id: {appt.id} lastName: {appt.lastname}firstName: {appt.firstname}  16 },
      // { id: {appt.id} lastName: {appt.lastname} firstName: {appt.firstname}  age: null },
      // { id: {appt.id} lastName: {appt.lastname} firstName: {appt.firstname} age: 150 },
      // { id: {appt.id} lastName: {appt.lastname} firstName: {appt.firstname} age: 44 },
      // { id: {appt.id} lastName: {appt.lastname} firstName: {appt.firstname}  age: 36 },
      // { id: {appt.id} lastName: {appt.lastname} firstName: {appt.firstname}  age: 65 }
    }
  })

  const columns = [
    // { field: "id", headerName: "ID", width: 70 },
    { field: "firstName", headerName: "First name", width: 130 },
    { field: "lastName", headerName: "Last name", width: 130 },
    {
      field: "time",
      headerName: "Time",
      type: "string",
      width: 90,
    },
    {
      field: "deposit_received",
      headerName: "Deposit Received",
      type: "boolean",
      width: 90,
    },
    {
      field: "fullName",
      headerName: "Full name",
      description: "This column has a value getter and is not sortable.",
      sortable: false,
      width: 160,
      valueGetter: (params) =>
        `${params.row.firstName || ""} ${params.row.lastName || ""}`,
    },
  ]

  return (
    <div>
      <Button onClick={handleOpen}>Edit Profile</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        {/* <ThemeProvider theme={theme}> */}
        <Container component="main" maxWidth="s">
          <CssBaseline />
          <Box
            sx={{
              marginTop: 8,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              backgroundColor: "rgba(255, 255, 255)",
              padding: "40px",
              borderRadius: "20px",
            }}
          >
            <Typography component="h1" variant="h5">
              My Profile Details
            </Typography>

            <FormControl>
              <Box
                component="form"
                noValidate
                onSubmit={handleSubmit}
                sx={{ mt: 3 }}
              >
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      autoComplete="given-name"
                      name="firstName"
                      fullWidth
                      id="firstName"
                      label="First Name"
                      autoFocus
                      value={firstname}
                      onChange={(e) => setFirstname(e.target.value)}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      autoComplete="given-name"
                      name="firstName"
                      fullWidth
                      id="firstName"
                      label="Last Name"
                      autoFocus
                      value={lastname}
                      onChange={(e) => setLastname(e.target.value)}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      name="email"
                      fullWidth
                      id="email"
                      label="Email"
                      autoFocus
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      name="phone"
                      fullWidth
                      id="phone"
                      label="Phone Number"
                      autoFocus
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                    />
                  </Grid>
                </Grid>

                <Button
                  type="submit"
                  onChange={handleSubmit}
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                >
                  Submit
                </Button>
                <Button
                  type="onClick"
                  onChange={() => handleClose()}
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                >
                  cancel
                </Button>
                <Grid container justifyContent="flex-end"></Grid>
              </Box>
            </FormControl>
          </Box>
        </Container>
      </Modal>

      <h1>Admin portal</h1>

      <div>
        <h1>Education Inquiries</h1>
        {createStudentInquiriesCard}
      </div>
      {/* <table>
        <tr>
          <th>Company</th>
          <th>Contact</th>
          <th>Country</th>
        </tr>
        <tr>
          <td>Alfreds Futterkiste</td>
          <td>Maria Anders</td>
          <td>Germany</td>
        </tr>
        <tr>
          <td>Centro comercial Moctezuma</td>
          <td>Francisco Chang</td>
          <td>Mexico</td>
        </tr>
      </table> */}
      <div style={{ height: 400, width: "100%" }}>
        <DataGrid
          rows={rows}
          columns={columns}
          pageSize={5}
          rowsPerPageOptions={[5]}
          checkboxSelection
        />
      </div>
      {/* <div>
        <h1> New Guest Inquiries</h1>

      </div> */}
    </div>
  )
}

export default AdminPortal
