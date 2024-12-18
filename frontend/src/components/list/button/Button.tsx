import "./Button.css";
import { faComment, faUserGroup } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Button = ({ buttonMode, onChangeMode }) => {
  return (
    <div className="button" onClick={onChangeMode}>
      {!buttonMode && (
        <>
          <p>Conversations</p>
          <FontAwesomeIcon icon={faComment} className="button-icon" />
        </>
      )}
      {buttonMode && (
        <>
          <p>Amis</p>
          <FontAwesomeIcon icon={faUserGroup} className="button-icon" />
        </>
      )}
    </div>
  );
};

export default Button;
