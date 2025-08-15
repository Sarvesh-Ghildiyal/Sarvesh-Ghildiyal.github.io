import { Card, CardContent } from "@/components/ui/card";

const AboutSection = () => {
  const educationItems = [
    {
      degree: "B.Tech in Computer Science Engineering",
      institution:
        "THDC IHET College, Tehri | Affiliated to VMSBUTU, Dehradun",
      duration: "2021 - 2025",
      score: "71%",
    },
    {
      degree: "12th Grade",
      institution: "Shivedale School",
      duration: "2020-21",
      score: "85%",
    },
    {
      degree: "10th Grade",
      institution: "Shivedale School",
      duration: "2018-19",
      score: "88.4%",
    },
  ];

  return (
    <section id="about" className="bg-gray-50">
      <div className="container-section">
        <h2 className="section-heading">About Me</h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div className="order-2 lg:order-1">
            <h3 className="section-subheading">Who I Am</h3>
            <p className="text-gray-700 mb-6">
              I’m a full-stack developer fascinated by the complexities of tech
              and its constant evolution. Constantly building, I aim to create
              impactful software as solutions. As{" "}
              <strong>Prateek, Founder of Colored Cow</strong>, once shared with
              me,{" "}
              <em>
                'Building tech solutions for real problems is an art few
                master.'
              </em>
            </p>

            <p className="text-gray-700 mb-8">
              My journey in tech has shaped my focus on{" "}
              <strong>clean, structured, and sustainable code.</strong> I value
              autonomy, meaningful collaboration, and growth within teams that
              emphasize craftsmanship and trust.
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
