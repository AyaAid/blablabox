import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./SendBar.css";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { ChangeEvent, useState } from "react";
import useMessageStore from "@store/message";

const SendBar: React.FC = () => {
  const [message, setMessage] = useState("");
  const [nbOfCaract, setNbOfCaract] = useState(0);
  const maxLength = 500;

  const { addMessage } = useMessageStore();

  const handleChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setMessage(event.target.value);
    setNbOfCaract(event.target.value.length);
  };

  const handleSend = () => {
    if (message.trim) {
      addMessage({
        id: Date.now(),
        message,
        mind: true,
        date: new Date().toLocaleDateString(),
      });
    }
    setMessage("");
  };

  return (
    <div className="sendBar">
      <div className="sendBar-input">
        <textarea
          className="textArea"
          placeholder="Écrire un message..."
          value={message}
          onChange={handleChange}
          maxLength={maxLength}
        />
        <p>
          {nbOfCaract} / {maxLength}
        </p>
      </div>
      <button onClick={handleSend}>
        <FontAwesomeIcon icon={faArrowUp} className="sendBar-icon" />
      </button>
    </div>
  );
};

export default SendBar;
