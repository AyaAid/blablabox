import React, { useState } from "react";
import List from "../components/list/List";
import Message from "../components/message/Message";
import NotificationBar from "../components/notification-bar/NotificationBar";
import SendBar from "../components/send-bar/SendBar";
import "./Home.css";
import useMessageStore from "@store/message";

const Home = () => {
  const messages = useMessageStore((state) => state.messages);

  return (
    <div className="page">
      <List />
      <div className="page-container">
        <div className="bg"></div>
        <NotificationBar />
        <div className="messages">
          {messages.map((message, index) => (
            <Message key={index} msg={message} />
          ))}
        </div>
        <SendBar />
      </div>
    </div>
  );
};

export default Home;
