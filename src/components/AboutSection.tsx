
import { Card, CardContent } from "@/components/ui/card";

const AboutSection = () => {
  const educationItems = [
    {
      degree: "B.Tech in Computer Science Engineering",
      institution: "THDC IHET College Dehradun",
      duration: "2021 - Present (Expected Aug 2025)",
      score: "70% (Till 6th Sem)"
    },
    {
      degree: "12th Grade",
      institution: "Shivedale School",
      duration: "Completed in 2021",
      score: "85%"
    },
    {
      degree: "10th Grade",
      institution: "Shivedale School",
      duration: "Completed in 2019",
      score: "88.4%"
    }
  ];

  return (
    <section id="about" className="bg-gray-50">
      <div className="container-section">
        <h2 className="section-heading">About Me</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div className="order-2 lg:order-1">
            <h3 className="section-subheading">Who I Am</h3>
            <p className="text-gray-700 mb-6">
              I'm a passionate developer focused on building meaningful digital products with responsibility, care, and craft. 
              I believe in creating solutions that make a difference and solve real-world problems.
            </p>
            <p className="text-gray-700 mb-8">
              My journey in technology has equipped me with skills in full-stack development, allowing me to bring ideas to life through 
              clean, efficient, and maintainable code.
            </p>
            
            <h3 className="section-subheading mt-8">Education</h3>
            <div className="space-y-4">
              {educationItems.map((item, index) => (
                <Card key={index} className="border border-gray-200">
                  <CardContent className="p-4">
                    <h4 className="font-semibold text-lg">{item.degree}</h4>
                    <p className="text-gray-700">{item.institution}</p>
                    <div className="flex justify-between text-sm text-gray-500 mt-2">
                      <span>{item.duration}</span>
                      {item.score && <span>{item.score}</span>}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
          
          <div className="order-1 lg:order-2 flex justify-center">
            <div className="relative">
              <div className="absolute -inset-1 bg-primary/20 rounded-lg blur"></div>
              <img 
                src="/lovable-uploads/b867d16f-6df4-4a5d-92cc-8b685f14f8fa.png" 
                alt="Sarvesh Ghildiyal" 
                className="rounded-lg relative shadow-lg h-auto max-w-full max-h-[400px] object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
