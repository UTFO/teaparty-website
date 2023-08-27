import React from "react";
import "./adminfaq.css";
import AdminNavbar from "../components/navbar/nav";
import Container from "../components/container/container";
import SmallContainer from "../components/smallContainer/smallContainer";
import { useState, useEffect } from "react";
import { getFaq } from "../../../api/faq";

import {
  ScrollContainer,
  ListContainer,
} from "../components/scrollContainer/scrollContainer.js";

const AdminFaq = () => {
  const [FAQs, setFAQs] = useState([]);

  // Function to preload event highlights
  const preloadFAQ = () => {
    getFaq().then((data) => {
      var tempFAQs = [];
      data.map((info) => {
        // Convert the binary data to a Base64-encoded string
        tempFAQs = [
          ...tempFAQs,
          { question: info.question, answer: info.answer },
        ];
      });

      setFAQs(tempFAQs);
    });
  };

  useEffect(() => {
    preloadFAQ();
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
          <ScrollContainer>
            {/* Insert list of event highlights here as a ListContainer */}
            {FAQs.map((faq) => {
              return (
                <ListContainer
                  title={faq.question}
                  answer={faq.answer}
                  editFunction={() => {}}
                  deleteFunction={() => {}}
                />
              );
            })}
          </ScrollContainer>
        </SmallContainer>
      </Container>
    </div>
  );
};

export default AdminFaq;
