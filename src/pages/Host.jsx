import React, { useState } from "react";
import Layout from "../components/Layout";
import classes from "../styles/Host.module.css";
import { BE_URL, EVENTS } from "../constant";
import { useRef } from "react";
import { Button, Modal } from "react-bootstrap";
import Places from "./Places";
import moment from "moment";
import axios from "axios";

const Host = () => {
  const handleSubmit = (values) => {
    const location = {
      type: "Point",
      coordinates: markerPosition,
    };
    let data = {
      category: values?.categoryValue?.value,
      eventType: values?.eventType?.value,
      eventSubType: values?.eventSubType?.value,
      time: values?.time?.value,
      location,
      price: values?.price?.value,
    };
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

  const [categoryValue, setCategoryValue] = useState("");

  const [eventType, setEventType] = useState("");

  const [eventSubType, setEventSubType] = useState("");

  const [show, setShow] = useState(false);
  const [markerPosition, setMarkerPosition] = useState([
    51.51609005367574, -3.2451497115573744,
  ]);

  function MapModal() {
    return (
      <Modal show={show}>
        <Modal.Dialog>
          <Places
            markerPosition={markerPosition}
            setMarkerPosition={setMarkerPosition}
          />

          <Modal.Footer>
            <Button
              variant="secondary"
              onClick={() => {
                setShow(false);
              }}
            >
              Close
            </Button>
          </Modal.Footer>
        </Modal.Dialog>
      </Modal>
    );
  }

  return (
    <Layout>
      <div className={classes.outer_host}>
        <div className={classes.inner_host}>
          <span>HOST (CLOUD ICON)</span>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSubmit(e.target);
            }}
          >
            <label>Pick A Category</label>
            <span> </span>
            {/* {console.log("cc", categoryRef.current.value)} */}
            <select
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
            <hr></hr>
            <label>Pick A EventType</label>
            <span> </span>
            <select
              id="host-eventype-dropdown"
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
                    <option value={values.type} key={index}>
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
            <label>Pick A EventSubType (DYNAMIC) </label>
            <span> </span>
            <select
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
                    <option value={values} key={index}>
                      {values}
                    </option>
                  );
                })}
            </select>
            <hr></hr>
            <span>Time/Date</span>
            <span> </span>
            <input
              type="datetime-local"
              id="meeting-time"
              name="time"
              min="2023-05-01T00:00"
              max="20-06-24T00:00"
            ></input>
            <hr></hr>
            Location (GOOGLE MAPS ICON) <select></select>
            <div
              onClick={() => {
                console.log("");
                setShow(true);
              }}
            >
              {" "}
              OPEN MAP FOR LOCATION{" "}
            </div>
            <hr></hr>
            Price/Deposit
            <span> </span>
            <span>£</span>
            <span> </span>
            <input name="price"></input>
            <hr></hr>
            <button type="submit">SUBMIT</button>
          </form>
        </div>
      </div>
      <MapModal show={show} />
    </Layout>
  );
};

export default Host;
