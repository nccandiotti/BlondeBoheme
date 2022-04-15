import { useState, useEffect, useContext } from "react"
import AdminPortal from "./AdminPortal"
import UserPortal from "./UserPortal"
import { UserContext } from "../UserContext"
import Grid from "@mui/material/Grid"
import drawing from "../assets/silhouette.png"

function UserHome() {
  // const { id } = useParams()
  const { currentUser } = useContext(UserContext)
  const { setCurrentUser } = useContext(UserContext)
  const [appointmentsArray, setAppointmentsArray] = useState([])

  useEffect(() => {
    fetch(`/me`)
      .then((r) => r.json())
      .then(setCurrentUser)
  }, [])
  useEffect(() => {
    fetch(`/appointments`)
      .then((r) => r.json())
      .then(setAppointmentsArray)
  }, [])
  console.log(currentUser)
  return (
    <>
      <Grid
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
        }}
        container
        spacing={2}
      >
        <Grid item xs={6}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "flex-end",
              fontSize: "30px",
            }}
          >
            <p
              style={{ fontFamily: "MontSerrat" }}
            >{`firstname: ${currentUser.username}`}</p>
            <p style={{ fontFamily: "MontSerrat" }}>
              {`lastname: ${currentUser.lastname}`}{" "}
            </p>
            <p style={{ fontFamily: "MontSerrat" }}>
              {`username: ${currentUser.username}`}{" "}
            </p>
            <p style={{ fontFamily: "MontSerrat" }}>
              {`email: ${currentUser.email}`}{" "}
            </p>
            <p
              style={{ fontFamily: "MontSerrat" }}
            >{`phone: ${currentUser.phone}`}</p>{" "}
          </div>
        </Grid>
        <Grid item xs={6}>
          <img
            style={{ height: "200px", borderRadius: "100px" }}
            src={drawing}
            alt="drawing"
          />
        </Grid>

        {/* bottom of grid container */}
      </Grid>

      {currentUser.admin ? (
        <AdminPortal appointmentsArray={appointmentsArray} />
      ) : (
        <UserPortal appointmentsArray={appointmentsArray} />
      )}
    </>
  )
}

export default UserHome
