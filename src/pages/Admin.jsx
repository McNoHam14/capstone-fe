import React, { useState } from "react";
import { EVENTS } from "../constant";
import { Button, Container } from "react-bootstrap";
import axios from "axios";
import classes from "../styles/Host.module.css";

const Admin = () =>
{
  const [categoryValue, setCategoryValue] = useState("");

  const [eventType, setEventType] = useState("");

  const adminNewEventHandler = () => { };

  const [eventTypeInput, setEventTypeInput] = useState("");

  const [subEventTypeInput, setSubEventTypeInput] = useState("");

  const [limit, setLimit] = useState(null);

  const postNewEvent = async () =>
  {
    //  axios.post("/" ,  )
  };

  return (
    <div className={classes.outer_host} style={{ width: window.innerWidth - 70, height: window.innerHeight - 70, margin: 40 }}>
      <div className={classes.inner_host}>
        <h4 className="text-center mt-3 mb-4" style={{ color: "white" }}>ADMIN</h4>
        <Container>
          <div>
            <form>
              <span> </span>
              <select
                id="host-category-dropdown"
                // ref={categoryRef}
                className={classes.show_me_drowdown}

                name="categoryValue"
                onChange={(e) =>
                {
                  console.log(e.target.value);
                  setCategoryValue(e.target.value);
                }}
                value={categoryValue}
              >
                <option key={""} value={""}>
                  {"Select a category"}
                </option>
                {EVENTS.map((values, index) =>
                {
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

              <span> </span>
              <select
                id="host-eventtype-dropdown"
                className={classes.show_me_drowdown}

                name="eventType"
                value={eventType}
                onChange={(e) =>
                {
                  console.log(e);
                  setEventType(e.target.value);
                  console.log(eventType);
                }}
              >
                <option key={""} value={""}>
                  {"Select a event type"}
                </option>
                {EVENTS.find((val) => val.name == categoryValue)?.event.map(
                  (values, index) =>
                  {
                    return (
                      <>
                        <option value={values.eventType} key={index}>
                          {values.type}
                        </option>
                      </>
                    );
                  }
                )}
                <option value="others">PICK OTHERS</option>;
                {/* <option>Sport - Tennis</option>
              <option>Sport - Football</option>
              <option>Sport - Cricket</option> */}
                {/* <option>Family - </option>
              <option>Culture - </option>
              <option>Food/Drink - </option> */}
              </select>
              {eventType === "others" && (
                <input
                  className={classes.show_me_drowdown}

                  onChange={(e) => setEventTypeInput(e.target.value)}
                  placeholder="Enter text here"
                ></input>
              )}

              <hr></hr>
              <span> </span>
              <input
                className={classes.show_me_drowdown}

                onChange={(e) => setSubEventTypeInput(e.target.value)}
                placeholder="Enter text here"
              ></input>
              <hr></hr>
              <span> </span>

              <input
                value={limit}
                className={classes.show_me_drowdown}
                placeholder="Enter Limit Here"
                type="number"
                onChange={(e) => setLimit(e.target.value)}
              ></input>
              <span> </span>
              <hr></hr>

              <div className="d-flex align-items-center justify-content-center text-center mb-4" >
                <Button variant="primary" onSubmit={adminNewEventHandler} style={{ borderRadius: 40, width: 150, backgroundColor: "white", color: "black" }}>
                  SUBMIT
                </Button>
              </div>

            </form>
          </div>
        </Container>
      </div>
    </div>

  );
};

export default Admin;
