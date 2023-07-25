import React, { useState } from 'react';
import './NavBarList.css';
import { ThemeContext } from '../../App';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import ReactSwitch from 'react-switch';
import Dropdown from 'react-bootstrap/Dropdown';
import ProfileModal from '../screens/Profile';
import LogoutButton from '../Logout';
import { useAuth0 } from '@auth0/auth0-react';

function NavBarList() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showModal, setShowModal] = useState(false); 
  const { user } = useAuth0(); 

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  const handleToggleModal = () => {
    setShowModal((prevState) => !prevState);
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
                <Nav.Link href="/favorite">Favorite Art</Nav.Link>
              </Nav>
              <div className="switch">
                <ReactSwitch onChange={toggleTheme} checked={theme === 'dark'} />
              </div>
              <div className="user-info">
                <Dropdown show={menuOpen} alignRight>
                  <Dropdown.Toggle variant="link" id="user-dropdown-toggle" onClick={handleMenuToggle}>
                    {user?.picture && <img src={user.picture} alt={user.name} className="navbar-user-image" />}
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    <Dropdown.Item>{user?.name}</Dropdown.Item>
                    <Dropdown.Item onClick={handleToggleModal}>Your Profile</Dropdown.Item>
                    <Dropdown.Item>
                      <LogoutButton />
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </div>
            </Container>
          </Navbar>
          <ProfileModal showModal={showModal} handleToggleModal={handleToggleModal} />
        </div>
      )}
    </ThemeContext.Consumer>
  );
}

export default NavBarList;







