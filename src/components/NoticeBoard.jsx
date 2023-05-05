import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";

const NoticeBoard = ({ events }) => {
  return (
    <>
      <Container>
        {events.map((values) => (
          <Row>
            <Col>1 of 6</Col>
            <Col>
              <Card>
                2-5 of 6
                <Container>
                  <Row>
                    <Col>1</Col>
                    <Col>{values.category}</Col>
                    <Col>{values?.eventType}</Col>
                    <Col>4</Col>
                  </Row>
                </Container>
              </Card>
            </Col>
            <Col>6 of 6</Col>
          </Row>
        ))}
      </Container>
    </>
  );
};

export default NoticeBoard;
