import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Trophy, Medal, Award, Star } from "lucide-react";

const HallOfFame = () => {
  const topPerformers = [
    {
      name: "Arjun Patel",
      grade: "Grade 8",
      achievement: "International Mathematics Olympiad - Gold Medal",
      score: "98.5%",
      subjects: ["Mathematics", "Science"],
      year: "2024",
      rank: 1,
      image: "👦",
      quote: "AchievoQuest made complex problems feel like exciting puzzles!"
    },
    {
      name: "Priya Sharma",
      grade: "Grade 7",
      achievement: "National Science Olympiad - Silver Medal",
      score: "96.8%",
      subjects: ["Science", "General Knowledge"],
      year: "2024",
      rank: 2,
      image: "👧",
      quote: "The interactive lessons helped me understand concepts deeply."
    },
    {
      name: "Rohit Kumar",
      grade: "Grade 9",
      achievement: "English Olympiad - Gold Medal",
      score: "97.2%",
      subjects: ["English", "Aptitude"],
      year: "2024",
      rank: 3,
      image: "👦",
      quote: "Amazing platform with excellent practice materials!"
    },
    {
      name: "Ananya Singh",
      grade: "Grade 6",
      achievement: "Regional Mathematics Champion",
      score: "95.4%",
      subjects: ["Mathematics", "Aptitude"],
      year: "2024",
      rank: 4,
      image: "👧",
      quote: "Teachers are incredibly supportive and encouraging."
    },
    {
      name: "Vikram Reddy",
      grade: "Grade 8",
      achievement: "Science Fair National Winner",
      score: "94.9%",
      subjects: ["Science", "Mathematics"],
      year: "2024",
      rank: 5,
      image: "👦",
      quote: "AchievoQuest turned my curiosity into achievements!"
    },
    {
      name: "Kavya Nair",
      grade: "Grade 7",
      achievement: "General Knowledge Quiz Champion",
      score: "93.7%",
      subjects: ["General Knowledge", "English"],
      year: "2024",
      rank: 6,
      image: "👧",
      quote: "Love the comprehensive coverage of all topics!"
    }
  ];

  const getRankIcon = (rank: number) => {
    switch (rank) {
      case 1:
        return <Trophy className="h-6 w-6 text-star-gold" />;
      case 2:
        return <Medal className="h-6 w-6 text-gray-400" />;
      case 3:
        return <Award className="h-6 w-6 text-amber-600" />;
      default:
        return <Star className="h-6 w-6 text-primary" />;
    }
  };

  const getRankBadge = (rank: number) => {
    const colors = {
      1: "bg-gradient-to-r from-yellow-400 to-yellow-600 text-black",
      2: "bg-gradient-to-r from-gray-300 to-gray-500 text-black",
      3: "bg-gradient-to-r from-amber-400 to-amber-600 text-black"
    };
    return colors[rank as keyof typeof colors] || "bg-primary text-primary-foreground";
  };

  return (
    <section id="hall-of-fame" className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-nebula bg-clip-text text-transparent">
              Hall of Fame
            </span>
          </h2>
          <p className="text-xl text-foreground/80 max-w-3xl mx-auto">
            Celebrating the outstanding achievements of our brilliant students who have excelled in various Olympiads and competitions.
          </p>
        </motion.div>

        {/* Achievement Stats */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {[
            { label: "Gold Medals", value: "847", icon: Trophy },
            { label: "Silver Medals", value: "1,234", icon: Medal },
            { label: "Bronze Medals", value: "2,156", icon: Award },
            { label: "Top Rankings", value: "5,000+", icon: Star }
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              className="text-center p-6 bg-card/60 backdrop-blur-sm rounded-lg border border-border/50"
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <stat.icon className="h-8 w-8 text-primary mx-auto mb-3" />
              <div className="text-2xl font-bold text-foreground">{stat.value}</div>
              <div className="text-sm text-foreground/60">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Top Performers Grid */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          {topPerformers.map((student, index) => (
            <motion.div
              key={student.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.02, y: -5 }}
              className="group"
            >
              <Card className="h-full bg-card/60 backdrop-blur-sm border-border/50 hover:border-primary/30 transition-all duration-300 overflow-hidden">
                <CardContent className="p-6">
                  {/* Header with Rank */}
                  <div className="flex items-center justify-between mb-4">
                    <Badge className={`${getRankBadge(student.rank)} font-semibold`}>
                      #{student.rank}
                    </Badge>
                    {getRankIcon(student.rank)}
                  </div>

                  {/* Student Info */}
                  <div className="text-center mb-6">
                    <div className="text-4xl mb-3">{student.image}</div>
                    <h3 className="text-xl font-bold text-foreground">{student.name}</h3>
                    <p className="text-foreground/70">{student.grade}</p>
                  </div>

                  {/* Achievement */}
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">Achievement</h4>
                      <p className="text-sm text-foreground/80 bg-muted/50 p-3 rounded-md">
                        {student.achievement}
                      </p>
                    </div>

                    {/* Score */}
                    <div className="flex justify-between items-center">
                      <span className="text-foreground/70">Score:</span>
                      <span className="font-bold text-primary text-lg">{student.score}</span>
                    </div>

                    {/* Subjects */}
                    <div>
                      <p className="text-foreground/70 mb-2">Subjects:</p>
                      <div className="flex flex-wrap gap-2">
                        {student.subjects.map((subject) => (
                          <Badge key={subject} variant="secondary" className="text-xs">
                            {subject}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    {/* Quote */}
                    <div className="pt-4 border-t border-border/30">
                      <p className="text-sm italic text-foreground/70">
                        "{student.quote}"
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom Message */}
        <motion.div
          className="text-center mt-16 p-8 bg-card/30 backdrop-blur-sm rounded-lg border border-border/50"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <Trophy className="h-12 w-12 text-star-gold mx-auto mb-4" />
          <h3 className="text-2xl font-bold text-foreground mb-4">
            Your Success Story Starts Here
          </h3>
          <p className="text-foreground/80 max-w-2xl mx-auto">
            Join these exceptional students and write your own success story. With dedicated practice, 
            expert guidance, and the right resources, you too can achieve remarkable results in Olympiads.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default HallOfFame;