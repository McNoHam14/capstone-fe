import React, { useEffect, useState } from "react";
import Layout from "../components/Layout";
import { useDispatch, useSelector } from "react-redux";
import moment from "moment";
import { EVENTS } from "../constant";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Avatar from "../assets/img/App.jpeg"
import classes from "../styles/SignUp.module.css";

const Profile = () =>
{
  const user = useSelector((state) => state.userReducer.user);

  const [preferences, setPreferences] = useState([]);
  console.log(preferences);

  const navigate = useNavigate();

  useEffect(() =>
  {
    if (!user)
    {
      navigate("/login");
    }
  }, [user]);

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

  useEffect(() =>
  {
    if (user && user.preferences)
    {
      setPreferences(user.preferences);
    }
  }, [user]);

  const savePreferences = async () =>
  {
    const res = await axios.post(
      "https://rich-cyan-wildebeest-tie.cyclic.app/users/preferences",
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

  const changeImage = async (e) =>
  {
    const file = e.target.files[0];
    const formData = new FormData();
    formData.append("image", file);
    const res = await axios.post(
      "https://rich-cyan-wildebeest-tie.cyclic.app/users/profile-image",
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
      <div style={{ width: window.innerWidth - 450, }} >
        <center>

          <Card className="pt-4" style={{ width: 250, marginBottom: 20 }}>
            <center>
              <img src={user?.image ?? Avatar} alt="profile" width={"100px"} />
            </center>
            <input type="file" hidden id="image" onChange={changeImage} />

            <label htmlFor="image" style={{ color: "#124a9e", fontWeight: "bold", marginTop: 2 }}>CHANGE IMAGE</label>

            {/* FIRST NAME */}
            <p>{user?.firstName} {user?.lastName}</p>
            {/* AGE */}
            <p style={{ marginTop: -20 }}>{moment().diff(user?.birthDate, "years")} Year's Old</p>
          </Card>
        </center>

        {/* INTERESTS - CATEGORY - EVENT
        TYPE - SUB EVENT TYPE */}
        <Row>
          {EVENTS.map((EVENT) =>
          {
            return (
              <Col md={3} >
                <div key={EVENT.name}>
                  <h2>{EVENT.name}</h2>
                  <div>
                    {EVENT.event.map((event) =>
                    {
                      return (
                        <div key={event.type} className="mt-3">
                          <h5 className="mt-3">{event.type}</h5>
                          {event.subEvent.map((subEvent) =>
                          {
                            return (
                              <div key={subEvent.name}>
                                <input
                                  checked={
                                    preferences.find((preference) =>
                                    {
                                      if (
                                        preference.name == subEvent.name &&
                                        preference.eventName == event.type &&
                                        preference.categoryName == EVENT.name
                                      )
                                      {
                                        return true;
                                      }
                                    })
                                      ? true
                                      : false
                                  }
                                  className="mr-5 pr-5 mt-3"
                                  onChange={(e) =>
                                  {
                                    // console.log(e.target.checked);
                                    if (e.target.checked === true)
                                    {
                                      const preferencesCopy = [...preferences];
                                      preferencesCopy.push({
                                        ...subEvent,
                                        eventName: event.type,
                                        categoryName: EVENT.name,
                                      });
                                      setPreferences(preferencesCopy);
                                    } else
                                    {
                                      let preferencesCopy = [...preferences];
                                      preferencesCopy = preferencesCopy.filter(
                                        (preference) =>
                                        {
                                          if (preference.name !== subEvent.name)
                                          {
                                            return true;
                                          }
                                        }
                                      );
                                      setPreferences(preferencesCopy);
                                    }
                                  }}
                                  type="checkbox"
                                />
                                <span  > {subEvent.name}</span>
                              </div>
                            );
                          })}
                        </div>
                      );
                    })}
                  </div>
                </div>
              </Col>
            );
          })}
        </Row>

        <div className="d-flex align-items-center justify-content-center text-center mb-4" >
          <Button onClick={savePreferences} variant="primary" type="submit" style={{ borderRadius: 40, width: 200, backgroundColor: "#124a9e" }}>
            SAVE PREFERENCES
          </Button>
        </div>
      </div>
    </Layout >
  );
};

export default Profile;
