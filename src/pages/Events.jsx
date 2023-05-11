import React, { useEffect, useState } from "react";
import Layout from "../components/Layout";

import { Button, Card, Col, Container, Row } from "react-bootstrap";
import moment from "moment";
import axios from "axios";
import { BE_URL } from "../constant";
import { useSelector } from "react-redux";

const Events = () => {
  const [events, setEvents] = useState([]);
  const [participant, setParticipant] = useState([]);

  useEffect(() => {
    getMyEvents();
    myParticipantsEvent();
  }, []);

  const user = useSelector((state) => {
    return state.userReducer.user;
  });

  const getMyEvents = (values) => {
    axios
      .get(`${BE_URL}/events/my/events`, {
        params: { type: "my" },
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      })
      .then((response) => {
        console.log("HOSTED:", response.data);
        setEvents(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const myParticipantsEvent = (values) => {
    axios
      .get(`${BE_URL}/events/my/events`, {
        params: { type: "participant" },
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      })
      .then((response) => {
        console.log("BOOKED:", response.data);
        setParticipant(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <Layout>
      <Container>
        <h3>MY HOSTED EVENTS</h3>
        {events.length &&
          events
            .sort((a, b) => new Date(a.time) - new Date(b.time))
            .map((values) => (
              <Row>
                <Col>{moment(values.time).format("DD/MM/YYYY hh:mm")}</Col>
                <Col>
                  <Card>
                    <Container>
                      <Row>
                        <Col>{values.category}</Col>
                        <hr></hr>
                        <Col>{values?.eventType}</Col>
                        <hr></hr>
                        <Col>{values?.eventSubType}</Col>
                        <hr></hr>
                        <Col>LOCATION : {values?.location.coordinates}</Col>
                        <hr></hr>
                        <Col>£{values?.price}</Col>
                        <hr></hr>
                        <Col>
                          PEOPLE : {values.participants.length}/{values.limit}
                        </Col>
                      </Row>
                    </Container>
                  </Card>
                  <hr></hr>
                </Col>
                <Col>{}</Col>
              </Row>
            ))}
      </Container>
      <Container>
        <h3>MY BOOKED EVENTS</h3>

        {participant.length &&
          participant
            .sort((a, b) => new Date(a.time) - new Date(b.time))
            .map((values) => (
              <Row>
                <Col>{moment(values.time).format("DD/MM/YYYY hh:mm")}</Col>
                <Col>
                  <Card>
                    <Container>
                      <Row>
                        <Col>{values.category}</Col>
                        <hr></hr>
                        <Col>{values?.eventType}</Col>
                        <hr></hr>
                        <Col>{values?.eventSubType}</Col>
                        <hr></hr>
                        <Col>£{values?.price}</Col>
                        <hr></hr>
                        <Col>LOCATION : {values?.location.coordinates}</Col>
                        <hr></hr>
                        <Col>
                          PEOPLE : {values.participants.length}/{values.limit}
                        </Col>
                      </Row>
                    </Container>
                  </Card>
                  <hr></hr>
                </Col>
                <Col>{}</Col>
              </Row>
            ))}
      </Container>
    </Layout>
  );
};

export default Events;
