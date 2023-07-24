import React from 'react';
import './NavBarList.css';
import { ThemeContext } from  "../../App";  
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar'; 
import ReactSwitch from 'react-switch';


function NavBarList(){
    return(
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
                <ReactSwitch
                  onChange={toggleTheme}
                  checked={theme === 'dark'}
                />
              </div>
            </Container>
          </Navbar>
        </div>
      )}
    </ThemeContext.Consumer>
  );
}

export default NavBarList;