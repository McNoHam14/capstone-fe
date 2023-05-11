import React, { useState } from "react";
import Layout from "../components/Layout";
import { useSelector } from "react-redux";
import moment from "moment";
import { EVENTS } from "../constant";

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

  return (
    <Layout>
      <div>
        {/* PROFILE PICTURE (CLOUDINARY) */}

        {/* FIRST NAME */}
        <p>{user?.firstName}</p>

        {/* LAST NAME */}
        <p>{user?.lastName}</p>

        {/* AGE */}
        <p>{moment().diff(user?.birthDate, "years")}</p>

        {/* INTERESTS - CATEGORY - EVENT
        TYPE - SUB EVENT TYPE */}

        {EVENTS.map((EVENT) => {
          return (
            <div>
              <h2>{EVENT.name}</h2>
              <div>
                {EVENT.event.map((event) => {
                  return (
                    <div>
                      <h3>{event.type}</h3>
                      {event.subEvent.map((subEvent) => {
                        return (
                          <div>
                            <input
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
      </div>
    </Layout>
  );
};

export default Profile;
