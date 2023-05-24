import React from "react";
import "../styles/IWantTo.module.css";
import Button from "react-bootstrap/Button";
import { Card, Col, Container, Row } from "react-bootstrap";
import classes from "../styles/IWantTo.module.css";
import Hand from "../assets/img/hand2.png"
const IWantTo = () =>
{
  return (
    <div className={classes.iwantto_background}>

      <div className="d-flex align-items-center justify-content-center text-center mb-4" >
        <Button variant="primary" type="submit" style={{ borderRadius: 40, width: "100%", backgroundColor: "#124a9e", margin: 20, fontWeight: "bold", padding: 20, fontSize: 30 }}>
          I WANT TO...
        </Button>
      </div>


      <Container>
        <Row >
          <Col style={{display:"flex",justifyContent:"center"}} md={6}>
            <Card style={{ width: "50%", background: "#37B5FF", border: "none" }}>
              <div className="d-flex  justify-content-center text-center" >
                <Button variant="primary" type="submit" style={{ borderRadius: 40, width: "100%", backgroundColor: "#124a9e", margin: 20, marginBottom: 0, fontWeight: "bold", padding: 5, fontSize: 20 }}>
                  HOST
                </Button>
              </div>
              <hr style={{ color: "black" }}></hr>

              <Row style={{ paddingLeft: 20, paddingRight: 20, paddingBottom: 10, cursor: "pointer" }} >
                <Col md={8} style={{ fontSize: 20 }}>
                  SPORTS
                </Col>
                <Col md={4} >
                  <img src={Hand} width={50}></img>
                </Col>

              </Row>

              <Row style={{ paddingLeft: 20, paddingRight: 20, paddingBottom: 10, cursor: "pointer" }} >
                <Col md={8} style={{ fontSize: 20 }}>
                  FOOD & DRINKS
                </Col>
                <Col md={4} >
                  <img src={Hand} width={50}></img>
                </Col>

              </Row>

              <Row style={{ paddingLeft: 20, paddingRight: 20, paddingBottom: 10, cursor: "pointer" }} >
                <Col md={8} style={{ fontSize: 20 }}>
                  FAMILY
                </Col>
                <Col md={4} >
                  <img src={Hand} width={50}></img>
                </Col>

              </Row>

              <Row style={{ paddingLeft: 20, paddingRight: 20, paddingBottom: 10, cursor: "pointer" }} >
                <Col md={8} style={{ fontSize: 20 }}>
                  CULTURE
                </Col>
                <Col md={4} >
                  <img src={Hand} width={50}></img>
                </Col>

              </Row>
            </Card>
          </Col>

          <Col md={6} style={{display:"flex",justifyContent:"center"}}>
            <Card style={{ width: "50%", background: "#5DE1E6", border: "none" }}>
              <div className="d-flex  justify-content-center text-center" >
                <Button variant="primary" type="submit" style={{ borderRadius: 40, width: "100%", backgroundColor: "#124a9e", margin: 20, marginBottom: 0, fontWeight: "bold", padding: 5, fontSize: 20 }}>
                  USER
                </Button>
              </div>
              <hr style={{ color: "black" }}></hr>

              <Row style={{ paddingLeft: 20, paddingRight: 20, paddingBottom: 10, cursor: "pointer" }} >
                <Col md={8} style={{ fontSize: 20 }}>
                  SPORTS
                </Col>
                <Col md={4} >
                  <img src={Hand} width={50}></img>
                </Col>

              </Row>

              <Row style={{ paddingLeft: 20, paddingRight: 20, paddingBottom: 10, cursor: "pointer" }} >
                <Col md={8} style={{ fontSize: 20 }}>
                  FOOD & DRINKS
                </Col>
                <Col md={4} >
                  <img src={Hand} width={50}></img>
                </Col>

              </Row>

              <Row style={{ paddingLeft: 20, paddingRight: 20, paddingBottom: 10, cursor: "pointer" }} >
                <Col md={8} style={{ fontSize: 20 }}>
                  FAMILY
                </Col>
                <Col md={4} >
                  <img src={Hand} width={50}></img>
                </Col>

              </Row>

              <Row style={{ paddingLeft: 20, paddingRight: 20, paddingBottom: 10, cursor: "pointer" }} >
                <Col md={8} style={{ fontSize: 20 }}>
                  CULTURE
                </Col>
                <Col md={4} >
                  <img src={Hand} width={50}></img>
                </Col>

              </Row>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default IWantTo;
