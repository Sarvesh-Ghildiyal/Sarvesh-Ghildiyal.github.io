import { Link } from "react-router-dom";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import { useEffect, useState } from "react";

const ProjectsSection = () => {
  const [api, setApi] = useState<CarouselApi>();

  useEffect(() => {
    if (!api) {
      return;
    }

    const interval = setInterval(() => {
      api.scrollNext();
    }, 4000);

    return () => clearInterval(interval);
  }, [api]);

  const projects = [
    {
      id: "project4",
      title: "AI Session Analytics Agent (MCP-Powered)",
      description:
        "Developed an intelligent agent utilizing MCP tools to bridge the gap between raw session recording data and LLM reasoning.",
      image: "/images/ai-agent.png",
      technologies: [
        "MCP",
        "Azure OpenAI",
        "AgentSDK",
        "Langfuse",
        "Python",
        "Typer",
      ],
    },
    {
      id: "project5",
      title: "Competitor's Research Tool",
      description:
        "Designed and developed an agentic interface that ingests a competitor’s URL and automatically generates a comprehensive comparative report in Google Sheets.",
      image: "/images/competitor-tool.png",
      technologies: ["MCP", "FastMCP", "Python", "React", "Google Sheets API"],
    },
    {
      id: "project1",
      title: "Skia Coffee Client Project",
      description:
        "Delivered the Skia Coffee solution through a web application that enabled real-time order tracking and inventory updates, seamlessly integrated across both Android & iOS apps and the admin portal.",
      image: "/images/skia-coffee.jpeg",
      technologies: [
        "Vue.js",
        "Firebase (Auth, Hosting, Functions)",
        "Shadc-vue (Headless UI)",
        "Shiprocket",
        "Github Projects",
      ],
    },
    {
      id: "project2",
      title: "Cieszyc Web App",
      description:
        "Developed and launched a website with a friend for a college fest, serving 600+ attendees, featuring ticketing, event schedules, andsubmission forms for event participation and payment.",
      image: "/images/cieszyc.png",
      technologies: ["Laravel PHP", "Guzzle", "Spatie", "Tailwind CSS"],
    },
    {
      id: "project3",
      title: "Complaint Management System",
      description:
        "Delivered a Complaint Management System web app that digitized administrative workflows and reduced paperwork, marking the start of my development journey and evolving from Laravel to a reimagined Remix.js implementation.",
      image: "/images/cms.png",
      technologies: [
        "Laravel",
        "PHP",
        "Remix.js",
        "JavaScript",
        "LAMP",
        "MySQL",
        "Bootstrap",
        "Tailwind CSS",
        "Vanilla CSS",
      ],
    },
  ];

  return (
    <section id="projects" className="bg-gray-50 py-16">
      <div className="container px-4 md:px-6 mx-auto">
        <h2 className="section-heading mb-10 text-center">My Projects</h2>

        <div className="relative px-8 sm:px-12">
          <Carousel
            setApi={setApi}
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent>
              {projects.map((project) => (
                <CarouselItem
                  key={project.id}
                  className="md:basis-1/2 lg:basis-1/3 pl-4"
                >
                  <div className="h-full p-1">
                    <Link
                      to={`/project/${project.id}`}
                      className="no-underline block h-full"
                    >
                      <Card className="h-full border border-gray-200 hover:border-primary/50 hover:shadow-md transition-all flex flex-col">
                        <div className="h-48 overflow-hidden rounded-t-lg">
                          <img
                            src={project.image}
                            alt={project.title}
                            className="w-full h-full object-cover transition-transform hover:scale-105"
                          />
                        </div>
                        <CardContent className="flex-1 p-5 flex flex-col">
                          <h3 className="font-bold text-lg mb-2 line-clamp-1">
                            {project.title}
                          </h3>
                          <p className="text-gray-700 mb-4 line-clamp-3 text-sm">
                            {project.description}
                          </p>
                          <div className="flex flex-wrap gap-2 mt-auto">
                            {project.technologies
                              .slice(0, 3)
                              .map((tech, index) => (
                                <span
                                  key={index}
                                  className="text-[10px] px-2 py-1 bg-primary/10 text-primary rounded-full"
                                >
                                  {tech}
                                </span>
                              ))}
                            {project.technologies.length > 3 && (
                              <span className="text-[10px] px-2 py-1 bg-gray-100 text-gray-500 rounded-full">
                                +{project.technologies.length - 3}
                              </span>
                            )}
                          </div>
                        </CardContent>
                        <CardFooter className="border-t p-4">
                          <div className="ml-auto text-sm font-medium text-primary flex items-center gap-1">
                            View Details <ArrowRight className="h-3 w-3" />
                          </div>
                        </CardFooter>
                      </Card>
                    </Link>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-0 sm:-left-4" />
            <CarouselNext className="right-0 sm:-right-4" />
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
