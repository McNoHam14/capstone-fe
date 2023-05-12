import React, { useState } from "react";
import { EVENTS } from "../constant";
import { Button, Container } from "react-bootstrap";
import axios from "axios";

const Admin = () => {
  const [categoryValue, setCategoryValue] = useState("");

  const [eventType, setEventType] = useState("");

  const adminNewEventHandler = () => {};

  const [eventTypeInput, setEventTypeInput] = useState("");

  const [subEventTypeInput, setSubEventTypeInput] = useState("");

  const [limit, setLimit] = useState(null);

  const postNewEvent = async () => {
    //  axios.post("/" ,  )
  };

  return (
    <div>
      <h4 className="text-center mt-3 mb-4">ADMIN</h4>
      <Container>
        <div>
          <form>
            <label>Pick A Category Name</label>
            <span> </span>
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
                onChange={(e) => setEventTypeInput(e.target.value)}
                placeholder="Enter text here"
              ></input>
            )}

            <hr></hr>
            <label>Pick A SubEventType</label>
            <span> </span>
            <input
              onChange={(e) => setSubEventTypeInput(e.target.value)}
              placeholder="Enter text here"
            ></input>
            <hr></hr>
            <label>Limit</label>
            <span> </span>

            <input
              value={limit}
              type="number"
              onChange={(e) => setLimit(e.target.value)}
            ></input>
            <span> </span>
            <hr></hr>
            <Button onSubmit={adminNewEventHandler}>SUBMIT</Button>
          </form>
        </div>
      </Container>
    </div>
  );
};

export default Admin;
