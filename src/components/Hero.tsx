import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { Button } from "./ui/button";
import Lottie from "lottie-react";
import heroBgAnimation from "@/assets/animations/hero-bg.json";

export function Hero() {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Lottie Animation Background with Overlay */}
      <div className="absolute inset-0 z-0">
        <Lottie
          animationData={heroBgAnimation}
          className="absolute inset-0 w-full h-full"
          loop={true}
          style={{ opacity: 0.6 }}
        />
        <div className="absolute inset-0" style={{ background: 'var(--gradient-mesh)' }} />
      </div>

      {/* Content */}
      <div className="relative z-10 section-padding text-center max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="space-y-6"
        >
          <motion.p 
            className="text-lg md:text-xl font-semibold bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 bg-clip-text text-transparent overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            animate={{ 
              opacity: 1, 
              y: 0,
              transition: {
                duration: 0.5,
                ease: "easeOut"
              }
            }}
          >
            {["H", "i", ",", " ", "I", "'", "m", " ", "A", "h", "m", "e", "d", " ", "M", "o", "h", "a", "m", "m", "e", "d", " ", "R", "a", "s", "h", "e", "d", " ", "👋"].map((letter, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: 0.4 + index * 0.05,
                  ease: "easeOut"
                }}
              >
                {letter}
              </motion.span>
            ))}
          </motion.p>
          
          <motion.h1 
            className="text-4xl md:text-6xl lg:text-7xl font-bold"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <span className="gradient-text">Web Designer</span>
            <br />
            <span className="text-foreground">& Junior Full Stack Developer</span>
          </motion.h1>
          
          <motion.p 
            className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            building modern, responsive, and data-driven web applications using React.js, Next.js, Tailwind CSS, and ASP.NET .
          </motion.p>

          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center pt-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
          >
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-accent to-primary hover:opacity-90 text-primary-foreground"
              onClick={() => scrollToSection("projects")}
            >
              View Projects
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="glass hover:bg-accent/10"
              onClick={() => scrollToSection("contact")}
            >
              Contact Me
            </Button>
            <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" download className="block">
              <Button
                size="lg"
                className="bg-secondary text-secondary-foreground hover:opacity-95"
              >
                Download CV
              </Button>
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 cursor-pointer"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        onClick={() => scrollToSection("about")}
      >
        <ChevronDown className="w-8 h-8 text-accent animate-glow" />
      </motion.div>
    </section>
  );
}
