import { Link } from "react-router-dom";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Calendar, ArrowRight } from "lucide-react";

const EventsSection = () => {
  const events = [
    {
      id: "event1",
      title: "Chainlink Bootcamps",
      date: "16 Dec 2022; 28–29 Mar 2023; 23 Sept 2023",
      location: "THDC-IHET, New Tehri & Graphic Era Hill University, Dehradun",
      description:
        "Conducted Web3 workshops on blockchain and smart contract development, funded by Chainlink.",
    },
    {
      id: "event2",
      title: "Hackathon at UPES",
      date: "February 2022",
      location: "UPES, Dehradun",
      description:
        "Led a beginner team in my first-ever 48-hour hackathon and emerged victorious with a real-world sustainability solution.",
    },
    {
      id: "event3",
      title: "Hello World Beginning",
      date: "March 2024",
      location: "THDC IHET College",
      description:
        "Initiated the foundation of a college tech club to give back and uplift the next batch of learners.",
    },
  ];

  return (
    <section id="events">
      <div className="container-section">
        <h2 className="section-heading">Events & Activities</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {events.map((event) => (
            <Link
              key={event.id}
              to={`/event/${event.id}`}
              className="no-underline"
            >
              <Card className="h-full border border-gray-200 hover:border-primary/50 hover:shadow-md transition-all flex flex-col">
                <CardContent className="flex-1 p-5">
                  <div className="flex items-center gap-2 text-primary mb-3">
                    <Calendar className="h-4 w-4" />
                    <span className="text-sm">{event.date}</span>
                  </div>
                  <h3 className="font-bold text-lg mb-2">{event.title}</h3>
                  <p className="text-sm text-primary mb-3">{event.location}</p>
                  <p className="text-gray-700">{event.description}</p>
                </CardContent>
                <CardFooter className="border-t p-4">
                  <div className="ml-auto text-sm font-medium text-primary flex items-center gap-1">
                    View Details <ArrowRight className="h-3 w-3" />
                  </div>
                </CardFooter>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EventsSection;
