import React, { useState } from "react";
import classes from "../styles/LogIn.module.css";
import { Card, Col, Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { MDBBadge, MDBBtn, MDBIcon } from "mdb-react-ui-kit";
import axios from "axios";
import { useDispatch } from "react-redux";
import logo from "../assets/img/catch-A.jpg";
import { useNavigate } from "react-router-dom";

const LogIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const navigate = useNavigate();

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
      navigate("/profile");
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
                  or Sign In/Up using...
                </p>
                <div className="d-flex align-items-center justify-content-center text-center mb-4">
                  <span>
                    <i class="bi bi-envelope-at-fill"></i>
                  </span>
                  <span> / </span>
                  <span>
                    <i class="bi bi-google"></i>
                  </span>

                  <a href="http://localhost:4000/users/auth/google">
                    <Button
                      className="mb-4 w-100"
                      size="lg"
                      style={{ backgroundColor: "#124a9e" }}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="bi bi-google mx-2"
                        viewBox="0 0 16 16"
                      >
                        <path d="M15.545 6.558a9.42 9.42 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.689 7.689 0 0 1 5.352 2.082l-2.284 2.284A4.347 4.347 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.792 4.792 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.702 3.702 0 0 0 1.599-2.431H8v-3.08h7.545z" />
                      </svg>
                      Login with Google
                    </Button>
                  </a>

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
