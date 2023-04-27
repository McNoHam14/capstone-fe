import React, { useState } from "react";
import classes from "../styles/LogIn.module.css";
import { Card, Col, Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { MDBBadge, MDBBtn, MDBIcon } from "mdb-react-ui-kit";
import axios from "axios";

const LogIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const logInHandler = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:4000/users/login", {
        email,
        password,
      });
      localStorage.setItem("token", res.data.token);
    } catch (error) {
      alert(error.response.data);
    }
  };

  return (
    <div>
      <Container>
        <Row className="mt-3">
          <Col></Col>
          <Col>
            <Card>
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
                <Button variant="primary" type="submit">
                  LOGON
                </Button>
              </Form>
              <div>
                <p className="d-flex align-items-center justify-content-center text-center">
                  or Sign Up using...
                </p>
                <div className="d-flex align-items-center justify-content-center text-center">
                  <span>FB</span>
                  <span>/EMAIL/</span>
                  <span>GOOGLE</span>
                  {/* <MDBBtn className="m-1" style={{ backgroundColor: "#dd4b39" }} href="#">
        <MDBIcon fab icon="google" />
      </MDBBtn>
      https://mdbootstrap.com/docs/react/extended/social-media/#! */}
                </div>
              </div>
            </Card>
          </Col>
          <Col></Col>
        </Row>
      </Container>
    </div>
  );
};

export default LogIn;
