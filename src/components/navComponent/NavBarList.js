import React from 'react'
import './NavBarList.css'; 
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar'; 


function NavBarList(){
    return(
        <div>
            <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand > Museumify </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/favorite">Favorite Art </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
        </div>
    )
}

export default NavBarList;