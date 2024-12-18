import React, { useState } from "react";
import List from "../components/list/List";
import Message from "../components/message/Message";
import NotificationBar from "../components/notification-bar/NotificationBar";
import SendBar from "../components/send-bar/SendBar";
import "./Home.css";

interface ChatMessage {
  fromMe: boolean; 
  content: string;
}

const Home = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([]);

  const handleSendMessage = (messageContent: string) => {
    const newMessage: ChatMessage = { fromMe: true, content: messageContent };
    setMessages((prevMessages) => [...prevMessages, newMessage]);
    setTimeout(() => {
      const autoReply: ChatMessage = {
        fromMe: false,
        content: "Réponse automatique : " + messageContent,
      };
      setMessages((prevMessages) => [...prevMessages, autoReply]);
    }, 1000);
  };

  return (
    <div className="page">
      <List />
      <div className="container">
        <div className="bg"></div>
        <NotificationBar />
        <div className="messages">
          {messages.map((message, index) => (
            <Message key={index} mind={message.fromMe}>
              {message.content}
            </Message>
          ))}
        </div>
        <SendBar onSendMessage={handleSendMessage} />
      </div>
    </div>
  );
};

export default Home
