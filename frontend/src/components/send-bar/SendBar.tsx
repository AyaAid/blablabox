import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./SendBar.css";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

interface SendBarProps {
  onSendMessage: (message: Message) => void;
}

type Message = {
  id: number;
  message: string;
  mind: boolean;
  date: string;
};

const SendBar: React.FC<SendBarProps> = ({ onSendMessage }) => {
  const [message, setMessage] = useState("");
  const [nbOfCaract, SetNbOfCaract] = useState("0");
  const [mind, setMind] = useState(false);
  const maxLength = 500;

  const handleChange = (value: string) => {
    setMessage(value);
    SetNbOfCaract(value);
  };

  const handleSend = () => {
    if (message.trim()) {
      const newMessage: Message = {
        id: Date.now(),
        message: message,
        mind: true,
        date: new Date().toISOString(),
      };
      console.log(newMessage);
      onSendMessage(newMessage);
    }
  };

  return (
    <div className="sendBar">
      <div className="input">
        <input
          placeholder="Écrire un message ..."
          onChange={(e) => handleChange(e.target.value)}
          maxLength={maxLength}
        ></input>
        <p>
          {nbOfCaract.length} / {maxLength}
        </p>
      </div>
      <button onClick={handleSend}>
        <FontAwesomeIcon icon={faArrowUp} className="sendBar-icon" />
      </button>
    </div>
  );
};

export default SendBar;
