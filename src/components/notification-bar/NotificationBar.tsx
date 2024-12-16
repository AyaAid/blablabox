import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./NotificationBar.css";
import { faBell } from "@fortawesome/free-solid-svg-icons";

const NotificationBar = () => {
  return (
    <div className="notification-bar">
      <div className="notification">
        <div className="notification-nb">
          <p>0</p>
        </div>
        <FontAwesomeIcon icon={faBell} className="notification-icon" />
      </div>
    </div>
  );
};

export default NotificationBar;
