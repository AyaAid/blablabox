import "./Button.css";
import { faUserPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";

const ButtonAdd = () => {
  return (
    <div className="button">
      <FontAwesomeIcon icon={faUserPlus} /> <p>Amis</p>
    </div>
  );
};

export default ButtonAdd;
