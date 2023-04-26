import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";

const SignUp = () => {
  return (
    <div>
      <Container>
        <Row>
          <Col>
            <Card>
              <h2>Sign Up</h2>
              <form>
                <input
                  type="text"
                  placeholder="First name..."
                  //   value=
                  //   onChange=
                />
                <input
                  type="text"
                  placeholder="Last name..."
                  //   value=
                  //   onChange=
                />
                <input
                  type="text"
                  placeholder="Birthdate..."
                  //   value=
                  //   onChange=
                />
                <input
                  type="text"
                  placeholder="Username / email"
                  //   value=
                  //   onChange=
                />
                <input
                  type="password"
                  placeholder="Password"
                  //   value=
                  //   onChange=
                />
                <button>ICON</button>
              </form>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default SignUp;
