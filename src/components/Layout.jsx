import React from "react";
import classes from "../styles/Layout.module.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Button } from "react-bootstrap";
import axios from "axios";
import { useDispatch } from "react-redux";
import logo from "../assets/img/catch-A.jpg";
import cloud from "../assets/img/cloud-img.png";
import cloud_logo from "../assets/img/cloud-logo.png";
import { useNavigate } from "react-router-dom";

const Layout = ({ children, isDisplay = true }) => {
  const dispatch = useDispatch();

  const navigate = useNavigate();

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
          <Navbar>
            <Nav style={{ width: "100%" }} className="me-auto">
              <div style={{ width: "80%", display: "flex" }}>
                <div className={classes.navbar_section_container}>
                  <div>
                    <img
                      style={{ width: "100px" }}
                      src={cloud_logo}
                      alt="cloud"
                    />
                  </div>

                  <div
                    style={{
                      position: "absolute",
                      zIndex: 100,
                      top: 10,

                      left: 8,
                    }}
                  >
                    <Navbar.Brand href="/"></Navbar.Brand>
                  </div>
                </div>

                <div className={classes.navbar_section_container}>
                  <div>
                    <img style={{ width: "100px" }} src={cloud} alt="cloud" />
                  </div>
                  <div
                    style={{
                      position: "absolute",
                      zIndex: 100,
                      top: 10,
                      left: 11,
                    }}
                  >
                    <Nav.Link className={classes.navbar_font} href="/profile">
                      Profile
                    </Nav.Link>
                  </div>
                </div>

                <div className={classes.navbar_section_container}>
                  <div>
                    <img style={{ width: "100px" }} src={cloud} alt="cloud" />
                  </div>
                  <div
                    style={{
                      position: "absolute",
                      zIndex: 100,
                      top: 10,
                      left: 11,
                    }}
                  >
                    <Nav.Link className={classes.navbar_font} href="/events">
                      Events
                    </Nav.Link>
                  </div>
                </div>

                <div className={classes.navbar_section_container}>
                  <div>
                    <img style={{ width: "100px" }} src={cloud} alt="cloud" />
                  </div>
                  <div
                    style={{
                      position: "absolute",
                      zIndex: 100,
                      top: 10,
                      left: 11,
                    }}
                  >
                    <Nav.Link className={classes.navbar_font} href="/places">
                      Places
                    </Nav.Link>
                  </div>
                </div>

                {/* <div className={classes.navbar_section_container}>
                  <div>
                    <img style={{ width: "100px" }} src={cloud} alt="cloud" />
                  </div>
                  <div
                    style={{
                      position: "absolute",
                      zIndex: 100,
                      top: 10,
                      left: 4,
                    }}
                  >
                    <Nav.Link className={classes.navbar_font} href="#friends">
                      Friends
                    </Nav.Link> 
                  </div>
                </div> */}
              </div>
              <div
                style={{
                  width: "20%",
                  display: "flex",
                  justifyContent: "flex-end",
                }}
              >
                <div className={classes.navbar_section_container}>
                  <div>
                    <img style={{ width: "100px" }} src={cloud} alt="cloud" />
                  </div>
                  <div
                    style={{
                      position: "absolute",
                      zIndex: 100,
                      top: 12,
                      left: 10,
                      // right: 3,
                    }}
                  >
                    <Nav.Link
                      className={classes.navbar_font_settings}
                      href="#settings"
                    >
                      Settings
                    </Nav.Link>
                  </div>
                </div>
              </div>
            </Nav>
          </Navbar>
        </div>

        <div className={classes.container}>
          <div className={classes.sidebar}>
            <div className={classes.sidebar_content}>
              <div
              // style={{ width: "280px", marginTop: 10, marginLeft: 10 }}
              // className="btn-wrapper mb-2 ml-2 mr-2"
              >
                <Button
                  onClick={() => navigate("/host")}
                  className={classes.btn_wrapper}
                  // style={{ width: "180px", marginTop: 4, marginLeft: 4 }}
                  variant="primary"
                >
                  HOST
                </Button>
              </div>
              <div>
                <Button
                  onClick={() => navigate("/feed")}
                  className={classes.btn_wrapper}
                  variant="primary"
                >
                  FEED
                </Button>
              </div>
              <div>
                {/* <Button className={classes.btn_wrapper} variant="primary">
                  SEARCH
                </Button> */}
              </div>
              <div>
                {/* <Button className={classes.btn_wrapper} variant="primary">
                  N BOARD
                </Button> */}
              </div>
              <hr></hr>

              <div>
                <Button
                  onClick={() => navigate("/feed?category=SPORTS")}
                  className={classes.btn_wrapper}
                  variant="primary"
                >
                  SPORTS
                </Button>
              </div>
              <div>
                <Button
                  onClick={() => navigate("/feed?category=FAMILY")}
                  className={classes.btn_wrapper}
                  variant="primary"
                >
                  FAMILY
                </Button>
              </div>
              <div>
                <Button
                  onClick={() => navigate("/feed?category=CULTURE")}
                  className={classes.btn_wrapper}
                  variant="primary"
                >
                  CULTURE
                </Button>
              </div>
              <div>
                <Button
                  onClick={() => navigate("/feed?category=FOOD/DRINK")}
                  className={classes.btn_wrapper}
                  variant="primary"
                >
                  FOOD/DRINK
                </Button>
              </div>
              <hr></hr>

              <div>
                <Button
                  onClick={signOutHandler}
                  className={classes.btn_wrapper}
                  variant="success"
                >
                  LOG OUT
                </Button>
              </div>
              <hr></hr>

              <div>
                <Button
                  onClick={() => navigate("/admin")}
                  className={classes.btn_wrapper}
                  variant="success"
                >
                  ADMIN
                </Button>
              </div>
            </div>
          </div>

          <div className={classes.content}>
            {/* page */}
            {children}
          </div>
        </div>
      </div>
    );
  else return <div>{children}</div>;
};

export default Layout;
