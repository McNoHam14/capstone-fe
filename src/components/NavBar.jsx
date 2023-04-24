import React from "react";
import "../styles/NavBar.module.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

const NavBar = () => {
  return (
    <>
      <Navbar bg="primary" variant="dark">
        <Container>
          <Navbar.Brand href="#home">LOGO</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#profile">Profile</Nav.Link>
            <Nav.Link href="#places">Places</Nav.Link>
            <Nav.Link href="#events">Events</Nav.Link>
            <Nav.Link href="#friends">Friends</Nav.Link>
            <Nav.Link href="#settings">Settings</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default NavBar;
