import { useState, useEffect, useContext } from "react"
import { userContext } from "./UserContext"

import { useParams } from "react-router-dom"
import { UserContext } from "./UserContext"

function UserHome() {
  const { id } = useParams()
  const { currentUser } = useContext(UserContext)
  const { setCurrentUser } = useContext(UserContext)

  useEffect(() => {
    fetch(`/me`)
      .then((r) => r.json())
      .then(setCurrentUser)
      .then(console.log(currentUser))
  }, [])

  return (
    <div>
      <p>{`firstname: ${currentUser.username}`}</p>
      <p>{`lastname: ${currentUser.last_name}`} </p>
      <p>{`username: ${currentUser.username}`} </p>
      <p>{`email: ${currentUser.email}`} </p>
      <p>{`phone: ${currentUser.phone}`}</p>
    </div>
  )
}

export default UserHome
