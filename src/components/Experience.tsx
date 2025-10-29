import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { Briefcase, Calendar } from "lucide-react";

const experiences = [
  {
    company: "ALqotr Engineering Consultancy",
    position: "GIS Developer & Full Stack Developer",
    duration: "June 2024 – Present",
    description: "Developed and maintained Web GIS applications using React.js, Next.js, and ASP.NET Core for mapping and geospatial visualization. Integrated GeoServer and PostGIS databases, and built responsive interfaces using Tailwind CSS.",
    tags: ["React.js", "Next.js", "ASP.NET Core", "GeoServer", "PostGIS", "Tailwind CSS"]
  },
  {
    company: "Sabbagh Engineering Consultant & Associates",
    position: "GIS Specialist",
    duration: "March 2013 – June 2016",
    description: "Prepared GIS datasets and CAD drawings from field sketches, focusing on precision and spatial accuracy for engineering projects.",
    tags: ["GIS", "CAD", "Spatial Data", "Field Surveys"]
  },
  {
    company: "Hamoud Saleh Aljarba Engineering",
    position: "GIS Technician",
    duration: "July 2011 – February 2013",
    description: "Created CAD drawings, maintained GIS mapping systems, and prepared documentation for life safety and industrial fire protection projects.",
    tags: ["CAD", "GIS", "Documentation", "Mapping"]
  }
];

export function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="section-padding bg-muted/30" ref={ref}>
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Work <span className="gradient-text">Experience</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-accent to-primary mx-auto mb-12" />

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-accent to-primary transform md:-translate-x-1/2" />

            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className={`relative md:w-1/2 ${index % 2 === 0 ? 'md:ml-auto md:pl-12' : 'md:pr-12'}`}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-0 md:left-auto md:right-auto top-6 w-4 h-4 rounded-full bg-accent border-4 border-background transform -translate-x-[7px] md:translate-x-0" 
                    style={{ 
                      [index % 2 === 0 ? 'left' : 'right']: '-8px',
                    }} 
                  />

                  <Card className="glass p-6 hover-lift ml-8 md:ml-0">
                    <div className="flex items-start gap-3 mb-3">
                      <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-accent to-primary flex items-center justify-center flex-shrink-0">
                        <Briefcase className="w-5 h-5 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold">{exp.position}</h3>
                        <p className="text-accent font-medium">{exp.company}</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                      <Calendar className="w-4 h-4" />
                      {exp.duration}
                    </div>

                    <p className="text-muted-foreground mb-4">{exp.description}</p>

                    <div className="flex flex-wrap gap-2">
                      {exp.tags.map((tag) => (
                        <Badge key={tag} variant="secondary" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
