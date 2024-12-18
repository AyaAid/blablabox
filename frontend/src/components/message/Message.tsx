import React from "react";

interface MessageProps {
  mind: boolean; 
  children: React.ReactNode;
}

const Message: React.FC<MessageProps> = ({ mind, children }) => {
  return (
    <div className={`message-side ${mind ? "mind" : ""}`}>
      <div className={`message-bulle ${mind ? "mind" : ""}`}>
        <p>{children}</p>
      </div>
    </div>
  );
};

export default Message
