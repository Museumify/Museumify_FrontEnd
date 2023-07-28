import React, { useState } from "react";
import "./NavBarList.css";
import { ThemeContext } from "../../App";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import ReactSwitch from "react-switch";
import Dropdown from "react-bootstrap/Dropdown";
import LogoutButton from "../Logout";
import { useAuth0 } from "@auth0/auth0-react";
import { Link } from "react-router-dom";
import image from "../assets/backgroundImage.png";

function NavBarList() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { user, isAuthenticated, loginWithRedirect } = useAuth0();

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <ThemeContext.Consumer>
      {({ theme, toggleTheme }) => (
        <div style={{ paddingBottom: "20px" }}>
          <Navbar
            data-bs-theme="dark"
            style={{
              backgroundImage: `url(${image})`,
            }}
          >
            <Container style={{ maxWidth: "100%", height: "55px" }}>
              <img src="/logo.png" alt="Logo" className="logo-image" />
              <Link to="/" style={{ textDecoration: "none" }}>
                <Navbar.Brand
                  style={{
                    fontFamily: "Megrim",
                    fontSize: "40px",
                  }}
                >
                  <b>Museumify</b>
                </Navbar.Brand>
              </Link>

              <Nav className="me-auto" style={{ marginLeft: "280px" }}>
                {isAuthenticated && (
                  <Nav.Link
                    href="/favorite"
                    style={{
                      fontFamily: "DaiBannaSIL",
                      color: "white",
                      fontSize: "20px",
                    }}
                  >
                    Favorite Art
                  </Nav.Link>
                )}
                <Nav.Link
                  href="/aboutus"
                  style={{
                    fontFamily: "DaiBannaSIL",
                    color: "white",
                    fontSize: "20px",
                    marginLeft: "35px",
                  }}
                >
                  About Us
                </Nav.Link>
              </Nav>

              <div className="d-flex align-items-center ml-auto ">
                <div className="switch me-3">
                  <ReactSwitch
                    onChange={toggleTheme}
                    checked={theme === "dark"}
                  />
                  {theme === "dark" ? (
                    <i
                      className="fas fa-moon"
                      style={{ color: "#f5efdb", marginLeft: "5px" }}
                    ></i>
                  ) : (
                    <i
                      className="fas fa-sun"
                      style={{ color: "#f5efdb", marginLeft: "5px" }}
                    ></i>
                  )}
                </div>

                <div className="user-info">
                  {isAuthenticated ? (
                    <Dropdown show={menuOpen} alignRight>
                      <Dropdown.Toggle
                        variant="link"
                        id="user-dropdown-toggle"
                        onClick={handleMenuToggle}
                      >
                        <div
                          className="user-picture-container"
                          style={{ marginTop: "20px" }}
                        >
                          {user?.picture && (
                            <img
                              src={user.picture}
                              alt={user.name}
                              className="navbar-user-image"
                            />
                          )}
                        </div>
                      </Dropdown.Toggle>

                      <Dropdown.Menu style={{ left: -160 }}>
                        <Dropdown.Item>{user?.name}</Dropdown.Item>
                        <Dropdown.Item as={Link} to="/user-profile">
                          Your Profile
                        </Dropdown.Item>
                        <Dropdown.Divider
                          style={{ borderColor: "lightgray" }}
                        />
                        <Dropdown.Item></Dropdown.Item>
                        <Dropdown.Item>
                          <LogoutButton />
                        </Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  ) : (
                    <button
                      className="login-button"
                      onClick={loginWithRedirect}
                      style={{
                        borderRadius: "10px",
                        marginLeft: "5px",
                        fontFamily: "DaiBannaSIL",
                      }}
                    >
                      Log in
                    </button>
                  )}
                </div>
              </div>
            </Container>
          </Navbar>
        </div>
      )}
    </ThemeContext.Consumer>
  );
}

export default NavBarList;

// import React, { useState } from "react";
// import "./NavBarList.css";
// import { ThemeContext } from "../../App";
// import Container from "react-bootstrap/Container";
// import Nav from "react-bootstrap/Nav";
// import Navbar from "react-bootstrap/Navbar";
// import ReactSwitch from "react-switch";
// import Dropdown from "react-bootstrap/Dropdown";
// import LogoutButton from "../Logout";
// import { useAuth0 } from "@auth0/auth0-react";
// import { Link } from "react-router-dom";
// import image from "../assets/backgroundImage.png";

// function NavBarList() {
//   const [menuOpen, setMenuOpen] = useState(false);
//   const { user, isAuthenticated, loginWithRedirect } = useAuth0();

//   const handleMenuToggle = () => {
//     setMenuOpen(!menuOpen);
//   };

//   return (
//     <ThemeContext.Consumer>
//       {({ theme, toggleTheme }) => (
//         <div style={{ paddingBottom: "10px" }}>
//           <Navbar
//             data-bs-theme="dark"
//             expand="md"
//             style={{
//               backgroundImage: `url(${image})`,
//             }}
//           >
//             <Container>
//               <Navbar.Brand href="/" style={{ fontFamily: "Megrim", fontSize: "30px" }}>
//                 <img src="/logo.png" alt="Logo" style={{ width: "50px", height: "50px" }} />
//                 <b style={{ marginLeft: "10px" }}>Museumify</b>
//               </Navbar.Brand>
//               <Navbar.Toggle aria-controls="basic-navbar-nav" />
//               <Navbar.Collapse id="basic-navbar-nav">
//                 <Nav className="me-auto">
//                   {isAuthenticated && (
//                     <Nav.Link
//                       href="/favorite"
//                       style={{ fontFamily: "DaiBannaSIL", fontSize: "16px" }}
//                     >
//                       Favorite Art
//                     </Nav.Link>
//                   )}
//                   <Nav.Link
//                     href="/aboutus"
//                     style={{ fontFamily: "DaiBannaSIL", fontSize: "16px" }}
//                   >
//                     About Us
//                   </Nav.Link>
//                 </Nav>
//                 <div className="d-flex align-items-center">
//                   <div className="switch me-3">
//                     <ReactSwitch onChange={toggleTheme} checked={theme === "dark"} />
//                     {theme === "dark" ? (
//                       <i className="fas fa-moon" style={{ color: "#f5efdb", marginLeft: "5px" }}></i>
//                     ) : (
//                       <i className="fas fa-sun" style={{ color: "#f5efdb", marginLeft: "5px" }}></i>
//                     )}
//                   </div>
//                   <div className="user-info">
//                     {isAuthenticated ? (
//                       <Dropdown show={menuOpen} alignRight>
//                         <Dropdown.Toggle
//                           variant="link"
//                           id="user-dropdown-toggle"
//                           onClick={handleMenuToggle}
//                         >
//                           <div className="user-picture-container" style={{ marginTop: "10px" }}>
//                             {user?.picture && (
//                               <img
//                                 src={user.picture}
//                                 alt={user.name}
//                                 className="navbar-user-image"
//                                 style={{ width: "30px", height: "30px", borderRadius: "50%" }}
//                               />
//                             )}
//                           </div>
//                         </Dropdown.Toggle>
//                         <Dropdown.Menu style={{ left: -120 }}>
//                           <Dropdown.Item>{user?.name}</Dropdown.Item>
//                           <Dropdown.Item as={Link} to="/user-profile">
//                             Your Profile
//                           </Dropdown.Item>
//                           <Dropdown.Divider style={{ borderColor: "lightgray" }} />
//                           <Dropdown.Item></Dropdown.Item>
//                           <Dropdown.Item>
//                             <LogoutButton />
//                           </Dropdown.Item>
//                         </Dropdown.Menu>
//                       </Dropdown>
//                     ) : (
//                       <button
//                         className="login-button"
//                         onClick={loginWithRedirect}
//                         style={{
//                           borderRadius: "8px",
//                           marginLeft: "5px",
//                           fontFamily: "DaiBannaSIL",
//                           fontSize: "16px",
//                         }}
//                       >
//                         Log in
//                       </button>
//                     )}
//                   </div>
//                 </div>
//               </Navbar.Collapse>
//             </Container>
//           </Navbar>
//         </div>
//       )}
//     </ThemeContext.Consumer>
//   );
// }

// export default NavBarList;


