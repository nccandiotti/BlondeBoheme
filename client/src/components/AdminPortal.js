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
import Alert from "@mui/material/Alert"

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
  const [showAlert, setShowAlert] = useState(false)
  const [salon, setSalon] = useState([])
  const [studentInq, setStudentInq] = useState([])
  const studentInquiries = salon.student_inquiries
  const appointments = salon.appointments
  let date = new Date()

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
  const toggleAlert = () => setShowAlert((prevstate) => !prevstate)

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
    }
  })

  function handleFirstDeleteButton(e) {
    toggleAlert()
  }
  function handleHardDelete(e) {
    // fetch(`/appointments/${id}`, { method: "DELETE" })
  }

  const columns = [
    // { field: "id", headerName: "ID", width: 70 },
    {
      field: "firstName",
      headerName: "First name",
      width: 150,
    },
    { field: "lastName", headerName: "Last name", width: 150 },
    {
      field: "time",
      headerName: "Time",
      type: "string",
      width: 300,
    },
    {
      field: "deposit_received",
      headerName: "Deposit Received",
      type: "boolean",
      width: 100,
    },
    {
      field: "cancel",
      headerName: "Cancel Appointment",
      width: 150,
      renderCell: (params) => (
        <strong>
          {params.value?.getFullYear() ?? ""}
          <Button
            variant="contained"
            color="warning"
            size="small"
            style={{ marginLeft: 16 }}
            onClick={handleFirstDeleteButton}
          >
            Cancel
          </Button>
        </strong>
      ),
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
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography variant="h2" sx={{ fontFamily: "Montserrat" }}>
          Appointments
        </Typography>
        {!showAlert ? null : (
          <Alert severity="warning">
            You are about to delete this appointment - this action{" "}
            <strong> cannot </strong> be undone, are you sure you want to
            proceed?
            <Button onClick={handleHardDelete}>Yes, Cancel Appointment</Button>
            <Button onClick={() => setShowAlert(false)}>Back</Button>
          </Alert>
        )}
        <div style={{ height: 400, width: "100%" }}>
          <DataGrid
            rows={rows}
            columns={columns}
            pageSize={5}
            rowsPerPageOptions={[5]}
            checkboxSelection
          />
        </div>
      </div>
    </div>
  )
}

export default AdminPortal
