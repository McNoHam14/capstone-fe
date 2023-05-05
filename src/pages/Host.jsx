import React, { useState } from "react";
import Layout from "../components/Layout";
import classes from "../styles/Host.module.css";
import { EVENTS } from "../constant";
import { useRef } from "react";

const Host = () => {
  const handleSubmit = (values) => {
    console.log(values);
  };

  const categoryRef = useRef();

  const [categoryValue, setCategoryValue] = useState("");

  const [subCategory, setSubCategory] = useState("");

  return (
    <Layout>
      <div className={classes.outer_host}>
        <div className={classes.inner_host}>
          <span>HOST (CLOUD ICON)</span>
          <form
            onSubmit={(e) => {
              handleSubmit(e);
            }}
          >
            <label>Pick A Category</label>
            <span> </span>
            {/* {console.log("cc", categoryRef.current.value)} */}
            <select
              id="host-category-dropdown"
              // ref={categoryRef}
              name="host-category-dropdown-name"
              onChange={(e) => {
                console.log(e.target.value);
                setCategoryValue(e.target.value);
              }}
              value={categoryValue}
            >
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
              id="host-category-dropdown"
              name="host-category-dropdown-name"
              value={subCategory}
              onChange={(e) => {
                console.log(e);
                setSubCategory(e.target.value);
                console.log(subCategory);
              }}
            >
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
              id="host-category-dropdown"
              name="host-category-dropdown"
              onChange={(e) => {
                console.log(e);
              }}
            >
              {EVENTS.find((val) => val.name == categoryValue)
                ?.event.find((val) => val.type == subCategory)
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
              name="meeting-time"
              value="2023-05-01T12:30"
              min="2023-05-01T00:00"
              max="20-06-24T00:00"
            ></input>
            <hr></hr>
            Location (GOOGLE MAPS ICON) <select></select>
            <hr></hr>
            Price/Deposit
            <span> </span>
            <span>£</span>
            <span> </span>
            <input></input>
            <hr></hr>
            <button type="submit">SUBMIT</button>
          </form>
        </div>
      </div>
    </Layout>
  );
};

export default Host;
