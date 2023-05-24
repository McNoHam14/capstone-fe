import React, { useState } from "react";
import Layout from "../components/Layout";
import classes from "../styles/Host.module.css";
import { BE_URL, EVENTS } from "../constant";
import { useRef } from "react";
import { Button, Modal } from "react-bootstrap";
import Places from "./Places";
import moment from "moment";
import axios from "axios";
import HostImage from "../assets/img/host.png";
import Pin from "../assets/img/pin.jpeg";

function MapModal({ show, markerPosition, setShow, setMarkerPosition }) {
  return (
    <Modal show={show} style={{ width: "101%" }}>
      <Modal.Dialog style={{ padding: 0, margin: 0 }}>
        <Places
          isDisplay={false}
          setMarkerPosition={setMarkerPosition}
          markerPosition={markerPosition}
        />
        <Button
          className="m-5"
          onClick={() => {
            setShow(false);
          }}
          variant="secondary"
        >
          Close
        </Button>
      </Modal.Dialog>
    </Modal>
  );
}
const Host = () => {
  const [categoryValue, setCategoryValue] = useState("");

  const [eventType, setEventType] = useState("");

  const [eventSubType, setEventSubType] = useState("");

  const [show, setShow] = useState(false);
  const [markerPosition, setMarkerPosition] = useState([
    51.51609005367574, -3.2451497115573744,
  ]);

  const handleSubmit = (values) => {
    const location = {
      type: "Point",
      coordinates: markerPosition.reverse(),
    };
    console.log(markerPosition);
    let data = {
      category: values?.categoryValue?.value,
      eventType: values?.eventType?.value,
      eventSubType: values?.eventSubType?.value,
      time: values?.time?.value,
      location,
      price: values?.price?.value,
      booked: 0,
    };

    let findLimit = EVENTS.find((val) => val.name === data.category)
      ?.event.find((val) => val.type === data?.eventType)
      ?.subEvent.find((values) => values?.name === data.eventSubType);

    console.log("data", findLimit?.limit);
    data["limit"] = findLimit?.limit;
    postRequest(data);
  };

  const postRequest = async (data) => {
    try {
      const response = await axios.post(`${BE_URL}/events/`, data, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Layout>
      <div
        className={classes.outer_host}
        style={{
          width: window.innerWidth - 300,
          height: window.innerHeight - 150,
        }}
      >
        <div className={classes.inner_host}>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSubmit(e.target);
            }}
          >
            <img width={140} src={HostImage} className="m-2"></img>

            <select
              className={classes.show_me_drowdown}
              id="host-category-dropdown"
              // ref={categoryRef}
              name="categoryValue"
              onChange={(e) => {
                console.log(e.target.value);
                setCategoryValue(e.target.value);
              }}
              value={categoryValue}
            >
              <option key={""} value={""}>
                {"Select a category"}
              </option>
              {EVENTS.map((values, index) => {
                return (
                  <option key={index} value={values.name}>
                    {values.name}
                  </option>
                );
              })}

              {/* 
              <option>Sport</option>
              <option>Family</option>
              <option>Culture</option>
              <option>Food/Drink</option> 
              */}
            </select>
            <hr style={{ color: "white" }}></hr>
            <select
              className={classes.show_me_drowdown}
              id="host-eventtype-dropdown"
              name="eventType"
              value={eventType}
              onChange={(e) => {
                console.log(e);
                setEventType(e.target.value);
                console.log(eventType);
              }}
            >
              <option key={""} value={""}>
                {"Select a event type"}
              </option>
              {EVENTS.find((val) => val.name == categoryValue)?.event.map(
                (values, index) => {
                  return (
                    <option value={values.eventType} key={index}>
                      {values.type}
                    </option>
                  );
                }
              )}
              {/* <option>Sport - Tennis</option>
              <option>Sport - Football</option>
              <option>Sport - Cricket</option> */}

              {/* <option>Family - </option>
              <option>Culture - </option>
              <option>Food/Drink - </option> */}
            </select>
            <span> </span>
            <span> </span>
            <select
              className={classes.show_me_drowdown}
              id="host-subeventtype-dropdown"
              name="eventSubType"
              onChange={(e) => {
                console.log(e);
                setEventSubType(e.target.value);
                console.log(eventSubType);
              }}
            >
              <option key={""} value={""}>
                {"Select a sub event type"}
              </option>
              {EVENTS.find((val) => val.name == categoryValue)
                ?.event.find((val) => val.type == eventType)
                ?.subEvent.map((values, index) => {
                  return (
                    <option value={values.name} key={index}>
                      {values.name}
                    </option>
                  );
                })}
            </select>
            <hr style={{ color: "white" }}></hr>
            <input
              className={classes.show_me_drowdown}
              style={{ width: "96%" }}
              type="datetime-local"
              id="meeting-time"
              name="time"
              min="2023-05-01T00:00"
              max="20-06-24T00:00"
            ></input>
            <hr style={{ color: "white" }}></hr>

            <center>
              <div
                style={{ color: "white", cursor: "pointer" }}
                onClick={() => {
                  console.log("");
                  setShow(true);
                }}
              >
                Select Location
                <img
                  width={30}
                  src={Pin}
                  style={{ borderRadius: 25, marginLeft: 12 }}
                ></img>
              </div>
            </center>
            <hr style={{ color: "white" }}></hr>
            <input
              style={{ width: "97%" }}
              className={classes.show_me_drowdown}
              placeholder="Price/Deposit (£)"
              name="price"
            ></input>
            <hr style={{ color: "white" }}></hr>
            <div className="d-flex align-items-center justify-content-center text-center mb-4">
              <Button
                variant="primary"
                type="submit"
                style={{
                  borderRadius: 40,
                  width: 150,
                  backgroundColor: "white",
                  color: "black",
                }}
              >
                SUBMIT
              </Button>
            </div>
          </form>
        </div>
      </div>
      {show && (
        <MapModal
          show={show}
          markerPosition={markerPosition}
          setShow={setShow}
          setMarkerPosition={setMarkerPosition}
        />
      )}
    </Layout>
  );
};

export default Host;
