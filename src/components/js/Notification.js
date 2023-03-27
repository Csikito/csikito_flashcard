import React from "react";
import "../styles/Notification.css";

export default function Notification(props) {
  const notificationClass = `notification ${props.notification ? "show" : ""} `;

  return props.notification ? (
    <div className={notificationClass}>
      <div className="noti-data">
        <p>You already have such a flashcard!</p>
      </div>
    </div>
  ) : (
    ""
  );
}
