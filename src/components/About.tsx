import { motion } from "framer-motion";
import { Download } from "lucide-react";
import { Button } from "./ui/button";
import { Card } from "./ui/card";
import profilePhoto from "@/assets/profile-photo.png";
import { useInView } from "framer-motion";
import { useRef } from "react";

export function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="section-padding bg-muted/30" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-accent to-primary mx-auto mb-12" />

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <Card className="glass overflow-hidden hover-lift">
                <div className="aspect-square relative">
                  <img
                    src={profilePhoto}
                    alt="Ahmed Mohammed Rashed"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card/80 to-transparent" />
                </div>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="space-y-6"
            >
              <p className="text-lg text-muted-foreground leading-relaxed">
                I'm a Junior Full Stack Developer specializing in building modern, responsive, 
                and data-driven web applications using <span className="text-accent font-semibold">React.js</span>, 
                <span className="text-accent font-semibold"> Next.js</span>, 
                <span className="text-accent font-semibold"> Tailwind CSS</span>, and 
                <span className="text-accent font-semibold"> ASP.NET (C#)</span>.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                I have experience in developing and integrating GIS-based web applications, 
                managing spatial data with <span className="text-accent font-semibold">GeoServer</span> and 
                <span className="text-accent font-semibold"> PostGIS</span>, and designing interactive 
                mapping interfaces.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Passionate about geospatial technology, I bridge the gap between data and 
                visualization to create impactful solutions.
              </p>

              <Button 
                size="lg"
                className="bg-gradient-to-r from-accent to-primary hover:opacity-90 text-primary-foreground mt-6"
              >
                <Download className="mr-2 h-5 w-5" />
                Download CV
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
