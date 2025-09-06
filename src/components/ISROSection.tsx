import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Rocket, 
  Star, 
  Calendar, 
  MapPin, 
  Users, 
  Award,
  CheckCircle,
  Trophy,
  Telescope,
  Zap
} from "lucide-react";
import isroLaunchPad from "@/assets/isro-launch-pad.jpg";
import isroMissionControl from "@/assets/isro-mission-control.jpg";

interface ISROSectionProps {
  onOpenModal: () => void;
}

const ISROSection = ({ onOpenModal }: ISROSectionProps) => {
  const highlights = [
    { icon: Telescope, text: "Meet ISRO Scientists", color: "text-blue-400" },
    { icon: Rocket, text: "Space Technology Tours", color: "text-primary" },
    { icon: Award, text: "ISRO Certificate", color: "text-star-gold" },
    { icon: Trophy, text: "All Expenses Covered", color: "text-green-400" }
  ];

  const criteria = [
    "Top 100 performers in Olympiads",
    "Minimum 90% score in Science/Math",
    "Active platform participation"
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <Badge className="mb-4 bg-gradient-nebula text-white font-semibold px-4 py-2 text-lg">
            🚀 Exclusive Opportunity
          </Badge>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-nebula bg-clip-text text-transparent">
              Win a Trip to ISRO
            </span>
          </h2>
          <p className="text-xl text-foreground/80 max-w-3xl mx-auto">
            Top-performing students get the incredible opportunity to visit the Indian Space Research Organisation 
            and experience space science firsthand with our exclusive ISRO trip contest.
          </p>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Left: Contest Details */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-2">
                <Star className="h-6 w-6 text-star-gold" />
                Contest Highlights
              </h3>
              <div className="grid gap-4">
                {highlights.map((highlight, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center gap-3 p-4 bg-card/50 rounded-lg border border-border/50"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{ scale: 1.02, x: 5 }}
                  >
                    <highlight.icon className={`h-6 w-6 ${highlight.color}`} />
                    <span className="text-foreground font-medium">{highlight.text}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-2">
                <CheckCircle className="h-6 w-6 text-green-400" />
                Eligibility Criteria
              </h3>
              <div className="space-y-3">
                {criteria.map((criterion, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center gap-3 p-3 bg-muted/30 rounded-lg"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                  >
                    <CheckCircle className="h-5 w-5 text-green-400 flex-shrink-0" />
                    <p className="text-foreground/80">{criterion}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            <motion.div
              className="flex gap-4"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <Button 
                variant="hero" 
                size="lg" 
                onClick={onOpenModal}
                className="flex-1 sm:flex-none"
              >
                <Rocket className="mr-2 h-5 w-5" />
                Learn More
              </Button>
              <Button 
                variant="cosmic" 
                size="lg"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <Zap className="mr-2 h-5 w-5" />
                Start Journey
              </Button>
            </motion.div>
          </motion.div>

          {/* Right: ISRO Images */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Card className="overflow-hidden bg-card/60 backdrop-blur-sm border-border/50 hover:border-primary/30 transition-all duration-300">
              <div className="relative">
                <img 
                  src={isroLaunchPad} 
                  alt="ISRO Launch Pad with rocket ready for launch" 
                  className="w-full h-64 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute bottom-4 left-4 text-white">
                  <h4 className="font-bold text-lg">ISRO Launch Facility</h4>
                  <p className="text-sm opacity-90">Experience space technology up close</p>
                </div>
              </div>
            </Card>

            <Card className="overflow-hidden bg-card/60 backdrop-blur-sm border-border/50 hover:border-primary/30 transition-all duration-300">
              <div className="relative">
                <img 
                  src={isroMissionControl} 
                  alt="ISRO Mission Control Center with scientists working" 
                  className="w-full h-64 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute bottom-4 left-4 text-white">
                  <h4 className="font-bold text-lg">Mission Control Center</h4>
                  <p className="text-sm opacity-90">Meet the brilliant minds behind space missions</p>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>

        {/* Trip Details Cards */}
        <motion.div
          className="grid md:grid-cols-3 gap-6 mb-12"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <Card className="bg-card/60 backdrop-blur-sm border-border/50 p-6 text-center">
            <Calendar className="h-8 w-8 text-primary mx-auto mb-3" />
            <h4 className="font-bold text-foreground mb-2">Duration</h4>
            <p className="text-foreground/80">3 Days, 2 Nights</p>
            <p className="text-sm text-foreground/60 mt-1">April 15-17, 2024</p>
          </Card>
          
          <Card className="bg-card/60 backdrop-blur-sm border-border/50 p-6 text-center">
            <MapPin className="h-8 w-8 text-primary mx-auto mb-3" />
            <h4 className="font-bold text-foreground mb-2">Location</h4>
            <p className="text-foreground/80">ISRO Headquarters</p>
            <p className="text-sm text-foreground/60 mt-1">Bangalore, India</p>
          </Card>
          
          <Card className="bg-card/60 backdrop-blur-sm border-border/50 p-6 text-center">
            <Users className="h-8 w-8 text-primary mx-auto mb-3" />
            <h4 className="font-bold text-foreground mb-2">Participants</h4>
            <p className="text-foreground/80">50 Students</p>
            <p className="text-sm text-foreground/60 mt-1">Top performers only</p>
          </Card>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          className="text-center p-8 bg-gradient-galaxy/20 rounded-lg border border-primary/30"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <Rocket className="h-12 w-12 text-primary mx-auto mb-4" />
          <h3 className="text-2xl font-bold text-foreground mb-4">
            Your Space Adventure Awaits
          </h3>
          <p className="text-foreground/80 max-w-2xl mx-auto mb-6">
            This exclusive opportunity is reserved for our most dedicated students. Excel in your Olympiad 
            preparation and earn your chance to explore the wonders of space science at ISRO.
          </p>
          <Button 
            variant="hero" 
            size="lg"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            <Star className="mr-2 h-5 w-5" />
            Begin Your Quest
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default ISROSection;