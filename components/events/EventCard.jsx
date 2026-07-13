import { Button } from "@/components/ui/button"
import { Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle} from "@/components/ui/card"
import { ButtonGroup } from "@/components/ui/button-group"

function EventCard({ event }) {
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
    <Card className="bg-card shadow-sm border-2 border-black hover:shadow-md justify-end items-left max-w-max m-6 p-6 flex">
      {/*<CardHeader>
        <CardTitle>Card Title</CardTitle>
        <CardDescription>Card Description</CardDescription>
        <CardAction>Card Action</CardAction>
      </CardHeader>*/}
      <CardContent>
        <div className="w-full flex flex-row">
          <div className="w-1/6 flex flex-col border-red-500 border-r-2 border-gray-300 justify-center text-center font-bold">
            <span className="w-full text-red-500 text-5xl uppercase">{day}</span>
            <span className="w-full text-black text-2xl uppercase">{month}</span>
          </div>
          <div className="w-5/6 flex flex-col border-blue-500 border-4">
            <h3 className="w-full text-2xl text-black font-bold">
              {event.title}
            </h3>
            <div className="flex flex-row items-left">
            
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
        </div>
      </CardContent>
      <CardFooter>
        <p>Card Footer</p>
      </CardFooter>
    </Card>
      
  );
}

export { EventCard };