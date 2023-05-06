import React from "react";
import classes from "../styles/Layout.module.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Button } from "react-bootstrap";
import axios from "axios";
import { useDispatch } from "react-redux";

const Layout = ({ children, isDisplay = true }) => {
  const dispatch = useDispatch();

  const signOutHandler = async () => {
    localStorage.removeItem("token");
    dispatch({
      type: "REMOVE_USER",
      payload: null,
    });
  };
  if (isDisplay)
    return (
      <div>
        <div className={classes.navbar}>
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
        </div>

        <div className={classes.container}>
          <div className={classes.sidebar}>
            <Button variant="primary">HOST/USER</Button>
            <Button variant="primary">FEED</Button>
            <Button variant="primary">SEARCH</Button>
            <hr></hr>
            <Button variant="primary">SPORTS</Button>
            <Button variant="primary">FAMILY</Button>
            <Button variant="primary">CULTURE</Button>
            <Button variant="primary">FOOD/DRINK</Button>
            <hr></hr>
            <Button onClick={signOutHandler} variant="secondary">
              LOG OUT
            </Button>
          </div>

          <div>
            {/* page */}
            {children}
          </div>
        </div>
      </div>
    );
  else return <div>{children}</div>;
};

export default Layout;
