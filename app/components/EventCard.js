// components/events/EventCard.js
import { Button } from "@/components/ui/button"
import { Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle} from "@/components/ui/card"
import { ButtonGroup } from "@/components/ui/button-group"

export default function EventCard({ event }) {
  const eventDate = new Date(event.date);

  const month = eventDate.toLocaleString("en-US", {
    month: "short",
  }).toUpperCase();

  const day = eventDate.getDate();

  return (

    
    /*<div className="event-card">
      <div className="event-card__date">
        <span className="event-card__month">{month}</span>
        <span className="event-card__day">{day}</span>
      </div>
      <div className="event-card__content">
        <h3 className="event-card__title">
          {event.title}
        </h3>
        <div className="event-card__divider"></div>
        <div className="event-card__details">
          <p>
            <strong>Time:</strong> {event.time}
          </p>
          <p>
            <strong>Location:</strong> {event.location}
          </p>
          <p>
            {event.description}
          </p>
        </div>
        <div className="event-card__actions">
          <Button variant="default">Test</Button>
        </div>
      </div>
    </div>*/
    <Card className="w-full max-w-sm event-card">
      <CardHeader>
        <CardTitle>Card Title</CardTitle>
        <CardDescription>Card Description</CardDescription>
        <CardAction>Card Action</CardAction>
      </CardHeader>
      <CardContent>
        <p>Card Content</p>
      </CardContent>
      <CardFooter>
        <p>Card Footer</p>
      </CardFooter>
    </Card>
      
  );
}
