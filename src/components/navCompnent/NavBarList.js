import React, { useState } from 'react';
import './NavBarList.css';
import { ThemeContext } from "../../App";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import ReactSwitch from 'react-switch';
import Dropdown from 'react-bootstrap/Dropdown';
import Image from 'react-bootstrap/Image';
import '../screens/Profile';
import { useAuth0 } from '@auth0/auth0-react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import { Button } from 'react-bootstrap';

function NavBarList() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { user, isAuthenticated,loginWithRedirect } = useAuth0();

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <ThemeContext.Consumer>
      {({ theme, toggleTheme }) => (
        <div>
          <Navbar bg="dark" data-bs-theme="dark">
            <Container>
              <Navbar.Brand>Museumify</Navbar.Brand>
              <Nav className="me-auto">
                <Nav.Link href="/">Home</Nav.Link>
                {isAuthenticated && <Nav.Link href="/favorite">Favorite Art</Nav.Link>}
                {/* The "Favorite Art" link will only be rendered if the user is authenticated */}              </Nav>
              <div className="switch">
                <ReactSwitch onChange={toggleTheme} checked={theme === 'dark'} />
              </div>
              <div className="user-info">
                {isAuthenticated ? (
                  <Dropdown show={menuOpen} alignRight>
                    <Dropdown.Toggle variant="link" id="user-dropdown-toggle" onClick={handleMenuToggle}>
                      {/* You can replace the src attribute with your user profile picture */}
                      <Image src="path_to_your_profile_picture.jpg" roundedCircle width="30" height="30" />
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                      <Dropdown.Item>{user.name}</Dropdown.Item>
                      {/* <Link to="/profile" className="dropdown-item">Profile</Link> */}

                      <Dropdown.Item>Logout</Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                ) : (
                  
                <button onClick={loginWithRedirect}>Log in</button>
                )}
              </div>
            </Container>
          </Navbar>
        </div>
      )}
    </ThemeContext.Consumer>
  );
}

export default NavBarList;
