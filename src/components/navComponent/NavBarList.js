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
  // const [showModal, setShowModal] = useState(false);
  const { user, isAuthenticated, loginWithRedirect } = useAuth0();

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  // const handleToggleModal = () => {
  //   setShowModal((prevState) => !prevState);
  // };

  return (
    <ThemeContext.Consumer>
      {({ theme, toggleTheme }) => (
        <div style={{ paddingBottom: "100px" }}>
          <Navbar
            data-bs-theme="dark"
            style={{
              backgroundImage: `url(${image})`,
            }}
          >
            <Container style={{ maxWidth: "100%" }}>
              <img src="/logo.png" alt="Logo" className="logo-image" />
              <Link to="/" style={{ textDecoration: "none" }}>
                <Navbar.Brand
                  style={{ fontFamily: "Megrim", fontSize: "30px" }}
                >
                  Museumify
                </Navbar.Brand>
              </Link>
              <Nav className="me-auto">
                {isAuthenticated && (
                  <Nav.Link
                    href="/favorite"
                    style={{ fontFamily: "DaiBannaSIL" }}
                  >
                    Favorite Art
                  </Nav.Link>
                )}
              </Nav>
              <div className="d-flex align-items-center ml-auto">
                <div className="switch me-3">
                  <ReactSwitch
                    onChange={toggleTheme}
                    checked={theme === "dark"}
                  />
                </div>
                <div className="user-info">
                  {isAuthenticated ? (
                    <Dropdown show={menuOpen} alignRight>
                      <Dropdown.Toggle
                        variant="link"
                        id="user-dropdown-toggle"
                        onClick={handleMenuToggle}
                      >
                        <div className="user-picture-container">
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
