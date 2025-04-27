
import { Link } from "react-router-dom";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const ProjectsSection = () => {
  const projects = [
    {
      id: "project1",
      title: "Project One",
      description: "A brief description of project one and its objectives.",
      image: "/placeholder.svg",
      technologies: ["React", "Node.js", "MongoDB"]
    },
    {
      id: "project2",
      title: "Project Two",
      description: "A brief description of project two and its objectives.",
      image: "/placeholder.svg",
      technologies: ["Next.js", "TypeScript", "Tailwind CSS"]
    },
    {
      id: "project3",
      title: "Project Three",
      description: "A brief description of project three and its objectives.",
      image: "/placeholder.svg",
      technologies: ["React Native", "Firebase", "Redux"]
    },
    {
      id: "project4",
      title: "Project Four",
      description: "A brief description of project four and its objectives.",
      image: "/placeholder.svg",
      technologies: ["Vue.js", "Express", "PostgreSQL"]
    },
    {
      id: "project5",
      title: "Project Five",
      description: "A brief description of project five and its objectives.",
      image: "/placeholder.svg",
      technologies: ["Angular", "Django", "AWS"]
    }
  ];

  return (
    <section id="projects" className="bg-gray-50">
      <div className="container-section">
        <h2 className="section-heading">My Projects</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <Link key={project.id} to={`/project/${project.id}`} className="no-underline">
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
