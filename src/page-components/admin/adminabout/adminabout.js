import React, { useState, useEffect } from "react";
import "./adminabout.css";
import AdminNavbar from "../components/navbar/nav";
import Container from "../components/container/container";
import SmallContainer from "../components/smallContainer/smallContainer";
import { getAbout } from "../../../api/about";

import HorizontalScrollContainer from "../components/scrollContainer/horizontalScrollContainer";
import AboutListContainer from "../components/scrollContainer/aboutListContainer";

const AdminAbout = () => {
  const [Abouts, setAbouts] = useState([]);

  const preloadAbout = () => {
    getAbout().then((data) => {
      var tempAbouts = [];
      data.map((info) => {
        // Convert the binary data to a Base64-encoded string
        tempAbouts = [
          ...tempAbouts,
          { name: info.name, text: info.text },
        ];
      });

      setAbouts(tempAbouts);
    });
  };

  useEffect(() => {
    preloadAbout();
  }, []);


  return (
    <div>
      <AdminNavbar />

      <Container text="Modify FAQ">
        <SmallContainer
          title="Manage Questions & Answers"
          subtitle="Click on the pencil icon to edit, plus icon to add, and trash icon to delete"
          width={95}
        >
          <HorizontalScrollContainer>
            {/* Insert list of event highlights here as a ListContainer */}
            {Abouts.map((about) => {
              return (
                <AboutListContainer
                  title={about.name}
                  text={about.text}
                  editFunction={() => {}}
                  deleteFunction={() => {}}
                />
              );
            })}
          </HorizontalScrollContainer>
        </SmallContainer>
      </Container>
    </div>
  );

};

export default AdminAbout;
