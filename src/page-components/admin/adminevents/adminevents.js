import React from "react";
import "./adminevents.css";
import AdminNavbar from "../components/navbar/nav";
import Container from "../components/container/container";
import SmallContainer from "../components/smallContainer/smallContainer";
import { useState, useEffect } from "react";
import { getEvent } from "../../../api/event";

import {
  ScrollContainer,
  ListContainer,
} from "../components/scrollContainer.js/scrollContainer";

const AdminEvents = () => {
  const [events, setEvents] = useState([]);

  // Function to preload event highlights
  const preloadEvents = () => {
    getEvent().then((data) => {
      var tempEvents = [];
      data.map((info) => {
        // Convert the binary data to a Base64-encoded string
        tempEvents = [
          ...tempEvents,
          {
            name: info.name,
            address: info.address,
            date: info.date,
            time: info.time,
            type: info.type,
          },
        ];
      });

      setEvents(tempEvents);
    });
  };

  useEffect(() => {
    preloadEvents();
  }, []);

  return (
    <div>
      <AdminNavbar />

      <Container text="Modify Events">
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <SmallContainer
            title="Manage Upcoming Events"
            subtitle="Click on the pencil icon to edit, plus icon to add, and trash icon to delete"
            width={45}
          >
            <ScrollContainer>
              {/* Insert list of event highlights here as a ListContainer */}
              {events.map((event) => {
                return (
                  <ListContainer
                    name={event.name}
                    date={event.date}
                    time={event.time}
                    editFunction={() => {}}
                    deleteFunction={() => {}}
                  />
                );
              })}
            </ScrollContainer>
          </SmallContainer>
          <SmallContainer
            title="Check Past Events"
            subtitle="For reference. Remove if necessary"
            width={40}
          >
            <ScrollContainer>
              {/* Insert list of event highlights here as a ListContainer */}
              {/* {FAQs.map((faq) => {
                return (
                  <ListContainer
                    title={faq.question}
                    answer={faq.answer}
                    editFunction={() => {}}
                    deleteFunction={() => {}}
                  />
                );
              })} */}
            </ScrollContainer>
          </SmallContainer>
        </div>
      </Container>
    </div>
  );
};

export default AdminEvents;
