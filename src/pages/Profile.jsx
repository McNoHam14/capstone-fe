import React, { useEffect, useState } from "react";
import Layout from "../components/Layout";
import { useDispatch, useSelector } from "react-redux";
import moment from "moment";
import { EVENTS } from "../constant";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import axios from "axios";

const Profile = () => {
  const user = useSelector((state) => state.userReducer.user);

  const [preferences, setPreferences] = useState([]);
  console.log(preferences);

  // const categories = [];
  // EVENTS.forEach((EVENT) => {
  //   EVENT.event.forEach((eventType) => {
  //     eventType.subEvent.forEach((subEventType) => {
  //       categories.push(subEventType);
  //     });
  //   });
  // });

  // console.log(categories);

  const dispatch = useDispatch();

  useEffect(() => {
    if (user && user.preferences) {
      setPreferences(user.preferences);
    }
  }, [user]);

  const savePreferences = async () => {
    const res = await axios.post(
      "http://localhost:4000/users/preferences",
      {
        preferences,
      },
      {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      }
    );
    console.log(res.data);
    dispatch({
      type: "STORE_USER",
      payload: res.data,
    });
  };

  const changeImage = async (e) => {
    const file = e.target.files[0];
    const formData = new FormData();
    formData.append("image", file);
    const res = await axios.post(
      "http://localhost:4000/users/profile-image",
      formData,
      {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      }
    );
    console.log(res.data);
    dispatch({
      type: "STORE_USER",
      payload: res.data,
    });
  };

  return (
    <Layout>
      <div>
        <Container>
          <Row>
            <Col>
              <Card>
                {/* PROFILE PICTURE (CLOUDINARY) */}
                <img src={user?.image} alt="profile" />

                <input type="file" hidden id="image" onChange={changeImage} />

                <label htmlFor="image">CHANGE IMAGE</label>

                {/* FIRST NAME */}
                <p>{user?.firstName}</p>

                {/* LAST NAME */}
                <p>{user?.lastName}</p>

                {/* AGE */}
                <p>{moment().diff(user?.birthDate, "years")}</p>
              </Card>
            </Col>
          </Row>

          {/* INTERESTS - CATEGORY - EVENT
        TYPE - SUB EVENT TYPE */}

          {EVENTS.map((EVENT) => {
            return (
              <div key={EVENT.name}>
                <h2>{EVENT.name}</h2>
                <div>
                  {EVENT.event.map((event) => {
                    return (
                      <div key={event.type}>
                        <h3>{event.type}</h3>
                        {event.subEvent.map((subEvent) => {
                          return (
                            <div key={subEvent.name}>
                              <input
                                checked={
                                  preferences.find((preference) => {
                                    if (
                                      preference.name == subEvent.name &&
                                      preference.eventName == event.type &&
                                      preference.categoryName == EVENT.name
                                    ) {
                                      return true;
                                    }
                                  })
                                    ? true
                                    : false
                                }
                                onChange={(e) => {
                                  // console.log(e.target.checked);
                                  if (e.target.checked === true) {
                                    const preferencesCopy = [...preferences];
                                    preferencesCopy.push({
                                      ...subEvent,
                                      eventName: event.type,
                                      categoryName: EVENT.name,
                                    });
                                    setPreferences(preferencesCopy);
                                  } else {
                                    let preferencesCopy = [...preferences];
                                    preferencesCopy = preferencesCopy.filter(
                                      (preference) => {
                                        if (preference.name !== subEvent.name) {
                                          return true;
                                        }
                                      }
                                    );
                                    setPreferences(preferencesCopy);
                                  }
                                }}
                                type="checkbox"
                              />
                              <span>{subEvent.name}</span>
                            </div>
                          );
                        })}
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}

          <button onClick={savePreferences}>SAVE PREFERENCES</button>
        </Container>
      </div>
    </Layout>
  );
};

export default Profile;
