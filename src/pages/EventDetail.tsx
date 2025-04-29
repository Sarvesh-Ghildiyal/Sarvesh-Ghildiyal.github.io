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
    title: "Chainlink Bootcamps & Web3 Workshops",
    date: "16 Dec 2022; 28–29 Mar 2023; 23 Sept 2023",
    location: "THDC-IHET, New Tehri & Graphic Era Hill University, Dehradun",
    description:
      "Organized and led Chainlink-funded Web3 workshops across multiple institutions.",
    fullDescription:
      "<p><strong>Led and organized</strong> a series of <em>Chainlink-sponsored Web3 bootcamps</em>, addressing audiences of over <u>250 attendees</u> across three major events. Initially managed and conducted sessions in my home institution, THDC-IHET, progressing to a more complex logistical challenge of hosting and managing the final event at <strong>Graphic Era Hill University</strong>. This required <em>remote coordination, active troubleshooting</em>, and managing a dynamic team in real time. On the final day, I delivered live sessions, handled technical queries on-the-spot, and ensured a seamless learning experience for participants. <em>This series of events shaped not only my professional competence but also refined my leadership and communication skills.</em></p>",
    images: [
      "/images/events/event1/1.jpg",
      "/images/events/event1/2.jpg",
      "/images/events/event1/3.jpg",
      "/images/events/event1/10.jpg",
      "/images/events/event1/4.jpg",
      "/images/events/event1/5.jpg",
      "/images/events/event1/6.jpg",
      "/images/events/event1/7.jpg",
      "/images/events/event1/8.jpg",
      "/images/events/event1/9.jpg",
      "/images/events/event1/meetup1.jpeg",
      "/images/events/event1/meetup2.jpg",
    ],
    highlights: [
      "<strong>Event 1 – THDC-IHET:</strong> Spoke on the evolution from Web2 to Web3, introduced blockchain fundamentals to 50+ students; a truly memorable start.",
      "<strong>Event 2 – THDC-IHET with UPES Webcrux:</strong> Delivered sessions on blockchain architecture and the role of <em>oracles</em> in smart contracts.",
      "<strong>Event 3 – Graphic Era Hill University:</strong> Addressed an external audience on <em>test networks (Sepolia)</em>, <em>consensus mechanisms</em> (PoW, PoS), wallet fundamentals, and mentored hands-on smart contract deployment.",
    ],
    outcomes:
      "<p>Gained <strong>substantial real-world experience</strong> in <em>event management, public speaking, and team coordination</em>. Beyond the technical and organizational growth, I had the privilege of meeting <strong>inspiring individuals</strong>, forging meaningful connections, and <em>immersing myself in a vibrant ecosystem of ideas and aspirations</em>. These experiences <u>reshaped my worldview</u>, broadened my horizons, and kindled a deeper sense of purpose — they didn’t just teach me how to build, they taught me how to dream.</p>",
  },
  {
    id: "event2",
    title: "Hackathon",
    date: "Feburary 2022",
    location: "Dehradun, India",
    description:
      "Led a beginner team in my first-ever 48-hour hackathon and emerged victorious with a real-world sustainability solution.",
    fullDescription:
      "<p>This was my <strong>first-ever hackathon experience</strong>, held at UPES, and it unfolded on the insistence of a senior, Balendu, who encouraged me to participate despite my limited development knowledge. That invitation turned into a pivotal moment — I took on the role of team leader, and we successfully passed the initial selection round. Spending the night on a different campus, collaborating intensively to transform our idea into a viable solution, remains <em>one of the most formative experiences</em> of my early career. It wasn’t just about coding — it was about learning how to work under pressure, trust a team, and believe in potential before perfection.</p>",
    images: ["/images/events/event2/2.jpeg", "/images/events/event2/3.jpg"],
    highlights: [
      "First hackathon experience for the entire team — we stepped in with curiosity, not credentials",
      "Led a team of complete beginners, learning and building everything from scratch",
      "Discovered the open, collaborative, and welcoming culture of hackathons",
      "Bonded over late-night brainstorming, debugging, and shared imposter syndrome",
      "Formed lasting connections and memories that transcended the competition itself",
    ],
    outcomes:
      "<p>A <strong>beautiful memory</strong> of shared curiosity, late-night laughter, and spontaneous learning. It was less about winning and more about the joy of building something together — an experience that still brings a smile whenever I think back to it.</p>",
  },
  {
    id: "event3",
    title: "Hello World Beginning",
    date: "March 2024",
    location: "THDC IHET College",
    description:
      "Initiated the foundation of a college tech club to give back and uplift the next batch of learners.",
    fullDescription:
      "<p>This was the <strong>starting point of our tech community</strong> at THDC IHET. I initiated the idea with a desire to contribute back to the college ecosystem that shaped me. The journey involved <em>planning the structure, curriculum, and long-term vision</em> for a self-sustaining club. I collaborated with peers, held meetings with our Head of Department and Director Sir, and worked on aligning the initiative with the department's goals. The energy, the intent, and the discussions — they all remain <u>deeply etched</u> in my memory.</p>",
    images: [
      "/images/events/event3/logo.jpeg",
      "/images/events/event3/one.jpeg",
      "/images/events/event3/two.jpeg",
      "/images/events/event3/flyer.png",
    ],
    highlights: [
      "Planned initial community structure and roadmap",
      "Met with college officials and aligned the vision",
      "Focused on mentorship, continuity, and peer development",
    ],
    outcomes:
      "<p><em>Even though it didn’t evolve into the club I envisioned,</em> the experience remains special. It was <strong>a beautiful attempt to give back</strong>, and the people, effort, and intent behind it will always stay with me.</p>",
  },
];

const EventDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [event, setEvent] = useState<Event | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate data fetching
    setLoading(true);
    const foundEvent = eventsData.find((e) => e.id === id) || null;

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
              {/* <p className="text-gray-700">{event.fullDescription}</p> */}
              <div
                className="text-gray-700 space-y-4"
                dangerouslySetInnerHTML={{ __html: event.fullDescription }}
              />
            </section>

            <Separator className="my-6" />

            <section className="mb-8">
              <h2 className="text-xl font-semibold mb-3">Key Highlights</h2>
              <ul className="list-disc pl-5 space-y-2 text-gray-700">
                {event.highlights.map((highlight, index) => (
                  // <li key={index}>{highlight}</li>
                  <li
                    key={index}
                    dangerouslySetInnerHTML={{ __html: highlight }}
                  />
                ))}
              </ul>
            </section>

            {event.outcomes && (
              <>
                <Separator className="my-6" />

                <section>
                  <h2 className="text-xl font-semibold mb-3">Outcomes</h2>
                  {/* <p className="text-gray-700">{event.outcomes}</p> */}
                  <div
                    className="text-gray-700 space-y-4"
                    dangerouslySetInnerHTML={{ __html: event.outcomes }}
                  />
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
