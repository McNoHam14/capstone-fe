import React from "react";
// import "../styles/LogIn.module.css";
import { Card, Col, Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const LogIn = () => {
  return (
    <div>
      <Container>
        <Row className="mt-3">
          <Col>
            <Card>
              <h2>Login</h2>
              <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>username / e-mail</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="type your username or email..."
                  />
                  <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                  </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="type your password..."
                  />
                </Form.Group>
                <Button variant="primary" type="submit">
                  LOGON
                </Button>
              </Form>
              <div>
                <p>or Sign Up using...</p>
                <div>
                  <span>FB</span>
                  <span>/EM/</span>
                  <span>GO</span>
                </div>
              </div>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default LogIn;
