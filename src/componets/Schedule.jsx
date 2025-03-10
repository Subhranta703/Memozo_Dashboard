import React from "react";
import "../style/bookingRequests.css";

const Schedule = () => {
  const bookings = [
    { time: "10:00 AM - 2:00 PM", title: "Wedding Shoot - Sarah & Mike", status: "Confirmed" },
    { time: "3:30 PM - 4:30 PM", title: "Portrait Session - John Smith", status: "Pending" },
    { time: "5:00 PM - 6:30 PM", title: "Family Photos - Thompson Family", status: "Confirmed" },
  ];

  return (
    <div className="schedule">
      <h3>Today's Schedule</h3>
      {bookings.map((booking, index) => (
        <div key={index} className={`schedule-item ${booking.status.toLowerCase()}`}>
          <p>{booking.title}</p>
          <span>{booking.time}</span>
          <span className={`status ${booking.status.toLowerCase()}`}>{booking.status}</span>
        </div>
      ))}
    </div>
  );
};

export default Schedule;