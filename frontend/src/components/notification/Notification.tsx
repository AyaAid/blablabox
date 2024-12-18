import React, { useEffect, useState } from "react";
import "./Notification.css";

const Notification = ({ message, type, onClose }) => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
      if (onClose) onClose();
    }, 3000); 

    return () => clearTimeout(timer);
  }, [onClose]);

  if (!visible) return null;

  return <div className={`notification ${type}`}>{message}</div>;
};

export default Notification;
