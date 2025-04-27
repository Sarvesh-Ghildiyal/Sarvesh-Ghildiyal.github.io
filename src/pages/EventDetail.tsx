
import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Calendar, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

interface Event {
  id: string;
  title: string;
  date: string;
  location: string;
  description: string;
  fullDescription: string;
  images: string[];
  highlights: string[];
  outcomes?: string;
}

// Sample event data (in a real app, you would fetch this)
const eventsData: Event[] = [
  {
    id: "event1",
    title: "Tech Conference 2024",
    date: "May 15, 2024",
    location: "Virtual Event",
    description: "Participated in a tech conference focused on emerging technologies.",
    fullDescription: "This tech conference brought together industry leaders and innovators to discuss the latest trends and developments in technology. I had the opportunity to attend sessions on AI, blockchain, and cloud computing, gaining valuable insights into these cutting-edge fields.",
    images: [
      "/placeholder.svg",
      "https://images.unsplash.com/photo-1605810230434-7631ac76ec81",
      "https://images.unsplash.com/photo-1500673922987-e212871fec22"
    ],
    highlights: [
      "Attended workshops on AI and machine learning",
      "Networked with industry professionals",
      "Gained insights into emerging tech trends"
    ],
    outcomes: "The knowledge gained from this conference has been instrumental in shaping my approach to current and future projects, particularly in implementing AI-driven solutions."
  },
  {
    id: "event2",
    title: "Hackathon Winner",
    date: "April 3-5, 2024",
    location: "Dehradun, India",
    description: "Won first place in a 48-hour hackathon focused on sustainable technology solutions.",
    fullDescription: "This intensive 48-hour hackathon challenged participants to develop innovative technology solutions addressing sustainability challenges. Our team successfully created a smart waste management system that optimizes collection routes and reduces carbon emissions.",
    images: ["/placeholder.svg", "/placeholder.svg"],
    highlights: [
      "Led a team of four developers",
      "Developed a full-stack application in 48 hours",
      "Implemented IoT integration for waste bin monitoring",
      "Won first place among 25 competing teams"
    ],
    outcomes: "Winning this hackathon provided validation for our innovative approach and opened doors to potential partnerships with local municipalities interested in implementing our solution."
  },
  {
    id: "event3",
    title: "Workshop: Web Development",
    date: "March 12, 2024",
    location: "THDC IHET College",
    description: "Conducted a workshop on modern web development technologies for junior students.",
    fullDescription: "I organized and conducted a comprehensive workshop on modern web development technologies for junior students at THDC IHET College. The workshop covered fundamental concepts of HTML, CSS, and JavaScript, as well as an introduction to React and responsive design principles.",
    images: ["/placeholder.svg"],
    highlights: [
      "Designed workshop curriculum and materials",
      "Conducted hands-on coding sessions",
      "Mentored students on their first web projects",
      "Received excellent feedback from participants"
    ],
    outcomes: "The workshop successfully introduced over 50 students to web development, with many continuing to build their skills and create their own projects afterward."
  }
];

const EventDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [event, setEvent] = useState<Event | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate data fetching
    setLoading(true);
    const foundEvent = eventsData.find(e => e.id === id) || null;
    
    // Simulate loading delay
    setTimeout(() => {
      setEvent(foundEvent);
      setLoading(false);
    }, 300);
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
      </div>
    );
  }

  if (!event) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center">
        <h1 className="text-2xl font-bold mb-4">Event Not Found</h1>
        <Button asChild>
          <Link to="/#events">
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Events
          </Link>
        </Button>
      </div>
    );
  }

  return (
    <div className="pt-20 pb-16">
      <div className="container max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Button asChild variant="ghost" className="mb-6">
          <Link to="/#events" className="flex items-center">
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Events
          </Link>
        </Button>

        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="relative">
            <Carousel className="w-full">
              <CarouselContent>
                {event.images.map((image, index) => (
                  <CarouselItem key={index}>
                    <div className="h-64 sm:h-80 w-full overflow-hidden">
                      <img 
                        src={image} 
                        alt={`${event.title} - Image ${index + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="left-4" />
              <CarouselNext className="right-4" />
            </Carousel>
          </div>
          
          <div className="p-6 sm:p-8">
            <div className="flex flex-wrap items-center gap-4 mb-4">
              <div className="flex items-center gap-2 text-primary">
                <Calendar className="h-4 w-4" />
                <span>{event.date}</span>
              </div>
              
              <div className="flex items-center gap-2 text-gray-600">
                <MapPin className="h-4 w-4" />
                <span>{event.location}</span>
              </div>
            </div>
            
            <h1 className="text-3xl font-bold mb-6">{event.title}</h1>
            
            <section className="mb-8">
              <h2 className="text-xl font-semibold mb-3">Event Overview</h2>
              <p className="text-gray-700">{event.fullDescription}</p>
            </section>
            
            <Separator className="my-6" />
            
            <section className="mb-8">
              <h2 className="text-xl font-semibold mb-3">Key Highlights</h2>
              <ul className="list-disc pl-5 space-y-2 text-gray-700">
                {event.highlights.map((highlight, index) => (
                  <li key={index}>{highlight}</li>
                ))}
              </ul>
            </section>
            
            {event.outcomes && (
              <>
                <Separator className="my-6" />
                
                <section>
                  <h2 className="text-xl font-semibold mb-3">Outcomes</h2>
                  <p className="text-gray-700">{event.outcomes}</p>
                </section>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventDetail;
