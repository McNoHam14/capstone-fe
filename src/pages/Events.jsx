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
      .then(async (response) => {
        for (let event of response.data) {
          const res = await axios.get(
            `https://api.geoapify.com/v1/geocode/reverse?lat=${event.location.coordinates[1]}&lon=${event.location.coordinates[0]}&apiKey=4a8bda9d94034af59221ce36698501b6`
          );
          // console.log(res.data);
          event.address = res.data.features[0].properties;
        }
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

  const getAddress = async () => {};

  return (
    <Layout>
      <Container>
        <Row>
          <Col md={6}>
            {events.length ? (
              events
                .sort((a, b) => new Date(a.time) - new Date(b.time))
                .map((values, index) => (
                  <Row>
                    <Col
                      md={3}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        fontWeight: "bold",
                      }}
                    >
                      {moment(values.time).format("DD/MM/YYYY hh:mm")}
                    </Col>
                    <Col>
                      {index === 0 && (
                        <h3 style={{ textAlign: "center" }}>
                          MY HOSTED EVENTS
                        </h3>
                      )}

                      <Card style={{ width: "100%" }}>
                        <Container style={{ width: "100%" }}>
                          <Row>
                            <Col className="pt-2 pb-2">
                              <b style={{ marginRight: 10 }}>CATEGORY :</b>
                              {values.category}
                            </Col>
                            <hr></hr>
                            <Col className="pt-2 pb-2">
                              <b style={{ marginRight: 10 }}>EVENT TYPE :</b>
                              {values?.eventType}
                            </Col>
                            <hr></hr>
                            <Col className="pt-2 pb-2">
                              <b style={{ marginRight: 10 }}>
                                SUB EVENT TYPE :
                              </b>
                              {values?.eventSubType}
                            </Col>
                            <hr></hr>
                            <Col className="pt-2 pb-2">
                              <b style={{ marginRight: 10 }}>LOCATION :</b>{" "}
                              {values?.address.address_line1}
                              <hr></hr>
                              {values?.address.address_line2}
                            </Col>
                            <hr></hr>
                            <Col className="pt-2 pb-2">
                              <b style={{ marginRight: 10 }}>PRICE :</b>£
                              {values?.price}
                            </Col>
                            <hr></hr>
                            <Col className="pt-2 pb-2">
                              <b style={{ marginRight: 10 }}>PEOPLE :</b>
                              {values.participants.length}/{values.limit}
                            </Col>
                          </Row>
                        </Container>
                      </Card>
                      <hr style={{ color: "black" }}></hr>
                    </Col>
                  </Row>
                ))
            ) : (
              <React.Fragment>
                <h3 style={{ textAlign: "center" }}>MY HOSTED EVENTS</h3>
                <h3
                  style={{
                    color: "red",
                    justifyContent: "center",
                    textAlign: "center",
                  }}
                >
                  No Hosted Events Yet...
                </h3>
              </React.Fragment>
            )}
          </Col>
          <Col md={6}>
            {participant.length ? (
              participant
                .sort((a, b) => new Date(a.time) - new Date(b.time))
                .map((values, index) => (
                  <Row>
                    <Col
                      md={3}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        fontWeight: "bold",
                      }}
                    >
                      {moment(values.time).format("DD/MM/YYYY hh:mm")}
                    </Col>
                    <Col>
                      {index === 0 && (
                        <h3 style={{ textAlign: "center" }}>
                          MY BOOKED EVENTS
                        </h3>
                      )}

                      <Card style={{ width: "100%" }}>
                        <Container style={{ width: "100%" }}>
                          <Row>
                            <Col className="pt-2 pb-2">
                              <b style={{ marginRight: 10 }}>CATEGORY :</b>
                              {values.category}
                            </Col>
                            <hr></hr>
                            <Col className="pt-2 pb-2">
                              <b style={{ marginRight: 10 }}>EVENT TYPE :</b>
                              {values?.eventType}
                            </Col>
                            <hr></hr>
                            <Col className="pt-2 pb-2">
                              <b style={{ marginRight: 10 }}>
                                SUB EVENT TYPE :
                              </b>
                              {values?.eventSubType}
                            </Col>
                            <hr></hr>
                            <Col className="pt-2 pb-2">
                              <b style={{ marginRight: 10 }}>LOCATION :</b>{" "}
                              {values?.location.coordinates}
                            </Col>
                            <hr></hr>
                            <Col className="pt-2 pb-2">
                              <b style={{ marginRight: 10 }}>PRICE :</b>£
                              {values?.price}
                            </Col>
                            <hr></hr>
                            <Col className="pt-2 pb-2">
                              <b style={{ marginRight: 10 }}>PEOPLE :</b>
                              {values.participants.length}/{values.limit}
                            </Col>
                          </Row>
                        </Container>
                      </Card>
                      <hr style={{ color: "black" }}></hr>
                    </Col>
                  </Row>
                ))
            ) : (
              <React.Fragment>
                <h3 style={{ textAlign: "center" }}>MY BOOKED EVENTS</h3>
                <h3
                  style={{
                    color: "red",
                    justifyContent: "center",
                    textAlign: "center",
                  }}
                >
                  No Booked Events Yet...
                </h3>
              </React.Fragment>
            )}
          </Col>
        </Row>
      </Container>
    </Layout>
  );
};

export default Events;
