import React, { useState } from "react";
import "./NavBarList.css";
import { ThemeContext } from "../../App";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import ReactSwitch from "react-switch";
import Dropdown from "react-bootstrap/Dropdown";
import ProfileModal from "../screens/Profile";
import LogoutButton from "../Logout";
import { useAuth0 } from "@auth0/auth0-react";

function NavBarList() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const { user, isAuthenticated, loginWithRedirect } = useAuth0();

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  const handleToggleModal = () => {
    setShowModal((prevState) => !prevState);
  };

  return (
    <ThemeContext.Consumer>
      {({ theme, toggleTheme }) => (
        <div style={{paddingBottom:"100px"}}>
          <Navbar data-bs-theme="dark" style={{backgroundColor:'#3E001F'}}>
            <Container style={{maxWidth:"100%"}}>
              <Navbar.Brand>Museumify</Navbar.Brand>
              <Nav className="me-auto">
                <Nav.Link href="/">Home</Nav.Link>
                {isAuthenticated && (
                  <Nav.Link href="/favorite">Favorite Art</Nav.Link>
                )}
              </Nav>
              <div className="switch">
                <ReactSwitch
                  onChange={toggleTheme}
                  checked={theme === "dark"}
                />
              </div>
              <div className="user-info">
              {isAuthenticated ? (
  <Dropdown  show={menuOpen} alignRight>
    <Dropdown.Toggle
      variant="link"
      id="user-dropdown-toggle"
      onClick={handleMenuToggle}
    >
     <div  className="user-picture-container">
  {user?.picture && (
    <img
      src={user.picture}
      alt={user.name}
      className="navbar-user-image"
    />
  )}
</div >
    </Dropdown.Toggle >

    <Dropdown.Menu style={{left:-160}}>
      <Dropdown.Item>{user?.name}</Dropdown.Item>
      <Dropdown.Item onClick={handleToggleModal}>
        Your Profile
      </Dropdown.Item>
      <Dropdown.Divider style={{ borderColor: "lightgray" }} />
      <Dropdown.Item>
        <LogoutButton />
      </Dropdown.Item>
    </Dropdown.Menu>
  </Dropdown>
                ) : (
                  <button onClick={loginWithRedirect} style={{borderRadius:'10px',marginLeft:'5px'}}>Log in</button>
                )}
              </div>
            </Container>
          </Navbar>
          <ProfileModal
            showModal={showModal}
            handleToggleModal={handleToggleModal}
          />
        </div>
      )}
    </ThemeContext.Consumer>
  );
}

export default NavBarList;
