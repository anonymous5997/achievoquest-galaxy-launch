import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock,
  Send,
  MessageCircle,
  User,
  FileText,
  Facebook,
  Twitter,
  Instagram,
  Youtube
} from "lucide-react";
import { useState } from "react";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  try {
    await fetch("https://script.google.com/macros/s/AKfycbylYDdy4aka1yF8pzlaeEIrR3slXXfg6mQPQB10U0RbooC_3mzVF0q32EB-Xv7v4gaQ/exec", {
      method: "POST",
      mode: "no-cors",  // 👈 Important
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    // With no-cors, you can't read response, so assume success
    alert("✅ Message sent successfully!");
    setFormData({ name: "", email: "", phone: "", message: "" });

  } catch (error) {
    console.error("Error submitting form:", error);
    alert("⚠️ Something went wrong.");
  }
};



  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      details: ["+91 9876543210", "+91 8765432109"],
      color: "text-green-400"
    },
    {
      icon: Mail,
      title: "Email",
      details: ["info@achievoquest.com", "support@achievoquest.com"],
      color: "text-blue-400"
    },
    {
      icon: MapPin,
      title: "Address",
      details: ["123 Education Hub", "New Delhi, India 110001"],
      color: "text-red-400"
    },
    {
      icon: Clock,
      title: "Working Hours",
      details: ["Mon - Fri: 9:00 AM - 6:00 PM", "Sat: 10:00 AM - 4:00 PM"],
      color: "text-purple-400"
    }
  ];

  const socialLinks = [
    // { icon: Facebook, name: "Facebook", url: "#", color: "hover:text-blue-500" },
    // { icon: Twitter, name: "Twitter", url: "#", color: "hover:text-sky-400" },
    // { icon: Instagram, name: "Instagram", url: "#", color: "hover:text-pink-500" },
    // { icon: Youtube, name: "YouTube", url: "#", color: "hover:text-red-500" }
  ];

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
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
              Get In Touch
            </span>
          </h2>
          <p className="text-xl text-foreground/80 max-w-3xl mx-auto">
            Have questions about our platform or need guidance? We're here to help you start your journey to academic excellence.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <Card className="bg-card/60 backdrop-blur-sm border-border/50">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-foreground flex items-center gap-2">
                  <MessageCircle className="h-6 w-6 text-primary" />
                  Send us a Message
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-foreground flex items-center gap-2">
                        <User className="h-4 w-4" />
                        Name *
                      </label>
                      <Input
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Your full name"
                        required
                        className="bg-background/50 border-border focus:border-primary"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-foreground flex items-center gap-2">
                        <Mail className="h-4 w-4" />
                        Email *
                      </label>
                      <Input
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="your.email@example.com"
                        required
                        className="bg-background/50 border-border focus:border-primary"
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground flex items-center gap-2">
                      <Phone className="h-4 w-4" />
                      Phone Number *
                    </label>
                    <Input
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="+91 9876543210"
                      required
                      className="bg-background/50 border-border focus:border-primary"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground flex items-center gap-2">
                      <MessageCircle className="h-4 w-4" />
                      Message *
                    </label>
                    <Textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Tell us more about your inquiry..."
                      rows={5}
                      required
                      className="bg-background/50 border-border focus:border-primary resize-none"
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    variant="hero" 
                    size="lg" 
                    className="w-full"
                  >
                    <Send className="mr-2 h-5 w-5" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {/* Contact Details */}
            <div className="grid gap-6">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={info.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ scale: 1.02, x: 10 }}
                  className="group"
                >
                  <Card className="bg-card/60 backdrop-blur-sm border-border/50 hover:border-primary/30 transition-all duration-300">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className={`p-3 rounded-full bg-background/50 ${info.color} group-hover:scale-110 transition-transform duration-200`}>
                          <info.icon className="h-6 w-6" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-foreground mb-2">{info.title}</h3>
                          {info.details.map((detail, idx) => (
                            <p key={idx} className="text-foreground/70 text-sm">
                              {detail}
                            </p>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            {/* Social Media
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Card className="bg-card/60 backdrop-blur-sm border-border/50">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-foreground mb-4 text-center">Follow Us</h3>
                  <div className="flex justify-center space-x-4">
                    {socialLinks.map((social, index) => (
                      <motion.a
                        key={social.name}
                        href={social.url}
                        className={`p-3 rounded-full bg-background/50 text-foreground/70 ${social.color} transition-colors duration-200`}
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
                </CardContent>
              </Card>
            </motion.div> */}

            {/* Quick Contact */}
            {/* <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <Card className="bg-gradient-nebula/10 backdrop-blur-sm border-primary/30">
                <CardContent className="p-6 text-center">
                  <h3 className="font-semibold text-foreground mb-3">Need Immediate Help?</h3>
                  <p className="text-foreground/70 text-sm mb-4">
                    Our support team is available to assist you with any questions about courses, enrollment, or technical issues.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <Button variant="cosmic" size="sm" className="flex-1">
                      <Phone className="mr-2 h-4 w-4" />
                      Call Now
                    </Button>
                    <Button variant="cosmic" size="sm" className="flex-1">
                      <Mail className="mr-2 h-4 w-4" />
                      Live Chat
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div> */}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;