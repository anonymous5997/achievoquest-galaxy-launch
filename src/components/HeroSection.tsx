import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Rocket, Star, Award, Users, BookOpen, Trophy, Target, Zap } from "lucide-react";
import galaxyBg from "@/assets/galaxy-hero-bg.jpg";
import studentHero from "@/assets/student-hero.png";

const HeroSection = () => {
  const floatingElements = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    size: Math.random() * 4 + 2,
    x: Math.random() * 100,
    y: Math.random() * 100,
    delay: Math.random() * 4,
  }));

  const stats = [
    { icon: Users, value: "50,000+", label: "Students" },
    { icon: Award, value: "95%", label: "Success Rate" },
    { icon: BookOpen, value: "5", label: "Subjects" },
    { icon: Star, value: "4.9", label: "Rating" },
  ];

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: `url(${galaxyBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-deep-space/60"></div>
      
      {/* Floating Stars */}
      {floatingElements.map((element) => (
        <motion.div
          key={element.id}
          className="absolute text-star-gold"
          style={{
            left: `${element.x}%`,
            top: `${element.y}%`,
          }}
          animate={{
            y: [0, -20, 0],
            opacity: [0.3, 1, 0.3],
          }}
          transition={{
            duration: 4,
            delay: element.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <Star size={element.size} className="fill-current" />
        </motion.div>
      ))}

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8 text-left"
          >
            {/* Main Heading */}
            <motion.h1
              className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <span className="bg-gradient-nebula bg-clip-text text-transparent">
                Launch Your
              </span>
              <br />
              <span className="text-foreground">
                Olympiad Journey
              </span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              className="text-xl md:text-2xl text-foreground/80 leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Master Mathematics, English, Science, General Knowledge, and Aptitude with our comprehensive online learning platform designed for academic excellence.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <Button 
                variant="hero" 
                size="lg" 
                className="min-w-[200px]"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <Rocket className="mr-2 h-5 w-5" />
                Get Started
              </Button>
              <Button 
                variant="cosmic" 
                size="lg" 
                className="min-w-[200px]"
                onClick={() => document.getElementById('subjects')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Explore Subjects
              </Button>
            </motion.div>

            {/* Stats */}
            <motion.div
              className="grid grid-cols-2 gap-6 mt-12"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              {stats.slice(0, 2).map((stat, index) => (
                <motion.div
                  key={stat.label}
                  className="text-center p-4 rounded-lg bg-background/10 backdrop-blur-sm border border-border/20"
                  whileHover={{ scale: 1.05, y: -5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <stat.icon className="h-6 w-6 text-primary mx-auto mb-2" />
                  <div className="text-xl md:text-2xl font-bold text-foreground">
                    {stat.value}
                  </div>
                  <div className="text-sm text-foreground/60">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Content - Animated Student */}
          <motion.div
            className="relative flex justify-center lg:justify-end"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            {/* Student Image */}
            <motion.div
              className="relative"
              animate={{ 
                y: [0, -10, 0]
              }}
              transition={{ 
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <img
                src={studentHero}
                alt="Student achieving success in Olympiad"
                className="w-80 h-auto max-w-full drop-shadow-2xl"
              />
              
              {/* Floating Achievement Badge */}
              <motion.div
                className="absolute -top-4 -right-4 bg-primary/20 backdrop-blur-sm border border-primary/30 rounded-full p-3 shadow-lg"
                animate={{ 
                  rotate: [0, 10, -10, 0],
                  scale: [1, 1.1, 1]
                }}
                transition={{ 
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <Trophy className="h-6 w-6 text-primary" />
              </motion.div>

              {/* Success Rate Indicator */}
              <motion.div
                className="absolute top-8 -left-12 bg-background/20 backdrop-blur-sm border border-border/30 rounded-lg px-4 py-2 shadow-lg"
                animate={{ 
                  x: [0, 5, 0]
                }}
                transition={{ 
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <div className="flex items-center gap-2">
                  <Target className="h-4 w-4 text-primary" />
                  <span className="text-sm font-semibold text-foreground">95% Success</span>
                </div>
              </motion.div>

              {/* Video Tutorial Badge */}
              <motion.div
                className="absolute bottom-12 -left-8 bg-accent/20 backdrop-blur-sm border border-accent/30 rounded-lg px-3 py-2 shadow-lg"
                animate={{ 
                  y: [0, -5, 0]
                }}
                transition={{ 
                  duration: 2.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1
                }}
              >
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-accent rounded-full animate-pulse"></div>
                  <span className="text-xs font-medium text-foreground">Live Classes</span>
                </div>
              </motion.div>

              {/* Floating Dots */}
              {Array.from({ length: 8 }, (_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-2 h-2 bg-primary/60 rounded-full"
                  style={{
                    left: `${20 + (i % 3) * 30}%`,
                    bottom: `${30 + (i % 4) * 20}%`,
                  }}
                  animate={{
                    y: [0, -20, 0],
                    opacity: [0.3, 1, 0.3],
                  }}
                  transition={{
                    duration: 3,
                    delay: i * 0.3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-foreground/40 rounded-full flex justify-center">
          <motion.div
            className="w-1 h-3 bg-primary rounded-full mt-2"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;