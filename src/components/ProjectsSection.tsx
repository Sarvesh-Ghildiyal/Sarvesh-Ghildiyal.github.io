import { Link } from "react-router-dom";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const ProjectsSection = () => {
  const projects = [
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
      image: "/placeholder.svg",
      technologies: ["Laravel PHP", "Guzzle", "Spatie", "Tailwind CSS"],
    },
    {
      id: "project3",
      title: "Complaint Management System",
      description:
        "Delivered a Complaint Management System web app that digitized administrative workflows and reduced paperwork, marking the start of my development journey and evolving from Laravel to a reimagined Remix.js implementation.",
      image: "/placeholder.svg",
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
    <section id="projects" className="bg-gray-50">
      <div className="container-section">
        <h2 className="section-heading">My Projects</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <Link
              key={project.id}
              to={`/project/${project.id}`}
              className="no-underline"
            >
              <Card className="h-full border border-gray-200 hover:border-primary/50 hover:shadow-md transition-all flex flex-col">
                <div className="h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform hover:scale-105"
                  />
                </div>
                <CardContent className="flex-1 p-5">
                  <h3 className="font-bold text-lg mb-2">{project.title}</h3>
                  <p className="text-gray-700 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {project.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="text-xs px-2 py-1 bg-primary/10 text-primary rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
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

export default ProjectsSection;
