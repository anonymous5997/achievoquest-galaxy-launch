import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  Rocket, 
  Mail, 
  Phone, 
  MapPin, 
  Facebook, 
  Twitter, 
  Instagram, 
  Youtube,
  BookOpen,
  Calculator,
  Microscope,
  Globe,
  Brain,
  Heart
} from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const subjects = [
    { name: "Mathematics", icon: Calculator, href: "#subjects" },
    { name: "English", icon: BookOpen, href: "#subjects" },
    { name: "Science", icon: Microscope, href: "#subjects" },
    { name: "General Knowledge", icon: Globe, href: "#subjects" },
    { name: "Aptitude", icon: Brain, href: "#subjects" }
  ];

  const quickLinks = [
    { name: "About Us", href: "#about" },
    { name: "Courses", href: "#subjects" },
    { name: "Hall of Fame", href: "#hall-of-fame" },
    { name: "Gallery", href: "#gallery" },
    { name: "Contact", href: "#contact" }
  ];

  const socialLinks = [
    { icon: Facebook, name: "Facebook", href: "#" },
    { icon: Twitter, name: "Twitter", href: "#" },
    { icon: Instagram, name: "Instagram", href: "#" },
    { icon: Youtube, name: "YouTube", href: "#" }
  ];

  return (
    <footer className="bg-deep-space border-t border-border/30">
      {/* Newsletter Section */}
      <motion.div
        className="py-12 px-4 sm:px-6 lg:px-8 bg-gradient-galaxy/20"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-7xl mx-auto text-center">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            <span className="bg-gradient-nebula bg-clip-text text-transparent">
              Stay Updated with AchievoQuest
            </span>
          </h3>
          <p className="text-foreground/80 mb-6 max-w-2xl mx-auto">
            Get the latest updates about new courses, competitions, and exclusive opportunities delivered to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <Input
              type="email"
              placeholder="Enter your email address"
              className="bg-background/50 border-border focus:border-primary"
            />
            <Button variant="hero" className="whitespace-nowrap">
              <Mail className="mr-2 h-4 w-4" />
              Subscribe
            </Button>
          </div>
        </div>
      </motion.div>

      {/* Main Footer Content */}
      <div className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center space-x-2">
                <Rocket className="h-8 w-8 text-primary" />
                <span className="text-xl font-bold bg-gradient-nebula bg-clip-text text-transparent">
                  AchievoQuest
                </span>
              </div>
              <p className="text-foreground/70 text-sm leading-relaxed">
                Empowering students to excel in Olympiads through comprehensive online learning, 
                expert guidance, and innovative educational experiences.
              </p>
              <div className="space-y-2 text-sm text-foreground/70">
                <div className="flex items-center gap-2">
                  <Phone className="h-4 w-4" />
                  <span>+91 9876543210</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="h-4 w-4" />
                  <span>info@achievoquest.com</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4" />
                  <span>New Delhi, India</span>
                </div>
              </div>
            </motion.div>

            {/* Subjects */}
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <h3 className="text-lg font-semibold text-foreground">Subjects</h3>
              <ul className="space-y-3">
                {subjects.map((subject, index) => (
                  <motion.li
                    key={subject.name}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                  >
                    <a
                      href={subject.href}
                      className="flex items-center gap-2 text-foreground/70 hover:text-primary transition-colors duration-200 group"
                    >
                      <subject.icon className="h-4 w-4 group-hover:scale-110 transition-transform duration-200" />
                      <span className="text-sm">{subject.name}</span>
                    </a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h3 className="text-lg font-semibold text-foreground">Quick Links</h3>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <motion.li
                    key={link.name}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                  >
                    <a
                      href={link.href}
                      className="text-foreground/70 hover:text-primary transition-colors duration-200 text-sm"
                    >
                      {link.name}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Social & Contact
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <h3 className="text-lg font-semibold text-foreground">Connect With Us</h3>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.name}
                    href={social.href}
                    className="p-2 bg-card/50 rounded-lg text-foreground/70 hover:text-primary hover:bg-card/80 transition-all duration-200"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                  >
                    <social.icon className="h-5 w-5" />
                  </motion.a>
                ))}
              </div>
              <div className="text-sm text-foreground/70">
                <p className="mb-2">Follow us for updates and tips!</p>
                <p>Join our community of 50,000+ learners</p>
              </div>
            </motion.div> */}
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <motion.div
        className="py-6 px-4 sm:px-6 lg:px-8 border-t border-border/30 bg-background/50"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-foreground/60 text-center md:text-left">
              <p>© {currentYear} AchievoQuest. All rights reserved.</p>
            </div>
            <div className="flex items-center space-x-1 text-sm text-foreground/60">
              <span>Made with</span>
              <Heart className="h-4 w-4 text-red-500 fill-current" />
              <span>for aspiring champions</span>
            </div>
            <div className="flex space-x-6 text-sm text-foreground/60">
              <a href="#" className="hover:text-primary transition-colors duration-200">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-primary transition-colors duration-200">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </motion.div>
    </footer>
  );
};

export default Footer;