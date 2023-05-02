import axios from "axios";
import React, { useState } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import classes from "../styles/SignUp.module.css";
import { useDispatch } from "react-redux";

const SignUp = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [birthDate, setBirthDate] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  const signUpHandler = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:4000/users/signup", {
        firstName,
        lastName,
        birthDate,
        email,
        password,
      });
      localStorage.setItem("token", res.data.token);
      // console.log(res.data);
      dispatch({
        type: "STORE_USER",
        payload: res.data.user,
      });
    } catch (error) {
      alert(error.response.data);
    }
  };

  return (
    <div className="mt-3">
      <Container>
        <Row>
          <Col>
            <Card>
              <h2 className="d-flex align-items-center justify-content-center text-center">
                Sign Up
              </h2>
              <form onSubmit={signUpHandler}>
                <div className="d-flex align-items-center justify-content-center text-center">
                  <input
                    className={classes.sign_up_input}
                    type="text"
                    placeholder="First Name..."
                    value={firstName}
                    onChange={(e) => {
                      setFirstName(e.target.value);
                    }}
                  />
                </div>
                <br></br>
                <div className="d-flex align-items-center justify-content-center text-center">
                  <input
                    className={classes.sign_up_input}
                    type="text"
                    placeholder="Last Name..."
                    value={lastName}
                    onChange={(e) => {
                      setLastName(e.target.value);
                    }}
                  />
                </div>
                <br></br>
                <div className="d-flex align-items-center justify-content-center text-center">
                  <input
                    className={classes.sign_up_input}
                    type="text"
                    placeholder="Date of Birth..."
                    value={birthDate}
                    onChange={(e) => {
                      setBirthDate(e.target.value);
                    }}
                  />
                </div>
                <br></br>
                <div className="d-flex align-items-center justify-content-center text-center">
                  <input
                    className={classes.sign_up_input}
                    type="text"
                    placeholder="email..."
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                  />
                </div>
                <br></br>
                <div className="d-flex align-items-center justify-content-center text-center">
                  <input
                    className={classes.sign_up_input}
                    type="password"
                    placeholder="Password..."
                    value={password}
                    onChange={(e) => {
                      setPassword(e.target.value);
                    }}
                  />
                </div>
                <br></br>
                <div className="d-flex align-items-center justify-content-center text-center">
                  <button className={classes.sign_up_btn}>
                    PUT CLICK ICON HERE
                  </button>
                </div>
              </form>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default SignUp;
