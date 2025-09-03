import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Users, Play } from "lucide-react";

const Gallery = () => {
  const events = [
    {
      id: 1,
      title: "ISRO Space Workshop 2024",
      description: "An exclusive workshop with ISRO scientists where students learned about space exploration and rocket science.",
      image: "🚀",
      date: "March 15, 2024",
      location: "ISRO Headquarters",
      participants: "500+ Students",
      category: "Workshop",
      highlights: ["Meet ISRO Scientists", "Hands-on Activities", "Space Lab Tour"]
    },
    {
      id: 2,
      title: "Mathematics Olympiad Finals",
      description: "The grand finale of our annual mathematics competition with participants from across the country.",
      image: "🧮",
      date: "February 20, 2024",
      location: "Delhi Convention Center",
      participants: "1000+ Students",
      category: "Competition",
      highlights: ["National Level", "Live Streaming", "Prize Distribution"]
    },
    {
      id: 3,
      title: "Science Exhibition 2024",
      description: "Students showcased innovative projects and experiments in this spectacular science fair.",
      image: "🔬",
      date: "January 10, 2024",
      location: "Mumbai Science Center",
      participants: "750+ Students",
      category: "Exhibition",
      highlights: ["Innovation Awards", "Live Experiments", "Expert Judging"]
    },
    {
      id: 4,
      title: "English Debate Championship",
      description: "Eloquent speakers battled it out in this prestigious debate competition.",
      image: "🎙️",
      date: "December 5, 2023",
      location: "Bangalore Auditorium",
      participants: "300+ Students",
      category: "Competition",
      highlights: ["Public Speaking", "Critical Thinking", "Communication Skills"]
    },
    {
      id: 5,
      title: "Knowledge Quest 2023",
      description: "The ultimate general knowledge quiz competition testing students' awareness and intelligence.",
      image: "🧠",
      date: "November 18, 2023",
      location: "Chennai Convention Hall",
      participants: "600+ Students",
      category: "Quiz",
      highlights: ["Rapid Fire Round", "Team Challenges", "Knowledge Olympics"]
    },
    {
      id: 6,
      title: "Annual Awards Ceremony",
      description: "Celebrating the achievements of our outstanding students and dedicated teachers.",
      image: "🏆",
      date: "October 25, 2023",
      location: "New Delhi Grand Hall",
      participants: "2000+ Attendees",
      category: "Ceremony",
      highlights: ["Award Distribution", "Cultural Programs", "Inspirational Speeches"]
    }
  ];

  const getCategoryColor = (category: string) => {
    const colors = {
      Workshop: "bg-blue-500/20 text-blue-400 border-blue-500/30",
      Competition: "bg-red-500/20 text-red-400 border-red-500/30",
      Exhibition: "bg-green-500/20 text-green-400 border-green-500/30",
      Quiz: "bg-purple-500/20 text-purple-400 border-purple-500/30",
      Ceremony: "bg-yellow-500/20 text-yellow-400 border-yellow-500/30"
    };
    return colors[category as keyof typeof colors] || "bg-primary/20 text-primary border-primary/30";
  };

  return (
    <section id="gallery" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-cosmic">
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
              Our Amazing Journey
            </span>
          </h2>
          <p className="text-xl text-foreground/80 max-w-3xl mx-auto">
            Explore the highlights from our events, competitions, and workshops that showcase the incredible talent and dedication of our students.
          </p>
        </motion.div>

        {/* Event Stats */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {[
            { label: "Events Hosted", value: "150+", icon: "🎯" },
            { label: "Participants", value: "10,000+", icon: "👥" },
            { label: "Workshops", value: "75+", icon: "🎓" },
            { label: "Competitions", value: "50+", icon: "🏆" }
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              className="text-center p-6 bg-card/60 backdrop-blur-sm rounded-lg border border-border/50"
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="text-3xl mb-3">{stat.icon}</div>
              <div className="text-2xl font-bold text-foreground">{stat.value}</div>
              <div className="text-sm text-foreground/60">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Events Gallery */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          {events.map((event, index) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.02, y: -5 }}
              className="group cursor-pointer"
            >
              <Card className="h-full bg-card/60 backdrop-blur-sm border-border/50 hover:border-primary/30 transition-all duration-300 overflow-hidden">
                <CardContent className="p-0">
                  {/* Event Image/Icon */}
                  <div className="relative h-48 bg-gradient-galaxy flex items-center justify-center overflow-hidden">
                    <div className="text-6xl opacity-80">{event.image}</div>
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300" />
                    
                    {/* Category Badge */}
                    <Badge className={`absolute top-4 left-4 ${getCategoryColor(event.category)} border`}>
                      {event.category}
                    </Badge>

                    {/* Play Button Overlay */}
                    <motion.div
                      className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      whileHover={{ scale: 1.1 }}
                    >
                      <div className="bg-primary/90 rounded-full p-4">
                        <Play className="h-8 w-8 text-white fill-current" />
                      </div>
                    </motion.div>
                  </div>

                  {/* Event Details */}
                  <div className="p-6 space-y-4">
                    <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors duration-200">
                      {event.title}
                    </h3>
                    
                    <p className="text-sm text-foreground/70 line-clamp-3">
                      {event.description}
                    </p>

                    {/* Event Meta */}
                    <div className="space-y-2 text-xs text-foreground/60">
                      <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4" />
                        <span>{event.date}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="h-4 w-4" />
                        <span>{event.location}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Users className="h-4 w-4" />
                        <span>{event.participants}</span>
                      </div>
                    </div>

                    {/* Highlights */}
                    <div>
                      <p className="text-xs font-semibold text-foreground/70 mb-2">Highlights:</p>
                      <div className="flex flex-wrap gap-1">
                        {event.highlights.map((highlight, idx) => (
                          <Badge key={idx} variant="secondary" className="text-xs">
                            {highlight}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          className="text-center mt-16 p-8 bg-card/30 backdrop-blur-sm rounded-lg border border-border/50"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <div className="text-4xl mb-4">📸</div>
          <h3 className="text-2xl font-bold text-foreground mb-4">
            Want to be part of our next event?
          </h3>
          <p className="text-foreground/80 max-w-2xl mx-auto mb-6">
            Join our community and participate in exciting workshops, competitions, and events. 
            Create memories while enhancing your knowledge and skills!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              className="px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors duration-200"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View All Events
            </motion.button>
            <motion.button
              className="px-6 py-3 bg-card/60 text-foreground border border-border rounded-lg font-semibold hover:bg-card/80 transition-colors duration-200"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Subscribe for Updates
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Gallery;