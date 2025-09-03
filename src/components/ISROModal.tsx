import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  X, 
  Rocket, 
  Star, 
  Calendar, 
  MapPin, 
  Users, 
  Award,
  CheckCircle,
  Clock
} from "lucide-react";

interface ISROModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ISROModal = ({ isOpen, onClose }: ISROModalProps) => {
  const tripHighlights = [
    "Meet renowned ISRO scientists and engineers",
    "Exclusive access to ISRO facilities and labs",
    "Hands-on experience with space technology",
    "Interactive sessions on space missions",
    "Certificate of participation from ISRO",
    "All expenses covered trip package"
  ];

  const eligibilityCriteria = [
    "Top 100 performers in AchievoQuest Olympiads",
    "Minimum 90% score in Science or Mathematics",
    "Active participation in platform activities",
    "Completed at least 3 subject modules"
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          {/* Backdrop */}
          <motion.div
            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          {/* Modal Content */}
          <motion.div
            className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto"
            initial={{ opacity: 0, scale: 0.8, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 50 }}
            transition={{ duration: 0.4, type: "spring", stiffness: 300 }}
          >
            <Card className="bg-background/95 backdrop-blur-md border-primary/30 shadow-2xl">
              {/* Header */}
              <CardHeader className="relative overflow-hidden">
                {/* Background */}
                <div className="absolute inset-0 bg-gradient-galaxy opacity-20" />
                
                {/* Close Button */}
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={onClose}
                  className="absolute top-4 right-4 z-10 text-foreground hover:text-primary"
                >
                  <X className="h-6 w-6" />
                </Button>

                {/* Floating Elements */}
                <div className="absolute top-10 left-10">
                  <motion.div
                    animate={{ 
                      y: [0, -10, 0],
                      rotate: [0, 5, 0]
                    }}
                    transition={{ 
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  >
                    <Star className="h-8 w-8 text-star-gold" />
                  </motion.div>
                </div>
                
                <div className="absolute top-6 right-20">
                  <motion.div
                    animate={{ 
                      y: [0, -15, 0],
                      x: [0, 10, 0]
                    }}
                    transition={{ 
                      duration: 6,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  >
                    <Rocket className="h-12 w-12 text-primary" />
                  </motion.div>
                </div>

                {/* Title Section */}
                <div className="relative z-10 text-center pt-8">
                  <Badge className="mb-4 bg-gradient-nebula text-white font-semibold px-4 py-2">
                    🚀 Exclusive Opportunity
                  </Badge>
                  
                  <CardTitle className="text-3xl md:text-4xl font-bold mb-4">
                    <span className="bg-gradient-nebula bg-clip-text text-transparent">
                      ISRO Space Center Trip
                    </span>
                  </CardTitle>
                  
                  <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
                    An incredible opportunity for top-performing students to visit ISRO and experience space science firsthand!
                  </p>
                </div>
              </CardHeader>

              <CardContent className="p-8 space-y-8">
                {/* Trip Details */}
                <div className="grid md:grid-cols-2 gap-8">
                  {/* Trip Information */}
                  <div className="space-y-6">
                    <h3 className="text-2xl font-bold text-foreground flex items-center gap-2">
                      <Calendar className="h-6 w-6 text-primary" />
                      Trip Details
                    </h3>
                    
                    <div className="space-y-4">
                      <div className="flex items-center gap-3 p-4 bg-card/50 rounded-lg border border-border/50">
                        <Calendar className="h-5 w-5 text-primary" />
                        <div>
                          <p className="font-semibold text-foreground">Date</p>
                          <p className="text-foreground/70">April 15-17, 2024</p>
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-3 p-4 bg-card/50 rounded-lg border border-border/50">
                        <MapPin className="h-5 w-5 text-primary" />
                        <div>
                          <p className="font-semibold text-foreground">Location</p>
                          <p className="text-foreground/70">ISRO Headquarters, Bangalore</p>
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-3 p-4 bg-card/50 rounded-lg border border-border/50">
                        <Users className="h-5 w-5 text-primary" />
                        <div>
                          <p className="font-semibold text-foreground">Participants</p>
                          <p className="text-foreground/70">Limited to 50 students</p>
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-3 p-4 bg-card/50 rounded-lg border border-border/50">
                        <Clock className="h-5 w-5 text-primary" />
                        <div>
                          <p className="font-semibold text-foreground">Duration</p>
                          <p className="text-foreground/70">3 Days, 2 Nights</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Eligibility Criteria */}
                  <div className="space-y-6">
                    <h3 className="text-2xl font-bold text-foreground flex items-center gap-2">
                      <Award className="h-6 w-6 text-primary" />
                      Eligibility Criteria
                    </h3>
                    
                    <div className="space-y-3">
                      {eligibilityCriteria.map((criteria, index) => (
                        <motion.div
                          key={index}
                          className="flex items-start gap-3 p-3 bg-muted/30 rounded-lg"
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.3, delay: index * 0.1 }}
                        >
                          <CheckCircle className="h-5 w-5 text-green-400 mt-0.5 flex-shrink-0" />
                          <p className="text-foreground/80 text-sm">{criteria}</p>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Trip Highlights */}
                <div className="space-y-6">
                  <h3 className="text-2xl font-bold text-foreground flex items-center gap-2">
                    <Star className="h-6 w-6 text-star-gold" />
                    Trip Highlights
                  </h3>
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    {tripHighlights.map((highlight, index) => (
                      <motion.div
                        key={index}
                        className="flex items-center gap-3 p-4 bg-gradient-nebula/10 rounded-lg border border-primary/20"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: index * 0.05 }}
                        whileHover={{ scale: 1.02, x: 5 }}
                      >
                        <Rocket className="h-5 w-5 text-primary flex-shrink-0" />
                        <p className="text-foreground/80 text-sm">{highlight}</p>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Call to Action */}
                <motion.div
                  className="text-center p-8 bg-gradient-galaxy/20 rounded-lg border border-primary/30"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: 0.3 }}
                >
                  <h3 className="text-2xl font-bold text-foreground mb-4">
                    Ready to Launch Your Dreams?
                  </h3>
                  
                  <p className="text-foreground/80 mb-6 max-w-2xl mx-auto">
                    This is a once-in-a-lifetime opportunity to experience space science at ISRO. 
                    Work hard, achieve excellence, and earn your spot on this incredible journey!
                  </p>
                  
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button variant="hero" size="lg" className="min-w-[200px]">
                      <Rocket className="mr-2 h-5 w-5" />
                      Start Learning Now
                    </Button>
                    <Button variant="cosmic" size="lg" className="min-w-[200px]">
                      View Requirements
                    </Button>
                  </div>
                  
                  <p className="text-xs text-foreground/60 mt-4">
                    * Selection based on performance and platform engagement
                  </p>
                </motion.div>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ISROModal;