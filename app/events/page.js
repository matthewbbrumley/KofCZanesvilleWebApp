import EventCard from "../components/EventCard";
import EventList from "../components/EventList";
import { EventCardListView } from "@/components/events/EventCardListView";



const events = [
  {
    id: 1,
    title: "Annual Fish Fry",
    date: "2026-04-14",
    time: "6:30 PM",
    location: "St. Mary's Parish Hall",
    description:
        "Join us for dinner, fellowship, and fundraising for local charities."
  },
  {
    id: 2,
    title: "Community Service Day",
    date: "2026-05-15",
    time: "9:00 AM",
    location: "City Park",
    description:
        "Help us beautify our community by participating in tree planting and cleanup activities."
  }
];

export default function Events() {
  return (
    <main class="content-holder">
      <h1 class="content-title">Events</h1>
      <EventCardListView events={events} />
    </main>
  );
}
