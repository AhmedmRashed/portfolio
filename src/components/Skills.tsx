import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { Code2, Database, Globe, Brain, Users, Lightbulb } from "lucide-react";

const skillCategories = [
  {
    title: "Web Development",
    icon: Code2,
    skills: [
      "React.js", "Next.js", "Tailwind CSS", "JavaScript (ES6+)", 
      "TypeScript", "Node.js", "Express.js", "MongoDB", "RESTful APIs"
    ],
    color: "from-blue-500 to-cyan-500"
  },
  {
    title: "Backend & GIS",
    icon: Database,
    skills: [
      "ASP.NET Core (C#)", "PostGIS", "GeoServer", 
      "ArcGIS", "QGIS"
    ],
    color: "from-purple-500 to-pink-500"
  },
  {
    title: "Geospatial Tech",
    icon: Globe,
    skills: [
      "Web Mapping", "Spatial Analysis", "Map Visualization",
      "Geographic Data Management"
    ],
    color: "from-green-500 to-emerald-500"
  },
  {
    title: "Other Skills",
    icon: Brain,
    skills: ["Web Scraping", "AI Marketing"],
    color: "from-orange-500 to-red-500"
  },
  {
    title: "Soft Skills",
    icon: Users,
    skills: [
      "Teamwork", "Problem Solving", "Technical Reporting", "Creative Thinking"
    ],
    color: "from-indigo-500 to-purple-500"
  }
];

export function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="section-padding" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Skills & <span className="gradient-text">Expertise</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-accent to-primary mx-auto mb-12" />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((category, index) => {
              const Icon = category.icon;
              return (
                <motion.div
                  key={category.title}
                  initial={{ opacity: 0, y: 50 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card className="glass p-6 h-full hover-lift">
                    <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${category.color} flex items-center justify-center mb-4`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold mb-4">{category.title}</h3>
                    <div className="flex flex-wrap gap-2">
                      {category.skills.map((skill) => (
                        <Badge 
                          key={skill}
                          variant="secondary"
                          className="hover:bg-accent/20 transition-colors"
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
