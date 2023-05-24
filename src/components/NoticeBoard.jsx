import React from "react";
import { Button, Card, Col, Container, Row, Table } from "react-bootstrap";
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
      <Container
        style={{ background: "#37B5FF", padding: 20, borderRadius: 10 }}
      >
        {events
          .sort((a, b) => new Date(a.time) - new Date(b.time))
          .map((values) => (
            <Row className="mt-3">
              <Col
                style={{ display: "flex", alignItems: "center" }}
                className="fw-bold"
                md={3}
              >
                {moment(values.time).format("DD/MM/YYYY :  hh:mm")}
              </Col>
              <Col>
                <Card style={{ borderRadius: "10px", overflow: "hidden" }}>
                  <Table striped bordered hover size="lg">
                    <thead>
                      <tr>
                        <th>CATEGORY</th>
                        <th>EVENT</th>
                        <th style={{ width: 200 }} width="200px">
                          SUB EVENT
                        </th>
                        <th>LIMIT</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>{values.category}</td>
                        <td>{values?.eventType}</td>
                        <td style={{ width: 200 }} width="200px">
                          {values?.eventSubType}
                        </td>
                        <td>
                          {values?.participants.length}/{values?.limit}
                        </td>
                      </tr>
                    </tbody>
                  </Table>
                </Card>
              </Col>
              <Col
                md={2}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "flex-end",
                }}
              >
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
