import React from "react";
import "./Message.css";

interface MessageProps {
  msg: Message;
}

const Message: React.FC<MessageProps> = ({ msg }) => {
  return (
    <div className={`message-side ${msg.mind ? "mind" : ""}`}>
      <div className="message-side-message">
        <div className={`message-side-message-bulle ${msg.mind ? "mind" : ""}`}>
          <p>{msg.message}</p>
        </div>
        <p>{msg.date}</p>
      </div>
    </div>
  );
};

export default Message;
