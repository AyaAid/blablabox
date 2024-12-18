import React from "react";
import "./Message.css";

interface MessageProps {
  mind: boolean;
  date: string;
  children: React.ReactNode;
}

const Message: React.FC<MessageProps> = ({ mind, date, children }) => {
  return (
    <div className={`message-side ${mind ? "mind" : ""}`}>
      <div className="message-side-message">
        <div className={`message-side-message-bulle ${mind ? "mind" : ""}`}>
          <p>{children}</p>
        </div>
        <p>{date}</p>
      </div>
    </div>
  );
};

export default Message;
