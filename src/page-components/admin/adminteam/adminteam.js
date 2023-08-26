import React, { useState, useEffect } from "react";
import "./adminteam.css";
import AdminNavbar from "../components/navbar/nav";
import Container from "../components/container/container";
import SmallContainer from "../components/smallContainer/smallContainer";
import { getTeam } from "../../../api/about";

import HorizontalScrollContainer from "../components/scrollContainer/horizontalScrollContainer";
import TeamListContainer from "../components/scrollContainer/teamListContainer";

const AdminAbout = () => {
  const [Teams, setTeams] = useState([]);

  const preloadTeam = () => {
    getTeam().then((data) => {
      var tempTeams = [];
      data.map((info) => {
        // Convert the binary data to a Base64-encoded string
        tempTeams = [
          ...tempTeams,
          { name: info.name, message: info.message, image: info.image},
        ];
      });

      setTeams(tempTeams);
    });
  };

  useEffect(() => {
    preloadTeam();
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
            {Teams.map((team) => {
              return (
                <TeamListContainer
                  image = {team.image}
                  name = {team.name}
                  text={team.message}
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