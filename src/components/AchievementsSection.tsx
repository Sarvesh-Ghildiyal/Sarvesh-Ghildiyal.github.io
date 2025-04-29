
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
      period: "Second and Third Year",
      description: `Looking back, organizing the college chess tournament was a memorable experience. I was part of the team that helped select the top three players to represent our college at the University level. One of the players, Ayush, a first-year student, achieved a significant milestone by reaching the North Zone finals. It was a joyful moment for me to see him succeed, as it reminded me of the exposure I didn’t have during my early years. Seeing him progress filled me with happiness, knowing my efforts contributed to giving juniors the opportunity to shine.`,
      location: "College & University Level",
      date: "March 2023",
      images: [
        "/lovable-uploads/147e9355-9461-4037-92ec-a924e6ae7144.png",
        "/lovable-uploads/66b296db-9938-4afd-ac98-36e932eed886.png",
        "/lovable-uploads/264eff14-8618-4d48-ad88-2528dab9120a.png",
        "/lovable-uploads/5870d59d-163a-426f-a64f-2e0ce8f861e3.png",
        "/lovable-uploads/3dd3e71f-00c1-49e8-a84b-b03a95f53ff3.png",
        "/lovable-uploads/c17fc688-460b-44a1-897a-16301ba7707b.png",
      ],
    },
    {
      id: "footballTournament",
      title: "Semi-Finalist in College Football Tournament",
      period: "Pre-Final Year",
      description: `Being a part of the college football team and making it to the semi-finals is an experience I will always cherish. It was a time of great teamwork and camaraderie, and it brings back fond memories of the hard work we put in together as a team.`,
      location: "THDC IHET College",
      date: "December 2023",
      images: ["/lovable-uploads/0dc4e0a4-b9e4-48a9-a8c1-cddfb51fe677.png"],
    },
    {
      id: "zephyr2022",
      title: "Anchor for Zephyr 2022 - College Fresher's Event",
      period: "Final Year",
      description: `Anchoring Zephyr 2022 for the Fresher's event was a memorable milestone for me. It was a great opportunity to contribute to the event's smooth execution and to welcome the new batch. I look back on it fondly as a fun and rewarding experience, where I was able to make a small difference in creating a positive first impression for the freshers.`,
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
    <section
      id="achievements"
      className="bg-gradient-to-b from-secondary/20 to-background"
    >
      <div className="container-section">
        <h2 className="section-heading">Experiences & Milestones</h2>

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
                    <span className="text-sm font-medium">
                      {achievement.period}
                    </span>
                  </div>
                  <h3 className="font-bold text-lg mb-1">
                    {achievement.title}
                  </h3>
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
                      <h3 className="text-xl font-bold mb-2">
                        {achievement.title}
                      </h3>
                      <p className="text-sm text-primary mb-3">
                        {achievement.location}
                      </p>
                      <p className="text-gray-700 mb-6">
                        {achievement.description}
                      </p>

                      {/* Image Carousel */}
                      <div className="relative">
                        <Carousel
                          opts={{
                            loop: true,
                            align: "start",
                          }}
                          className="w-full"
                        >
                          <CarouselContent>
                            {achievement.images.map((image, index) => (
                              <CarouselItem
                                key={index}
                                className="md:basis-1/2 lg:basis-1/2"
                              >
                                <div className="p-1 h-full">
                                  <div className="overflow-hidden rounded-lg bg-secondary/30 border border-secondary h-[300px]">
                                    <img
                                      src={image}
                                      alt={`${achievement.title} - Image ${
                                        index + 1
                                      }`}
                                      className="w-full h-full object-cover transition-transform hover:scale-105"
                                      loading="lazy"
                                    />
                                  </div>
                                </div>
                              </CarouselItem>
                            ))}
                          </CarouselContent>
                          <div className="hidden md:block">
                            <CarouselPrevious className="left-2" />
                            <CarouselNext className="right-2" />
                          </div>
                          <div className="md:hidden">
                            <CarouselPrevious className="left-0 bg-background/80 backdrop-blur-sm" />
                            <CarouselNext className="right-0 bg-background/80 backdrop-blur-sm" />
                          </div>
                        </Carousel>
                      </div>
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
