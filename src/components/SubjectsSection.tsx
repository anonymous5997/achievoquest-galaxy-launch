import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Calculator, 
  BookOpen, 
  Microscope, 
  Globe, 
  Brain,
  Trophy,
  Users,
  Clock
} from "lucide-react";

const SubjectsSection = () => {
  const subjects = [
    {
      icon: Calculator,
      title: "Mathematics",
      description: "Master problem-solving techniques, algebraic concepts, and geometric principles with our comprehensive math curriculum.",
      features: ["Problem Solving", "Algebra & Geometry", "Number Theory", "Statistics"],
      students: "15,000+",
      duration: "12 months",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: BookOpen,
      title: "English",
      description: "Enhance your language skills, vocabulary, and comprehension through interactive lessons and practice exercises.",
      features: ["Grammar & Vocabulary", "Reading Comprehension", "Writing Skills", "Literature"],
      students: "12,000+",
      duration: "10 months",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Microscope,
      title: "Science",
      description: "Explore the wonders of physics, chemistry, and biology through hands-on experiments and theoretical concepts.",
      features: ["Physics Concepts", "Chemistry Lab", "Biology Studies", "Scientific Method"],
      students: "18,000+",
      duration: "14 months",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: Globe,
      title: "General Knowledge",
      description: "Broaden your horizons with comprehensive coverage of current affairs, history, geography, and culture.",
      features: ["Current Affairs", "World History", "Geography", "Cultural Studies"],
      students: "10,000+",
      duration: "8 months",
      color: "from-orange-500 to-red-500"
    },
    {
      icon: Brain,
      title: "Aptitude",
      description: "Sharpen your logical reasoning, analytical thinking, and problem-solving abilities for competitive success.",
      features: ["Logical Reasoning", "Quantitative Aptitude", "Data Interpretation", "Pattern Recognition"],
      students: "14,000+",
      duration: "6 months",
      color: "from-indigo-500 to-purple-500"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <section id="subjects" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-cosmic">
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
              Master Every Subject
            </span>
          </h2>
          <p className="text-xl text-foreground/80 max-w-3xl mx-auto">
            Comprehensive learning paths designed to excel in all Olympiad subjects with expert guidance and interactive content.
          </p>
        </motion.div>

        {/* Subjects Grid */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {subjects.map((subject, index) => (
            <motion.div
              key={subject.title}
              variants={cardVariants}
              whileHover={{ 
                scale: 1.05,
                transition: { duration: 0.2 }
              }}
              className="group"
            >
              <Card className="h-full bg-card/60 backdrop-blur-sm border-border/50 hover:border-primary/30 transition-all duration-300 overflow-hidden">
                <CardHeader className="relative">
                  {/* Background Gradient */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${subject.color} opacity-10 group-hover:opacity-20 transition-opacity duration-300`} />
                  
                  {/* Icon */}
                  <div className="relative z-10 flex items-center justify-center w-16 h-16 mb-4 mx-auto">
                    <div className={`p-4 rounded-full bg-gradient-to-br ${subject.color} shadow-lg`}>
                      <subject.icon className="h-8 w-8 text-white" />
                    </div>
                  </div>
                  
                  <CardTitle className="text-xl font-bold text-center text-foreground">
                    {subject.title}
                  </CardTitle>
                  <CardDescription className="text-center text-foreground/70">
                    {subject.description}
                  </CardDescription>
                </CardHeader>

                <CardContent className="space-y-6">
                  {/* Features */}
                  <div>
                    <h4 className="font-semibold text-foreground mb-3">Key Topics:</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {subject.features.map((feature, idx) => (
                        <div 
                          key={idx}
                          className="text-sm text-foreground/80 bg-muted/50 px-2 py-1 rounded-md"
                        >
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Stats */}
                  <div className="flex justify-between text-sm text-foreground/70">
                    <div className="flex items-center space-x-1">
                      <Users className="h-4 w-4" />
                      <span>{subject.students}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="h-4 w-4" />
                      <span>{subject.duration}</span>
                    </div>
                  </div>

                  {/* CTA Button */}
                  <Button 
                    variant="cosmic" 
                    className="w-full group-hover:scale-105 transition-transform duration-200"
                  >
                    <Trophy className="mr-2 h-4 w-4" />
                    Start Learning
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <p className="text-lg text-foreground/80 mb-6">
            Ready to begin your Olympiad journey? Join thousands of successful students today!
          </p>
          <Button variant="hero" size="lg">
            Explore All Subjects
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default SubjectsSection;