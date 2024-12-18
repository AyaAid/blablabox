import React, { useState } from "react";
import List from "../components/list/List";
import Message from "../components/message/Message";
import NotificationBar from "../components/notification-bar/NotificationBar";
import SendBar from "../components/send-bar/SendBar";
import "./Home.css";

type Message = {
  id: number;
  message: string;
  mind: boolean;
  date: string;
};

const Home = () => {
  const [messages, setMessages] = useState<Message[]>([]);

  const handleSendMessage = (newMessage: Message) => {
    setMessages((prevMessages) => [...prevMessages, newMessage]);
  };

  return (
    <div className="page">
      <List />
      <div className="page-container">
        <div className="bg"></div>
        <NotificationBar />
        <div className="messages">
          {messages.map((message, index) => (
            <Message key={index} mind={message.mind} date={message.date}>
              {message.message}
            </Message>
          ))}
        </div>
        <SendBar onSendMessage={handleSendMessage} />
      </div>
    </div>
  );
};

export default Home;
