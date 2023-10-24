import React from "react";
import "./event.css";

function EventCard({ description, image, name, people, type, confirmed }) {
  return (
    <div className="event">
      <div className="event-card-container">
        <img src={image} alt="" />
        <h3 className="name">{name}</h3>
        <h4>{type}</h4>
        <p>{description}</p>
        <p>
          BAs required: <span className="name">{people}</span>
        </p>

        <span>status: {confirmed}</span>
      </div>
    </div>
  );
}

export default EventCard;
