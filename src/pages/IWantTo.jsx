import React from "react";
import "../styles/IWantTo.module.css";
import Button from "react-bootstrap/Button";
import { Card, Col, Container, Row } from "react-bootstrap";
import classes from "../styles/IWantTo.module.css";

const IWantTo = () => {
  return (
    <div className={classes.iwantto_background}>
      <div className="d-grid gap-2">
        <Button variant="primary" size="lg">
          I WANT TO...
        </Button>
      </div>

      <Container>
        <Row>
          <Col>
            1 of 2
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src="holder.js/100px180" />
              <Card.Body>
                <Card.Title>HOST</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            2 of 2
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src="holder.js/100px180" />
              <Card.Body>
                <Card.Title>USER</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default IWantTo;
