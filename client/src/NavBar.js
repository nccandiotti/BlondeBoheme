import { useState, useContext } from "react"
import { Link } from "react-router-dom"

import { UserContext } from "./UserContext"

import { createTheme } from "@mui/material/styles"

function NavBar() {
  const { currentUser } = useContext(UserContext)
  const { setCurrentUser } = useContext(UserContext)

  function handleLogout() {
    fetch("/logout", { method: "DELETE" })

    setCurrentUser("")
  }

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-evenly",
        fontFamily: "Montserrat",
        marginLeft: "80px",
        marginRight: "80px",
        padding: "20px",
      }}
    >
      <Link style={{ fontSize: "20px" }} to={`/`}>
        Home
      </Link>
      <br />
      <Link style={{ fontSize: "20px" }} to={`/login`}>
        Login
      </Link>
      <br />
      {currentUser ? null : (
        <Link style={{ fontSize: "20px" }} to={`/signup`}>
          Sign Up
        </Link>
      )}

      <br />
      <Link style={{ fontSize: "20px" }} to={`/education`}>
        Education
      </Link>
      <Link style={{ fontSize: "20px" }} to={`/policies`}>
        Policies
      </Link>
      <br />

      <br />
      <Link style={{ fontSize: "20px" }} to={`/services`}>
        Services
      </Link>
      <br />
      {currentUser ? (
        <Link
          onClick={handleLogout}
          style={{ fontSize: "20px" }}
          to={`/signup`}
        >
          Log Out
        </Link>
      ) : null}
    </div>
  )
}

export default NavBar
