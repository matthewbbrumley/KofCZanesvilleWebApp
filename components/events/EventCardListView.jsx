import { EventCard } from "@/components/events/EventCard"

function EventCardListView({ events = [], renderItem }) {
  if (!events || events.length === 0) {
    return (
      <div className="w-sm">
        No events found.
      </div>
    );
  }

  return (
    <section className="w-md">

      {events.map((event) => (
        <EventCard key={event.id} event={event} />
      ))}
    </section>
  );
}

export { EventCardListView }