import React from "react";
import "./adminfaq.css";
import AdminNavbar from "../components/navbar/nav";
import Container from "../components/container/container";
import SmallContainer from "../components/smallContainer/smallContainer";
import { useState, useEffect, useRef, useCallback } from "react";
import { getFaq, newFaq } from "../../../api/faq";

import {
  ScrollContainer,
  ListContainer,
} from "../components/scrollContainer/scrollContainer.js";
import NewModal from "../components/modal/addingModal";

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

  const questionRef = useRef("")
  const answerRef = useRef("")

  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
  }

  const handleSubmit = useCallback(async (e) => {
    e.preventDefault()
    console.log("submitted")
    newFaq(questionRef.current.value, answerRef.current.value)
    handleClose()
    })
  return (
    <div>
      <AdminNavbar />

      <Container text="Modify FAQ">
        <SmallContainer
          title="Manage Questions & Answers"
          subtitle="Click on the pencil icon to edit, plus icon to add, and trash icon to delete"
          width={95}
        >
          <ScrollContainer handleOpen={() => {setOpen(true)}}> 
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
          <NewModal open={open} setOpen={setOpen}>
            <div style={{
              position: "absolute",
              width: "60vw",
              height: "75vh",
              backgroundColor: "white",
              borderRadius: 20,
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              padding: 20,
              maxWidth: '1000px',
              justifyContent: "flex-start",
              gap: 5
            }}>
              <div style={{
                display: "flex",
                flexDirection: "column",
                alignContent: "flex-start",
                width: "70%",
                height: "15%",
                paddingRight: "20%",
                alignSelf: "center",
                paddingTop: 10,
              }}>
                <p style={{
                  fontFamily: "Oxygen, sans-serif",
                  fontSize: 20,
                  margin: 8,
                  marginLeft: 0,
                }}>Question</p>
                <div style={{
                width: "100%",
                flex: 1,
                }}>
                  <input type="text" ref={questionRef} style={{
                    width: "100%",
                    height: 33,
                    borderRadius: 5,
                    border: "solid 3pt #DEDEDE",
                    paddingLeft: 5,
                    fontSize: 16,
                  }} /> 
                </div>
              </div>
              <div style={{
                display: "flex",
                flexDirection: "column",
                alignContent: "flex-start",
                width: "90%",
                height: "60%",
                alignSelf: "center",
                paddingTop: 10,
              }}>
                <p style={{
                    fontFamily: "Oxygen, sans-serif",
                    fontSize: 20,
                    marginBottom: 8,
                  }}>Answer</p>
                <textarea  ref={answerRef} style={{
                  width: "100%",
                  height: "90%",
                  borderRadius: 5,
                  border: "solid 3pt #DEDEDE",
                  alignItem: "flex-start",
                  padding: 5,
                  resize: "none",
                  fontFamily: "Roboto",
                  fontSize: 16,
                }} />
              </div>
              <button onClick={handleSubmit} className={"admin-submit-hover"} style={{
                  position: "absolute",
                  left: 0,
                  right: 0,
                  bottom: 50,
                  marginLeft: "auto",
                  marginRight: "auto",
                  width: "20vw"
                }}>Save</button>
              <button style={{
                position: "absolute",
                top: 20,
                right: 20,
                width: 30,
                height: 30,
                backgroundColor: "white",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                border: "none",
                cursor: "pointer"
              }} onClick={handleClose}>
              <img src="/closeButton.png"  style={{
                width: "200%",
                aspectRatio: "1/1",
                opacity: 0.25
              }}/>
              </button>
            </div>
          </NewModal>
        </SmallContainer>
      </Container>
    </div>
  );
};

export default AdminFaq;
