
import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Trophy, Calendar } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";

type Achievement = {
  id: string;
  title: string;
  period: string;
  description: string;
  location: string;
  date: string;
  images: string[];
};

const AchievementsSection = () => {
  const achievements: Achievement[] = [
    {
      id: "chessTournament",
      title: "First Runner-Up in College Chess Tournament",
      period: "Second and Final Year",
      description:
        "Represented the college at the University level, organizing and leading a team of three players. One of the players, under my mentorship, reached North Zone finals, marking a significant achievement in my leadership and strategic skills development.",
      location: "University Level",
      date: "March 2023",
      images: [
        "/lovable-uploads/147e9355-9461-4037-92ec-a924e6ae7144.png",
        "/lovable-uploads/66b296db-9938-4afd-ac98-36e932eed886.png",
        "/lovable-uploads/264eff14-8618-4d48-ad88-2528dab9120a.png",
      ],
    },
    {
      id: "footballTournament",
      title: "Semi-Finalist in College Football Tournament",
      period: "Final Year",
      description:
        "Led the college football team to the semi-finals, showcasing leadership, coordination, and teamwork. This experience helped refine my decision-making and teamwork under pressure.",
      location: "THDC IHET College",
      date: "December 2023",
      images: [
        "/lovable-uploads/0dc4e0a4-b9e4-48a9-a8c1-cddfb51fe677.png"
      ],
    },
    {
      id: "zephyr2022",
      title: "Anchor for Zephyr 2022 - College Fresher's Event",
      period: "Final Year",
      description:
        "Successfully curated and anchored the Zephyr 2022 Fresher's event, contributing to the seamless execution and the welcoming experience for the new batch. It was a major milestone in my event management and public speaking journey.",
      location: "THDC IHET College",
      date: "September 2022",
      images: [
        "/lovable-uploads/3c43ef38-6fd2-4a8c-906b-6fbe7304ebe5.png",
        "/lovable-uploads/c031c137-8dc1-427a-a32f-0d70848bd212.png",
        "/lovable-uploads/01b99156-a3c8-433c-8116-8d05c29551a1.png",
        "/lovable-uploads/c444655e-44b1-419f-95ed-da8e182f25bd.png",
        "/lovable-uploads/4ba3b0ed-6ef3-4744-86e5-dc3b625f5db3.png",
      ],
    },
  ];

  const [activeAchievement, setActiveAchievement] = useState<string | null>(null);

  // Set the first achievement as active when component mounts
  useEffect(() => {
    if (achievements.length > 0) {
      setActiveAchievement(achievements[0].id);
    }
  }, []);

  return (
    <section id="achievements" className="bg-gradient-to-b from-secondary/20 to-background">
      <div className="container-section">
        <h2 className="section-heading">Achievements & Extracurriculars</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Achievements Cards */}
          <div className="col-span-1 md:col-span-1 space-y-4">
            {achievements.map((achievement) => (
              <Card
                key={achievement.id}
                className={`cursor-pointer transition-all hover:shadow-md ${
                  activeAchievement === achievement.id
                    ? "border-primary/70 shadow-md"
                    : "border-gray-200"
                }`}
                onClick={() => setActiveAchievement(achievement.id)}
              >
                <CardContent className="p-5">
                  <div className="flex items-center gap-2 text-primary mb-2">
                    <Trophy className="h-4 w-4" />
                    <span className="text-sm font-medium">{achievement.period}</span>
                  </div>
                  <h3 className="font-bold text-lg mb-1">{achievement.title}</h3>
                  <div className="flex items-center gap-2 text-muted-foreground mb-3">
                    <Calendar className="h-3 w-3" />
                    <span className="text-xs">{achievement.date}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Selected Achievement Details and Carousel */}
          <div className="col-span-1 md:col-span-2 space-y-6">
            {activeAchievement && (
              <>
                {/* Selected Achievement Details */}
                {achievements
                  .filter((a) => a.id === activeAchievement)
                  .map((achievement) => (
                    <div key={achievement.id} className="animate-fade-in">
                      <h3 className="text-xl font-bold mb-2">{achievement.title}</h3>
                      <p className="text-sm text-primary mb-3">{achievement.location}</p>
                      <p className="text-gray-700 mb-6">{achievement.description}</p>

                      {/* Image Carousel */}
                      <Carousel
                        opts={{
                          loop: true,
                          align: "start",
                        }}
                        className="w-full"
                      >
                        <CarouselContent>
                          {achievement.images.map((image, index) => (
                            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/2">
                              <div className="p-1 h-full">
                                <div className="overflow-hidden rounded-lg bg-secondary/30 border border-secondary h-[300px]">
                                  <img
                                    src={image}
                                    alt={`${achievement.title} - Image ${index + 1}`}
                                    className="w-full h-full object-cover transition-transform hover:scale-105"
                                    loading="lazy"
                                  />
                                </div>
                              </div>
                            </CarouselItem>
                          ))}
                        </CarouselContent>
                        <CarouselPrevious className="lg:-left-12 left-1" />
                        <CarouselNext className="lg:-right-12 right-1" />
                      </Carousel>
                    </div>
                  ))}
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;
