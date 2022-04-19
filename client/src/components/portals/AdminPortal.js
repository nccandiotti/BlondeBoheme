import React, { useState, useContext, useEffect, useRef } from "react"
import { useNavigate } from "react-router-dom"
import { UserContext } from "../../UserContext"
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
  const selectedAppointment = useRef()
  const { currentUser } = useContext(UserContext)
  const [usersArray, setUsersArray] = useState([])
  const [clicked, setClicked] = useState(false)
  const [firstname, setFirstname] = useState(currentUser.firstname)
  const [lastname, setLastname] = useState(currentUser.lastname)
  const [email, setEmail] = useState(currentUser.email)
  const [phone, setPhone] = useState(currentUser.phone)
  const [showAlert, setShowAlert] = useState(true)
  const [successfulDeleteAlert, setSuccessfulDeleteAlert] = useState(true)
  const [salon, setSalon] = useState([])
  const [studentInq, setStudentInq] = useState([])
  const studentInquiries = salon.student_inquiries
  const [appointments, setAppointments] = useState(salon.appointments)
  const [open, setOpen] = useState(false)
  const [openApptEdit, setOpenApptEdit] = useState(false)
  const [selectedApptid, setSelectedApptid] = useState(0)
  const [selectedApptFirstname, setSelectedApptFirstname] = useState("")
  const [selectedApptLastname, setSelectedApptLastname] = useState("")
  const [selectedApptTime, setSelectedApptTime] = useState("")
  const [selectedGuest, setSelectedGuest] = useState(null)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)
  const handleOpenApptEdit = () => setOpenApptEdit(true)
  const handleCloseApptEdit = () => setOpenApptEdit(false)
  const toggleClicked = () => setClicked((prevstate) => !prevstate)
  const toggleAlert = () => setShowAlert((prevstate) => !prevstate)
  const toggleDeleteSuccessAlert = () => setShowAlert((prevstate) => !prevstate)

  useEffect(() => {
    fetch("./salons")
      .then((r) => r.json())

      .then((data) => setSalon(data[0]))
  }, [])
  useEffect(() => {
    fetch("./appointments")
      .then((r) => r.json())

      .then((data) => setAppointments(data))
  }, [])

  useEffect(() => {
    fetch("./users")
      .then((r) => r.json())
      .then(setUsersArray)
  }, [])

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
  function handleEditAppointment(e) {
    handleOpenApptEdit()
    setSelectedApptFirstname(e.row.firstName)
    setSelectedApptLastname(e.row.lastName)
    setSelectedApptTime(e.row.time)
    setSelectedApptid(e.row.id)
    // _______________________ OMG THIS WORKS ____________________________
    setSelectedGuest(usersArray.find((user) => user.appointments[0]))
    console.log(usersArray.find((user) => user.appointments[0]))
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

  const studentInquiryRows = studentInquiries?.map((inq) => {
    return {
      id: inq.id,
      lastName: inq.lastname,
      firstName: inq.firstname,
      lessonType: inq.lessonType,
      phone: inq.phone,
      travel: inq.travel,
    }
  })

  const studentInquiryColumnns = [
    {
      field: "lastName",
      headerName: "Last Name",
      width: 150,
    },
    { field: "firstName", headerName: "Last Name", width: 150 },
    {
      field: "lessonType",
      headerName: "Lesson Type",
      width: 150,
    },
    {
      field: "phone",
      headerName: "Phone Number",
      width: 200,
    },
    {
      field: "travel",
      headerName: "Travel ?",
      width: 100,
    },
    // {
    //   field: "cancel",
    //   headerName: "Cancel Appointment",
    //   width: 150,
    //   renderCell: (params) => (
    //     <strong>
    //       {params.value?.getFullYear() ?? ""}
    //       <Button
    //         variant="contained"
    //         color="warning"
    //         size="small"
    //         style={{ marginLeft: 16 }}
    //         onClick={handleRemoveInquiry}
    //       >
    //         Cancel
    //       </Button>
    //     </strong>
    //   ),
    // },
  ]
  const columns = [
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
      field: "cancel",
      headerName: "Modify Appointment",
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
            Modify Appointment
          </Button>
        </strong>
      ),
    },
  ]

  function handleFirstDeleteButton(e) {
    toggleAlert()
  }

  function updateApptsArrayAfterDelete(id) {
    const filter = appointments.filter((appt) => appt.id !== id)
    return setAppointments(filter)
  }
  function handleHardDelete(e) {
    updateApptsArrayAfterDelete(selectedApptid)
    fetch(`/appointments/${selectedApptid}`, {
      method: "DELETE",
    }).then(setShowAlert(true))
    handleCloseApptEdit()
  }

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <Button
        sx={{
          backgroundColor: "#b5b8a3",
          borderRadius: "10px",
          color: "white",
        }}
        onClick={handleOpen}
      >
        Edit Profile
      </Button>
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
            <Typography
              sx={{ fontFamily: "Sacramento", color: " #807b67" }}
              // component="h1"
              variant="h2"
            >
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
                  sx={{ mt: 3, mb: 2, backgroundColor: "#b26446 " }}
                >
                  Submit
                </Button>
                <Button
                  type="onClick"
                  onChange={() => handleClose()}
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2, backgroundColor: "#b26446 " }}
                >
                  cancel
                </Button>
                <Grid container justifyContent="flex-end"></Grid>
              </Box>
            </FormControl>
          </Box>
        </Container>
      </Modal>

      {/* ---------------------------------------------------------------- */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          padding: "40px",
        }}
      >
        <Typography variant="h2" sx={{ fontFamily: "Montserrat" }}>
          Student Education Inquiries
        </Typography>

        <div
          style={{
            backgroundColor: "#edccb9",
            height: 400,
            width: "80%",
            display: "flex",
          }}
        >
          <DataGrid
            sx={{ borderColor: "#9f6755", boxShadow: 2 }}
            rows={studentInquiryRows}
            columns={studentInquiryColumnns}
            pageSize={5}
            rowsPerPageOptions={[5]}
            checkboxSelection
          />
        </div>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {/* ---------------------------------------------------------------- */}
        <Typography variant="h2" sx={{ fontFamily: "Montserrat" }}>
          Appointments
        </Typography>

        <div
          style={{
            backgroundColor: "#edccb9",
            height: 400,
            width: "80%",
            display: "flex",
          }}
        >
          <DataGrid
            sx={{ boxShadow: 2, border: "none" }}
            // onSelectionModelChange={}
            onCellClick={handleEditAppointment}
            rows={rows}
            columns={columns}
            pageSize={5}
            rowsPerPageOptions={[5]}
            checkboxSelection
          />
        </div>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <Modal
          open={openApptEdit}
          onClose={handleCloseApptEdit}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box
            sx={{
              marginTop: 8,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "rgba(255, 255, 255)",
              padding: "40px",
              borderRadius: "20px",
              width: "50%",
            }}
          >
            <Typography
              sx={{ fontFamily: "Sacramento" }}
              id="modal-modal-title"
              variant="h3"
            >
              Modify Appointment
            </Typography>
            <br />
            <br />
            <Typography
              id="modal-modal-title"
              variant="body"
              sx={{ fontFamily: "Montserrat" }}
            >{`Guest : ${selectedApptFirstname} ${selectedApptLastname}`}</Typography>
            <Typography
              id="modal-modal-title"
              variant="body"
              sx={{ fontFamily: "Montserrat" }}
            >{`Time : ${selectedApptTime} `}</Typography>
            <Button id="modal-modal-description" sx={{ mt: 2 }}>
              Change time
            </Button>
            {showAlert ? null : (
              <Alert severity="warning">
                You are about to delete this appointment - this action{" "}
                <strong> cannot </strong> be undone, are you sure you want to
                proceed?
                <Button onClick={handleHardDelete}>
                  Yes, Cancel Appointment
                </Button>
                <Button onClick={() => setShowAlert(true)}>Back</Button>
              </Alert>
            )}
            <Button onClick={handleFirstDeleteButton}>
              Cancel This Appointment
            </Button>
            <Typography
              id="modal-modal-title"
              variant="body"
              sx={{ fontFamily: "Montserrat" }}
            >
              Guest Details:{" "}
              <Grid
                container
                spacing={2}
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Grid item xs={2}>
                  {selectedGuest ? (
                    <img
                      src={selectedGuest.user_consults[0].mugshotone.url}
                      alt="image upload"
                      style={{
                        height: "100px",
                        width: "100px",
                        height: "150px",
                        borderRadius: "100px",
                        objectFit: "cover",
                      }}
                    />
                  ) : null}
                </Grid>
                <Grid item xs={2}>
                  {selectedGuest ? (
                    <img
                      src={selectedGuest.user_consults[0].mugshottwo.url}
                      alt="image upload"
                      style={{
                        height: "100px",
                        width: "100px",
                        height: "150px",
                        borderRadius: "100px",
                        objectFit: "cover",
                      }}
                    />
                  ) : null}
                </Grid>
                <Grid item xs={2}>
                  {selectedGuest ? (
                    <img
                      src={selectedGuest.user_consults[0].mugshotthree.url}
                      alt="image upload"
                      style={{
                        height: "100px",
                        width: "100px",
                        height: "150px",
                        borderRadius: "100px",
                        objectFit: "cover",
                      }}
                    />
                  ) : null}
                </Grid>
                <Grid item xs={2}>
                  {selectedGuest ? (
                    <img
                      src={selectedGuest.user_consults[0].mugshotfour.url}
                      alt="image upload"
                      style={{
                        height: "100px",
                        width: "100px",
                        height: "150px",
                        borderRadius: "100px",
                        objectFit: "cover",
                      }}
                    />
                  ) : null}
                </Grid>
                <Grid item xs={2}>
                  {selectedGuest ? (
                    <img
                      src={selectedGuest.user_consults[0].mugshotfive.url}
                      alt="image upload"
                      style={{
                        height: "100px",
                        width: "100px",
                        height: "150px",
                        borderRadius: "100px",
                        objectFit: "cover",
                      }}
                    />
                  ) : null}
                </Grid>
              </Grid>
              <Grid
                container
                spacing={2}
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Grid item xs={2}>
                  {selectedGuest ? (
                    <img
                      src={selectedGuest.user_images[0].picture.url}
                      alt="image upload"
                      style={{
                        height: "100px",
                        width: "100px",
                        height: "150px",
                        borderRadius: "100px",
                        objectFit: "cover",
                      }}
                    />
                  ) : null}
                </Grid>{" "}
                <Grid item xs={2}>
                  {selectedGuest ? (
                    <img
                      src={selectedGuest.user_images[0].picturetwo.url}
                      alt="image upload"
                      style={{
                        height: "100px",
                        width: "100px",
                        height: "150px",
                        borderRadius: "100px",
                        objectFit: "cover",
                      }}
                    />
                  ) : null}
                </Grid>{" "}
              </Grid>
            </Typography>
          </Box>
        </Modal>
      </div>
    </div>
  )
}

export default AdminPortal
