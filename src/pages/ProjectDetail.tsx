
import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

interface Project {
  id: string;
  title: string;
  description: string;
  fullDescription: string;
  purpose: string;
  image: string;
  technologies: string[];
  journey: string;
  videoId?: string;
}

// Sample project data (in a real app, you would fetch this)
const projectsData: Project[] = [
  {
    id: "project1",
    title: "Project One",
    description: "A brief description of project one.",
    fullDescription: "This is a detailed description of Project One. It covers the complete scope and implementation details of the project.",
    purpose: "The purpose of this project was to solve a specific problem in the industry by creating an innovative solution.",
    image: "/placeholder.svg",
    technologies: ["React", "Node.js", "MongoDB", "Express", "Redux"],
    journey: "The development journey started with identifying the key challenges in the domain. After thorough research, I designed the architecture and implemented the solution piece by piece. Facing several technical challenges along the way, I managed to overcome them through iterative problem-solving.",
    videoId: "dQw4w9WgXcQ" // YouTube video ID
  },
  {
    id: "project2",
    title: "Project Two",
    description: "A brief description of project two.",
    fullDescription: "This is a detailed description of Project Two. It showcases my skills in frontend development and UI/UX design.",
    purpose: "This project was created to demonstrate modern web development practices and create an accessible user interface.",
    image: "/placeholder.svg",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Prisma", "PostgreSQL"],
    journey: "I started with wireframing the UI and planning the architecture. The development process involved setting up the Next.js project, designing the database schema, and implementing the core features. Testing and optimization were key parts of the final stages.",
    videoId: "dQw4w9WgXcQ" // YouTube video ID
  },
  {
    id: "project3",
    title: "Project Three",
    description: "A brief description of project three.",
    fullDescription: "Project Three is a mobile application built to provide users with a seamless experience across different devices.",
    purpose: "The goal was to create a cross-platform mobile app that offers real-time synchronization and offline capability.",
    image: "/placeholder.svg",
    technologies: ["React Native", "Firebase", "Redux", "Jest", "GitHub Actions"],
    journey: "The development journey involved learning React Native, setting up the Firebase backend, and implementing complex state management. Challenges included optimizing performance for low-end devices and ensuring data consistency.",
    videoId: "dQw4w9WgXcQ" // YouTube video ID
  },
  {
    id: "project4",
    title: "Project Four",
    description: "A brief description of project four.",
    fullDescription: "Project Four is a comprehensive web application with both frontend and backend components.",
    purpose: "This project aimed to provide a scalable solution for managing complex data relationships and user interactions.",
    image: "/placeholder.svg",
    technologies: ["Vue.js", "Express", "PostgreSQL", "Docker", "AWS"],
    journey: "The development process started with defining the data models and API endpoints. The frontend was built with Vue.js, focusing on reusable components and state management. Deployment was handled through containerization with Docker and AWS services.",
    videoId: "dQw4w9WgXcQ" // YouTube video ID
  },
  {
    id: "project5",
    title: "Project Five",
    description: "A brief description of project five.",
    fullDescription: "Project Five demonstrates advanced concepts in web development and cloud infrastructure.",
    purpose: "The purpose was to build a highly available and fault-tolerant system that can handle various workloads.",
    image: "/placeholder.svg",
    technologies: ["Angular", "Django", "AWS", "Kubernetes", "Terraform"],
    journey: "This project required extensive planning for the infrastructure and application architecture. I implemented CI/CD pipelines, configured Kubernetes clusters, and ensured proper monitoring and logging throughout the system.",
    videoId: "dQw4w9WgXcQ" // YouTube video ID
  }
];

const ProjectDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [project, setProject] = useState<Project | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate data fetching
    setLoading(true);
    const foundProject = projectsData.find(p => p.id === id) || null;
    
    // Simulate loading delay
    setTimeout(() => {
      setProject(foundProject);
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

  if (!project) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center">
        <h1 className="text-2xl font-bold mb-4">Project Not Found</h1>
        <Button asChild>
          <Link to="/#projects">
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Projects
          </Link>
        </Button>
      </div>
    );
  }

  return (
    <div className="pt-20 pb-16">
      <div className="container max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Button asChild variant="ghost" className="mb-6">
          <Link to="/#projects" className="flex items-center">
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Projects
          </Link>
        </Button>

        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="h-64 sm:h-80 md:h-96 overflow-hidden">
            <img 
              src={project.image} 
              alt={project.title} 
              className="w-full h-full object-cover"
            />
          </div>
          
          <div className="p-6 sm:p-8">
            <h1 className="text-3xl font-bold mb-4">{project.title}</h1>
            
            <div className="flex flex-wrap gap-2 mb-6">
              {project.technologies.map((tech, index) => (
                <span 
                  key={index}
                  className="text-sm px-3 py-1 bg-primary/10 text-primary rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>
            
            <section className="mb-8">
              <h2 className="text-xl font-semibold mb-3">Project Overview</h2>
              <p className="text-gray-700">{project.fullDescription}</p>
            </section>
            
            <Separator className="my-6" />
            
            <section className="mb-8">
              <h2 className="text-xl font-semibold mb-3">Purpose</h2>
              <p className="text-gray-700">{project.purpose}</p>
            </section>
            
            <Separator className="my-6" />
            
            <section className="mb-8">
              <h2 className="text-xl font-semibold mb-3">Development Journey</h2>
              <p className="text-gray-700">{project.journey}</p>
            </section>
            
            {project.videoId && (
              <>
                <Separator className="my-6" />
                
                <section>
                  <h2 className="text-xl font-semibold mb-3">Demo Video</h2>
                  <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden">
                    <iframe
                      src={`https://www.youtube.com/embed/${project.videoId}`}
                      title="YouTube video player"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="w-full h-[300px] sm:h-[400px]"
                    ></iframe>
                  </div>
                </section>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
