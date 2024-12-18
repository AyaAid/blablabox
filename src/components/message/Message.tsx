import "./Message.css";

interface MessageProps {
  message: any; // Définir le type de la prop
}

const Message: React.FC<MessageProps> = ({ message }) => {
  return (
    <div className={`message-side ${message.mind ? "mind" : ""}`}>
      <div className="message">
        <div className={`message-bulle ${message.mind ? "mind" : ""}`}>
          <p>{message.message}</p>
        </div>
        <p>{message.date}</p>
      </div>
    </div>
  );
};

export default Message;
