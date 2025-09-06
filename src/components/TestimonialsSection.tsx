import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Quote, Star, School, Users, Award } from "lucide-react";

const TestimonialsSection = () => {
  const schoolTestimonials = [
    {
      school: "St. Mary's International School",
      principal: "Dr. Sarah Johnson",
      location: "Mumbai",
      testimonial: "AchievoQuest has transformed our students' approach to Olympiad preparation. The comprehensive curriculum and engaging teaching methods have resulted in a 40% increase in our students' performance.",
      achievements: "15 Gold Medals in National Olympiads",
      students: 450,
      rating: 5,
      logo: "🏫"
    },
    {
      school: "Delhi Public School",
      principal: "Mr. Rajesh Gupta",
      location: "Delhi",
      testimonial: "The platform's innovative teaching methodology and dedicated faculty support have made our partnership with AchievoQuest incredibly successful. Our students love the interactive learning experience.",
      achievements: "22 International Olympiad Qualifiers",
      students: 680,
      rating: 5,
      logo: "🎓"
    },
    {
      school: "Kendriya Vidyalaya",
      principal: "Mrs. Priya Sharma",
      location: "Bangalore",
      testimonial: "AchievoQuest's structured approach to competitive exam preparation has been instrumental in developing our students' analytical thinking and problem-solving skills.",
      achievements: "95% Success Rate in Regional Olympiads",
      students: 520,
      rating: 5,
      logo: "📚"
    },
    {
      school: "Ryan International School",
      principal: "Dr. Amit Patel",
      location: "Pune",
      testimonial: "The quality of content and the personalized attention each student receives through AchievoQuest is exceptional. We've seen remarkable improvement in our students' confidence levels.",
      achievements: "Top 3 School in State Rankings",
      students: 380,
      rating: 5,
      logo: "🌟"
    },
    {
      school: "DAV Public School",
      principal: "Ms. Kavitha Reddy",
      location: "Chennai",
      testimonial: "Our collaboration with AchievoQuest has elevated our school's academic standards. The comprehensive study materials and expert guidance have been game-changers.",
      achievements: "18 National Level Winners",
      students: 425,
      rating: 5,
      logo: "🏆"
    },
    {
      school: "Modern English School",
      principal: "Mr. Vikram Singh",
      location: "Jaipur",
      testimonial: "AchievoQuest's holistic approach to education goes beyond just Olympiad preparation. It develops critical thinking and fosters a love for learning in our students.",
      achievements: "Top Performer in Regional Zone",
      students: 310,
      rating: 5,
      logo: "🎯"
    }
  ];

  const stats = [
    { icon: School, value: "500+", label: "Partner Schools" },
    { icon: Users, value: "50,000+", label: "Students Enrolled" },
    { icon: Award, value: "95%", label: "Success Rate" },
    { icon: Star, value: "4.9", label: "Average Rating" }
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
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-nebula bg-clip-text text-transparent">
              Trusted by Leading Schools
            </span>
          </h2>
          <p className="text-xl text-foreground/80 max-w-3xl mx-auto">
            Hear from our partner schools about their experience with AchievoQuest and the remarkable achievements of their students.
          </p>
        </motion.div>

        {/* Partnership Stats */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {stats.map((stat, index) => (
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

        {/* Testimonials Grid */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          {schoolTestimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.school}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.02, y: -5 }}
              className="group"
            >
              <Card className="h-full bg-card/60 backdrop-blur-sm border-border/50 hover:border-primary/30 transition-all duration-300 overflow-hidden">
                <CardContent className="p-6">
                  {/* School Header */}
                  <div className="flex items-center gap-4 mb-4">
                    <div className="text-3xl">{testimonial.logo}</div>
                    <div className="flex-1">
                      <h3 className="font-bold text-foreground">{testimonial.school}</h3>
                      <p className="text-sm text-foreground/70">{testimonial.location}</p>
                    </div>
                  </div>

                  {/* Rating */}
                  <div className="flex gap-1 mb-4">
                    {Array.from({ length: testimonial.rating }, (_, i) => (
                      <Star key={i} className="h-4 w-4 text-star-gold fill-current" />
                    ))}
                  </div>

                  {/* Quote */}
                  <div className="relative mb-6">
                    <Quote className="h-8 w-8 text-primary/30 absolute -top-2 -left-2" />
                    <p className="text-foreground/80 italic pl-6 leading-relaxed">
                      "{testimonial.testimonial}"
                    </p>
                  </div>

                  {/* Achievement Highlight */}
                  <div className="bg-muted/50 p-3 rounded-lg mb-4">
                    <div className="flex items-center gap-2 mb-2">
                      <Award className="h-4 w-4 text-primary" />
                      <span className="text-sm font-semibold text-foreground">Key Achievement</span>
                    </div>
                    <p className="text-sm text-foreground/80">{testimonial.achievements}</p>
                  </div>

                  {/* Principal Info */}
                  <div className="pt-4 border-t border-border/30">
                    <p className="font-semibold text-foreground">{testimonial.principal}</p>
                    <p className="text-sm text-foreground/70">Principal</p>
                    <p className="text-xs text-foreground/60 mt-1">
                      {testimonial.students} students enrolled
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          className="text-center mt-16 p-8 bg-card/30 backdrop-blur-sm rounded-lg border border-border/50"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <School className="h-12 w-12 text-primary mx-auto mb-4" />
          <h3 className="text-2xl font-bold text-foreground mb-4">
            Partner With AchievoQuest
          </h3>
          <p className="text-foreground/80 max-w-2xl mx-auto">
            Join hundreds of schools already partnering with us to provide exceptional Olympiad preparation 
            and help students achieve their academic dreams.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;