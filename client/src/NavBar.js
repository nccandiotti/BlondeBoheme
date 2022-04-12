import { useState, useContext } from "react"
import { Link } from "react-router-dom"
// import AppBar from "@mui/material/AppBar"
// import Box from "@mui/material/Box"
// import Toolbar from "@mui/material/Toolbar"
// import IconButton from "@mui/material/IconButton"
// import Typography from "@mui/material/Typography"
// import Menu from "@mui/material/Menu"
// import Container from "@mui/material/Container"
// import Button from "@mui/material/Button"
// import Tooltip from "@mui/material/Tooltip"
// import MenuItem from "@mui/material/MenuItem"
import { UserContext } from "./UserContext"

import { createTheme } from "@mui/material/styles"

// const pages = ["/", "signup", "home"]
// const settings = ["Profile", "Logout"]

function NavBar() {
  const { currentUser } = useContext(UserContext)
  const { setCurrentUser } = useContext(UserContext)

  function handleLogout() {
    fetch("/logout", { method: "DELETE" })

    console.log(currentUser)
    setCurrentUser("")
  }

  //   function handleSelect(e) {
  //     const path = e.target.textContent.toLowerCase()
  //     if (path === "profile" && currentUser) {
  //       navigate("/profile")
  //     } else if (!currentUser) {
  //       navigate("/login")
  //     } else if (path === "logout") {
  //       AppAdapter.logout()
  //       setCurrentUser(null)
  //       navigate("/home")
  //     }
  //   }

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        fontFamily: "Montserrat",
        marginLeft: "80px",
        marginRight: "80px",
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
      <Link style={{ fontSize: "20px" }} to={`/signup`}>
        Sign Up
      </Link>
      <br />
      <Link style={{ fontSize: "20px" }} to={`/education`}>
        Education
      </Link>
      <Link style={{ fontSize: "20px" }} to={`/policies`}>
        Policies
      </Link>
      <br />
      <Link style={{ fontSize: "20px" }} to={`/about`}>
        About
      </Link>
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

    //   <Link />
    //   <Link />
    //   <Link />
    // <ThemeProvider theme={theme}>
    //   <div className="nav">
    //     <AppBar position="static">
    //       <Container maxWidth="100%">
    //         <Toolbar disableGutters>
    //           <Typography
    //             variant="h6"
    //             noWrap
    //             component="div"
    //             sx={{
    //               mr: 2,
    //               paddingLeft: 0,
    //               marginLeft: 0,
    //               display: {
    //                 xs: "none",
    //                 md: "flex",
    //                 justifyContent: "flex-start",
    //               },
    //             }}
    //           >
    //             <Link
    //               style={{
    //                 textDecoration: "none",
    //                 color: "white",
    //               }}
    //               to={`/`}
    //             >
    //               Website name
    //             </Link>
    //           </Typography>

    //           <Box
    //             sx={{
    //               flexGrow: 1,
    //               display: {
    //                 xs: "none",
    //                 md: "flex",
    //                 justifyContent: "flex-start",
    //               },
    //             }}
    //           >
    //             {pages.map((page) => (
    //               <Button
    //                 key={page}
    //                 onClick={handleCloseNavMenu}
    //                 sx={{
    //                   my: 2,
    //                   color: "white",
    //                   display: "flex",
    //                   padding: "0 30px",
    //                 }}
    //               >
    //                 <Link
    //                   style={{
    //                     color: "white",
    //                     fontSize: "20px",
    //                     textDecoration: "none",
    //                   }}
    //                   to={`/${page}`}
    //                 >
    //                   {page}
    //                 </Link>
    //               </Button>
    //             ))}
    //           </Box>

    //           <Box sx={{ flexGrow: 0 }}>
    //             <Tooltip title="Open settings">
    //               <IconButton
    //                 onClick={handleOpenUserMenu}
    //                 sx={{ p: 0 }}
    //               ></IconButton>
    //             </Tooltip>
    //             <Menu
    //               sx={{ mt: "45px" }}
    //               id="menu-appbar"
    //               anchorEl={anchorElUser}
    //               anchorOrigin={{
    //                 vertical: "top",
    //                 horizontal: "right",
    //               }}
    //               keepMounted
    //               transformOrigin={{
    //                 vertical: "top",
    //                 horizontal: "right",
    //               }}
    //               open={Boolean(anchorElUser)}
    //               onClose={handleCloseUserMenu}
    //             >
    //               {settings.map((setting) => (
    //                 <MenuItem key={setting} onClick={handleCloseUserMenu}>
    //                   <Typography textAlign="center">
    //                     {/* <Typography onClick={handleSelect} textAlign="center"> */}
    //                     {setting}
    //                   </Typography>
    //                 </MenuItem>
    //               ))}
    //             </Menu>
    //           </Box>
    //         </Toolbar>
    //       </Container>
    //     </AppBar>
    //   </div>
    // </ThemeProvider>
  )
}

export default NavBar
