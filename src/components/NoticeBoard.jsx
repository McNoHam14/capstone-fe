import React from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import moment from "moment";
import axios from "axios";
import { BE_URL } from "../constant";
import { useSelector } from "react-redux";

const NoticeBoard = ({ events }) => {
  const bookEventHandler = async (eventId) => {
    const res = await axios.post(`${BE_URL}/events/${eventId}/book`, null, {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    });
    console.log(res.data);
  };

  const user = useSelector((state) => {
    return state.userReducer.user;
  });

  return (
    <>
      <Container>
        {events
          .sort((a, b) => new Date(a.time) - new Date(b.time))
          .map((values) => (
            <Row>
              <Col>{moment(values.time).format("DD/MM/YYYY hh:mm")}</Col>
              <Col>
                <Card>
                  <Container>
                    <Row>
                      <Col>{values.category}</Col>
                      <Col>{values?.eventType}</Col>
                      <Col>{values?.eventSubType}</Col>
                      <Col>
                        {values?.participants.length}/{values?.limit}
                      </Col>
                    </Row>
                  </Container>
                </Card>
              </Col>
              <Col>
                {}
                <Button
                  onClick={() => bookEventHandler(values._id)}
                  disabled={
                    values?.booked > values?.limit ||
                    values.participants.includes(user?._id) ||
                    values.user == user?._id
                  }
                >
                  BOOK
                </Button>
              </Col>
            </Row>
          ))}
      </Container>
    </>
  );
};

export default NoticeBoard;
