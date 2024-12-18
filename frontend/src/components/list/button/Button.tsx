import "./Button.css";
import { faUserGroup } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";

const Button = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/friends");
  };

  return (
    <div className="button" onClick={handleClick}>
      <FontAwesomeIcon icon={faUserGroup} className="button-icon" /> <p>Amis</p>
    </div>
  );
};

export default Button;
