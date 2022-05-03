import { useState, useEffect, useContext } from "react"
import AdminPortal from "./AdminPortal"
import UserPortal from "./UserPortal"
import { UserContext } from "../../UserContext"
import Grid from "@mui/material/Grid"
import drawing from "../../assets/silhouette.png"

function UserHome() {
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

  return (
    <>
      <Grid
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          padding: "20px",
        }}
        container
        spacing={2}
      >
        <div
          className="blurb"
          style={{
            flexDirection: "row",
            maxWidth: "60%",
            paddingRight: "15px",
          }}
        >
          <Grid item xs={6}>
            <img
              style={{
                height: "300px",
                borderRadius: "100px",
                float: "right",
              }}
              src={drawing}
              alt="drawing"
            />
          </Grid>
          <Grid item xs={6}>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                fontSize: "30px",
              }}
            >
              <p
                style={{ fontFamily: "MontSerrat", fontSize: "1.5vw" }}
              >{`firstname: ${currentUser ? currentUser.firstname : ""}`}</p>
              <p style={{ fontFamily: "MontSerrat", fontSize: "1.5vw" }}>
                {`lastname: ${currentUser ? currentUser.lastname : ""}`}{" "}
              </p>
              <p style={{ fontFamily: "MontSerrat", fontSize: "1.5vw" }}>
                {`username: ${currentUser ? currentUser.username : ""}`}{" "}
              </p>
              <p style={{ fontFamily: "MontSerrat", fontSize: "1.5vw" }}>
                {`email: ${currentUser ? currentUser.email : ""}`}{" "}
              </p>
              <p
                style={{ fontFamily: "MontSerrat", fontSize: "1.5vw" }}
              >{`phone: ${currentUser.phone}`}</p>{" "}
            </div>
          </Grid>
        </div>
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
