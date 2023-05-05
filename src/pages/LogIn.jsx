import React, { useState } from "react";
import classes from "../styles/LogIn.module.css";
import { Card, Col, Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { MDBBadge, MDBBtn, MDBIcon } from "mdb-react-ui-kit";
import axios from "axios";
import { useDispatch } from "react-redux";
import logo from "../assets/img/catch-A.jpg";

const LogIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const logInHandler = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:4000/users/login", {
        email,
        password,
      });
      localStorage.setItem("token", res.data.token);
      dispatch({
        type: "STORE_USER",
        payload: res.data.user,
      });
    } catch (error) {
      alert(error.response.data);
    }
  };

  return (
    <div className={classes.login_background}>
      <Container>
        <Row>
          <Col md={3}>
            <img className={classes.image_logo} src={logo} alt="catch-A Logo" />
          </Col>
          <Col md={6} className="mt-3">
            <Card className="p-4">
              <h2 className="d-flex align-items-center justify-content-center text-center">
                Login
              </h2>
              <Form onSubmit={logInHandler}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label className="d-flex align-items-center justify-content-center text-center">
                    e-mail
                  </Form.Label>
                  <Form.Control
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                    type="email"
                    placeholder="type your email..."
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label className="d-flex align-items-center justify-content-center text-center">
                    Password
                  </Form.Label>
                  <Form.Control
                    value={password}
                    onChange={(e) => {
                      setPassword(e.target.value);
                    }}
                    type="password"
                    placeholder="type your password..."
                  />
                </Form.Group>
                <div className="d-flex align-items-center justify-content-center text-center mb-4">
                  <Button variant="primary" type="submit">
                    LOGON
                  </Button>
                </div>
              </Form>
              <div>
                <p className="d-flex align-items-center justify-content-center text-center">
                  or Sign Up using...
                </p>
                <div className="d-flex align-items-center justify-content-center text-center mb-4">
                  <span>
                    <i class="bi bi-envelope-at-fill"></i>
                  </span>
                  <span> / </span>
                  <span>
                    <i class="bi bi-google"></i>
                  </span>

                  {/* <MDBBtn className="m-1" style={{ backgroundColor: "#dd4b39" }} href="#">
        <MDBIcon fab icon="google" />
      </MDBBtn>
      https://mdbootstrap.com/docs/react/extended/social-media/#! */}
                </div>
              </div>
            </Card>
          </Col>
          <Col md={3}>
            <img className={classes.image_logo} src={logo} alt="catch-A Logo" />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default LogIn;
