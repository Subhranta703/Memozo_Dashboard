import React from "react";
import "../style/todayWork.css";

const TodayWork = () => {
  return (
    <div className="today-work-container">
      <h2 className="title">Today's Work</h2>
      <ul className="work-list">
        <li className="work-item">Edit wedding photos</li>
        <li className="work-item">Client meeting at 3 PM</li>
        <li className="work-item">Upload new portfolio shots</li>
      </ul>
    </div>
  );
};

export default TodayWork;
