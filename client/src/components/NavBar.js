import { useContext } from "react"
import { Link } from "react-router-dom"

import { UserContext } from "../UserContext"

function NavBar() {
  const { currentUser } = useContext(UserContext)
  const { setCurrentUser } = useContext(UserContext)

  function handleLogout() {
    fetch("/logout", { method: "DELETE" })
      .then(setCurrentUser(null))
      .then(console.log(currentUser))
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
      <Link
        style={{ fontSize: "20px", textDecoration: "none", color: "black" }}
        to={`/`}
      >
        Home
      </Link>
      <br />
      {currentUser ? (
        <Link
          style={{
            color: "#b5b8a3",
            fontSize: "20px",
            textDecoration: "none",
            color: "black",
          }}
          to={`/login`}
        >
          My Account
        </Link>
      ) : (
        <Link
          style={{
            color: "#b5b8a3",
            fontSize: "20px",
            textDecoration: "none",
            color: "black",
          }}
          to={`/login`}
        >
          Login
        </Link>
      )}

      <br />
      {currentUser ? null : (
        <Link
          style={{ fontSize: "20px", textDecoration: "none", color: "black" }}
          to={`/signup`}
        >
          Sign Up
        </Link>
      )}

      <br />
      <Link
        style={{ fontSize: "20px", textDecoration: "none", color: "black" }}
        to={`/education`}
      >
        Education
      </Link>
      <Link
        style={{ fontSize: "20px", textDecoration: "none", color: "black" }}
        to={`/policies`}
      >
        Policies
      </Link>
      <br />

      <br />
      <Link
        style={{ fontSize: "20px", textDecoration: "none", color: "black" }}
        to={`/services`}
      >
        Services
      </Link>
      <br />
      {currentUser ? (
        <Link
          onClick={handleLogout}
          style={{ fontSize: "20px", textDecoration: "none", color: "black" }}
          to={`/signup`}
        >
          Log Out
        </Link>
      ) : null}
    </div>
  )
}

export default NavBar
