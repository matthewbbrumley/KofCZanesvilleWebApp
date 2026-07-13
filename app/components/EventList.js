// components/events/EventList.js

import EventCard from "./EventCard";

export default function EventList({ events = [] }) {
  if (events.length === 0) {
    return (
      <div className="event-list-empty">
        <h3>No Upcoming Events</h3>
        <p>Check back soon for future council events.</p>
      </div>
    );
  }

  return (
    <section className="event-list">

      {events.map((event) => (
        <EventCard
          key={event.id}
          event={event}
        />
      ))}

    </section>
  );
}