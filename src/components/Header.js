import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Header(){
    return(<header>
          <Navbar bg="primary" variant="dark" className="m--3 p-3 text-bold">
        <Container>
          <Navbar.Brand href="#home">Quin Elson</Navbar.Brand>
          <Nav className="ml-auto ">
            <Nav.Link href="#About">About</Nav.Link>
            <Nav.Link href="#Contact">Contact</Nav.Link>
            <Nav.Link href="#Portfolio">Portfolio</Nav.Link>
            <Nav.Link href="#Resume">Resume</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </header>)
}


export default Header;
