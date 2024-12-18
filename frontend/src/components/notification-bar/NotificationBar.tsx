import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./NotificationBar.css";
import { faBell } from "@fortawesome/free-solid-svg-icons";

const NotificationBar = () => {
  return (
    <div className="notification-bar">
      <div className="notification-bar-notification">
        <div className="notification-bar-notification-nb">
          <p>0</p>
        </div>
        <FontAwesomeIcon
          icon={faBell}
          className="notification-bar-notification-bell"
        />
      </div>
    </div>
  );
};

export default NotificationBar;
