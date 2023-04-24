import React from "react";
import "../styles/SideBar.module.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

const SideBar = () => {
  return (
    <>
      <Navbar bg="primary" variant="dark">
        <Container>
          <Navbar.Brand href="#host">HOST/USER</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#feed">FEED</Nav.Link>
            <Nav.Link href="#search">SEARCH</Nav.Link>
            <Nav.Link href="#sports">SPORTS</Nav.Link>
            <Nav.Link href="#family">FAMILY</Nav.Link>
            <Nav.Link href="#culture">CULTURE</Nav.Link>
            <Nav.Link href="#fooddrink">FOOD/DRINK</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default SideBar;
