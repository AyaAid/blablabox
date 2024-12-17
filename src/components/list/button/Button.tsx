import "./Button.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserGroup } from "@fortawesome/free-solid-svg-icons";

const Button = () => {
  return (
    <div className="button">
      <FontAwesomeIcon icon={faUserGroup} className="button-icon" /> <p>Amis</p>
    </div>
  );
};

export default Button;
