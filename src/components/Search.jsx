import React, { useEffect, useState } from "react";
import { BE_URL, EVENTS } from "../constant";
import NoticeBoard from "./NoticeBoard";
import axios from "axios";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Places from "../pages/Places";
import { useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import cloud from "../assets/img/cloud-img.png";

import classes from "../styles/Search.module.css";

const Search = ({ isNotice = false }) => {
  const [events, setEvents] = useState([]);

  const [params] = useSearchParams();

  const user = useSelector((state) => state.userReducer.user);

  const handleSubmit = (values) => {
    axios
      .get(`${BE_URL}/events/search`, { params: values })
      .then((response) => {
        setEvents(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const [category, setCategoryValue] = useState("");

  const [eventType, setEventType] = useState("");

  const [eventSubType, setEventSubType] = useState("");

  const [show, setShow] = useState(false);

  const [markerPosition, setMarkerPosition] = useState(null);

  const getNearbyEvents = async () => {
    const res = await axios.get(
      `${BE_URL}/events/nearby?lng=${markerPosition[0]}&lat=${markerPosition[1]}`
    );
    setEvents(res.data);
  };

  useEffect(() => {
    if (markerPosition?.length == 2) getNearbyEvents();
  }, [markerPosition]);

  useEffect(() => {
    let data = { category, eventType, eventSubType };
    if (eventType && eventSubType) {
      delete data.category;
      delete data.eventType;
    } else if (eventType) {
      delete data.category;
    }
    if (category || eventType || eventSubType) {
      handleSubmit(data);
    }
  }, [category, eventType, eventSubType]);

  const getEvents = async () => {
    const category = params.get("category");
    const res = await axios.get(`${BE_URL}/events/search`, {
      params: { category: category || "", eventType: "", eventSubType: "" },
    });

    let filteredEvents = res.data;
    if (!category) {
      filteredEvents = res.data.filter((event) => {
        const eventExist = user?.preferences?.find((preference) => {
          if (
            preference.categoryName == event.category &&
            preference.eventName == event.eventType &&
            preference.name == event.eventSubType
          ) {
            return true;
          }
        });
        if (eventExist) {
          return true;
        }
      });
    }

    setEvents(filteredEvents);
  };

  useEffect(() => {
    getEvents();
  }, [user, params]);

  return (
    <div>
      <div className={classes.section_container}>
        <div>
          <div>
            <div>
              <img style={{ width: "120px" }} src={cloud} alt="cloud" />
            </div>
            <div
              style={{
                position: "absolute",
                zIndex: 100,
                top: 34,
                left: 22,
                fontWeight: "bold",
                textAlign: "center",
              }}
            >
              Show Me
            </div>
          </div>
          <div
            style={{
              marginTop: 15,
              display: "flex",
              justifyContent: "space-around",
              marginBottom: 20,
            }}
          >
            {/* <label>CATEGORY</label> */}
            <select
              className={classes.show_me_drowdown}
              // name="sports"
              id="search-dropdown"
              name="search-dropdown-name"
              onChange={(e) => {
                setCategoryValue(e.target.value);
                setEventType("");
                setEventSubType("");
              }}
              value={category}
            >
              <option key={""} value={""}>
                {"Select a category"}
              </option>
              {EVENTS.map((values, index) => {
                return (
                  <option key={index} value={values.name.toUpperCase()}>
                    {values.name}
                  </option>
                );
              })}
            </select>

            {/* <label>Choose an EventType</label> */}
            <select
              className={classes.show_me_drowdown}
              id="search-category-dropdown"
              name="search-category-dropdown-name"
              value={eventType}
              onChange={(e) => {
                setEventType(e.target.value);
                setEventSubType("");
              }}
            >
              <option key={""} value={""}>
                {"Event Type"}
              </option>
              {EVENTS.find((val) => val.name == category)?.event.map(
                (values, index) => {
                  return (
                    <option value={values.name} key={index}>
                      {values.type}
                    </option>
                  );
                }
              )}
            </select>
            {/* <label>Choose an SubEventType</label> */}
            <select
              className={classes.show_me_drowdown}
              id="host-category-dropdown"
              name="host-category-dropdown"
              value={eventSubType}
              onChange={(e) => {
                setEventSubType(e.target.value);
              }}
            >
              <option key={""} value={""}>
                {"Event SubType"}
              </option>
              {EVENTS.find((val) => val.name == category)
                ?.event.find((val) => val.type == eventType)
                ?.subEvent.map((values, index) => {
                  return (
                    <option value={values.name} key={index}>
                      {values.name}
                    </option>
                  );
                })}
            </select>
          </div>
          <div style={{ display: "flex" }}>
            <input
              type="datetime-local"
              id="meeting-time"
              name="meeting-time"
              value="2023-05-01T12:30"
              min="2023-05-01T00:00"
              max="20-06-24T00:00"
              className={classes.show_me_drowdown}
            ></input>
            <div
              style={{
                marginLeft: 20,
                background: "rgb(0, 74, 173)",
                borderRadius: 40,
                color: "white",
                padding: 20,
                cursor: "pointer",
              }}
              onClick={() => {
                setShow(true);
              }}
            >
              {" "}
              OPEN MAP FOR LOCATION{" "}
            </div>
          </div>
        </div>
      </div>
      <hr></hr>
      <MapModal
        show={show}
        setMarkerPosition={setMarkerPosition}
        setShow={setShow}
      />
      {isNotice && <NoticeBoard events={events} />}
    </div>
  );
};

function MapModal({ show, setMarkerPosition, setShow }) {
  return (
    <Modal show={show}>
      <Modal.Dialog>
        <Places setMarkerPosition={setMarkerPosition} />

        <Modal.Footer>
          <Button
            onClick={() => {
              setShow(false);
            }}
            variant="secondary"
          >
            Close
          </Button>
        </Modal.Footer>
      </Modal.Dialog>
    </Modal>
  );
}

export default Search;
