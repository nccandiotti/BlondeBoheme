import { useState, useEffect, useContext } from "react"
import AdminPortal from "./AdminPortal"
import UserPortal from "./UserPortal"
import { UserContext } from "../UserContext"

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

  return (
    <div>
      <p>{`firstname: ${currentUser.username}`}</p>
      <p>{`lastname: ${currentUser.lastname}`} </p>
      <p>{`username: ${currentUser.username}`} </p>
      <p>{`email: ${currentUser.email}`} </p>
      <p>{`phone: ${currentUser.phone}`}</p>
      {currentUser.admin ? <p>I'm an admin</p> : <p>Guest</p>}
      {currentUser.admin ? (
        <AdminPortal appointmentsArray={appointmentsArray} />
      ) : (
        <UserPortal appointmentsArray={appointmentsArray} />
      )}
    </div>
  )
}

export default UserHome
