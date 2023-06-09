import axios from "axios";
import React, { useState } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import classes from "../styles/SignUp.module.css";
import { useDispatch } from "react-redux";
import { BASE_URL, BE_URL } from "../constant";
import hand from "../assets/img/hand.png";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [birthDate, setBirthDate] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const dispatch = useDispatch();

  // const signUpBtnClickHandler = () => {
  //   signUpHandler()
  //   navigate("/profile")}
  // }

  const signUpHandler = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(`${BE_URL}/users/signup`, {
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
    <div className={classes["card-container"]}>
      <Card style={{ width: 600, borderRadius: 30, paddingBottom: 30 }}>
        <h2 className="d-flex align-items-center justify-content-center text-center mt-4 mb-4">
          <b>Sign Up</b>
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
              placeholder="Email.."
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
            <div>
              <img
                // onClick={signUpHandler}
                src={hand}
                alt="hand"
                width={"100px"}
              ></img>
            </div>

            {/* <p className="d-flex align-items-center justify-content-center text-center">
              or Sign Up using...
            </p> */}
            {/* <span>
              <i class="bi bi-google"></i>
            </span> */}
          </div>
        </form>
      </Card>
    </div>
  );
};

export default SignUp;
