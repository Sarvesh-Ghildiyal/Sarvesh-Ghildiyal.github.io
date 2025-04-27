
import { Card, CardContent } from "@/components/ui/card";
import { Briefcase } from "lucide-react";

const ExperienceSection = () => {
  const experiences = [
    {
      position: "R&D Team Member",
      company: "Decube Innovation Labs",
      period: "Dec 2024 – Present",
      description: "Working on research and development of innovative technology solutions."
    },
    {
      position: "Full Stack Developer",
      company: "Vervegen Tech Pvt Ltd",
      period: "Jun 2024 – Sep 2024",
      description: "Developed and maintained web applications using modern technologies."
    },
    {
      position: "Virtual Lab Developer Intern",
      company: "Virtual Labs, IIT Roorkee",
      period: "Jun 2024 – Sep 2024",
      description: "Contributed to the development of virtual laboratory simulations for educational purposes."
    }
  ];

  return (
    <section id="experience">
      <div className="container-section">
        <h2 className="section-heading">Professional Experience</h2>
        
        <div className="max-w-3xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gray-200"></div>
            
            {/* Experience items */}
            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <div key={index} className="relative">
                  {/* Timeline dot */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 -mt-2">
                    <div className="bg-white p-1 rounded-full border-2 border-primary">
                      <Briefcase className="h-5 w-5 text-primary" />
                    </div>
                  </div>
                  
                  {/* Experience card */}
                  <div className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                    {/* Date */}
                    <div className="md:w-1/2 flex justify-center md:justify-end md:pr-8 pb-4 md:pb-0">
                      <div className="md:text-right">
                        <span className="inline-block bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">
                          {exp.period}
                        </span>
                      </div>
                    </div>
                    
                    {/* Content */}
                    <div className="md:w-1/2 md:pl-8">
                      <Card className="border border-gray-200 hover:border-primary/30 transition-colors">
                        <CardContent className="p-5">
                          <h3 className="font-bold text-lg">{exp.position}</h3>
                          <p className="text-primary font-medium">{exp.company}</p>
                          <p className="mt-2 text-gray-700">{exp.description}</p>
                        </CardContent>
                      </Card>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
