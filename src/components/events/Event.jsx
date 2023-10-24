import React, { useEffect, useState } from "react";
import EventCard from "./EventCard";
import "./event.css";

function Event() {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true); // Add a loading state

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://gsba.onrender.com/api/v1/events");
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        setEvents(data.Events);
        setLoading(false); // Set loading to false when data is available
        console.log("API Response Data:", data);
      } catch (error) {
        console.log(error);
        setLoading(false); // Set loading to false in case of errors
      }
    };

    fetchData();
  }, []);

  return (
    <div className="event-rendered-holder">
      {loading ? (
        <div>Loading...</div>
      ) : events.length > 0 ? (
        events.map((event) => (
          <EventCard
            key={event.id}
            name={event.name}
            description={event.description}
            image={event.image}
            confirmed={event.confirmed ? "Confirmed" : "Not Confirmed"}
            people={event.people}
            type={event.type}
          />
        ))
      ) : (
        <div>No events available.</div>
      )}
    </div>
  );
}

export default Event;
