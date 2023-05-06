import React from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import moment from "moment";
const NoticeBoard = ({ events }) => {
  return (
    <>
      <Container>
        {events.map((values) => (
          <Row>
            <Col>{moment(values.time).format("DD/MM/YYYY hh:mm")}</Col>
            <Col>
              <Card>
                <Container>
                  <Row>
                    <Col>1</Col>
                    <Col>{values.category}</Col>
                    <Col>{values?.eventType}</Col>
                    <Col>{values?.eventSubType}</Col>
                  </Row>
                </Container>
              </Card>
            </Col>
            <Col>
              {}
              <Button>BOOK</Button>
            </Col>
          </Row>
        ))}
      </Container>
    </>
  );
};

export default NoticeBoard;
