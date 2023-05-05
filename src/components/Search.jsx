import React, { useEffect, useState } from "react";
import { BE_URL, EVENTS } from "../constant";
import NoticeBoard from "./NoticeBoard";
import axios from "axios";

const Search = ({ isNotice = false }) => {
  const [events, setEvents] = useState([]);

  const handleSubmit = (values) => {
    axios
      .get(`${BE_URL}/events/search`, values)
      .then((response) => {
        console.log(response.data);

        setEvents(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const [category, setCategoryValue] = useState("");

  const [eventType, setSubCategory] = useState("");

  useEffect(() => {
    let data = { category, eventType };
    if (eventType) {
      delete data.category;
    }
    console.log("Send=", data);
    handleSubmit(data);
  }, [category, eventType]);

  return (
    <div>
      <p>SHOW ME</p>
      <form>
        <div>
          <label>CATEGORY</label>
          <select
            // name="sports"
            id="search-dropdown"
            name="search-dropdown-name"
            onChange={(e) => {
              console.log(e.target.value);
              setCategoryValue(e.target.value);
            }}
            value={category}
          >
            {EVENTS.map((values, index) => {
              return (
                <option key={index} value={values.name}>
                  {values.name}
                </option>
              );
            })}
            {/* <option value="football">
              Football
              <select name="football" id="football-dropdown">
                <option value="5-a-side">5 a side</option>
                <option value="11-a-side">11 a side</option>
              </select>
            </option>
            <option value="tennis">Tennis</option>
            <option value="running">Running</option> */}
          </select>
          {/* 
          <span>FAMILY</span>
          <select name="family" id="family-dropdown">
            <option value="newborn??">Newborn</option>
            <option value="infant">Infant</option>
            <option value="toddler">Toddler</option>
            <option value="kids">Kids</option>
            <option value="teens">Teens</option>
          </select> */}
          <label>Choose an EventType</label>
          <select
            id="search-category-dropdown"
            name="search-category-dropdown-name"
            value={eventType}
            onChange={(e) => {
              console.log(e);
              setSubCategory(e.target.value);
              console.log(eventType);
            }}
          >
            {EVENTS.find((val) => val.name == category)?.event.map(
              (values, index) => {
                return (
                  <option value={values.type} key={index}>
                    {values.type}
                  </option>
                );
              }
            )}
          </select>
          <label>Choose an SubEventType</label>
          <select
            id="host-category-dropdown"
            name="host-category-dropdown"
            onChange={(e) => {
              console.log(e);
            }}
          >
            {EVENTS.find((val) => val.name == category)
              ?.event.find((val) => val.type == eventType)
              ?.subEvent.map((values, index) => {
                return (
                  <option value={values} key={index}>
                    {values}
                  </option>
                );
              })}
          </select>
          {/* <span>CULTURE</span>
          <select name="culture" id="culture-dropdown">
            <option value="music">Music</option>
            <option value="art">Art</option>
            <option value="drama">Drama (Theater, Play, Opera)</option>
            <option value="dance">Dance</option>
          </select> */}
          {/* <span>FOOD/DRINK</span>
          <select name="food-drink" id="food-drink-dropdown">
            <option value="restaurant">
              Restaurant (openings, tasting, menu change)
            </option>
            <option value="street-food">Street Food</option>
            <option value="wine">Wine</option>
            <option value="alcohol">Beer, Ale, Cider ??</option>
          </select> */}
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
          Location (GOOGLE MAPS ICON) <select></select>
        </div>
      </form>
      <hr></hr>
      {isNotice && <NoticeBoard events={events} />}
    </div>
  );
};

export default Search;
